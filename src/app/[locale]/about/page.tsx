"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CookieBanner } from "@/components/cookie-banner";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  DollarSign,
  Zap,
  Shield,
  TrendingUp,
  ArrowRight,
  Cpu,
  ImageIcon,
  Video,
  Sparkles,
  MapPin,
  Building2,
} from "lucide-react";

const advantageCards = [
  { key: "cost" as const, icon: DollarSign, color: "text-nb-gold", bg: "bg-nb-gold/10", border: "border-nb-gold/20" },
  { key: "speed" as const, icon: Zap, color: "text-nb-red", bg: "bg-nb-red/10", border: "border-nb-red/20" },
  { key: "consistency" as const, icon: Shield, color: "text-nb-gold", bg: "bg-nb-gold/10", border: "border-nb-gold/20" },
  { key: "scale" as const, icon: TrendingUp, color: "text-nb-red", bg: "bg-nb-red/10", border: "border-nb-red/20" },
];

const pipelineSteps = [
  { icon: ImageIcon, key: "input" },
  { icon: Cpu, key: "processing" },
  { icon: Sparkles, key: "output" },
];

const techTools = ["FLUX.2 Pro", "Kling AI", "ElevenLabs", "Topaz AI"];

export default function AboutPage() {
  const t = useTranslations("about");
  const tCta = useTranslations("cta");
  const locale = useLocale();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        {/* Hero */}
        <section className="pt-40 pb-24 px-4">
          <div className="mx-auto max-w-7xl text-center">
            <ScrollReveal>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
                {t("title")}
              </h1>
            </ScrollReveal>
          </div>
        </section>

        {/* Mission */}
        <section className="px-4 pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Text */}
              <ScrollReveal>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                    {t("mission.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t("mission.description")}
                  </p>
                </div>
              </ScrollReveal>

              {/* Mission image */}
              <ScrollReveal delay={0.2} direction="right">
                <div className="relative aspect-[4/5] max-w-sm mx-auto lg:ml-auto rounded-2xl overflow-hidden">
                  <Image
                    src="/portfolio/vanguard-fashion.jpg"
                    alt="NeuroBulls AI visual production"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="px-4 pb-24">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  {t("technology.title")}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("technology.description")}
                </p>
              </div>
            </ScrollReveal>

            {/* Pipeline visualization */}
            <ScrollReveal delay={0.15}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
                {pipelineSteps.map((step, i) => (
                  <div key={step.key} className="flex items-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.2 }}
                      className="flex flex-col items-center gap-3"
                    >
                      <div
                        className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border ${
                          i === 1
                            ? "bg-nb-red/10 border-nb-red/30"
                            : "bg-muted/50 border-border"
                        } flex items-center justify-center`}
                      >
                        <step.icon
                          className={`h-8 w-8 sm:h-10 sm:w-10 ${
                            i === 1 ? "text-nb-red" : "text-muted-foreground"
                          }`}
                        />
                      </div>
                      <span
                        className={`text-sm font-medium ${
                          i === 1 ? "text-nb-red" : "text-muted-foreground"
                        }`}
                      >
                        {t(`pipeline.${step.key}`)}
                      </span>
                    </motion.div>

                    {/* Connecting line */}
                    {i < pipelineSteps.length - 1 && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.2 + 0.3 }}
                        className="hidden sm:block w-16 lg:w-24 h-px bg-gradient-to-r from-border to-nb-red/40 mx-4 origin-left"
                      />
                    )}
                    {i < pipelineSteps.length - 1 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.2 + 0.3 }}
                        className="sm:hidden w-px h-8 bg-gradient-to-b from-border to-nb-red/40 origin-top"
                      />
                    )}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Our Technology — Tools */}
        <section className="px-4 pb-24">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold">
                  {locale === "es" ? "Nuestra Tecnología" : "Our Technology"}
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {techTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-5 py-2.5 rounded-full border border-border bg-muted/30 text-sm font-medium text-muted-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Advantages */}
        <section className="px-4 pb-24">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                {t("advantages.title")}
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {advantageCards.map((card, i) => (
                <ScrollReveal key={card.key} delay={i * 0.1}>
                  <div
                    className={`rounded-xl border ${card.border} ${card.bg} p-6 sm:p-8 h-full`}
                  >
                    <div
                      className={`w-12 h-12 rounded-lg ${card.bg} flex items-center justify-center mb-4`}
                    >
                      <card.icon className={`h-6 w-6 ${card.color}`} />
                    </div>
                    <h3 className="text-lg font-bold mb-2">
                      {t(`advantages.${card.key}.title`)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(`advantages.${card.key}.description`)}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="px-4 pb-24">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="rounded-xl border border-border bg-card p-8 sm:p-12 text-center">
                {/* Founder photo */}
                <div className="mx-auto mb-6 h-28 w-28 rounded-full overflow-hidden border-2 border-nb-gold/50">
                  <Image
                    src="/team/diego.jpg"
                    alt="Diego Rodríguez Molino — CEO & Founder of NeuroBulls"
                    width={112}
                    height={112}
                    className="object-cover object-top w-full h-full"
                  />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-1">
                  Diego Rodríguez Molino
                </h2>
                <p className="text-sm font-medium text-nb-gold mb-4">CEO & Founder</p>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
                  {locale === "es"
                    ? "Emprendedor en la intersección de moda, tecnología e inteligencia artificial. Fundó NeuroBulls con la visión de democratizar la producción visual de alta calidad para marcas de todos los tamaños."
                    : "Entrepreneur at the intersection of fashion, technology and artificial intelligence. Founded NeuroBulls with the vision of democratizing high-quality visual production for brands of all sizes."}
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{t("founder.location")}</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 pb-32">
          <div className="mx-auto max-w-4xl text-center">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                {tCta("title")}{" "}
                <span className="text-nb-red">{tCta("titleHighlight")}</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <Link href="/contact" className="inline-block mt-8">
                <Button className="bg-nb-red hover:bg-nb-red-hover text-white font-semibold px-8 py-6 text-lg gap-2">
                  {tCta("button")}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
