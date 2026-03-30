"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import {
  Camera,
  Video,
  Target,
  User,
  Building2,
  Shirt,
  Sparkles,
  UtensilsCrossed,
  Rocket,
  Check,
  ShieldCheck,
  Gift,
  Unlock,
  ChevronDown,
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

const projectServices = [
  {
    key: "photography",
    slug: "fotografia-ia",
    icon: Camera,
    image: "/services/ai-photography.jpg",
    priceEN: "€397",
    priceES: "€397",
    traditionalEN: "€3,000-8,000",
    traditionalES: "€3.000-8.000",
    titleEN: "Photography Pack (10 photos 4K)",
    titleES: "Pack Fotografía (10 fotos 4K)",
    descEN: "Complete editorial photo session. Hyperrealistic AI models indistinguishable from reality.",
    descES: "Sesión fotográfica editorial completa. Modelos IA hiperrealistas indistinguibles de la realidad.",
  },
  {
    key: "reel",
    slug: "video-ia",
    icon: Video,
    image: "/services/ai-video.jpg",
    priceEN: "€597",
    priceES: "€597",
    traditionalEN: "€2,000-5,000",
    traditionalES: "€2.000-5.000",
    titleEN: "Video Reel (15-30s edited)",
    titleES: "Vídeo Reel (15-30s editado)",
    descEN: "Cinematic reel with AI actors, professional editing, color grading, music.",
    descES: "Reel cinematográfico con actores IA, edición profesional, color grading, música.",
  },
  {
    key: "spot",
    slug: "video-ia",
    icon: Video,
    image: "/services/ai-video.jpg",
    priceEN: "€997",
    priceES: "€997",
    traditionalEN: "€5,000-15,000",
    traditionalES: "€5.000-15.000",
    titleEN: "Video Spot (30-60s edited)",
    titleES: "Vídeo Spot (30-60s editado)",
    descEN: "Advertising spot with storyboard, multiple takes, voiceover and music.",
    descES: "Spot publicitario con storyboard, múltiples tomas, voiceover y música.",
  },
  {
    key: "model",
    slug: "modelos-ia",
    icon: User,
    image: "/services/ai-models.jpg",
    priceEN: "€797",
    priceES: "€797",
    traditionalEN: "€2,000-10,000/campaign",
    traditionalES: "€2.000-10.000/campaña",
    titleEN: "Exclusive AI Model",
    titleES: "Modelo IA Exclusivo",
    descEN: "Unique virtual person for your brand. Trained for perfect consistency. Unlimited use.",
    descES: "Persona virtual única para tu marca. Entrenada para consistencia perfecta. Uso ilimitado.",
  },
  {
    key: "campaign",
    slug: "estrategia-campana-ia",
    icon: Target,
    image: "/services/ai-strategy.jpg",
    priceEN: "€2,497",
    priceES: "€2.497",
    traditionalEN: "€15,000-50,000",
    traditionalES: "€15.000-50.000",
    titleEN: "Complete Campaign",
    titleES: "Campaña Completa",
    descEN: "Photos + video + strategy + art direction. Everything your brand needs in one package.",
    descES: "Fotos + vídeo + estrategia + dirección de arte. Todo lo que tu marca necesita en un pack.",
  },
  {
    key: "videoLong",
    slug: "video-ia",
    icon: Video,
    image: "/services/ai-video.jpg",
    priceEN: "€1,997",
    priceES: "€1.997",
    traditionalEN: "€10,000-30,000",
    traditionalES: "€10.000-30.000",
    titleEN: "Long Video (2-5 min)",
    titleES: "Vídeo Largo (2-5 min)",
    descEN: "Corporate video or YouTube content with multiple scenes, voiceover and editing.",
    descES: "Vídeo corporativo o contenido YouTube con múltiples escenas, voiceover y edición.",
  },
];

