"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import {
  Camera,
  Target,
  Sparkles,
  Check,
  ShieldCheck,
  Gift,
  Unlock,
  ChevronDown,
  MessageSquare,
  Phone,
  Bot,
  Package,
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

/* ─── Visual Production Tiers ─── */
const visualTiers = [
  {
    key: "starter",
    icon: Camera,
    priceES: "300",
    priceEN: "300",
    badge: null,
    traditionalES: "800-2.000€",
    traditionalEN: "€800-2,000",
    featuresES: [
      "5 fotos profesionales de tu negocio",
      "Calidad editorial indistinguible de fotografía real",
      "Entrega en 48 horas",
      "Formatos para web, redes sociales y apps",
      "Derechos comerciales ilimitados",
      "Garantía de satisfacción total",
    ],
    featuresEN: [
      "5 professional photos of your business",
      "Editorial quality indistinguishable from real photography",
      "48-hour delivery",
      "Formats for web, social media and apps",
      "Unlimited commercial rights",
      "Full satisfaction guarantee",
    ],
    titleES: "Starter",
    titleEN: "Starter",
    buttonES: "Contratar",
    buttonEN: "Get Started",
  },
  {
    key: "pro",
    icon: Target,
    priceES: "900",
    priceEN: "900",
    badge: { es: "Mas Popular", en: "Most Popular" },
    traditionalES: "2.000-5.000€",
    traditionalEN: "€2,000-5,000",
    featuresES: [
      "15 fotos profesionales",
      "1 video reel de 15 segundos editado",
      "Modelo IA exclusivo si se necesita",
      "Entrega en 5 dias laborables",
      "Formatos para TODAS las plataformas",
      "3 revisiones incluidas",
    ],
    featuresEN: [
      "15 professional photos",
      "1 edited 15-second video reel",
      "Exclusive AI model if needed",
      "5 business day delivery",
      "Formats for ALL platforms",
      "3 revisions included",
    ],
    titleES: "Pro",
    titleEN: "Pro",
    buttonES: "Contratar",
    buttonEN: "Get Started",
  },
  {
    key: "premium",
    icon: Sparkles,
    priceES: "1.800",
    priceEN: "1,800",
    badge: null,
    traditionalES: "5.000-15.000€",
    traditionalEN: "€5,000-15,000",
    featuresES: [
      "30 fotos profesionales",
      "3 reels editados",
      "Modelo IA exclusivo para tu marca",
      "Estrategia de contenido personalizada",
      "Entrega en 7 dias laborables",
      "Revisiones ilimitadas",
      "Manager dedicado",
    ],
    featuresEN: [
      "30 professional photos",
      "3 edited reels",
      "Exclusive AI model for your brand",
      "Personalized content strategy",
      "7 business day delivery",
      "Unlimited revisions",
      "Dedicated manager",
    ],
    titleES: "Premium",
    titleEN: "Premium",
    buttonES: "Contratar",
    buttonEN: "Get Started",
  },
];

/* ─── Automation & AI Services ─── */
const automationServices = [
  {
    key: "whatsapp",
    icon: MessageSquare,
    priceES: "500€ + 100€/mes",
    priceEN: "€500 + €100/mo",
    featuresES: [
      "Chatbot que responde a tus clientes 24/7",
      "Responde preguntas frecuentes automaticamente",
      "Toma pedidos y reservas",
      "Integrado con WhatsApp Business o tu web",
      "Entrenado con la informacion de tu negocio",
      "Setup en 5 dias",
    ],
    featuresEN: [
      "Chatbot that responds to your clients 24/7",
      "Answers frequently asked questions automatically",
      "Takes orders and reservations",
      "Integrated with WhatsApp Business or your website",
      "Trained with your business information",
      "Setup in 5 days",
    ],
    titleES: "Asistente WhatsApp/Web",
    titleEN: "WhatsApp/Web Assistant",
    buttonES: "Solicitar",
    buttonEN: "Request",
  },
  {
    key: "voice",
    icon: Phone,
    priceES: "750€ + 150€/mes",
    priceEN: "€750 + €150/mo",
    featuresES: [
      "Atiende llamadas telefonicas automaticamente",
      "Voz natural indistinguible de una persona",
      "Gestiona reservas, citas y consultas",
      "Disponible 24/7, nunca se cansa",
      "Multiidioma (espanol, ingles, frances...)",
      "Setup en 7 dias",
    ],
    featuresEN: [
      "Answers phone calls automatically",
      "Natural voice indistinguishable from a real person",
      "Manages reservations, appointments and inquiries",
      "Available 24/7, never gets tired",
      "Multilingual (Spanish, English, French...)",
      "Setup in 7 days",
    ],
    titleES: "Asistente de Voz IA",
    titleEN: "AI Voice Assistant",
    buttonES: "Solicitar",
    buttonEN: "Request",
  },
  {
    key: "agent",
    icon: Bot,
    priceES: "Desde 1.500€",
    priceEN: "From €1,500",
    featuresES: [
      "Agente de IA entrenado para tu negocio",
      "Conectado a tus herramientas (CRM, email, calendario)",
      "Automatiza tareas repetitivas",
      "Genera informes y analisis",
      "Escala sin contratar personal",
      "Solucion a medida",
    ],
    featuresEN: [
      "AI agent trained for your business",
      "Connected to your tools (CRM, email, calendar)",
      "Automates repetitive tasks",
      "Generates reports and analytics",
      "Scale without hiring staff",
      "Custom solution",
    ],
    titleES: "Agente IA Personalizado",
    titleEN: "Custom AI Agent",
    buttonES: "Contactar",
    buttonEN: "Contact Us",
  },
];

