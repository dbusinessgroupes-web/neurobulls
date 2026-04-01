import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export async function POST(req: NextRequest) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Stripe is not configured" },
        { status: 503 }
      );
    }

    const { locale } = await req.json();
    const baseUrl = "https://neurobulls.com";

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name:
                locale === "es"
                  ? "500 Prompts de Fotografía IA - NeuroBulls"
                  : "500 AI Photography Prompts - NeuroBulls",
              description:
                locale === "es"
                  ? "El framework completo para crear imágenes hiperrealistas con IA"
                  : "The complete framework for creating hyper-realistic AI images",
            },
            unit_amount: 900,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${baseUrl}/${locale}/shop?success=true`,
      cancel_url: `${baseUrl}/${locale}/shop?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Stripe checkout error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
