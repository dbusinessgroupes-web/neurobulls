"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import {
  Camera,
  Target,
  Gift,
  FileText,
  Sparkles,
  RefreshCw,
  Rocket,
  ChevronDown,
  Check,
  ArrowRight,
  Phone,
  Brain,
  Workflow,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { AnimatedCounter } from "@/components/animated-counter";
import { CookieBanner } from "@/components/cookie-banner";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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

const serviceCards = [
  { icon: Camera, titleKey: "visualStarter", price: "350" },
  { icon: Target, titleKey: "visualPro", price: "950", popular: true },
  { icon: Sparkles, titleKey: "visualPremium", price: "1.900" },
  { icon: Phone, titleKey: "voice", price: "950" },
  { icon: Brain, titleKey: "agent", price: "1.500" },
  { icon: Workflow, titleKey: "automation", price: "500", from: true },
];

const processSteps = [
  { icon: FileText, number: "01" },
  { icon: Sparkles, number: "02" },
  { icon: RefreshCw, number: "03" },
  { icon: Rocket, number: "04" },
];

const portfolioItems = [
  {
    name: "Fashion Editorial",
    tag: "Fashion",
    image: "/portfolio/vanguard-fashion.jpg",
  },
  {
    name: "Skincare Launch",
    tag: "Beauty",
    image: "/portfolio/lumiere-beauty.jpg",
  },
  {
    name: "Tech Launch",
    tag: "Technology",
    image: "/portfolio/techvision-pro.jpg",
  },
  {
    name: "Real Estate",
    tag: "Real Estate",
    image: "/portfolio/maison-elegance.jpg",
  },
];

