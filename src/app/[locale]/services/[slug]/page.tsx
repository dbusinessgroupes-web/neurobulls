"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Check,
  FileText,
  Sparkles,
  RefreshCw,
  Rocket,
  ChevronDown,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CookieBanner } from "@/components/cookie-banner";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

const services: Record<
  string,
  {
    titleEN: string;
    titleES: string;
    priceEN: string;
    priceES: string;
    image: string;
    descriptionEN: string;
    descriptionES: string;
    includesEN: string[];
    includesES: string[];
    useCasesEN: string[];
    useCasesES: string[];
    traditionalCostEN: string;
    traditionalCostES: string;
    savingsEN: string;
    savingsES: string;
    faqEN: { q: string; a: string }[];
    faqES: { q: string; a: string }[];
  }
> = {
  "fotografia-ia": {
    titleEN: "AI Editorial Photography",
    titleES: "Fotografia IA Editorial",
    priceEN: "From \u20ac197",
    priceES: "Desde \u20ac197",
    image: "/services/ai-photography.jpg",
    descriptionEN:
      "Complete photo sessions without cameras or studios. Our AI models are indistinguishable from real people. We generate editorial images with the quality of Vogue, Harper\u2019s Bazaar or GQ. Each image goes through our refinement pipeline: pore-level skin texture, cinematic lighting, professional color grading and 4K upscaling.",
    descriptionES:
      "Sesiones fotogr\u00e1ficas completas sin c\u00e1maras ni estudios. Nuestros modelos IA son indistinguibles de personas reales. Generamos im\u00e1genes editoriales con la calidad de Vogue, Harper\u2019s Bazaar o GQ. Cada imagen pasa por nuestro pipeline de refinamiento: textura de piel a nivel de poro, iluminaci\u00f3n cinematogr\u00e1fica, color grading profesional y upscaling a 4K.",
    includesEN: [
      "10 hyperrealistic images in 4K",
      "Creative direction",
      "2 revision rounds",
      "Full commercial license",
      "Delivery in 3-5 business days",
    ],
    includesES: [
      "10 im\u00e1genes hiperrealistas en 4K",
      "Direcci\u00f3n creativa",
      "2 rondas de revisi\u00f3n",
      "Licencia comercial completa",
      "Entrega en 3-5 d\u00edas laborables",
    ],
    useCasesEN: [
      "Fashion lookbooks",
      "Product catalogs",
      "Editorial content",
      "Ad campaigns",
    ],
    useCasesES: [
      "Lookbooks de moda",
      "Cat\u00e1logos de producto",
      "Contenido editorial",
      "Campa\u00f1as publicitarias",
    ],
    traditionalCostEN: "\u20ac3,000 - \u20ac8,000",
    traditionalCostES: "\u20ac3.000 - \u20ac8.000",
    savingsEN: "93-97%",
    savingsES: "93-97%",
    faqEN: [
      {
        q: "What resolution are the images?",
        a: "All images are delivered in 4K resolution (3840x2160 or higher), suitable for print, web and social media.",
      },
      {
        q: "Can I choose the model\u2019s appearance?",
        a: "Yes, we create custom AI models based on your brief \u2014 age, ethnicity, body type, style.",
      },
      {
        q: "How many revisions are included?",
        a: "2 revisions are included. Additional revisions available at \u20ac50 per round.",
      },
    ],
    faqES: [
      {
        q: "\u00bfEn qu\u00e9 resoluci\u00f3n son las im\u00e1genes?",
        a: "Todas las im\u00e1genes se entregan en resoluci\u00f3n 4K (3840x2160 o superior), aptas para impresi\u00f3n, web y redes sociales.",
      },
      {
        q: "\u00bfPuedo elegir la apariencia del modelo?",
        a: "S\u00ed, creamos modelos IA personalizados seg\u00fan tu brief \u2014 edad, etnia, complexi\u00f3n, estilo.",
      },
      {
        q: "\u00bfCu\u00e1ntas revisiones est\u00e1n incluidas?",
        a: "Se incluyen 2 revisiones. Revisiones adicionales disponibles a \u20ac50 por ronda.",
      },
    ],
  },
  "video-ia": {
    titleEN: "AI Video Production",
    titleES: "Producci\u00f3n de V\u00eddeo IA",
    priceEN: "From \u20ac297",
    priceES: "Desde \u20ac297",
    image: "/services/ai-video.jpg",
    descriptionEN:
      "Cinematic videos generated with cutting-edge AI. From 15-second reels to 2-minute ad spots. Each video includes professional editing: color correction, transitions, voiceover and music. Quality indistinguishable from traditional production, but in 48h and at a fraction of the cost.",
    descriptionES:
      "V\u00eddeos cinematogr\u00e1ficos generados con IA de \u00faltima generaci\u00f3n. Desde reels de 15 segundos hasta spots publicitarios de 2 minutos. Cada v\u00eddeo incluye edici\u00f3n profesional: correcci\u00f3n de color, transiciones, voiceover y m\u00fasica. Calidad indistinguible de una producci\u00f3n tradicional, pero en 48h y a una fracci\u00f3n del coste.",
    includesEN: [
      "1 professional video up to 30s",
      "Script and art direction",
      "Color grading and editing",
      "Licensed music",
      "2 revision rounds",
    ],
    includesES: [
      "1 v\u00eddeo profesional de hasta 30s",
      "Gui\u00f3n y direcci\u00f3n de arte",
      "Color grading y edici\u00f3n",
      "M\u00fasica con licencia",
      "2 rondas de revisi\u00f3n",
    ],
    useCasesEN: [
      "Instagram/TikTok Reels",
      "Ad spots",
      "Product videos",
      "YouTube Shorts",
    ],
    useCasesES: [
      "Reels Instagram/TikTok",
      "Spots publicitarios",
      "V\u00eddeos de producto",
      "YouTube Shorts",
    ],
    traditionalCostEN: "\u20ac5,000 - \u20ac15,000",
    traditionalCostES: "\u20ac5.000 - \u20ac15.000",
    savingsEN: "94-98%",
    savingsES: "94-98%",
    faqEN: [
      {
        q: "What formats do you deliver?",
        a: "MP4 optimized for each platform: 9:16 for Reels/TikTok, 16:9 for YouTube, 1:1 for feed.",
      },
      {
        q: "Can I add voiceover?",
        a: "Yes, we use AI voice synthesis for natural voiceovers in any language.",
      },
      {
        q: "What\u2019s the maximum video length?",
        a: "Individual service: up to 30s. Monthly plans: up to 2-10 minutes depending on tier.",
      },
    ],
    faqES: [
      {
        q: "\u00bfEn qu\u00e9 formatos entreg\u00e1is?",
        a: "MP4 optimizado para cada plataforma: 9:16 para Reels/TikTok, 16:9 para YouTube, 1:1 para feed.",
      },
      {
        q: "\u00bfPuedo a\u00f1adir voiceover?",
        a: "S\u00ed, usamos s\u00edntesis de voz IA para voiceovers naturales en cualquier idioma.",
      },
      {
        q: "\u00bfCu\u00e1l es la duraci\u00f3n m\u00e1xima?",
        a: "Servicio individual: hasta 30s. Planes mensuales: hasta 2-10 minutos seg\u00fan el tier.",
      },
    ],
  },
  "modelos-ia": {
    titleEN: "AI Model Creation",
    titleES: "Creaci\u00f3n de Modelos IA",
    priceEN: "From \u20ac497",
    priceES: "Desde \u20ac497",
    image: "/services/ai-models.jpg",
    descriptionEN:
      "We create hyperrealistic virtual people you can use as brand ambassadors, virtual influencers or recurring models. Each model is AI-trained for perfect consistency \u2014 same face, complexion and features in any scenario, pose or outfit. Your model works 24/7, doesn\u2019t charge per session and never ages.",
    descriptionES:
      "Creamos personas virtuales hiperrealistas que puedes usar como embajadores de marca, influencers virtuales o modelos recurrentes. Cada modelo se entrena con IA para consistencia perfecta \u2014 misma cara, complexi\u00f3n y rasgos en cualquier escenario, pose o vestuario. Tu modelo trabaja 24/7, no cobra por sesi\u00f3n y nunca envejece.",
    includesEN: [
      "1 custom AI model",
      "8 reference photos",
      "Trained LoRA for consistency",
      "Unlimited future use",
      "Model identity card",
    ],
    includesES: [
      "1 modelo IA personalizado",
      "8 fotos de referencia",
      "LoRA entrenado para consistencia",
      "Uso ilimitado en futuras producciones",
      "Ficha de identidad del modelo",
    ],
    useCasesEN: [
      "Virtual Instagram influencer",
      "Recurring campaign model",
      "Brand avatar",
      "YouTube channel persona",
    ],
    useCasesES: [
      "Influencer virtual para Instagram",
      "Modelo recurrente para campa\u00f1as",
      "Avatar de marca",
      "Persona para canal de YouTube",
    ],
    traditionalCostEN: "\u20ac2,000 - \u20ac10,000 per campaign",
    traditionalCostES: "\u20ac2.000 - \u20ac10.000 por campa\u00f1a",
    savingsEN: "75-95%",
    savingsES: "75-95%",
    faqEN: [
      {
        q: "Will my model look the same every time?",
        a: "Yes, we train a LoRA (Low-Rank Adaptation) specifically for your model, ensuring 100% facial consistency across all images.",
      },
      {
        q: "Can I use the model commercially?",
        a: "Yes, full commercial license with unlimited use. No per-session fees.",
      },
      {
        q: "How long does it take to create a model?",
        a: "3-5 business days for the initial model with 8 reference images.",
      },
    ],
    faqES: [
      {
        q: "\u00bfMi modelo se ver\u00e1 igual siempre?",
        a: "S\u00ed, entrenamos un LoRA espec\u00edfico para tu modelo, asegurando consistencia facial 100% en todas las im\u00e1genes.",
      },
      {
        q: "\u00bfPuedo usar el modelo comercialmente?",
        a: "S\u00ed, licencia comercial completa con uso ilimitado. Sin costes por sesi\u00f3n.",
      },
      {
        q: "\u00bfCu\u00e1nto tarda en crearse un modelo?",
        a: "3-5 d\u00edas laborables para el modelo inicial con 8 im\u00e1genes de referencia.",
      },
    ],
  },
  "redes-sociales-ia": {
    titleEN: "AI Social Media Management",
    titleES: "Gesti\u00f3n de Redes Sociales IA",
    priceEN: "From \u20ac497/mo",
    priceES: "Desde \u20ac497/mes",
    image: "/services/ai-social.jpg",
    descriptionEN:
      "We automate your social media presence with AI-generated visual content. Each post includes hyperrealistic images created specifically for your brand, persuasive copy and hashtag strategy. Your Instagram feed will look like a million-dollar brand, at a fraction of the cost.",
    descriptionES:
      "Automatizamos tu presencia en redes sociales con contenido visual generado por IA. Cada publicaci\u00f3n incluye im\u00e1genes hiperrealistas creadas para tu marca, copy persuasivo y estrategia de hashtags. Tu feed de Instagram parecer\u00e1 el de una marca con presupuesto de millones, a una fracci\u00f3n del coste.",
    includesEN: [
      "12 posts/month with AI images",
      "Optimized copy and hashtags",
      "Scheduling and publishing",
      "Monthly performance report",
    ],
    includesES: [
      "12 posts/mes con im\u00e1genes IA",
      "Copy optimizado y hashtags",
      "Programaci\u00f3n y publicaci\u00f3n",
      "Informe de rendimiento mensual",
    ],
    useCasesEN: ["Instagram", "TikTok", "LinkedIn", "Pinterest"],
    useCasesES: ["Instagram", "TikTok", "LinkedIn", "Pinterest"],
    traditionalCostEN: "\u20ac1,500 - \u20ac4,000/mo",
    traditionalCostES: "\u20ac1.500 - \u20ac4.000/mes",
    savingsEN: "67-88%",
    savingsES: "67-88%",
    faqEN: [
      {
        q: "Which platforms do you manage?",
        a: "Instagram, TikTok, LinkedIn and Pinterest. Additional platforms available in Growth+ plans.",
      },
      {
        q: "Do you create the copy too?",
        a: "Yes, each post includes AI-optimized copy, hashtags and scheduling strategy.",
      },
      {
        q: "Can I approve posts before publishing?",
        a: "Yes, we send a monthly content calendar for your approval before publishing.",
      },
    ],
    faqES: [
      {
        q: "\u00bfQu\u00e9 plataformas gestion\u00e1is?",
        a: "Instagram, TikTok, LinkedIn y Pinterest. Plataformas adicionales disponibles en planes Growth+.",
      },
      {
        q: "\u00bfTambi\u00e9n cre\u00e1is el copy?",
        a: "S\u00ed, cada publicaci\u00f3n incluye copy optimizado con IA, hashtags y estrategia de programaci\u00f3n.",
      },
      {
        q: "\u00bfPuedo aprobar los posts antes de publicar?",
        a: "S\u00ed, enviamos un calendario de contenido mensual para tu aprobaci\u00f3n antes de publicar.",
      },
    ],
  },
  "identidad-marca-ia": {
    titleEN: "AI Brand Identity",
    titleES: "Identidad de Marca IA",
    priceEN: "From \u20ac997",
    priceES: "Desde \u20ac997",
    image: "/services/ai-branding.jpg",
    descriptionEN:
      "Complete brand identities powered by AI. From logo to packaging mockups, everything generated with premium aesthetics. Includes 20 brand images ready for web, social and print.",
    descriptionES:
      "Identidades de marca completas potenciadas por IA. Desde el logo hasta mockups de packaging, todo con est\u00e9tica premium. Incluye 20 im\u00e1genes de marca listas para web, redes e impresi\u00f3n.",
    includesEN: [
      "Logo design",
      "Color palette and typography",
      "Stationery mockups",
      "Brand guidelines",
      "20 brand images",
    ],
    includesES: [
      "Dise\u00f1o de logo",
      "Paleta de colores y tipograf\u00eda",
      "Mockups de papeler\u00eda",
      "Gu\u00eda de marca",
      "20 im\u00e1genes de marca",
    ],
    useCasesEN: ["Startups", "Rebranding", "Product launches", "New brands"],
    useCasesES: [
      "Startups",
      "Rebranding",
      "Lanzamientos de producto",
      "Nuevas marcas",
    ],
    traditionalCostEN: "\u20ac5,000 - \u20ac15,000",
    traditionalCostES: "\u20ac5.000 - \u20ac15.000",
    savingsEN: "80-93%",
    savingsES: "80-93%",
    faqEN: [
      {
        q: "What file formats do I receive?",
        a: "SVG, PNG, PDF for the logo. Full brand guide as PDF. Images in JPG/PNG 4K.",
      },
      {
        q: "How many logo options do I get?",
        a: "3 initial concepts, then we refine the chosen one with 2 revision rounds.",
      },
      {
        q: "Can I use the brand assets for print?",
        a: "Yes, all assets are provided in print-ready resolution and format.",
      },
    ],
    faqES: [
      {
        q: "\u00bfEn qu\u00e9 formatos recibo los archivos?",
        a: "SVG, PNG, PDF para el logo. Gu\u00eda de marca completa en PDF. Im\u00e1genes en JPG/PNG 4K.",
      },
      {
        q: "\u00bfCu\u00e1ntas opciones de logo recibo?",
        a: "3 conceptos iniciales, luego refinamos el elegido con 2 rondas de revisi\u00f3n.",
      },
      {
        q: "\u00bfPuedo usar los assets para impresi\u00f3n?",
        a: "S\u00ed, todos los assets se entregan en resoluci\u00f3n y formato listos para impresi\u00f3n.",
      },
    ],
  },
  "estrategia-campana-ia": {
    titleEN: "AI Campaign Strategy",
    titleES: "Estrategia de Campa\u00f1a IA",
    priceEN: "From \u20ac797",
    priceES: "Desde \u20ac797",
    image: "/services/ai-strategy.jpg",
    descriptionEN:
      "Complete AI-powered marketing campaigns. From creative concept to visual execution, including distribution strategy. Each campaign includes brief, creative concepts, art direction and content calendar optimized for conversion.",
    descriptionES:
      "Campa\u00f1as de marketing completas impulsadas por IA. Desde el concepto creativo hasta la ejecuci\u00f3n visual, incluyendo estrategia de distribuci\u00f3n. Brief, conceptos creativos, direcci\u00f3n de arte y calendario de contenido optimizado para conversi\u00f3n.",
    includesEN: [
      "Creative brief",
      "Campaign strategy",
      "3 creative concepts",
      "Art direction",
      "Content calendar",
      "KPIs",
    ],
    includesES: [
      "Brief creativo",
      "Estrategia de campa\u00f1a",
      "3 conceptos creativos",
      "Direcci\u00f3n de arte",
      "Calendario de contenido",
      "KPIs",
    ],
    useCasesEN: [
      "Product launches",
      "Seasonal campaigns",
      "Black Friday",
      "Sales events",
    ],
    useCasesES: [
      "Lanzamientos de producto",
      "Campa\u00f1as estacionales",
      "Black Friday",
      "Rebajas y eventos",
    ],
    traditionalCostEN: "\u20ac5,000 - \u20ac20,000",
    traditionalCostES: "\u20ac5.000 - \u20ac20.000",
    savingsEN: "84-96%",
    savingsES: "84-96%",
    faqEN: [
      {
        q: "Does it include content production?",
        a: "The strategy service includes the plan and creative direction. Production (photos/videos) is billed separately or included in monthly plans.",
      },
      {
        q: "How detailed is the strategy?",
        a: "Complete: target audience analysis, creative concepts with moodboards, content calendar, platform-specific guidelines and KPIs.",
      },
      {
        q: "Can you execute the strategy too?",
        a: "Yes, combine with our production services or monthly plans for end-to-end execution.",
      },
    ],
    faqES: [
      {
        q: "\u00bfIncluye la producci\u00f3n de contenido?",
        a: "El servicio de estrategia incluye el plan y la direcci\u00f3n creativa. La producci\u00f3n (fotos/v\u00eddeos) se factura por separado o se incluye en planes mensuales.",
      },
      {
        q: "\u00bfC\u00f3mo de detallada es la estrategia?",
        a: "Completa: an\u00e1lisis de p\u00fablico objetivo, conceptos creativos con moodboards, calendario de contenido, gu\u00edas por plataforma y KPIs.",
      },
      {
        q: "\u00bfPod\u00e9is ejecutar la estrategia tambi\u00e9n?",
        a: "S\u00ed, combina con nuestros servicios de producci\u00f3n o planes mensuales para ejecuci\u00f3n de principio a fin.",
      },
    ],
  },
};

