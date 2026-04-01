"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Check, Lock, ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CookieBanner } from "@/components/cookie-banner";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { BuyButton } from "@/components/buy-button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function ShopPage() {
  const t = useTranslations("shop");

  const promptsFeatures = t.raw("prompts.features") as string[];
  const masterclassFeatures = t.raw("masterclass.features") as string[];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        {/* Hero */}
        <section className="pt-40 pb-20 px-6">
          <div className="mx-auto max-w-4xl text-center">
            <ScrollReveal>
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              >
                {t("title")}
              </motion.h1>
            </ScrollReveal>
            <ScrollReveal>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto"
              >
                {t("subtitle")}
              </motion.p>
            </ScrollReveal>
          </div>
        </section>

        {/* Products */}
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1: Prompts Pack */}
            <ScrollReveal>
              <Card className="border-border bg-card rounded-xl overflow-hidden h-full">
                <CardContent className="p-8 space-y-6 flex flex-col h-full">
                  <div>
                    <Badge className="mb-4 bg-nb-gold/10 text-nb-gold border-nb-gold/20">
                      {t("prompts.badge")}
                    </Badge>
                  </div>
                  <h2 className="text-2xl font-bold">{t("prompts.title")}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t("prompts.description")}
                  </p>
                  <div className="text-center">
                    <p className="text-5xl font-bold text-nb-gold">
                      {t("prompts.price")}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t("prompts.oneTime")}
                    </p>
                  </div>

                  <div className="space-y-3 flex-1">
                    {promptsFeatures.map((feature: string) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-nb-gold shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <BuyButton product="prompts" label={t("prompts.buyButton")} />

                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <Lock className="h-3.5 w-3.5" />
                    <span>{t("securePayment")}</span>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Product 2: Masterclass */}
            <ScrollReveal>
              <Card className="border-nb-gold border-2 bg-card rounded-xl overflow-hidden h-full relative">
                <CardContent className="p-8 space-y-6 flex flex-col h-full">
                  <div>
                    <Badge className="mb-4 bg-nb-red text-white border-0">
                      {t("masterclass.badge")}
                    </Badge>
                  </div>
                  <h2 className="text-2xl font-bold">{t("masterclass.title")}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t("masterclass.description")}
                  </p>
                  <div className="text-center">
                    <p className="text-5xl font-bold text-nb-gold">
                      {t("masterclass.price")}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t("masterclass.oneTime")}
                    </p>
                  </div>

                  <div className="space-y-3 flex-1">
                    {masterclassFeatures.map((feature: string) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-nb-gold shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <BuyButton product="masterclass" label={t("masterclass.buyButton")} />

                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <Lock className="h-3.5 w-3.5" />
                    <span>{t("securePayment")}</span>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Product 3: Custom Prompt Pack */}
            <ScrollReveal>
              <Card className="border-border bg-card rounded-xl overflow-hidden h-full">
                <CardContent className="p-8 space-y-6 flex flex-col h-full">
                  <div>
                    <Badge className="mb-4 bg-nb-gold/10 text-nb-gold border-nb-gold/20">
                      {t("custom.badge")}
                    </Badge>
                  </div>
                  <h2 className="text-2xl font-bold">{t("custom.title")}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t("custom.description")}
                  </p>
                  <div className="text-center">
                    <p className="text-5xl font-bold text-nb-gold">
                      {t("custom.price")}
                    </p>
                  </div>

                  <div className="flex-1" />

                  <Link href="/contact" className="block">
                    <Button className="w-full bg-nb-red hover:bg-nb-red-hover text-white font-semibold py-6 text-base">
                      {t("custom.buttonLabel")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-4xl text-center">
            <ScrollReveal>
              <Card className="border-border bg-card rounded-xl">
                <CardContent className="p-8 sm:p-12 space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-bold">
                    {t("ctaTitle")}
                  </h2>
                  <Link href="/contact">
                    <Button className="bg-nb-red hover:bg-nb-red-hover text-white font-semibold px-8 py-6 text-base mt-2">
                      {t("ctaButton")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