const sectorPacks = [
  {
    icon: Building2,
    priceEN: "€697/property",
    priceES: "€697/propiedad",
    titleEN: "Real Estate Pack",
    titleES: "Pack Inmobiliaria",
    badgeEN: "Save 90% vs traditional staging",
    badgeES: "Ahorra 90% vs staging tradicional",
    featuresEN: [
      "Virtual home staging (5 rooms)",
      "10 photos with people",
      "1 virtual renovation",
      "30s video tour",
      "Golden hour conversion",
    ],
    featuresES: [
      "Home staging virtual (5 estancias)",
      "10 fotos con personas",
      "1 reforma virtual",
      "Vídeo tour 30s",
      "Cambio a golden hour",
    ],
  },
  {
    icon: Shirt,
    priceEN: "€1,497/collection",
    priceES: "€1.497/colección",
    titleEN: "Fashion/Retail Pack",
    titleES: "Pack Moda/Retail",
    badgeEN: "Fashion shoot costs €5,000-15,000",
    badgeES: "Una sesión de moda cuesta €5.000-15.000",
    featuresEN: [
      "2 exclusive AI models",
      "20 lookbook photos",
      "3 reels (15s)",
      "E-commerce + social formats",
    ],
    featuresES: [
      "2 modelos IA exclusivos",
      "20 fotos lookbook",
      "3 reels (15s)",
      "Formatos ecommerce + redes",
    ],
  },
  {
    icon: Sparkles,
    priceEN: "€997/launch",
    priceES: "€997/lanzamiento",
    titleEN: "Beauty/Cosmetics Pack",
    titleES: "Pack Belleza/Cosmética",
    badgeEN: "Hiring an influencer: €3,000-10,000",
    badgeES: "Contratar influencer: €3.000-10.000",
    featuresEN: [
      "1 AI model (virtual influencer)",
      "15 beauty shots with product",
      "2 product reels",
      "UGC-style content",
    ],
    featuresES: [
      "1 modelo IA (influencer virtual)",
      "15 beauty shots con producto",
      "2 reels de producto",
      "Contenido estilo UGC",
    ],
  },
  {
    icon: UtensilsCrossed,
    priceEN: "€797",
    priceES: "€797",
    titleEN: "Restaurant/Food Pack",
    titleES: "Pack Restaurante/Food",
    badgeEN: "Food photography: €2,000-4,000",
    badgeES: "Food photography: €2.000-4.000",
    featuresEN: [
      "15 premium food photos",
      "Delivery app photos",
      "Complete visual menu",
      "1 reel (15s)",
    ],
    featuresES: [
      "15 fotos food premium",
      "Fotos para apps de delivery",
      "Menú visual completo",
      "1 reel (15s)",
    ],
  },
  {
    icon: Rocket,
    priceEN: "€1,297",
    priceES: "€1.297",
    titleEN: "Tech/Startup Pack",
    titleES: "Pack Tech/Startup",
    badgeEN: "Launch production: €8,000-20,000",
    badgeES: "Producción lanzamiento: €8.000-20.000",
    featuresEN: [
      "15 product + lifestyle photos",
      "2 product videos (15-30s)",
      "Corporate avatar",
      "Visual branding",
    ],
    featuresES: [
      "15 fotos producto + lifestyle",
      "2 vídeos de producto (15-30s)",
      "Avatar corporativo",
      "Branding visual",
    ],
  },
];

const monthlyPlans = [
  {
    key: "growth",
    badge: true,
    priceEN: "€1,497",
    priceES: "€1.497",
    titleEN: "Growth",
    titleES: "Growth",
    featuresEN: [
      "30 editorial images/month",
      "4 reels/month",
      "2 social channels (20 posts/month)",
      "1 AI model included",
      "Monthly content strategy",
      "Monthly reporting",
      "3 revisions per delivery",
      "3-5 day delivery",
    ],
    featuresES: [
      "30 imágenes editoriales/mes",
      "4 reels/mes",
      "Gestión de 2 redes (20 posts/mes)",
      "1 modelo IA incluido",
      "Estrategia de contenido mensual",
      "Reporting mensual",
      "3 revisiones por entrega",
      "Entrega en 3-5 días",
    ],
  },
  {
    key: "scale",
    badge: false,
    priceEN: "€2,997",
    priceES: "€2.997",
    titleEN: "Scale",
    titleES: "Scale",
    featuresEN: [
      "80 editorial images/month",
      "8 reels + 2 long videos",
      "4 social channels (40 posts/month)",
      "3 AI models included",
      "Strategy with KPIs",
      "Unlimited revisions",
      "48h delivery",
      "Dedicated manager",
    ],
    featuresES: [
      "80 imágenes editoriales/mes",
      "8 reels + 2 vídeos largos",
      "Gestión de 4 redes (40 posts/mes)",
      "3 modelos IA incluidos",
      "Estrategia con KPIs",
      "Revisiones ilimitadas",
      "Entrega en 48h",
      "Manager dedicado",
    ],
  },
];