const comparisonRowKeys = ["timeline", "cost", "quality", "availability", "revisions", "scalability", "automation", "agents"] as const;

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* ─── Hero Section ─── */}
        <section className="relative min-h-screen flex items-center justify-center px-6">
          {/* Hero background image */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/hero/hero-models.jpg"
              alt="NeuroBulls — AI Marketing Agency visual"
              fill
              priority
              quality={90}
              className="object-cover"
              sizes="100vw"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/50" />
            {/* Gradient fade to page background at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </div>
          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-nb-red/10 blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-nb-gold/10 blur-[128px]" />

          <motion.div
            className="mx-auto max-w-5xl text-center"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-white drop-shadow-lg"
            >
              {t("hero.title")}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-8 max-w-2xl text-lg sm:text-xl text-white/80"
            >
              {t("hero.subtitle")}
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/services"><Button size="lg" className="bg-nb-red hover:bg-nb-red-hover text-white px-8">{t("hero.cta")}</Button></Link>
              <Link href="/work"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">{t("hero.ctaSecondary")}</Button></Link>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-6 w-6 text-muted-foreground" />
          </motion.div>
        </section>

        {/* ─── Stats Band ─── */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <Card className="border-border bg-card">
              <CardContent className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-8 lg:p-12">
                {/* Stat 1: 85% */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-nb-gold">
                    <AnimatedCounter target={85} suffix="%" />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{t("stats.cost")}</p>
                </div>
                {/* Stat 2: 48h */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-nb-gold">
                    <AnimatedCounter target={48} suffix="h" />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{t("stats.delivery")}</p>
                </div>
                {/* Stat 3: 24/7 — plain text, not AnimatedCounter */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-nb-gold">
                    <span>24/7</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{t("stats.availability")}</p>
                </div>
                {/* Stat 4: 100% */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-nb-gold">
                    <AnimatedCounter target={100} suffix="%" />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{t("stats.satisfaction")}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ─── Services Preview ─── */}
        <section className="py-24 lg:py-32 px-6">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  {t("services.title")}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t("services.subtitle")}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCards.map((service, i) => (
                <ScrollReveal key={service.titleKey} delay={i * 0.08}>
                  <Card className={`group border-border bg-card transition-all duration-300 hover:border-nb-red hover:-translate-y-1 ${(service as { popular?: boolean }).popular ? "border-nb-red border-2" : ""}`}>
                    <CardContent className="p-6">
                      {(service as { popular?: boolean }).popular && (
                        <Badge className="bg-nb-red text-white border-0 px-2 py-0.5 text-xs font-semibold mb-3">
                          {t("services.popular")}
                        </Badge>
                      )}
                      <service.icon className="h-8 w-8 text-nb-gold mb-4" />
                      <h3 className="text-lg font-semibold mb-2">
                        {t(`services.${service.titleKey}.title`)}
                      </h3>
                      <p className="text-xl font-bold text-nb-gold mb-1">
                        {(service as { from?: boolean }).from && <span className="text-sm font-normal text-muted-foreground mr-1">{t("services.from")}</span>}
                        &euro;{service.price}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {t(`services.${service.titleKey}.description`)}
                      </p>
                      <div className="mt-4">
                        <Link href="/services">
                          <Button variant="outline" size="sm" className="group/btn">
                            {t("services.viewMore")}
                            <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/services"><Button variant="outline" className="group">
                  {t("services.exploreAll")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button></Link>
            </div>
          </div>
        </section>

        {/* ─── Portfolio Showcase ─── */}
        <section className="py-24 lg:py-32 px-6">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  {t("work.title")}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t("work.subtitle")}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {portfolioItems.map((item, i) => (
                <ScrollReveal key={item.name} delay={i * 0.08}>
                  <Link href={`/work/${item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "")}`}>
                    <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-nb-red/5">
                      <Image
                        src={item.image}
                        alt={`${item.name} — ${item.tag} campaign by NeuroBulls`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                      <div className="absolute inset-x-0 bottom-0 p-5 z-10">
                        <Badge
                          variant="secondary"
                          className="mb-2 bg-nb-red/90 text-white border-0 text-xs backdrop-blur-sm"
                        >
                          {item.tag}
                        </Badge>
                        <h3 className="text-lg font-bold text-white leading-tight">{item.name}</h3>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/work"><Button variant="outline" className="group">
                  {t("work.viewAll")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button></Link>
            </div>
          </div>
        </section>

        {/* ─── How It Works (Process) ─── */}
        <section className="py-24 lg:py-32 px-6">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  {t("process.title")}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t("process.subtitle")}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Connecting line (desktop) */}
              <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-border" />

              {processSteps.map((step, i) => (
                <ScrollReveal key={step.number} delay={i * 0.15}>
                  <div className="relative text-center">
                    {/* Vertical connecting line (mobile) */}
                    {i < processSteps.length - 1 && (
                      <div className="md:hidden absolute left-1/2 top-24 h-[calc(100%+2rem)] w-px border-l-2 border-dashed border-border" />
                    )}
                    {/* Step number */}
                    <div className="relative z-10 mx-auto mb-4 flex h-24 w-24 flex-col items-center justify-center rounded-2xl bg-card border border-border">
                      <span className="text-xs font-bold text-nb-red mb-1">{step.number}</span>
                      <step.icon className="h-6 w-6 text-nb-gold" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {t(`process.steps.${["brief", "creation", "review", "launch"][i]}.title`)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(`process.steps.${["brief", "creation", "review", "launch"][i]}.description`)}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Comparison Table — "Why NeuroBulls?" ─── */}
        <section className="py-24 lg:py-32 px-6">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  {t("comparison.title")}
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="border-border bg-card overflow-hidden">
                <CardContent className="p-0">
                  {/* Table header */}
                  <div className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-border bg-muted/30">
                    <div className="text-sm font-semibold text-muted-foreground" />
                    <div className="text-sm font-semibold text-muted-foreground text-center">
                      {t("comparison.diy.label")}
                    </div>
                    <div className="text-sm font-semibold text-muted-foreground text-center">
                      {t("comparison.traditional.label")}
                    </div>
                    <div className="text-sm font-semibold text-nb-gold text-center">
                      NeuroBulls
                    </div>
                  </div>

                  {/* Rows */}
                  {comparisonRowKeys.map((key, i) => (
                    <div
                      key={key}
                      className={`grid grid-cols-4 gap-4 px-6 py-4 items-center ${
                        i < comparisonRowKeys.length - 1 ? "border-b border-border" : ""
                      }`}
                    >
                      <div className="text-sm font-medium">
                        {t(`comparison.rows.${key}`)}
                      </div>
                      <div className="text-center text-sm text-muted-foreground/60">
                        {t(`comparison.diy.${key}`)}
                      </div>
                      <div className="text-center text-sm text-muted-foreground/60">
                        {t(`comparison.traditional.${key}`)}
                      </div>
                      <div className="text-center">
                        <span className="text-sm font-semibold text-nb-gold">
                          {t(`comparison.neurobulls.${key}`)}
                        </span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Free Trial CTA ─── */}
        <section className="py-24 lg:py-32 px-6">
          <div className="mx-auto max-w-4xl text-center">
            <ScrollReveal>
              <div className="rounded-2xl border border-nb-gold/20 bg-gradient-to-b from-card to-background p-10 md:p-16">
                <Gift className="h-12 w-12 text-nb-gold mx-auto mb-6" />
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  {locale === "es" ? "Prueba nuestra calidad gratis" : "Try our quality for free"}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  {locale === "es"
                    ? "Solicita una imagen de prueba gratuita y sin compromiso. Verás con tus propios ojos la calidad de nuestro trabajo antes de contratar."
                    : "Request a free sample image with no commitment. See our quality with your own eyes before hiring us."}
                </p>
                <Link href="/contact">
                  <Button className="bg-nb-red hover:bg-nb-red-hover text-white px-8 py-3 text-lg">
                    {locale === "es" ? "Solicitar Imagen Gratuita" : "Request Free Image"}
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Meet the Founder ─── */}
        <section className="py-24 lg:py-32 px-6">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row items-center gap-10 rounded-2xl border border-border bg-card p-8 md:p-12">
                <div className="shrink-0">
                  <Image
                    src="/team/diego-ceo.jpg"
                    alt="Diego Rodríguez Molino — CEO & Founder"
                    width={180}
                    height={180}
                    className="rounded-2xl object-cover object-top ring-2 ring-nb-gold/30"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-nb-gold mb-2">
                    {locale === "es" ? "Nuestro Fundador" : "Our Founder"}
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-1">
                    Diego Rodríguez Molino
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">CEO & Founder</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {locale === "es"
                      ? "Emprendedor y visionario en la intersección de marketing e inteligencia artificial. Fundé NeuroBulls con una misión clara: democratizar la producción visual de alta calidad y la automatización inteligente para negocios de todos los tamaños. Nuestra tecnología genera contenido indistinguible de la realidad y automatiza procesos para que tu negocio funcione 24/7."
                      : "Entrepreneur and visionary at the intersection of marketing and artificial intelligence. I founded NeuroBulls with a clear mission: to democratize high-quality visual production and intelligent automation for businesses of all sizes. Our technology generates content indistinguishable from reality and automates processes so your business runs 24/7."}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Final CTA ─── */}
        <section className="relative py-32 lg:py-40 px-6">
          {/* Background gradient */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-nb-red/10 via-transparent to-transparent" />
          {/* Decorative orbs */}
          <div className="absolute bottom-0 left-1/3 -z-10 h-[600px] w-[600px] rounded-full bg-nb-red/5 blur-[160px]" />
          <div className="absolute top-1/4 right-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-nb-gold/5 blur-[100px]" />

          <div className="mx-auto max-w-4xl text-center">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
                {t("cta.title")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("cta.subtitle")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact"><Button size="lg" className="bg-nb-red hover:bg-nb-red-hover text-white px-10 py-6 text-lg">{t("cta.button")}</Button></Link>
                <Link href="/work"><Button size="lg" variant="outline" className="px-10 py-6 text-lg">{t("cta.buttonSecondary")}</Button></Link>
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