/* ─── Combined Packs ─── */
const combinedPacks = [
  {
    key: "negocio",
    priceES: "1.200€ + 100€/mes",
    priceEN: "€1,200 + €100/mo",
    badgeES: "Ahorra 20%",
    badgeEN: "Save 20%",
    titleES: "Pack Negocio",
    titleEN: "Business Pack",
    separatelyES: "1.400€",
    separatelyEN: "€1,400",
    includesES: [
      "Pro Visual (15 fotos + 1 reel)",
      "Asistente WhatsApp/Web",
      "Setup completo en 7 dias",
    ],
    includesEN: [
      "Pro Visual (15 photos + 1 reel)",
      "WhatsApp/Web Assistant",
      "Full setup in 7 days",
    ],
  },
  {
    key: "total",
    priceES: "2.500€ + 200€/mes",
    priceEN: "€2,500 + €200/mo",
    badgeES: "Maximo Valor",
    badgeEN: "Best Value",
    titleES: "Pack Total",
    titleEN: "Total Pack",
    separatelyES: "3.050€",
    separatelyEN: "€3,050",
    includesES: [
      "Premium Visual (30 fotos + 3 reels + modelo IA)",
      "Asistente WhatsApp/Web",
      "Asistente de Voz IA",
      "Setup completo en 10 dias",
    ],
    includesEN: [
      "Premium Visual (30 photos + 3 reels + AI model)",
      "WhatsApp/Web Assistant",
      "AI Voice Assistant",
      "Full setup in 10 days",
    ],
  },
];

/* ─── Comparison Data ─── */
const comparisonData = {
  en: [
    { service: "5 professional photos", traditional: "€800-2,000", neurobulls: "€300", savings: "Up to 85%" },
    { service: "15 photos + video", traditional: "€2,000-5,000", neurobulls: "€900", savings: "Up to 82%" },
    { service: "Full visual campaign", traditional: "€5,000-15,000", neurobulls: "€1,800", savings: "Up to 88%" },
    { service: "WhatsApp chatbot 24/7", traditional: "€3,000-8,000", neurobulls: "€500 + €100/mo", savings: "Up to 85%" },
    { service: "AI voice assistant", traditional: "€5,000-15,000", neurobulls: "€750 + €150/mo", savings: "Up to 85%" },
    { service: "Custom AI agent", traditional: "€10,000-30,000", neurobulls: "From €1,500", savings: "Up to 85%" },
  ],
  es: [
    { service: "5 fotos profesionales", traditional: "800-2.000€", neurobulls: "300€", savings: "Hasta 85%" },
    { service: "15 fotos + video", traditional: "2.000-5.000€", neurobulls: "900€", savings: "Hasta 82%" },
    { service: "Campana visual completa", traditional: "5.000-15.000€", neurobulls: "1.800€", savings: "Hasta 88%" },
    { service: "Chatbot WhatsApp 24/7", traditional: "3.000-8.000€", neurobulls: "500€ + 100€/mes", savings: "Hasta 85%" },
    { service: "Asistente de voz IA", traditional: "5.000-15.000€", neurobulls: "750€ + 150€/mes", savings: "Hasta 85%" },
    { service: "Agente IA personalizado", traditional: "10.000-30.000€", neurobulls: "Desde 1.500€", savings: "Hasta 85%" },
  ],
};

