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
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: "vanguard-fashion",
    key: "vanguardFashion",
    category: "fashion",
    image: "/portfolio/vanguard-fashion.jpg",
    alt: "Fashion editorial campaign with bold styling and dramatic lighting",
  },
  {
    id: "lumiere-beauty",
    key: "lumiereBeauty",
    category: "beauty",
    image: "/portfolio/lumiere-beauty.jpg",
    alt: "Luxury skincare product photography with soft natural tones",
  },
  {
    id: "techvision-pro",
    key: "techvisionPro",
    category: "tech",
    image: "/portfolio/techvision-pro.jpg",
    alt: "Futuristic tech product launch with sleek design elements",
  },
  {
    id: "maison-elegance",
    key: "maisonElegance",
    category: "realestate",
    image: "/portfolio/maison-elegance.jpg",
    alt: "Elegant luxury real estate interior with refined architecture",
  },
  {
    id: "glow-cosmetics",
    key: "glowCosmetics",
    category: "beauty",
    image: "/portfolio/glow-cosmetics.jpg",
    alt: "Beauty influencer campaign with vibrant cosmetics and warm lighting",
  },
  {
    id: "urban-taste",
    key: "urbanTaste",
    category: "food",
    image: "/portfolio/urban-taste.jpg",
    alt: "Artisan restaurant food photography with rich textures and colors",
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
                      <Link href={`/work/${project.id}`} className="block h-full group">
                        <div
                          className="relative h-full rounded-xl overflow-hidden border border-border/50"
                        >
                          {/* Background image */}
                          <Image
                            src={project.image}
                            alt={project.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />

                          {/* Dark overlay for text readability */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

                          {/* Content overlay */}
                          <div className="relative h-full flex flex-col justify-end p-6">
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />

                            <div className="relative z-10">
                              <Badge
                                variant="secondary"
                                className="mb-3 bg-white/10 text-white/80 border-white/20 text-xs uppercase tracking-wider"
                              >
                                {t(`filters.${project.category}`)}
                              </Badge>

                              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                                {t(`projects.${project.key}.title`)}
                              </h3>

                              <p className="text-sm text-white/60 mb-3 line-clamp-2 group-hover:text-white/80 transition-colors">
                                {t(`projects.${project.key}.description`)}
                              </p>

                              <div className="flex items-center justify-between">
                                <span className="text-xs text-white/40 group-hover:text-nb-gold transition-colors">
                                  {t(`projects.${project.key}.stats`)}
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
