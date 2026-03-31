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
  Phone,
  Brain,
  Workflow,
  Package,
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

/* ─── Visual Production Tiers ─── */
const visualTiers = [
  {
    key: "starter",
    icon: Camera,
    badge: null,
    featuresES: [
      "5 fotos profesionales 4K",
      "Cualquier sector (comida, moda, inmuebles, producto)",
      "Entrega en 48 horas",
      "Formatos web + redes + apps",
      "Derechos comerciales ilimitados",
      "1 revisión incluida",
      "Garantía de satisfacción",
    ],
    featuresEN: [
      "5 professional 4K photos",
      "Any sector (food, fashion, real estate, product)",
      "48-hour delivery",
      "Web + social + apps formats",
      "Unlimited commercial rights",
      "1 revision included",
      "Satisfaction guarantee",
    ],
    titleES: "Esencial",
    titleEN: "Essential",
    buttonES: "Solicitar Presupuesto",
    buttonEN: "Request Quote",
  },
  {
    key: "pro",
    icon: Target,
    badge: { es: "Más Popular", en: "Most Popular" },
    featuresES: [
      "15 fotos profesionales 4K",
      "1 video reel de 15s editado",
      "Modelo IA exclusivo si se necesita",
      "Entrega en 5 días",
      "Todos los formatos",
      "3 revisiones incluidas",
    ],
    featuresEN: [
      "15 professional 4K photos",
      "1 edited 15-second video reel",
      "Exclusive AI model if needed",
      "5-day delivery",
      "All formats",
      "3 revisions included",
    ],
    titleES: "Profesional",
    titleEN: "Professional",
    buttonES: "Solicitar Presupuesto",
    buttonEN: "Request Quote",
  },
  {
    key: "premium",
    icon: Sparkles,
    badge: null,
    featuresES: [
      "30 fotos profesionales 4K",
      "3 videos reel editados",
      "Modelo IA exclusivo para tu marca",
      "Dirección creativa y estrategia",
      "Entrega en 7 días",
      "5 revisiones incluidas",
    ],
    featuresEN: [
      "30 professional 4K photos",
      "3 edited video reels",
      "Exclusive AI model for your brand",
      "Creative direction and strategy",
      "7-day delivery",
      "5 revisions included",
    ],
    titleES: "Premium",
    titleEN: "Premium",
    buttonES: "Solicitar Presupuesto",
    buttonEN: "Request Quote",
  },
];

/* ─── Automation & AI Services ─── */
const automationServices = [
  {
    key: "voice",
    icon: Phone,
    featuresES: [
      "Atiende las llamadas de tu negocio 24/7",
      "Voz humana natural, indistinguible de una persona real",
      "Gestiona reservas, citas, consultas e información",
      "Transfiere a un humano cuando la situación lo requiere",
      "Multiidioma: español, inglés y más",
      "Configuración completa en 7 días",
      "Mantenimiento, soporte y optimización incluidos",
      "Coste de API de voz a cargo del cliente (~15-30€/mes según volumen)",
    ],
    featuresEN: [
      "Answers your business calls 24/7",
      "Natural human voice, indistinguishable from a real person",
      "Manages bookings, appointments, inquiries and information",
      "Transfers to a human when needed",
      "Multilingual: Spanish, English and more",
      "Full setup in 7 days",
      "Maintenance, support and optimization included",
      "Voice API cost on client's account (~€15-30/month depending on volume)",
    ],
    titleES: "Asistente de Voz IA",
    titleEN: "AI Voice Assistant",
    buttonES: "Solicitar Presupuesto",
    buttonEN: "Request Quote",
  },
  {
    key: "agent",
    icon: Brain,
    featuresES: [
      "Agente de IA que conoce TODO sobre tu negocio",
      "Entrenado con tus documentos, catálogos, precios y políticas",
      "Responde a clientes por WhatsApp, email o web con información precisa",
      "Gestiona leads, envía presupuestos y hace seguimiento automático",
      "Conectado a tu CRM, calendario y herramientas",
      "Aprende y mejora con cada interacción",
      "Configuración completa en 10 días",
      "Mantenimiento, soporte y optimización incluidos",
      "Coste de APIs de IA a cargo del cliente (~20-50€/mes según uso)",
    ],
    featuresEN: [
      "AI agent that knows EVERYTHING about your business",
      "Trained with your documents, catalogs, prices and policies",
      "Responds to clients via WhatsApp, email or web with accurate info",
      "Manages leads, sends quotes and follows up automatically",
      "Connected to your CRM, calendar and tools",
      "Learns and improves with every interaction",
      "Full setup in 10 days",
      "Maintenance, support and optimization included",
      "AI API costs on client's account (~€20-50/month depending on usage)",
    ],
    titleES: "Agente IA con Memoria (RAG)",
    titleEN: "AI Agent with Memory (RAG)",
    buttonES: "Solicitar Presupuesto",
    buttonEN: "Request Quote",
  },
  {
    key: "automation",
    icon: Workflow,
    featuresES: [
      "Automatiza cualquier proceso repetitivo de tu negocio",
      "Ejemplos: respuestas automáticas, generación de facturas, sincronización de datos, publicación en redes, envío de informes",
      "Conecta todas tus herramientas entre sí",
      "Cada workflow diseñado a medida para tu caso",
      "Sin límite de ejecuciones",
      "Configuración en 3-5 días por workflow",
      "Mantenimiento y soporte incluidos",
      "Infraestructura alojada en nuestros servidores",
    ],
    featuresEN: [
      "Automate any repetitive business process",
      "Examples: auto-replies, invoice generation, data sync, social media posting, report sending",
      "Connect all your tools together",
      "Each workflow custom-designed for your use case",
      "No execution limits",
      "Setup in 3-5 days per workflow",
      "Maintenance and support included",
      "Infrastructure hosted on our servers",
    ],
    titleES: "Automatización de Procesos",
    titleEN: "Process Automation",
    buttonES: "Solicitar Presupuesto",
    buttonEN: "Request Quote",
  },
];