const comparisonData = {
  en: [
    { service: "Photo session (10 photos)", traditional: "€3,000-8,000", neurobulls: "€397", savings: "Up to 95%" },
    { service: "Ad video (30-60s)", traditional: "€5,000-15,000", neurobulls: "€597-997", savings: "Up to 93%" },
    { service: "Campaign model", traditional: "€2,000-10,000", neurobulls: "€797 (unlimited use)", savings: "Up to 92%" },
    { service: "Real estate staging", traditional: "€3,000-8,000", neurobulls: "€697", savings: "Up to 91%" },
    { service: "Complete campaign", traditional: "€15,000-50,000", neurobulls: "€2,497", savings: "Up to 95%" },
  ],
  es: [
    { service: "Sesión fotográfica (10 fotos)", traditional: "€3.000-8.000", neurobulls: "€397", savings: "Hasta 95%" },
    { service: "Vídeo publicitario (30-60s)", traditional: "€5.000-15.000", neurobulls: "€597-997", savings: "Hasta 93%" },
    { service: "Modelo para campaña", traditional: "€2.000-10.000", neurobulls: "€797 (uso ilimitado)", savings: "Hasta 92%" },
    { service: "Staging inmobiliario", traditional: "€3.000-8.000", neurobulls: "€697", savings: "Hasta 91%" },
    { service: "Campaña completa", traditional: "€15.000-50.000", neurobulls: "€2.497", savings: "Hasta 95%" },
  ],
};

const guarantees = {
  en: [
    {
      icon: ShieldCheck,
      title: "Satisfaction guaranteed",
      desc: "Not happy? We redo it at no extra cost.",
    },
    {
      icon: Gift,
      title: "Try before you pay",
      desc: "Request a free sample image to see our quality.",
    },
    {
      icon: Unlock,
      title: "No lock-in",
      desc: "Project services: pay per project. Monthly plans: 3-month minimum.",
    },
  ],
  es: [
    {
      icon: ShieldCheck,
      title: "Satisfacción garantizada",
      desc: "¿No estás satisfecho? Lo rehacemos sin coste adicional.",
    },
    {
      icon: Gift,
      title: "Prueba antes de pagar",
      desc: "Solicita una imagen de prueba gratuita para ver nuestra calidad.",
    },
    {
      icon: Unlock,
      title: "Sin permanencia",
      desc: "Servicios por proyecto: pago por proyecto. Planes mensuales: 3 meses mínimo.",
    },
  ],
};

const faqItems = {
  en: [
    {
      q: "Do the images look real?",
      a: "Our images go through a 4-step refinement pipeline including pore-level skin texture, facial restoration, and professional upscaling. The result is indistinguishable from a real photograph. Our golden rule: if it looks AI, it doesn't leave our studio.",
    },
    {
      q: "How long does delivery take?",
      a: "48h for Scale plans, 3-5 days for Growth. Individual services: 3-5 business days.",
    },
    {
      q: "Can I use the images commercially?",
      a: "Yes, all content is your exclusive property with full commercial license.",
    },
    {
      q: "How does a custom AI model work?",
      a: "We create a unique virtual person for your brand, AI-trained for perfect consistency. Same face in any scenario, pose or outfit. Like having an exclusive model that works 24/7.",
    },
    {
      q: "What if I don't like the result?",
      a: "Each delivery includes revisions (3 to unlimited depending on plan). Every image passes our automated quality control before delivery.",
    },
    {
      q: "Can I cancel my plan?",
      a: "Monthly plans have a 3-month minimum commitment. After that, cancel anytime. Individual services are per-project with no commitment.",
    },
  ],
  es: [
    {
      q: "¿Las imágenes parecen reales?",
      a: "Nuestras imágenes pasan por un pipeline de refinamiento de 4 pasos que incluye textura de piel a nivel de poro, restauración facial y escalado profesional. El resultado es indistinguible de una fotografía real. Nuestra regla de oro: si parece IA, no sale de nuestro estudio.",
    },
    {
      q: "¿Cuánto tarda la entrega?",
      a: "48h para el plan Scale, 3-5 días para Growth. Servicios individuales: 3-5 días laborables.",
    },
    {
      q: "¿Puedo usar las imágenes comercialmente?",
      a: "Sí, todo el contenido es de tu propiedad exclusiva con licencia comercial completa.",
    },
    {
      q: "¿Cómo funciona un modelo de IA personalizado?",
      a: "Creamos una persona virtual única para tu marca, entrenada con IA para una consistencia perfecta. La misma cara en cualquier escenario, pose o atuendo. Como tener una modelo exclusiva que trabaja 24/7.",
    },
    {
      q: "¿Y si no me gusta el resultado?",
      a: "Cada entrega incluye revisiones (de 3 a ilimitadas según el plan). Cada imagen pasa nuestro control de calidad automatizado antes de la entrega.",
    },
    {
      q: "¿Puedo cancelar mi plan?",
      a: "Los planes mensuales tienen un compromiso mínimo de 3 meses. Después, cancela cuando quieras. Los servicios individuales son por proyecto sin compromiso.",
    },
  ],
};