const processStepsEN = [
  { icon: FileText, label: "Brief", description: "We define your needs" },
  { icon: Sparkles, label: "Creation", description: "AI generates content" },
  { icon: RefreshCw, label: "Review", description: "You review and approve" },
  { icon: Rocket, label: "Delivery", description: "Final files delivered" },
];

const processStepsES = [
  {
    icon: FileText,
    label: "Brief",
    description: "Definimos tus necesidades",
  },
  {
    icon: Sparkles,
    label: "Creaci\u00f3n",
    description: "La IA genera el contenido",
  },
  {
    icon: RefreshCw,
    label: "Revisi\u00f3n",
    description: "Revisas y apruebas",
  },
  { icon: Rocket, label: "Entrega", description: "Archivos finales entregados" },
];

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

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left text-sm font-medium hover:text-nb-gold transition-colors"
        aria-expanded={open}
      >
        {question}
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="pb-4 text-sm text-muted-foreground leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function ServiceDetailPage() {
  const locale = useLocale();
  const params = useParams();
  const slug = params.slug as string;
  const isEN = locale === "en";

  const service = services[slug];
  if (!service) {
    notFound();
  }

  const title = isEN ? service.titleEN : service.titleES;
  const price = isEN ? service.priceEN : service.priceES;
  const description = isEN ? service.descriptionEN : service.descriptionES;
  const includes = isEN ? service.includesEN : service.includesES;
  const useCases = isEN ? service.useCasesEN : service.useCasesES;
  const traditionalCost = isEN
    ? service.traditionalCostEN
    : service.traditionalCostES;
  const savings = isEN ? service.savingsEN : service.savingsES;
  const faq = isEN ? service.faqEN : service.faqES;
  const processSteps = isEN ? processStepsEN : processStepsES;

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image
              src={service.image}
              alt={title}
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
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              {title}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-2xl font-bold text-nb-gold"
            >
              {price}
            </motion.p>
          </motion.div>
        </section>

        {/* Description */}
        <section className="py-16 px-6">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 px-6">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">
                {isEN ? "What\u2019s Included" : "Qu\u00e9 incluye"}
              </h2>
              <ul className="space-y-4">
                {includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-nb-gold shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-12 text-center">
                {isEN ? "Our Process" : "Nuestro proceso"}
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-nb-red/10 mb-4">
                      <step.icon className="h-6 w-6 text-nb-red" />
                    </div>
                    <h3 className="font-semibold mb-1">{step.label}</h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 px-6">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">
                {isEN ? "Use Cases" : "Casos de uso"}
              </h2>
              <div className="flex flex-wrap gap-3">
                {useCases.map((uc, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-full border border-border bg-muted/50 px-4 py-2 text-sm font-medium"
                  >
                    {uc}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-6">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 text-center">
                {isEN ? "Cost Comparison" : "Comparativa de costes"}
              </h2>
              <div className="rounded-xl border border-border bg-card overflow-hidden">
                <div className="grid grid-cols-3 gap-4 px-6 py-4 border-b border-border bg-muted/30">
                  <div />
                  <div className="text-sm font-semibold text-muted-foreground text-center">
                    {isEN ? "Traditional" : "Tradicional"}
                  </div>
                  <div className="text-sm font-semibold text-nb-gold text-center">
                    NeuroBulls
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 px-6 py-5 items-center border-b border-border">
                  <div className="text-sm font-medium">
                    {isEN ? "Cost" : "Coste"}
                  </div>
                  <div className="text-center">
                    <span className="text-sm text-muted-foreground line-through">
                      {traditionalCost}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-sm font-bold text-nb-gold">
                      {price}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 px-6 py-5 items-center">
                  <div className="text-sm font-medium">
                    {isEN ? "You save" : "Ahorras"}
                  </div>
                  <div />
                  <div className="text-center">
                    <span className="text-sm font-bold text-green-500">
                      {savings}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">
                {isEN ? "Frequently Asked Questions" : "Preguntas frecuentes"}
              </h2>
              <div className="border-t border-border">
                {faq.map((item, i) => (
                  <FAQItem key={i} question={item.q} answer={item.a} />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 lg:py-32 px-6">
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-nb-red/10 via-transparent to-transparent" />
          <div className="mx-auto max-w-4xl text-center">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
                {isEN
                  ? "Ready to get started?"
                  : "\u00bfListo para empezar?"}
              </h2>
              <Link href={`/contact?service=${slug}`}>
                <Button
                  size="lg"
                  className="bg-nb-red hover:bg-nb-red-hover text-white px-10 py-6 text-lg"
                >
                  {isEN ? "Request a Quote" : "Solicitar presupuesto"}
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