/* ─── Combined Packs ─── */
const combinedPacks = [
  {
    key: "negocio",
    badgeES: "Más Completo",
    badgeEN: "Most Complete",
    titleES: "Pack Negocio",
    titleEN: "Business Pack",
    descES: "Visual Profesional + Voz IA en un solo pack",
    descEN: "Professional Visual + AI Voice in one pack",
    includesES: [
      "Visual Profesional (15 fotos + reel + modelo IA)",
      "Asistente de Voz IA 24/7",
      "Todo configurado en 10 días",
      "Mantenimiento y soporte incluidos",
    ],
    includesEN: [
      "Professional Visual (15 photos + reel + AI model)",
      "AI Voice Assistant 24/7",
      "Everything set up in 10 days",
      "Maintenance and support included",
    ],
    buttonES: "Solicitar Presupuesto",
    buttonEN: "Request Quote",
  },
  {
    key: "total",
    badgeES: "Máximo Valor",
    badgeEN: "Best Value",
    titleES: "Pack Total",
    titleEN: "Total Pack",
    descES: "Visual Premium + Voz IA + Agente IA + Automatización",
    descEN: "Visual Premium + AI Voice + AI Agent + Automation",
    includesES: [
      "Visual Premium (30 fotos + 3 reels + modelo IA + estrategia)",
      "Asistente de Voz IA 24/7",
      "Agente IA con Memoria (RAG)",
      "2 workflows de automatización",
      "Todo configurado en 14 días",
      "Mantenimiento y soporte incluidos",
    ],
    includesEN: [
      "Visual Premium (30 photos + 3 reels + AI model + strategy)",
      "AI Voice Assistant 24/7",
      "AI Agent with Memory (RAG)",
      "2 automation workflows",
      "Everything set up in 14 days",
      "Maintenance and support included",
    ],
    buttonES: "Solicitar Presupuesto",
    buttonEN: "Request Quote",
  },
];

/* ─── Comparison Data (Feature-based) ─── */
const comparisonRowKeys = ["timeline", "cost", "quality", "availability", "revisions", "scalability", "automation", "agents"] as const;

const comparisonData = {
  es: {
    diy: {
      timeline: "Semanas",
      cost: "Tu tiempo",
      quality: "Amateur",
      availability: "Tu horario",
      revisions: "—",
      scalability: "Imposible",
      automation: "No",
      agents: "No",
    },
    traditional: {
      timeline: "2-4 semanas",
      cost: "Miles de €",
      quality: "Profesional",
      availability: "Su agenda",
      revisions: "Limitadas y caras",
      scalability: "Lenta y cara",
      automation: "No",
      agents: "No",
    },
    neurobulls: {
      timeline: "48h - 7 días",
      cost: "Presupuesto a medida",
      quality: "Profesional",
      availability: "24/7",
      revisions: "Incluidas",
      scalability: "Inmediata",
      automation: "Incluida",
      agents: "Con memoria (RAG)",
    },
  },
  en: {
    diy: {
      timeline: "Weeks",
      cost: "Your time",
      quality: "Amateur",
      availability: "Your schedule",
      revisions: "—",
      scalability: "Impossible",
      automation: "No",
      agents: "No",
    },
    traditional: {
      timeline: "2-4 weeks",
      cost: "Thousands of €",
      quality: "Professional",
      availability: "Their schedule",
      revisions: "Limited & expensive",
      scalability: "Slow & expensive",
      automation: "No",
      agents: "No",
    },
    neurobulls: {
      timeline: "48h - 7 days",
      cost: "Custom quote",
      quality: "Professional",
      availability: "24/7",
      revisions: "Included",
      scalability: "Instant",
      automation: "Included",
      agents: "With memory (RAG)",
    },
  },
};

