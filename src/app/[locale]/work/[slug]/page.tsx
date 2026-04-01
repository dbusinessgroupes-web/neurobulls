"use client";

import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CookieBanner } from "@/components/cookie-banner";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const categoryLabels: Record<string, string> = {
  fashion: "Fashion",
  beauty: "Beauty",
  tech: "Tech",
  realestate: "Real Estate",
  food: "Food & Beverage",
};

const projects: Record<
  string,
  {
    title: string;
    category: string;
    image: string;
    gallery: string[];
    brief: string;
    services: string[];
    stats: string[];
  }
> = {
  "vanguard-fashion": {
    title: "Vanguard Fashion",
    category: "fashion",
    image: "/portfolio/vanguard-fashion.jpg",
    gallery: [
      "/portfolio/vanguard-fashion.jpg",
      "/portfolio/moda-2.jpg",
      "/portfolio/moda-3.jpg",
      "/portfolio/moda-4.jpg",
    ],
    brief:
      "Example of a complete editorial campaign for a fashion collection. 3 exclusive AI models, 120 editorial images and 8 cinematic videos produced in 5 days. Vogue-quality content without photo shoots, studios or real models.",
    services: [
      "AI Photography",
      "AI Video",
      "AI Models",
      "Creative Direction",
    ],
    stats: [
      "+340% social media engagement",
      "120 editorial images",
      "8 cinematic videos",
      "5-day delivery",
    ],
  },
  "lumiere-beauty": {
    title: "Lumiere Beauty",
    category: "beauty",
    image: "/portfolio/lumiere-beauty.jpg",
    gallery: [
      "/portfolio/lumiere-beauty.jpg",
      "/portfolio/belleza-2.jpg",
      "/portfolio/belleza-3.jpg",
    ],
    brief:
      "Example of a premium skincare launch campaign. 2 AI models as the faces of the brand, 80 product and beauty editorial images, and 4 Instagram videos. All produced in 3 days.",
    services: ["AI Photography", "AI Video", "AI Models"],
    stats: [
      "80 editorial images",
      "4 campaign videos",
      "3-day delivery",
      "90% cost reduction",
    ],
  },
  "techvision-pro": {
    title: "TechVision Pro",
    category: "tech",
    image: "/portfolio/techvision-pro.jpg",
    gallery: [
      "/portfolio/techvision-pro.jpg",
      "/portfolio/tech-2.jpg",
      "/portfolio/tech-3.jpg",
    ],
    brief:
      "Example of complete visual production for a tech product launch. 60 product images, 4 AI models for the ad campaign, and 6 short social media videos. Every image scored 8.0+ on our quality pipeline.",
    services: [
      "AI Photography",
      "AI Video",
      "AI Models",
      "Campaign Strategy",
    ],
    stats: [
      "60 product images",
      "6 campaign videos",
      "4 AI models",
      "Quality score 8.0+/10",
    ],
  },
  "maison-elegance": {
    title: "Maison Elegance",
    category: "realestate",
    image: "/portfolio/maison-elegance.jpg",
    gallery: [
      "/portfolio/maison-elegance.jpg",
      "/portfolio/inmobiliaria-2.jpg",
      "/portfolio/inmobiliaria-3.jpg",
    ],
    brief:
      "Example of a luxury real estate campaign. 5 AI models (agents and buyers), 90 property images with people in spaces, and 3 virtual tour videos. 95% less cost than traditional photo production.",
    services: ["AI Photography", "AI Video", "AI Models"],
    stats: [
      "90 property images",
      "5 AI models",
      "3 virtual tours",
      "95% cost savings",
    ],
  },
  "glow-cosmetics": {
    title: "Glow Cosmetics",
    category: "beauty",
    image: "/portfolio/glow-cosmetics.jpg",
    gallery: ["/portfolio/glow-cosmetics.jpg", "/portfolio/glow-2.jpg", "/portfolio/glow-3.jpg"],
    brief:
      "Example of a virtual beauty influencer for social media. An AI influencer with her own identity, generating 30 posts per month with beauty content indistinguishable from real photography.",
    services: ["AI Models", "AI Social Media", "AI Photography"],
    stats: [
      "150 images created",
      "12 monthly reels",
      "1 AI influencer",
      "+280% engagement",
    ],
  },
  "urban-taste": {
    title: "Urban Taste",
    category: "food",
    image: "/portfolio/urban-taste.jpg",
    gallery: ["/portfolio/urban-taste.jpg"],
    brief:
      "Example of restaurant rebranding with AI food photography and lifestyle content. 200 images and 5 videos showing dishes and ambiance with AI-generated diners.",
    services: ["AI Photography", "AI Video", "AI Brand Identity"],
    stats: [
      "200 food images",
      "5 campaign videos",
      "6 AI models",
      "Complete rebranding",
    ],
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function WorkDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const project = projects[slug];
  if (!project) {
    notFound();
  }

  const categoryLabel = categoryLabels[project.category];

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[60vh] flex items-end">
          <div className="absolute inset-0 -z-10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          </div>

          <motion.div
            className="mx-auto max-w-4xl w-full"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.div variants={fadeUp}>
              <Badge
                variant="secondary"
                className="mb-4 bg-nb-red/20 text-nb-red border-nb-red/30 text-xs uppercase tracking-wider"
              >
                {categoryLabel}
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              {project.title}
            </motion.h1>
          </motion.div>
        </section>

        {/* About the Project */}
        <section className="py-16 px-6">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
                About the Project
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.brief}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Services Used */}
        <section className="py-12 px-6">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
                Services Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.services.map((service, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="bg-muted/50 border-border text-foreground px-4 py-2 text-sm"
                  >
                    {service}
                  </Badge>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-10 text-center">
                Results
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.stats.map((stat, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="rounded-xl border border-border bg-card p-6 text-center">
                    <p className="text-sm font-bold text-nb-gold">{stat}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        {project.gallery.length > 0 && (
          <section className="py-16 px-6">
            <div className="mx-auto max-w-6xl">
              <ScrollReveal>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-10 text-center">
                  Gallery
                </h2>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.gallery.map((img, i) => (
                  <ScrollReveal key={i} delay={i * 0.08}>
                    <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-border/30 hover:border-nb-red/30 transition-colors duration-300">
                      <Image
                        src={img}
                        alt={`${project.title} — example ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="relative py-24 lg:py-32 px-6">
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-nb-red/10 via-transparent to-transparent" />
          <div className="mx-auto max-w-4xl text-center">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
                Want similar results?
              </h2>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-nb-red hover:bg-nb-red-hover text-white px-10 py-6 text-lg gap-2"
                >
                  Start Your Project
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