/* ─── Guarantees ─── */
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
      desc: "Project services: pay per project. Monthly plans: cancel anytime.",
    },
  ],
  es: [
    {
      icon: ShieldCheck,
      title: "Satisfaccion garantizada",
      desc: "No estas satisfecho? Lo rehacemos sin coste adicional.",
    },
    {
      icon: Gift,
      title: "Prueba antes de pagar",
      desc: "Solicita una imagen de prueba gratuita para ver nuestra calidad.",
    },
    {
      icon: Unlock,
      title: "Sin permanencia",
      desc: "Servicios por proyecto: pago por proyecto. Planes mensuales: cancela cuando quieras.",
    },
  ],
};

/* ─── FAQ ─── */
const faqItems = {
  en: [
    {
      q: "Do the images look real?",
      a: "Our images go through a 4-step refinement pipeline including pore-level skin texture, facial restoration, and professional upscaling. The result is indistinguishable from a real photograph. Our golden rule: if it looks AI, it doesn't leave our studio.",
    },
    {
      q: "How long does delivery take?",
      a: "Starter: 48 hours. Pro: 5 business days. Premium: 7 business days. Automation services: 5-7 days for setup.",
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
      a: "Each delivery includes revisions (3 for Pro, unlimited for Premium). Every image passes our automated quality control before delivery.",
    },
    {
      q: "Can I cancel my plan?",
      a: "Yes, you can cancel at any time. No lock-in. Individual services are paid per project.",
    },
    {
      q: "What can the WhatsApp assistant do?",
      a: "It answers frequently asked questions, takes orders and reservations, sends information about your services and products, and manages inquiries. All automatically, 24 hours a day. We train it with your specific business information.",
    },
    {
      q: "Does the voice assistant sound real?",
      a: "Yes. We use cutting-edge voice technology that produces natural speech indistinguishable from a real person. Your clients won't notice the difference.",
    },
    {
      q: "Can I combine visual and automation services?",
      a: "Yes. In fact, our combined packs offer a 20% discount over individual prices. It's the most efficient way to fully digitize your business.",
    },
  ],
  es: [
    {
      q: "Las imagenes parecen reales?",
      a: "Nuestras imagenes pasan por un pipeline de refinamiento de 4 pasos que incluye textura de piel a nivel de poro, restauracion facial y escalado profesional. El resultado es indistinguible de una fotografia real. Nuestra regla de oro: si parece IA, no sale de nuestro estudio.",
    },
    {
      q: "Cuanto tarda la entrega?",
      a: "Starter: 48 horas. Pro: 5 dias laborables. Premium: 7 dias laborables. Servicios de automatizacion: 5-7 dias para el setup.",
    },
    {
      q: "Puedo usar las imagenes comercialmente?",
      a: "Si, todo el contenido es de tu propiedad exclusiva con licencia comercial completa.",
    },
    {
      q: "Como funciona un modelo de IA personalizado?",
      a: "Creamos una persona virtual unica para tu marca, entrenada con IA para una consistencia perfecta. La misma cara en cualquier escenario, pose o atuendo. Como tener una modelo exclusiva que trabaja 24/7.",
    },
    {
      q: "Y si no me gusta el resultado?",
      a: "Cada entrega incluye revisiones (3 en Pro, ilimitadas en Premium). Cada imagen pasa nuestro control de calidad automatizado antes de la entrega.",
    },
    {
      q: "Puedo cancelar mi plan?",
      a: "Si, puedes cancelar en cualquier momento. Sin permanencia. Los servicios individuales se pagan por proyecto.",
    },
    {
      q: "Que puede hacer el asistente de WhatsApp?",
      a: "Responde preguntas frecuentes, toma pedidos y reservas, envia informacion sobre tus servicios y productos, y gestiona consultas. Todo automaticamente, 24 horas al dia. Lo entrenamos con la informacion especifica de tu negocio.",
    },
    {
      q: "El asistente de voz suena real?",
      a: "Si. Utilizamos tecnologia de voz de ultima generacion que produce un habla natural e indistinguible de una persona real. Tus clientes no notaran la diferencia.",
    },
    {
      q: "Puedo combinar servicios visuales con automatizacion?",
      a: "Si. De hecho, nuestros packs combinados ofrecen un 20% de descuento sobre el precio individual. Es la forma mas eficiente de digitalizar tu negocio completo.",
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
                ? "Todo lo que tu negocio necesita. En un solo sitio."
                : "Everything your business needs. In one place."}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              {isES
                ? "Produccion visual premium y automatizacion inteligente. La tecnologia de las grandes empresas, accesible para ti."
                : "Premium visual production and intelligent automation. Enterprise technology, accessible to you."}
            </motion.p>
          </motion.div>
        </section>

        {/* ─── Section 2: Visual Production ─── */}
        <section className="py-24 lg:py-32 px-6">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  {isES ? "Produccion Visual" : "Visual Production"}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  {isES
                    ? "Fotos y videos con IA indistinguibles de la realidad."
                    : "AI photos and videos indistinguishable from reality."}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {visualTiers.map((tier, i) => (
                <ScrollReveal key={tier.key} delay={i * 0.1}>
                  <Card
                    className={`relative rounded-xl h-full flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                      tier.badge
                        ? "border-nb-red border-2 shadow-[0_0_30px_rgba(227,24,55,0.15)] bg-gradient-to-b from-nb-red/5 via-card to-card"
                        : "border-border bg-card hover:border-nb-red"
                    }`}
                  >
                    <CardContent className="p-6 flex flex-col flex-1">
                      {tier.badge && (
                        <Badge className="bg-nb-red text-white border-0 px-3 py-0.5 text-xs font-semibold mb-3 w-fit">
                          {isES ? tier.badge.es : tier.badge.en}
                        </Badge>
                      )}
                      <tier.icon className="h-10 w-10 text-nb-gold mb-4" />
                      <h3 className="text-xl font-bold">
                        {isES ? tier.titleES : tier.titleEN}
                      </h3>
                      <div className="mt-3 mb-1">
                        <span className="text-4xl font-bold text-nb-gold">
                          &euro;{isES ? tier.priceES : tier.priceEN}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground/60 line-through mb-4">
                        {isES ? `Tradicional: ${tier.traditionalES}` : `Traditional: ${tier.traditionalEN}`}
                      </p>
                      <ul className="space-y-2 flex-1">
                        {(isES ? tier.featuresES : tier.featuresEN).map(
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
                            {isES ? tier.buttonES : tier.buttonEN}
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

        {/* ─── Section 3: Automation & AI ─── */}
        <section className="py-24 lg:py-32 px-6 bg-muted/30">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  {isES
                    ? "Automatizacion e Inteligencia Artificial"
                    : "Automation & Artificial Intelligence"}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  {isES
                    ? "Tu negocio funcionando en piloto automatico. 24 horas, 7 dias."
                    : "Your business on autopilot. 24/7."}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {automationServices.map((service, i) => (
                <ScrollReveal key={service.key} delay={i * 0.1}>
                  <Card className="border-border bg-card h-full flex flex-col transition-all duration-300 hover:border-nb-red hover:-translate-y-1">
                    <CardContent className="p-6 flex flex-col flex-1">
                      <service.icon className="h-10 w-10 text-nb-gold mb-4" />
                      <h3 className="text-xl font-bold">
                        {isES ? service.titleES : service.titleEN}
                      </h3>
                      <div className="mt-3 mb-4">
                        <span className="text-2xl font-bold text-nb-gold">
                          {isES ? service.priceES : service.priceEN}
                        </span>
                      </div>
                      <ul className="space-y-2 flex-1">
                        {(isES ? service.featuresES : service.featuresEN).map(
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
                            {isES ? service.buttonES : service.buttonEN}
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

        {/* ─── Section 4: Combined Packs ─── */}
        <section className="py-24 lg:py-32 px-6">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  {isES ? "Packs Combinados" : "Combined Packs"}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  {isES
                    ? "Visual + Automatizacion al mejor precio."
                    : "Visual + Automation at the best price."}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {combinedPacks.map((pack, i) => (
                <ScrollReveal key={pack.key} delay={i * 0.1}>
                  <Card className="border-nb-gold/30 bg-gradient-to-b from-nb-gold/5 via-card to-card h-full flex flex-col transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 flex flex-col flex-1">
                      <Badge className="bg-nb-gold text-black border-0 px-3 py-0.5 text-xs font-semibold mb-3 w-fit">
                        {isES ? pack.badgeES : pack.badgeEN}
                      </Badge>
                      <Package className="h-10 w-10 text-nb-gold mb-4" />
                      <h3 className="text-xl font-bold">
                        {isES ? pack.titleES : pack.titleEN}
                      </h3>
                      <div className="mt-3 mb-1">
                        <span className="text-2xl font-bold text-nb-gold">
                          {isES ? pack.priceES : pack.priceEN}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground/60 mb-4">
                        {isES
                          ? `Por separado: ${pack.separatelyES}`
                          : `Separately: ${pack.separatelyEN}`}
                      </p>
                      <ul className="space-y-2 flex-1">
                        {(isES ? pack.includesES : pack.includesEN).map(
                          (item, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-nb-gold shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">
                                {item}
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

        {/* ─── Section 5: Savings Comparison Table ─── */}
        <section className="py-24 lg:py-32 px-6 bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  {isES
                    ? "Cuanto Ahorras con NeuroBulls"
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
                  {isES ? "Nuestra Garantia" : "Our Guarantee"}
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