const comparisonRowLabels = {
  es: {
    timeline: "Plazo",
    cost: "Inversión",
    quality: "Calidad",
    availability: "Disponibilidad",
    revisions: "Revisiones",
    scalability: "Escalabilidad",
    automation: "Automatización",
    agents: "Agentes IA",
  },
  en: {
    timeline: "Timeline",
    cost: "Investment",
    quality: "Quality",
    availability: "Availability",
    revisions: "Revisions",
    scalability: "Scalability",
    automation: "Automation",
    agents: "AI Agents",
  },
};

/* ─── Guarantees ─── */
const guarantees = {
  en: [
    {
      icon: ShieldCheck,
      title: "Satisfaction guaranteed",
      desc: "If you're not satisfied with the result, we'll revise it until you are.",
    },
    {
      icon: Gift,
      title: "Try before you pay",
      desc: "Request a free sample image to see our quality.",
    },
    {
      icon: Unlock,
      title: "No commitment",
      desc: "Request a quote with no obligation. No fine print.",
    },
  ],
  es: [
    {
      icon: ShieldCheck,
      title: "Satisfacción garantizada",
      desc: "Si no estás satisfecho con el resultado, lo revisamos hasta que lo esté.",
    },
    {
      icon: Gift,
      title: "Prueba antes de pagar",
      desc: "Solicita una imagen de prueba gratuita para ver nuestra calidad.",
    },
    {
      icon: Unlock,
      title: "Sin compromiso",
      desc: "Solicita un presupuesto sin compromiso. Sin letra pequeña.",
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
      a: "Essential: 48 hours. Professional: 5 business days. Premium: 7 business days. Automation services: 3-10 days depending on complexity.",
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
      a: "Each delivery includes revisions (1 for Essential, 3 for Professional, 5 for Premium). Every image passes our automated quality control before delivery.",
    },
    {
      q: "Can I cancel my plan?",
      a: "Visual services are paid per project with no lock-in. Automation services have a minimum 3-month commitment to ensure proper setup and optimization.",
    },
    {
      q: "What is an AI agent with memory (RAG)?",
      a: "It's an artificial intelligence assistant specifically trained with your business information: catalogs, prices, policies, FAQs. When a client contacts you, the agent responds with accurate and up-to-date information, just like your best employee would. RAG means the agent queries your real documents with every response — it doesn't make things up.",
    },
    {
      q: "Does the voice assistant really sound human?",
      a: "Yes. We use cutting-edge voice technology that produces natural speech indistinguishable from a real person. Your clients won't notice the difference. Plus, the assistant can transfer the call to a human at any time if the situation requires it.",
    },
    {
      q: "What additional costs are there?",
      a: "Setup and monthly maintenance include all our work: design, programming, agent training, technical support and ongoing optimization. External API costs (like OpenAI or ElevenLabs) are on the client's own account. This is typically €15-50/month depending on usage volume. We help you set everything up.",
    },
    {
      q: "Can I combine visual and automation services?",
      a: "Yes. Our combined packs are the most efficient way to fully digitize your business. Contact us for a custom quote.",
    },
  ],
  es: [
    {
      q: "¿Las imágenes parecen reales?",
      a: "Nuestras imágenes pasan por un pipeline de refinamiento de 4 pasos que incluye textura de piel a nivel de poro, restauración facial y escalado profesional. El resultado es indistinguible de una fotografía real. Nuestra regla de oro: si parece IA, no sale de nuestro estudio.",
    },
    {
      q: "¿Cuánto tarda la entrega?",
      a: "Esencial: 48 horas. Profesional: 5 días laborables. Premium: 7 días laborables. Servicios de automatización: 3-10 días según complejidad.",
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
      a: "Cada entrega incluye revisiones (1 en Esencial, 3 en Profesional, 5 en Premium). Cada imagen pasa nuestro control de calidad automatizado antes de la entrega.",
    },
    {
      q: "¿Puedo cancelar mi plan?",
      a: "Los servicios visuales se pagan por proyecto, sin permanencia. Los servicios de automatización tienen un compromiso mínimo de 3 meses para garantizar una configuración y optimización adecuadas.",
    },
    {
      q: "¿Qué es un agente IA con memoria (RAG)?",
      a: "Es un asistente de inteligencia artificial entrenado específicamente con la información de tu negocio: catálogos, precios, políticas, preguntas frecuentes. Cuando un cliente te contacta, el agente responde con información precisa y actualizada, como lo haría tu mejor empleado. RAG significa que el agente consulta tus documentos reales en cada respuesta, no inventa nada.",
    },
    {
      q: "¿El asistente de voz suena realmente humano?",
      a: "Sí. Utilizamos tecnología de voz de última generación que produce un habla natural e indistinguible de una persona real. Tus clientes no notarán la diferencia. Además, el asistente puede transferir la llamada a un humano en cualquier momento si la situación lo requiere.",
    },
    {
      q: "¿Qué costes adicionales hay?",
      a: "La configuración y el mantenimiento mensual incluyen todo nuestro trabajo: diseño, programación, entrenamiento del agente, soporte técnico y optimización continua. Los costes de APIs externas (como OpenAI o ElevenLabs) van a cargo del cliente, conectados a su propia cuenta. Esto suele ser entre 15€ y 50€ al mes dependiendo del volumen de uso. Te ayudamos a configurarlo todo.",
    },
    {
      q: "¿Puedo combinar servicios visuales con automatización?",
      a: "Sí. Nuestros packs combinados son la forma más eficiente de digitalizar tu negocio completo. Contáctanos para un presupuesto a medida.",
    },
  ],
};

