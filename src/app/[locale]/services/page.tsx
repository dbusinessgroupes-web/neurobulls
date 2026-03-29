"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Camera,
  Video,
  Target,
  User,
  Share2,
  Palette,
  Check,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CookieBanner } from "@/components/cookie-banner";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const tiers = [
  { key: "spark", badge: null, highlighted: false, hasFrom: false },
  { key: "pulse", badge: null, highlighted: false, hasFrom: false },
  { key: "surge", badge: "popular", highlighted: true, hasFrom: false },
  { key: "apex", badge: "enterprise", highlighted: false, hasFrom: true },
] as const;

const serviceImages: Record<string, string> = {
  models: "/services/ai-models.jpg",
  photography: "/services/ai-photography.jpg",
  video: "/services/ai-video.jpg",
};

const alaCarteServices = [
  { icon: User, key: "models", priceKey: "modelsPrice" },
  { icon: Camera, key: "photography", priceKey: "photographyPrice" },
  { icon: Video, key: "video", priceKey: "videoPrice" },
  { icon: Share2, key: "social", priceKey: "socialPrice" },
  { icon: Palette, key: "branding", priceKey: "brandingPrice" },
  { icon: Target, key: "strategy", priceKey: "strategyPrice" },
] as const;

const comparisonRows = [
  {
    labelKey: "comparisonPhotoLabel",
    traditionalKey: "comparisonPhotoTraditional",
    neurobullsKey: "comparisonPhotoNeurobulls",
  },
  {
    labelKey: "comparisonVideoLabel",
    traditionalKey: "comparisonVideoTraditional",
    neurobullsKey: "comparisonVideoNeurobulls",
  },
  {
    labelKey: "comparisonCampaignLabel",
    traditionalKey: "comparisonCampaignTraditional",
    neurobullsKey: "comparisonCampaignNeurobulls",
  },
] as const;

