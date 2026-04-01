import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const sk = process.env.STRIPE_SECRET_KEY;
    if (!sk) {
      return NextResponse.json({ error: "Stripe not configured" }, { status: 503 });
    }

    const { locale } = await req.json();
    const baseUrl = "https://neurobulls.com";

    const params = new URLSearchParams();
    params.append("mode", "payment");
    params.append("line_items[0][price_data][currency]", "eur");
    params.append("line_items[0][price_data][product_data][name]",
      locale === "es" ? "500 Prompts de Fotografía IA - NeuroBulls" : "500 AI Photography Prompts - NeuroBulls"
    );
    params.append("line_items[0][price_data][product_data][description]",
      locale === "es" ? "El framework completo para crear imágenes hiperrealistas con IA" : "The complete framework for hyper-realistic AI images"
    );
    params.append("line_items[0][price_data][unit_amount]", "900");
    params.append("line_items[0][quantity]", "1");
    params.append("success_url", `${baseUrl}/${locale}/shop?success=true`);
    params.append("cancel_url", `${baseUrl}/${locale}/shop?canceled=true`);

    const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${sk}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const data = await response.json();

    if (data.url) {
      return NextResponse.json({ url: data.url });
    } else {
      console.error("Stripe error:", JSON.stringify(data));
      return NextResponse.json({ error: data.error?.message || "Payment error" }, { status: 500 });
    }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Checkout error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