export default function ServicesPage() {
  const locale = useLocale();
  const isES = locale === "es";
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = isES ? faqItems.es : faqItems.en;
  const comparison = isES ? comparisonData.es : comparisonData.en;
  const guarantee = isES ? guarantees.es : guarantees.en;

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* ─── Section 1: Hero ─── */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
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
              {isES
                ? "Producción Visual Premium con IA"
                : "Premium Visual Production with AI"}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              {isES
                ? "La calidad de una agencia de millones, accesible para cualquier marca."
                : "The quality of a million-dollar agency, accessible for any brand."}
            </motion.p>
          </motion.div>
        </section>

        {/* ─── Section 2: Individual Services (By Project) ─── */}
        <section className="py-24 lg:py-32 px-6">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  {isES ? "Servicios por Proyecto" : "Services by Project"}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  {isES
                    ? "Contrátanos para lo que necesites. Sin suscripciones. Sin compromisos."
                    : "Hire us for what you need. No subscriptions. No commitments."}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectServices.map((service, i) => (
                <ScrollReveal key={service.key} delay={i * 0.08}>
                  <Card className="group border-border bg-card transition-all duration-300 hover:border-nb-red hover:-translate-y-1 h-full overflow-hidden flex flex-col">
                    <div className="relative w-full aspect-[16/9] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={isES ? service.titleES : service.titleEN}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    </div>
                    <CardContent className="p-6 flex flex-col flex-1">
                      <p className="text-3xl font-bold text-nb-gold">
                        {isES ? service.priceES : service.priceEN}
                      </p>
                      <h3 className="text-lg font-bold mt-3">
                        {isES ? service.titleES : service.titleEN}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 flex-1">
                        {isES ? service.descES : service.descEN}
                      </p>
                      <div className="mt-6">
                        <Link href="/contact">
                          <Button className="w-full bg-nb-red hover:bg-nb-red-hover text-white">
                            {isES ? "Solicitar Presupuesto" : "Request Quote"}
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Section 3: Sector Packs ─── */}
        <section className="py-24 lg:py-32 px-6 bg-muted/30">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  {isES
                    ? "Soluciones a Medida para tu Sector"
                    : "Solutions for Your Industry"}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  {isES
                    ? "Packs diseñados específicamente para las necesidades de tu industria."
                    : "Packs designed specifically for your industry's needs."}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectorPacks.map((pack, i) => (
                <ScrollReveal key={pack.titleEN} delay={i * 0.08}>
                  <Card className="border-border bg-card h-full flex flex-col transition-all duration-300 hover:border-nb-red hover:-translate-y-1">
                    <CardContent className="p-6 flex flex-col flex-1">
                      <pack.icon className="h-10 w-10 text-nb-gold mb-4" />
                      <h3 className="text-xl font-bold">
                        {isES ? pack.titleES : pack.titleEN}
                      </h3>
                      <p className="text-3xl font-bold text-nb-gold mt-2">
                        {isES ? pack.priceES : pack.priceEN}
                      </p>
                      <Badge
                        variant="secondary"
                        className="mt-3 w-fit text-xs"
                      >
                        {isES ? pack.badgeES : pack.badgeEN}
                      </Badge>
                      <ul className="space-y-2 mt-5 flex-1">
                        {(isES ? pack.featuresES : pack.featuresEN).map(
                          (feature, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-nb-gold shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">
                                {feature}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                      <div className="mt-6">
                        <Link href="/contact">
                          <Button className="w-full bg-nb-red hover:bg-nb-red-hover text-white">
                            {isES ? "Contratar" : "Get Started"}
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Section 4: Monthly Plans ─── */}
        <section className="py-24 lg:py-32 px-6">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  {isES ? "Planes Mensuales" : "Monthly Plans"}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  {isES
                    ? "Para marcas que necesitan contenido visual constante. Compromiso mínimo 3 meses."
                    : "For brands that need constant visual content. Minimum 3 months."}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {monthlyPlans.map((plan, i) => (
                <ScrollReveal key={plan.key} delay={i * 0.1}>
                  <Card
                    className={`relative rounded-xl h-full flex flex-col ${
                      plan.badge
                        ? "border-nb-red border-2 shadow-[0_0_30px_rgba(227,24,55,0.15)] bg-gradient-to-b from-nb-red/5 via-card to-card"
                        : "border-border bg-card"
                    }`}
                  >
                    <CardContent className="p-6 flex flex-col flex-1">
                      {plan.badge && (
                        <Badge className="bg-nb-red text-white border-0 px-3 py-0.5 text-xs font-semibold mb-3 w-fit">
                          {isES ? "Más Popular" : "Most Popular"}
                        </Badge>
                      )}
                      <h3 className="text-xl font-bold">
                        {isES ? plan.titleES : plan.titleEN}
                      </h3>
                      <div className="mt-4 mb-6">
                        <span className="text-5xl font-bold text-nb-gold">
                          {isES ? plan.priceES : plan.priceEN}
                        </span>
                        <span className="text-sm text-muted-foreground ml-1">
                          /{isES ? "mes" : "month"}
                        </span>
                      </div>
                      <ul className="space-y-3 flex-1">
                        {(isES ? plan.featuresES : plan.featuresEN).map(
                          (feature, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <Check className="h-4 w-4 text-nb-gold shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">
                                {feature}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                      <div className="mt-8">
                        <Link href="/contact">
                          <Button className="w-full bg-nb-red hover:bg-nb-red-hover text-white">
                            {isES ? "Empezar" : "Get Started"}
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="text-center mt-10">
                <p className="text-muted-foreground mb-4">
                  {isES
                    ? "¿Necesitas más? Contacta con nosotros para un plan personalizado."
                    : "Need more? Contact us for a custom plan."}
                </p>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-nb-gold text-nb-gold hover:bg-nb-gold/10"
                  >
                    {isES ? "Contactar" : "Contact Us"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Section 5: Savings Comparison Table ─── */}
        <section className="py-24 lg:py-32 px-6 bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  {isES
                    ? "Cuánto Ahorras con NeuroBulls"
                    : "How Much You Save with NeuroBulls"}
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="border-border bg-card overflow-hidden">
                <CardContent className="p-0">
                  {/* Table header */}
                  <div className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-border bg-muted/30">
                    <div className="text-sm font-semibold text-muted-foreground">
                      {isES ? "Servicio" : "Service"}
                    </div>
                    <div className="text-sm font-semibold text-muted-foreground text-center">
                      {isES ? "Tradicional" : "Traditional"}
                    </div>
                    <div className="text-sm font-semibold text-nb-gold text-center">
                      NeuroBulls
                    </div>
                    <div className="text-sm font-semibold text-muted-foreground text-center">
                      {isES ? "Ahorro" : "Savings"}
                    </div>
                  </div>

                  {/* Rows */}
                  {comparison.map((row, i) => (
                    <div
                      key={i}
                      className={`grid grid-cols-4 gap-4 px-6 py-5 items-center ${
                        i < comparison.length - 1
                          ? "border-b border-border"
                          : ""
                      }`}
                    >
                      <div className="text-sm font-medium">{row.service}</div>
                      <div className="text-center">
                        <span className="text-sm text-muted-foreground/60">
                          {row.traditional}
                        </span>
                      </div>
                      <div className="text-center">
                        <span className="text-sm font-bold text-nb-gold">
                          {row.neurobulls}
                        </span>
                      </div>
                      <div className="text-center">
                        <span className="text-sm font-bold text-nb-gold">
                          {row.savings}
                        </span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Section 6: Trust / Guarantee ─── */}
        <section className="py-24 lg:py-32 px-6">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  {isES ? "Nuestra Garantía" : "Our Guarantee"}
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {guarantee.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <Card className="border-border bg-card h-full">
                    <CardContent className="p-6 text-center">
                      <item.icon className="h-10 w-10 text-nb-gold mx-auto mb-4" />
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Section 7: FAQ ─── */}
        <section className="py-24 lg:py-32 px-6 bg-muted/30">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  {isES ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <div className="rounded-xl border border-border bg-card overflow-hidden">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                    >
                      <span className="text-sm sm:text-base font-semibold">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                          openFaq === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-5">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Section 8: CTA ─── */}
        <section className="relative py-32 lg:py-40 px-6">
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-nb-red/10 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-1/3 -z-10 h-[600px] w-[600px] rounded-full bg-nb-red/5 blur-[160px]" />
          <div className="absolute top-1/4 right-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-nb-gold/5 blur-[100px]" />

          <div className="mx-auto max-w-4xl text-center">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
                {isES
                  ? "Prueba nuestra calidad gratis"
                  : "Try our quality for free"}
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                {isES
                  ? "Solicita una imagen de prueba gratuita y sin compromiso."
                  : "Request a free sample image with no commitment."}
              </p>
              <div className="mt-10">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-nb-red hover:bg-nb-red-hover text-white px-10 py-6 text-lg"
                  >
                    {isES ? "Solicitar Imagen Gratuita" : "Request Free Image"}
                  </Button>
                </Link>
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