export default function ServicesPage() {
  const locale = useLocale();
  const isES = locale === "es";
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = isES ? faqItems.es : faqItems.en;
  const guarantee = isES ? guarantees.es : guarantees.en;
  const comp = isES ? comparisonData.es : comparisonData.en;
  const labels = isES ? comparisonRowLabels.es : comparisonRowLabels.en;

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
                ? "Producción visual premium y automatización inteligente. La tecnología de las grandes empresas, accesible para ti."
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
                  {isES ? "Producción Visual" : "Visual Production"}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  {isES
                    ? "Contenido que vende. Fotos y videos indistinguibles de la realidad."
                    : "Content that sells. Photos and videos indistinguishable from reality."}
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

            <div className="mt-10 text-center">
              <p className="text-sm text-muted-foreground">
                {isES
                  ? "¿Necesitas videos largos, campañas especiales o volumen mensual?"
                  : "Need long videos, special campaigns or monthly volume?"}{" "}
                <Link href="/contact" className="text-nb-gold hover:underline">
                  {isES ? "Contacta para presupuesto a medida." : "Contact us for a custom quote."}
                </Link>
              </p>
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
                    ? "Automatización e Inteligencia Artificial"
                    : "Automation & Artificial Intelligence"}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  {isES
                    ? "Tu negocio funcionando solo. 24 horas, 7 días, sin contratar personal."
                    : "Your business running itself. 24/7, without hiring staff."}
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

            <div className="mt-10 text-center">
              <p className="text-sm text-muted-foreground">
                {isES
                  ? "Cada automatización se diseña a medida para tu negocio. Solicita un presupuesto sin compromiso."
                  : "Each automation is custom-designed for your business. Request a quote with no obligation."}
              </p>
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
                    ? "Visual + Automatización. El combo que transforma tu negocio."
                    : "Visual + Automation. The combo that transforms your business."}
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
                      <p className="text-sm text-muted-foreground mt-2 mb-4">
                        {isES ? pack.descES : pack.descEN}
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
                            {isES ? pack.buttonES : pack.buttonEN}
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

        {/* ─── Section 5: Why NeuroBulls? (Feature Comparison) ─── */}
        <section className="py-24 lg:py-32 px-6 bg-muted/30">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  {isES ? "¿Por qué NeuroBulls?" : "Why NeuroBulls?"}
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
                      {isES ? "Hacerlo tú" : "Do it yourself"}
                    </div>
                    <div className="text-sm font-semibold text-muted-foreground text-center">
                      {isES ? "Agencia tradicional" : "Traditional agency"}
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
                        {labels[key]}
                      </div>
                      <div className="text-center text-sm text-muted-foreground/60">
                        {comp.diy[key]}
                      </div>
                      <div className="text-center text-sm text-muted-foreground/60">
                        {comp.traditional[key]}
                      </div>
                      <div className="text-center">
                        <span className="text-sm font-semibold text-nb-gold">
                          {comp.neurobulls[key]}
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
                  ? "¿Listo para transformar tu negocio?"
                  : "Ready to transform your business?"}
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                {isES
                  ? "Cuéntanos qué necesitas y te preparamos un presupuesto a medida."
                  : "Tell us what you need and we'll prepare a custom quote."}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-nb-red hover:bg-nb-red-hover text-white px-10 py-6 text-lg"
                  >
                    {isES ? "Solicitar Presupuesto" : "Request Quote"}
                  </Button>
                </Link>
                <Link href="/work">
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-10 py-6 text-lg"
                  >
                    {isES ? "Ver Portfolio" : "View Portfolio"}
                    <ArrowRight className="ml-2 h-4 w-4" />
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
