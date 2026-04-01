import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-12-18.acacia" as any,
  });
}

export async function POST(req: NextRequest) {
  try {
    const { locale } = await req.json();

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Stripe is not configured" },
        { status: 503 }
      );
    }

    const stripe = getStripe();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
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
            unit_amount: 900, // 9.00 EUR in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/${locale}/shop?success=true`,
      cancel_url: `${req.headers.get("origin")}/${locale}/shop?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
