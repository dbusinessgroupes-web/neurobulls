"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Check, Lock, Download, Camera, UtensilsCrossed, Building2, ArrowRight } from "lucide-react";
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

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function ShopPage() {
  const t = useTranslations("shop");
  const locale = useLocale();

  const features = [
    t("features.prompts"),
    t("features.negativePrompts"),
    t("features.characterGuide"),
    t("features.videoTemplates"),
    t("features.updates"),
  ];

  const categories = [
    {
      icon: Camera,
      titleKey: "portraits" as const,
      descKey: "portraitsDesc" as const,
    },
    {
      icon: UtensilsCrossed,
      titleKey: "food" as const,
      descKey: "foodDesc" as const,
    },
    {
      icon: Building2,
      titleKey: "realEstate" as const,
      descKey: "realEstateDesc" as const,
    },
  ];


  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        {/* Hero */}
        <section className="pt-40 pb-20 px-6">
          <div className="mx-auto max-w-4xl text-center">
            <ScrollReveal>
              <motion.div variants={fadeUp} initial="hidden" animate="visible">
                <Badge className="mb-6 bg-nb-gold/10 text-nb-gold border-nb-gold/20">
                  {t("badge")}
                </Badge>
              </motion.div>
            </ScrollReveal>
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

        {/* Product Card */}
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-xl">
            <ScrollReveal>
              <Card className="border-border bg-card rounded-xl overflow-hidden">
                <CardContent className="p-8 space-y-6">
                  <div className="text-center">
                    <p className="text-5xl font-bold text-nb-gold">
                      {t("price")}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t("oneTime")}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-nb-gold shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <BuyButton locale={locale} label={t("buyButton")} />

                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <Lock className="h-3.5 w-3.5" />
                    <span>{t("securePayment")}</span>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </section>

        {/* Free Sample */}
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-xl text-center">
            <ScrollReveal>
              <Card className="border-border bg-card rounded-xl">
                <CardContent className="p-8 space-y-4">
                  <h2 className="text-2xl font-bold">{t("sampleTitle")}</h2>
                  <p className="text-muted-foreground">
                    {t("sampleDescription")}
                  </p>
                  <a href="/shop/sample.pdf" download>
                    <Button
                      variant="outline"
                      className="border-nb-gold/30 text-nb-gold hover:bg-nb-gold/10 mt-2"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      {t("downloadSample")}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </section>

        {/* What's Inside */}
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-center mb-12">
                {t("insideTitle")}
              </h2>
            </ScrollReveal>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {categories.map((cat) => (
                <motion.div key={cat.titleKey} variants={fadeUp}>
                  <ScrollReveal>
                    <Card className="border-border bg-card rounded-xl h-full">
                      <CardContent className="p-6 text-center space-y-3">
                        <div className="mx-auto w-12 h-12 rounded-full bg-nb-gold/10 flex items-center justify-center">
                          <cat.icon className="h-6 w-6 text-nb-gold" />
                        </div>
                        <h3 className="font-semibold text-lg">
                          {t(`categories.${cat.titleKey}`)}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {t(`categories.${cat.descKey}`)}
                        </p>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                </motion.div>
              ))}
            </motion.div>
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
