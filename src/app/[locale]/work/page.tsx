"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CookieBanner } from "@/components/cookie-banner";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: "vanguard-fashion",
    title: "Vanguard Fashion",
    category: "fashion",
    description:
      "Complete AI model campaign for Spring/Summer 2026 collection. 120 images, 8 videos, 3 AI models.",
    gradient: "from-red-900/40 via-black to-black",
    stats: "120 images \u2022 8 videos \u2022 3 AI models",
  },
  {
    id: "lumiere-beauty",
    title: "Lumi\u00e8re Beauty",
    category: "beauty",
    description:
      "Luxury skincare launch campaign with hyperrealistic AI models in editorial settings.",
    gradient: "from-amber-900/40 via-black to-black",
    stats: "80 images \u2022 4 videos \u2022 2 AI models",
  },
  {
    id: "techvision-pro",
    title: "TechVision Pro",
    category: "tech",
    description:
      "Product launch campaign featuring AI-generated tech ambassadors across digital platforms.",
    gradient: "from-blue-900/40 via-black to-black",
    stats: "60 images \u2022 6 videos \u2022 4 AI models",
  },
  {
    id: "maison-elegance",
    title: "Maison \u00c9l\u00e9gance",
    category: "realestate",
    description:
      "Luxury real estate marketing with AI lifestyle models in architectural settings.",
    gradient: "from-emerald-900/40 via-black to-black",
    stats: "90 images \u2022 3 videos \u2022 5 AI models",
  },
  {
    id: "glow-cosmetics",
    title: "Glow Cosmetics",
    category: "beauty",
    description:
      "Social media content strategy with AI beauty influencer generating 30 posts/month.",
    gradient: "from-pink-900/40 via-black to-black",
    stats: "150 images \u2022 12 reels \u2022 1 AI influencer",
  },
  {
    id: "urban-taste",
    title: "Urban Taste",
    category: "food",
    description:
      "Restaurant chain rebranding with AI food photography and lifestyle content.",
    gradient: "from-orange-900/40 via-black to-black",
    stats: "200 images \u2022 5 videos \u2022 6 AI models",
  },
];

type FilterCategory = "all" | "fashion" | "beauty" | "tech" | "realestate" | "food";

const filterKeys: FilterCategory[] = [
  "all",
  "fashion",
  "beauty",
  "tech",
  "realestate",
  "food",
];

export default function WorkPage() {
  const t = useTranslations("work");
  const tCta = useTranslations("cta");
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

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
            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("subtitle")}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Filter bar */}
        <section className="px-4 pb-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {filterKeys.map((key) => (
                <Button
                  key={key}
                  variant={activeFilter === key ? "default" : "outline"}
                  className={`shrink-0 ${
                    activeFilter === key
                      ? "bg-nb-red hover:bg-nb-red-hover text-white border-nb-red"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setActiveFilter(key)}
                >
                  {t(`filters.${key}`)}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Project grid */}
        <section className="px-4 pb-24">
          <div className="mx-auto max-w-7xl">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px] md:auto-rows-[320px]"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((project, i) => {
                  // First card spans 2 cols on lg, alternating tall cards
                  const isFirst = i === 0;
                  const isTall = i === 2 || i === 4;

                  return (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className={`${
                        isFirst ? "md:col-span-2 md:row-span-2" : ""
                      } ${isTall ? "md:row-span-2" : ""}`}
                    >
                      <Link href="/contact" className="block h-full group">
                        <div
                          className={`relative h-full rounded-xl overflow-hidden bg-gradient-to-br ${project.gradient} border border-border/50`}
                        >
                          {/* Decorative pattern */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/20 blur-3xl" />
                            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-white/10 blur-2xl" />
                          </div>

                          {/* Content overlay */}
                          <div className="relative h-full flex flex-col justify-end p-6">
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

                            <div className="relative z-10">
                              <Badge
                                variant="secondary"
                                className="mb-3 bg-white/10 text-white/80 border-white/20 text-xs uppercase tracking-wider"
                              >
                                {t(`filters.${project.category}`)}
                              </Badge>

                              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                                {project.title}
                              </h3>

                              <p className="text-sm text-white/60 mb-3 line-clamp-2 group-hover:text-white/80 transition-colors">
                                {project.description}
                              </p>

                              <div className="flex items-center justify-between">
                                <span className="text-xs text-white/40 group-hover:text-nb-gold transition-colors">
                                  {project.stats}
                                </span>
                                <ExternalLink className="h-4 w-4 text-white/0 group-hover:text-white/60 transition-colors" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
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
