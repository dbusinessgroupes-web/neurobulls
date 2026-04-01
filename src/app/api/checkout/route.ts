import { NextRequest, NextResponse } from "next/server";

const products = {
  prompts: {
    name: "500 AI Photography Prompts Pack - NeuroBulls",
    description: "500 copy-paste prompts, AVB 8-layer framework, negative prompts, video templates, monthly updates",
    amount: "2900",
  },
  masterclass: {
    name: "AI Visual Production Masterclass - NeuroBulls",
    description: "Complete 50-page course, AVB framework, 100+ prompts, character consistency, video pipeline, business guide",
    amount: "4900",
  },
};

export async function POST(req: NextRequest) {
  try {
    const sk = process.env.STRIPE_SECRET_KEY;
    if (!sk) {
      return NextResponse.json({ error: "Stripe not configured" }, { status: 503 });
    }

    const { product: productKey } = await req.json();
    const product = products[productKey as keyof typeof products] ?? products.prompts;
    const baseUrl = "https://neurobulls.com";

    const params = new URLSearchParams();
    params.append("mode", "payment");
    params.append("line_items[0][price_data][currency]", "eur");
    params.append("line_items[0][price_data][product_data][name]", product.name);
    params.append("line_items[0][price_data][product_data][description]", product.description);
    params.append("line_items[0][price_data][unit_amount]", product.amount);
    params.append("line_items[0][quantity]", "1");
    params.append("success_url", `${baseUrl}/en/shop?success=true`);
    params.append("cancel_url", `${baseUrl}/en/shop?canceled=true`);

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
