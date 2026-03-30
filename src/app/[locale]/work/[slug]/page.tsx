"use client";

import { useLocale } from "next-intl";
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

const categoryLabelsEN: Record<string, string> = {
  fashion: "Fashion",
  beauty: "Beauty",
  tech: "Tech",
  realestate: "Real Estate",
  food: "Food & Beverage",
};

const categoryLabelsES: Record<string, string> = {
  fashion: "Moda",
  beauty: "Belleza",
  tech: "Tecnología",
  realestate: "Inmobiliaria",
  food: "Alimentación",
};

const projects: Record<
  string,
  {
    titleEN: string;
    titleES: string;
    category: string;
    image: string;
    gallery: string[];
    briefEN: string;
    briefES: string;
    servicesEN: string[];
    servicesES: string[];
    statsEN: string[];
    statsES: string[];
  }
> = {
  "vanguard-fashion": {
    titleEN: "Vanguard Fashion",
    titleES: "Vanguard Fashion",
    category: "fashion",
    image: "/portfolio/vanguard-fashion.jpg",
    gallery: [
      "/portfolio/vanguard-fashion.jpg",
      "/portfolio/moda-2.jpg",
      "/portfolio/moda-3.jpg",
      "/portfolio/moda-4.jpg",
    ],
    briefEN:
      "Vanguard contacted us to create a complete editorial campaign for their seasonal collection. We generated 3 exclusive AI models and produced 120 editorial images and 8 cinematic videos in 5 days. The result: Vogue-quality content without the need for photo shoots, studios or real models.",
    briefES:
      "Vanguard nos contactó para crear una campaña editorial completa para su colección de temporada. Generamos 3 modelos IA exclusivos y produjimos 120 imágenes editoriales y 8 vídeos cinematográficos en 5 días. El resultado: contenido de calidad Vogue sin necesidad de sesiones fotográficas, estudios ni modelos reales.",
    servicesEN: [
      "AI Photography",
      "AI Video",
      "AI Models",
      "Creative Direction",
    ],
    servicesES: [
      "Fotografía IA",
      "Vídeo IA",
      "Modelos IA",
      "Dirección Creativa",
    ],
    statsEN: [
      "+340% social media engagement",
      "120 editorial images",
      "8 cinematic videos",
      "5-day delivery",
    ],
    statsES: [
      "+340% engagement en RRSS",
      "120 imágenes editoriales",
      "8 vídeos cinematográficos",
      "Entrega en 5 días",
    ],
  },
  "lumiere-beauty": {
    titleEN: "Lumière Beauty",
    titleES: "Lumière Beauty",
    category: "beauty",
    image: "/portfolio/lumiere-beauty.jpg",
    gallery: [
      "/portfolio/lumiere-beauty.jpg",
      "/portfolio/belleza-2.jpg",
      "/portfolio/belleza-3.jpg",
    ],
    briefEN:
      "Lumière needed premium content for the launch of their new skincare line. We created 2 AI models that became the faces of the campaign, generated 80 product and beauty editorial images, and 4 30-second videos for Instagram. All delivered in 3 days.",
    briefES:
      "Lumière necesitaba contenido premium para el lanzamiento de su nueva línea de skincare. Creamos 2 modelos IA que se convirtieron en las caras de la campaña, generamos 80 imágenes de producto y beauty editorial, y 4 vídeos de 30 segundos para Instagram. Todo en 3 días.",
    servicesEN: ["AI Photography", "AI Video", "AI Models"],
    servicesES: ["Fotografía IA", "Vídeo IA", "Modelos IA"],
    statsEN: [
      "80 editorial images",
      "4 campaign videos",
      "3-day delivery",
      "90% cost reduction",
    ],
    statsES: [
      "80 imágenes editoriales",
      "4 vídeos de campaña",
      "Entrega en 3 días",
      "90% reducción de costes",
    ],
  },
  "techvision-pro": {
    titleEN: "TechVision Pro",
    titleES: "TechVision Pro",
    category: "tech",
    image: "/portfolio/techvision-pro.jpg",
    gallery: [
      "/portfolio/techvision-pro.jpg",
      "/portfolio/tech-2.jpg",
      "/portfolio/tech-3.jpg",
    ],
    briefEN:
      "TechVision commissioned the complete visual production for their new product launch. We generated 60 product images, 4 AI models for the ad campaign, and 6 short videos for social media. All content went through our quality pipeline with a minimum score of 8.0/10.",
    briefES:
      "TechVision nos encargó la producción visual completa para el lanzamiento de su nuevo producto. Generamos 60 imágenes de producto, 4 modelos IA para campaña publicitaria, y 6 vídeos cortos para redes. Todo el contenido pasó por nuestro pipeline de calidad con score mínimo 8.0/10.",
    servicesEN: [
      "AI Photography",
      "AI Video",
      "AI Models",
      "Campaign Strategy",
    ],
    servicesES: [
      "Fotografía IA",
      "Vídeo IA",
      "Modelos IA",
      "Estrategia de Campaña",
    ],
    statsEN: [
      "60 product images",
      "6 campaign videos",
      "4 AI models",
      "Quality score 8.0+/10",
    ],
    statsES: [
      "60 imágenes de producto",
      "6 vídeos de campaña",
      "4 modelos IA",
      "Score de calidad 8.0+/10",
    ],
  },
  "maison-elegance": {
    titleEN: "Maison Élégance",
    titleES: "Maison Élégance",
    category: "realestate",
    image: "/portfolio/maison-elegance.jpg",
    gallery: [
      "/portfolio/maison-elegance.jpg",
      "/portfolio/inmobiliaria-2.jpg",
      "/portfolio/inmobiliaria-3.jpg",
    ],
    briefEN:
      "For Maison Élégance we created a complete luxury real estate campaign: 5 AI models (agents and buyers), 90 property images with people interacting in spaces, and 3 virtual tour videos. The cost was 95% less than a traditional photo production.",
    briefES:
      "Para Maison Élégance creamos una campaña inmobiliaria de lujo completa: 5 modelos IA (agentes y compradores), 90 imágenes de propiedades con personas interactuando en espacios, y 3 vídeos tour virtual. El coste fue un 95% inferior a una producción fotográfica tradicional.",
    servicesEN: ["AI Photography", "AI Video", "AI Models"],
    servicesES: ["Fotografía IA", "Vídeo IA", "Modelos IA"],
    statsEN: [
      "90 property images",
      "5 AI models",
      "3 virtual tours",
      "95% cost savings",
    ],
    statsES: [
      "90 imágenes de propiedades",
      "5 modelos IA",
      "3 tours virtuales",
      "95% ahorro en costes",
    ],
  },
  "glow-cosmetics": {
    titleEN: "Glow Cosmetics",
    titleES: "Glow Cosmetics",
    category: "beauty",
    image: "/portfolio/glow-cosmetics.jpg",
    gallery: ["/portfolio/glow-cosmetics.jpg"],
    briefEN:
      "Glow Cosmetics needed a virtual beauty influencer for their social media strategy. We created an AI influencer with her own identity, generating 30 posts per month with beauty content indistinguishable from real photography.",
    briefES:
      "Glow Cosmetics necesitaba una influencer virtual de belleza para su estrategia en redes sociales. Creamos una influencer IA con identidad propia, generando 30 posts al mes con contenido beauty indistinguible de fotografía real.",
    servicesEN: ["AI Models", "AI Social Media", "AI Photography"],
    servicesES: ["Modelos IA", "Redes Sociales IA", "Fotografía IA"],
    statsEN: [
      "150 images created",
      "12 monthly reels",
      "1 AI influencer",
      "+280% engagement",
    ],
    statsES: [
      "150 imágenes creadas",
      "12 reels mensuales",
      "1 influencer IA",
      "+280% engagement",
    ],
  },
  "urban-taste": {
    titleEN: "Urban Taste",
    titleES: "Urban Taste",
    category: "food",
    image: "/portfolio/urban-taste.jpg",
    gallery: ["/portfolio/urban-taste.jpg"],
    briefEN:
      "Restaurant chain Urban Taste needed a complete rebranding with AI food photography and lifestyle content. We produced 200 images and 5 videos showing their dishes and ambiance with AI-generated diners and staff.",
    briefES:
      "La cadena de restaurantes Urban Taste necesitaba un rebranding completo con fotografía gastronómica IA y contenido lifestyle. Produjimos 200 imágenes y 5 vídeos mostrando sus platos y ambiente con comensales y personal generados por IA.",
    servicesEN: ["AI Photography", "AI Video", "AI Brand Identity"],
    servicesES: ["Fotografía IA", "Vídeo IA", "Identidad de Marca IA"],
    statsEN: [
      "200 food images",
      "5 campaign videos",
      "6 AI models",
      "Complete rebranding",
    ],
    statsES: [
      "200 imágenes gastronómicas",
      "5 vídeos de campaña",
      "6 modelos IA",
      "Rebranding completo",
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
  const locale = useLocale();
  const params = useParams();
  const slug = params.slug as string;
  const isEN = locale === "en";

  const project = projects[slug];
  if (!project) {
    notFound();
  }

  const title = isEN ? project.titleEN : project.titleES;
  const brief = isEN ? project.briefEN : project.briefES;
  const services = isEN ? project.servicesEN : project.servicesES;
  const stats = isEN ? project.statsEN : project.statsES;
  const categoryLabel = isEN
    ? categoryLabelsEN[project.category]
    : categoryLabelsES[project.category];

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[60vh] flex items-end">
          <div className="absolute inset-0 -z-10">
            <Image
              src={project.image}
              alt={title}
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
              {title}
            </motion.h1>
          </motion.div>
        </section>

        {/* About the Project */}
        <section className="py-16 px-6">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
                {isEN ? "About the Project" : "Sobre el proyecto"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {brief}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Services Used */}
        <section className="py-12 px-6">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
                {isEN ? "Services Used" : "Servicios utilizados"}
              </h2>
              <div className="flex flex-wrap gap-3">
                {services.map((service, i) => (
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
                {isEN ? "Results" : "Resultados"}
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
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
        {project.gallery.length > 1 && (
          <section className="py-16 px-6">
            <div className="mx-auto max-w-6xl">
              <ScrollReveal>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-10 text-center">
                  {isEN ? "Gallery" : "Galería"}
                </h2>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.gallery.map((img, i) => (
                  <ScrollReveal key={i} delay={i * 0.08}>
                    <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-border/30 hover:border-nb-red/30 transition-colors duration-300">
                      <Image
                        src={img}
                        alt={`${title} — ${isEN ? "example" : "ejemplo"} ${i + 1}`}
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
                {isEN
                  ? "Want similar results?"
                  : "¿Quieres resultados similares?"}
              </h2>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-nb-red hover:bg-nb-red-hover text-white px-10 py-6 text-lg gap-2"
                >
                  {isEN ? "Start Your Project" : "Iniciar Tu Proyecto"}
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