export default function ServicesPage() {
  const t = useTranslations();

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* ─── Hero with Banner ─── */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          {/* Banner image */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/services/ai-photography.jpg"
              alt="AI photography studio"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
          </div>

          <motion.div
            className="mx-auto max-w-4xl text-center pt-8"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              {t("pricing.title")}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              {t("pricing.subtitle")}
            </motion.p>
          </motion.div>
        </section>

        {/* ─── Pricing Tiers ─── */}
        <section className="py-16 lg:py-24 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {tiers.map((tier, i) => (
                <ScrollReveal key={tier.key} delay={i * 0.1}>
                  <Card
                    className={`relative rounded-xl h-full flex flex-col ${
                      tier.highlighted
                        ? "border-nb-red border-2"
                        : "border-border"
                    } bg-card`}
                  >
                    {/* Popular badge */}
                    {tier.badge === "popular" && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                        <Badge className="bg-nb-red text-white border-0 px-4 py-1 text-xs font-semibold">
                          {t("pricing.popular")}
                        </Badge>
                      </div>
                    )}

                    {/* Enterprise badge */}
                    {tier.badge === "enterprise" && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                        <Badge variant="secondary" className="px-4 py-1 text-xs font-semibold">
                          {t("pricing.enterprise")}
                        </Badge>
                      </div>
                    )}

                    <CardContent className="p-6 flex flex-col flex-1">
                      {/* Tier name */}
                      <h3 className="text-xl font-bold">
                        {t(`pricing.${tier.key}.name`)}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {t(`pricing.${tier.key}.description`)}
                      </p>

                      {/* Price */}
                      <div className="mt-6 mb-6">
                        {tier.hasFrom && (
                          <span className="text-sm text-muted-foreground">
                            {t("pricing.from")}{" "}
                          </span>
                        )}
                        <span className="text-3xl font-bold text-nb-gold">
                          {t(`pricing.${tier.key}.price`)}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {t("pricing.monthly")}
                        </span>
                      </div>

                      {/* Features */}
                      <ul className="space-y-3 flex-1">
                        {(
                          t.raw(`pricing.${tier.key}.features`) as string[]
                        ).map((feature, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <Check className="h-4 w-4 text-nb-gold shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <div className="mt-8">
                        {tier.key === "apex" ? (
                          <Button

                            variant="outline"
                            className="w-full"
                          >
                            <Link href="/contact">
                              {t("pricing.contactUs")}
                            </Link>
                          </Button>
                        ) : (
                          <Button

                            className="w-full bg-nb-red hover:bg-nb-red-hover text-white"
                          >
                            <Link href="/contact">
                              {t("pricing.getStarted")}
                            </Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── A la carte Services ─── */}
        <section className="py-24 lg:py-32 px-6">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  {t("services.individualTitle")}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t("services.individualSubtitle")}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {alaCarteServices.map((service, i) => (
                <ScrollReveal key={service.key} delay={i * 0.08}>
                  <Card className="group border-border bg-card transition-all duration-300 hover:border-nb-red hover:-translate-y-1 h-full overflow-hidden">
                    {serviceImages[service.key] && (
                      <div className="relative w-full h-44 overflow-hidden">
                        <Image
                          src={serviceImages[service.key]}
                          alt={t(`services.${service.key}.title`)}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                      </div>
                    )}
                    <CardContent className="p-6 flex flex-col h-full">
                      <service.icon className="h-8 w-8 text-nb-gold mb-4" />
                      <h3 className="text-lg font-semibold mb-2">
                        {t(`services.${service.key}.title`)}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {t(`services.${service.key}.description`)}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-lg font-bold text-nb-gold">
                          {t(`services.${service.priceKey}`)}
                        </span>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1 text-sm text-nb-red hover:underline font-medium"
                        >
                          {t("services.learnMore")}
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Cost Comparison ─── */}
        <section className="py-24 lg:py-32 px-6">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  {t("pricing.comparisonTitle")}
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="border-border bg-card overflow-hidden">
                <CardContent className="p-0">
                  {/* Table header */}
                  <div className="grid grid-cols-3 gap-4 px-6 py-4 border-b border-border bg-muted/30">
                    <div className="text-sm font-semibold text-muted-foreground" />
                    <div className="text-sm font-semibold text-muted-foreground text-center">
                      {t("pricing.comparisonTraditional")}
                    </div>
                    <div className="text-sm font-semibold text-nb-gold text-center">
                      NeuroBulls
                    </div>
                  </div>

                  {/* Rows */}
                  {comparisonRows.map((row, i) => (
                    <div
                      key={row.labelKey}
                      className={`grid grid-cols-3 gap-4 px-6 py-5 items-center ${
                        i < comparisonRows.length - 1
                          ? "border-b border-border"
                          : ""
                      }`}
                    >
                      <div className="text-sm font-medium">
                        {t(`pricing.${row.labelKey}`)}
                      </div>
                      <div className="text-center">
                        <span className="text-sm text-muted-foreground line-through">
                          {t(`pricing.${row.traditionalKey}`)}
                        </span>
                      </div>
                      <div className="text-center">
                        <span className="text-sm font-bold text-nb-gold">
                          {t(`pricing.${row.neurobullsKey}`)}
                        </span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Final CTA ─── */}
        <section className="relative py-32 lg:py-40 px-6">
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-nb-red/10 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-1/3 -z-10 h-[600px] w-[600px] rounded-full bg-nb-red/5 blur-[160px]" />
          <div className="absolute top-1/4 right-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-nb-gold/5 blur-[100px]" />

          <div className="mx-auto max-w-4xl text-center">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
                {t("pricing.ctaTitle")}
              </h2>
              <div className="mt-10">
                <Button

                  size="lg"
                  className="bg-nb-red hover:bg-nb-red-hover text-white px-10 py-6 text-lg"
                >
                  <Link href="/contact">{t("pricing.ctaButton")}</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
