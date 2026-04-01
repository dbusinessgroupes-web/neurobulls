import { NextRequest, NextResponse } from "next/server";

// Stripe webhook to handle successful payments
// When someone buys a product, Stripe sends a webhook here
// We then send the product PDF via email using Resend

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const event = JSON.parse(body);

    // Only handle successful checkout sessions
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const customerEmail = session.customer_details?.email;
      const amountPaid = session.amount_total;

      if (!customerEmail) {
        console.error("No customer email found in session");
        return NextResponse.json({ received: true });
      }

      // Determine which product was purchased based on amount
      let productName = "500 AI Photography Prompts";
      let downloadLink = "https://neurobulls.com/shop/sample.pdf"; // Placeholder — replace with actual product delivery

      if (amountPaid === 4900) {
        productName = "AI Visual Production Masterclass";
      }

      // Send delivery email via Resend
      const resendKey = process.env.RESEND_API_KEY;
      if (resendKey) {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "NeuroBulls <info@neurobulls.com>",
            to: customerEmail,
            subject: `Your ${productName} is ready — NeuroBulls`,
            html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #0A0A0A; color: #ffffff; padding: 40px;">
                <h1 style="color: #C9A84C; font-size: 24px; margin-bottom: 20px;">Thank you for your purchase!</h1>
                <p style="color: #cccccc; line-height: 1.6;">Hi there,</p>
                <p style="color: #cccccc; line-height: 1.6;">Your <strong>${productName}</strong> is ready. You can download it using the link below:</p>
                <div style="margin: 30px 0; text-align: center;">
                  <a href="${downloadLink}" style="background: #E31837; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">Download Your Product</a>
                </div>
                <p style="color: #999999; font-size: 14px; line-height: 1.6;">If you have any questions, reply to this email or contact us at neurobulls@gmail.com.</p>
                <hr style="border: none; border-top: 1px solid #333; margin: 30px 0;" />
                <p style="color: #666666; font-size: 12px;">NeuroBulls — AI that works for your business.<br/>neurobulls.com</p>
              </div>
            `,
          }),
        });
        console.log(`Delivery email sent to ${customerEmail} for ${productName}`);
      }

      // Also notify Diego
      if (resendKey) {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "NeuroBulls <info@neurobulls.com>",
            to: "neurobulls@gmail.com",
            subject: `New sale! ${productName} — ${(amountPaid / 100).toFixed(2)} EUR`,
            html: `
              <h2>New sale on NeuroBulls!</h2>
              <p><strong>Product:</strong> ${productName}</p>
              <p><strong>Amount:</strong> ${(amountPaid / 100).toFixed(2)} EUR</p>
              <p><strong>Customer:</strong> ${customerEmail}</p>
              <p><strong>Time:</strong> ${new Date().toISOString()}</p>
            `,
          }),
        });
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}
