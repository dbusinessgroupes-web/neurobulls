"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Camera,
  Video,
  Target,
  User,
  Share2,
  Palette,
  FileText,
  Sparkles,
  RefreshCw,
  Rocket,
  ChevronDown,
  Check,
  X,
  ArrowRight,
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
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] as [number, number, number, number] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] as [number, number, number, number] },
  },
};

const services = [
  { icon: Camera, key: "photography" },
  { icon: Video, key: "video" },
  { icon: Target, key: "strategy" },
  { icon: User, key: "models" },
  { icon: Share2, key: "social" },
  { icon: Palette, key: "branding" },
];

const processSteps = [
  { icon: FileText, number: "01" },
  { icon: Sparkles, number: "02" },
  { icon: RefreshCw, number: "03" },
  { icon: Rocket, number: "04" },
];

const portfolioItems = [
  {
    name: "Vanguard Fashion",
    tag: "Fashion",
    image: "/portfolio/vanguard-fashion.jpg",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    name: "Lumiere Beauty",
    tag: "Beauty",
    image: "/portfolio/lumiere-beauty.jpg",
    className: "",
  },
  {
    name: "TechVision",
    tag: "Technology",
    image: "/portfolio/techvision-pro.jpg",
    className: "",
  },
  {
    name: "Maison Elegance",
    tag: "Real Estate",
    image: "/portfolio/maison-elegance.jpg",
    className: "md:col-span-2",
  },
];

const comparisonRowKeys = ["timeline", "cost", "variations", "availability"] as const;

export default function Home() {
  const t = useTranslations();

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
              alt="AI-generated fashion models in a dramatic editorial pose"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/60" />
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
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]"
            >
              {t("hero.title")}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-8 max-w-2xl text-lg sm:text-xl text-muted-foreground"
            >
              {t("hero.subtitle")}
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button render={<a />} size="lg" className="bg-nb-red hover:bg-nb-red-hover text-white px-8">
                <Link href="/work">{t("hero.cta")}</Link>
              </Button>
              <Button render={<a />} size="lg" variant="outline" className="border-nb-gold text-nb-gold hover:bg-nb-gold/10 px-8">
                <Link href="/services">{t("hero.ctaSecondary")}</Link>
              </Button>
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
                {[
                  { value: 85, suffix: "%", label: t("stats.cost") },
                  { value: 48, suffix: "h", label: t("stats.delivery") },
                  { value: 500, suffix: "+", label: t("stats.models") },
                  { value: 3, suffix: "x", label: t("stats.engagement") },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-4xl font-bold text-nb-gold">
                      <AnimatedCounter target={stat.value} />
                      {stat.suffix}
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
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
              {services.map((service, i) => (
                <ScrollReveal key={service.key} delay={i * 0.08}>
                  <Card className="group border-border bg-card transition-all duration-300 hover:border-nb-red hover:-translate-y-1">
                    <CardContent className="p-6">
                      <service.icon className="h-8 w-8 text-nb-gold mb-4" />
                      <h3 className="text-lg font-semibold mb-2">
                        {t(`services.${service.key}.title`)}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t(`services.${service.key}.description`)}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button render={<a />} variant="outline" className="group">
                <Link href="/services">
                  {t("services.exploreAll")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
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

            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 auto-rows-[200px]">
              {portfolioItems.map((item, i) => (
                <ScrollReveal key={item.name} delay={i * 0.1}>
                  <div
                    className={`group relative h-full min-h-[200px] rounded-xl overflow-hidden cursor-pointer ${item.className}`}
                  >
                    {/* Portfolio image */}
                    <Image
                      src={item.image}
                      alt={`${item.name} — ${item.tag} campaign`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes={item.className.includes("col-span-2") ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/30" />
                    {/* Content */}
                    <div className="relative z-10 flex h-full flex-col justify-end p-6">
                      <Badge
                        variant="secondary"
                        className="w-fit mb-2 bg-white/10 text-white border-0 backdrop-blur-sm"
                      >
                        {item.tag}
                      </Badge>
                      <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button render={<a />} variant="outline" className="group">
                <Link href="/work">
                  {t("work.viewAll")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
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

        {/* ─── Comparison Table ─── */}
        <section className="py-24 lg:py-32 px-6">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  {t("comparison.title")}
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Traditional Agency */}
                <Card className="border-border bg-card/50 opacity-75">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-muted-foreground mb-8">
                      {t("comparison.traditional.label")}
                    </h3>
                    <div className="space-y-6">
                      {comparisonRowKeys.map((key) => (
                        <div key={key} className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            {t(`comparison.rows.${key}`)}
                          </span>
                          <div className="flex items-center gap-2">
                            <X className="h-4 w-4 text-muted-foreground/50" />
                            <span className="text-sm text-muted-foreground">
                              {t(`comparison.traditional.${key}`)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* NeuroBulls */}
                <Card className="border-nb-red bg-card">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-8">{t("comparison.neurobulls.label")}</h3>
                    <div className="space-y-6">
                      {comparisonRowKeys.map((key) => (
                        <div key={key} className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            {t(`comparison.rows.${key}`)}
                          </span>
                          <div className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-nb-gold" />
                            <span className="text-sm font-semibold text-nb-gold">
                              {t(`comparison.neurobulls.${key}`)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
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
                {t("cta.title")}{" "}
                <span className="text-nb-red">{t("cta.titleHighlight")}</span>
              </h2>
              <div className="mt-10">
                <Button render={<a />} size="lg" className="bg-nb-red hover:bg-nb-red-hover text-white px-10 py-6 text-lg">
                  <Link href="/contact">{t("cta.button")}</Link>
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
