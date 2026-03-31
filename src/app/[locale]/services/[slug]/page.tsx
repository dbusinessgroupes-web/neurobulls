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
    image: string;
    descriptionEN: string;
    descriptionES: string;
    includesEN: string[];
    includesES: string[];
    useCasesEN: string[];
    useCasesES: string[];
    faqEN: { q: string; a: string }[];
    faqES: { q: string; a: string }[];
  }
> = {
  "fotografia-ia": {
    titleEN: "AI Editorial Photography",
    titleES: "Fotografía IA Editorial",
    image: "/services/ai-photography.jpg",
    descriptionEN:
      "Complete photo sessions without cameras or studios. Our AI models are indistinguishable from real people. We generate editorial images with the quality of Vogue, Harper\u2019s Bazaar or GQ. Each image goes through our refinement pipeline: pore-level skin texture, cinematic lighting, professional color grading and 4K upscaling.",
    descriptionES:
      "Sesiones fotográficas completas sin cámaras ni estudios. Nuestros modelos IA son indistinguibles de personas reales. Generamos imágenes editoriales con la calidad de Vogue, Harper\u2019s Bazaar o GQ. Cada imagen pasa por nuestro pipeline de refinamiento: textura de piel a nivel de poro, iluminación cinematográfica, color grading profesional y upscaling a 4K.",
    includesEN: [
      "10 editorial images in 4K",
      "Creative direction",
      "3 creative concepts",
      "Skin realism refinement",
      "4K upscaling",
      "2 revisions",
    ],
    includesES: [
      "10 imágenes editoriales en 4K",
      "Dirección creativa",
      "3 conceptos",
      "Refinamiento skin realism",
      "Upscaling 4K",
      "2 revisiones",
    ],
    useCasesEN: [
      "Fashion lookbooks",
      "Product catalogs",
      "Editorial content",
      "Ad campaigns",
    ],
    useCasesES: [
      "Lookbooks de moda",
      "Catálogos de producto",
      "Contenido editorial",
      "Campañas publicitarias",
    ],
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
        a: "2 revisions are included. Additional revisions available on request.",
      },
    ],
    faqES: [
      {
        q: "¿En qué resolución son las imágenes?",
        a: "Todas las imágenes se entregan en resolución 4K (3840x2160 o superior), aptas para impresión, web y redes sociales.",
      },
      {
        q: "¿Puedo elegir la apariencia del modelo?",
        a: "Sí, creamos modelos IA personalizados según tu brief \u2014 edad, etnia, complexión, estilo.",
      },
      {
        q: "¿Cuántas revisiones están incluidas?",
        a: "Se incluyen 2 revisiones. Revisiones adicionales disponibles bajo petición.",
      },
    ],
  },
  "video-ia": {
    titleEN: "AI Video Production",
    titleES: "Producción de Vídeo IA",
    image: "/services/ai-video.jpg",
    descriptionEN:
      "Cinematic videos generated with cutting-edge AI. From 15-second reels to 2-minute ad spots. Each video includes professional editing: color correction, transitions, voiceover and music. Quality indistinguishable from traditional production, but in 48h and at a fraction of the cost.",
    descriptionES:
      "Vídeos cinematográficos generados con IA de última generación. Desde reels de 15 segundos hasta spots publicitarios de 2 minutos. Cada vídeo incluye edición profesional: corrección de color, transiciones, voiceover y música. Calidad indistinguible de una producción tradicional, pero en 48h y a una fracción del coste.",
    includesEN: [
      "1 professional video up to 60s",
      "Script and storyboard",
      "Art direction",
      "Editing with color grading",
      "Music",
      "Optional voiceover",
    ],
    includesES: [
      "1 vídeo profesional hasta 60s",
      "Guión y storyboard",
      "Dirección de arte",
      "Edición con color grading",
      "Música",
      "Voiceover opcional",
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
      "Vídeos de producto",
      "YouTube Shorts",
    ],
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
        a: "Individual service: up to 60s. Monthly plans: up to 2-10 minutes depending on tier.",
      },
    ],
    faqES: [
      {
        q: "¿En qué formatos entregáis?",
        a: "MP4 optimizado para cada plataforma: 9:16 para Reels/TikTok, 16:9 para YouTube, 1:1 para feed.",
      },
      {
        q: "¿Puedo añadir voiceover?",
        a: "Sí, usamos síntesis de voz IA para voiceovers naturales en cualquier idioma.",
      },
      {
        q: "¿Cuál es la duración máxima?",
        a: "Servicio individual: hasta 60s. Planes mensuales: hasta 2-10 minutos según el tier.",
      },
    ],
  },
  "modelos-ia": {
    titleEN: "AI Model Creation",
    titleES: "Creación de Modelos IA",
    image: "/services/ai-models.jpg",
    descriptionEN:
      "We create hyperrealistic virtual people you can use as brand ambassadors, virtual influencers or recurring models. Each model is AI-trained for perfect consistency \u2014 same face, complexion and features in any scenario, pose or outfit. Your model works 24/7, doesn\u2019t charge per session and never ages.",
    descriptionES:
      "Creamos personas virtuales hiperrealistas que puedes usar como embajadores de marca, influencers virtuales o modelos recurrentes. Cada modelo se entrena con IA para consistencia perfecta \u2014 misma cara, complexión y rasgos en cualquier escenario, pose o vestuario. Tu modelo trabaja 24/7, no cobra por sesión y nunca envejece.",
    includesEN: [
      "1 unique AI model",
      "8 reference photos",
      "Trained LoRA for consistency",
      "Unlimited future use",
      "5 sample images",
      "Technical identity card",
    ],
    includesES: [
      "1 modelo IA único",
      "8 fotos de referencia",
      "LoRA entrenado",
      "Uso ilimitado",
      "5 imágenes de muestra",
      "Ficha técnica",
    ],
    useCasesEN: [
      "Virtual Instagram influencer",
      "Recurring campaign model",
      "Brand avatar",
      "YouTube channel persona",
    ],
    useCasesES: [
      "Influencer virtual para Instagram",
      "Modelo recurrente para campañas",
      "Avatar de marca",
      "Persona para canal de YouTube",
    ],
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
        q: "¿Mi modelo se verá igual siempre?",
        a: "Sí, entrenamos un LoRA específico para tu modelo, asegurando consistencia facial 100% en todas las imágenes.",
      },
      {
        q: "¿Puedo usar el modelo comercialmente?",
        a: "Sí, licencia comercial completa con uso ilimitado. Sin costes por sesión.",
      },
      {
        q: "¿Cuánto tarda en crearse un modelo?",
        a: "3-5 días laborables para el modelo inicial con 8 imágenes de referencia.",
      },
    ],
  },
  "redes-sociales-ia": {
    titleEN: "AI Social Media Management",
    titleES: "Gestión de Redes Sociales IA",
    image: "/services/ai-social.jpg",
    descriptionEN:
      "We automate your social media presence with AI-generated visual content. Each post includes hyperrealistic images created specifically for your brand, persuasive copy and hashtag strategy. Your Instagram feed will look like a million-dollar brand, at a fraction of the cost.",
    descriptionES:
      "Automatizamos tu presencia en redes sociales con contenido visual generado por IA. Cada publicación incluye imágenes hiperrealistas creadas para tu marca, copy persuasivo y estrategia de hashtags. Tu feed de Instagram parecerá el de una marca con presupuesto de millones, a una fracción del coste.",
    includesEN: [
      "15 posts/month with AI images",
      "Optimized copy and hashtags",
      "Content calendar",
      "Scheduling and publishing",
      "Monthly performance report",
    ],
    includesES: [
      "15 posts/mes con imágenes IA",
      "Copy optimizado y hashtags",
      "Calendario de contenido",
      "Programación y publicación",
      "Informe mensual",
    ],
    useCasesEN: ["Instagram", "TikTok", "LinkedIn", "Pinterest"],
    useCasesES: ["Instagram", "TikTok", "LinkedIn", "Pinterest"],
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
        q: "¿Qué plataformas gestionáis?",
        a: "Instagram, TikTok, LinkedIn y Pinterest. Plataformas adicionales disponibles en planes Growth+.",
      },
      {
        q: "¿También creáis el copy?",
        a: "Sí, cada publicación incluye copy optimizado con IA, hashtags y estrategia de programación.",
      },
      {
        q: "¿Puedo aprobar los posts antes de publicar?",
        a: "Sí, enviamos un calendario de contenido mensual para tu aprobación antes de publicar.",
      },
    ],
  },
  "identidad-marca-ia": {
    titleEN: "AI Brand Identity",
    titleES: "Identidad de Marca IA",
    image: "/services/ai-branding.jpg",
    descriptionEN:
      "Complete brand identities powered by AI. From logo to packaging mockups, everything generated with premium aesthetics. Includes 20 brand images ready for web, social and print.",
    descriptionES:
      "Identidades de marca completas potenciadas por IA. Desde el logo hasta mockups de packaging, todo con estética premium. Incluye 20 imágenes de marca listas para web, redes e impresión.",
    includesEN: [
      "Logo + variations",
      "Color palette and typography",
      "Stationery mockups",
      "Brand guidelines",
      "20 brand images",
    ],
    includesES: [
      "Logo + variaciones",
      "Paleta colores y tipografía",
      "Mockups papelería",
      "Guía de marca",
      "20 imágenes",
    ],
    useCasesEN: ["Startups", "Rebranding", "Product launches", "New brands"],
    useCasesES: [
      "Startups",
      "Rebranding",
      "Lanzamientos de producto",
      "Nuevas marcas",
    ],
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
        q: "¿En qué formatos recibo los archivos?",
        a: "SVG, PNG, PDF para el logo. Guía de marca completa en PDF. Imágenes en JPG/PNG 4K.",
      },
      {
        q: "¿Cuántas opciones de logo recibo?",
        a: "3 conceptos iniciales, luego refinamos el elegido con 2 rondas de revisión.",
      },
      {
        q: "¿Puedo usar los assets para impresión?",
        a: "Sí, todos los assets se entregan en resolución y formato listos para impresión.",
      },
    ],
  },
  "estrategia-campana-ia": {
    titleEN: "AI Campaign Strategy",
    titleES: "Estrategia de Campaña IA",
    image: "/services/ai-strategy.jpg",
    descriptionEN:
      "Complete AI-powered marketing campaigns. From creative concept to visual execution, including distribution strategy. Each campaign includes brief, creative concepts, art direction and content calendar optimized for conversion.",
    descriptionES:
      "Campañas de marketing completas impulsadas por IA. Desde el concepto creativo hasta la ejecución visual, incluyendo estrategia de distribución. Brief, conceptos creativos, dirección de arte y calendario de contenido optimizado para conversión.",
    includesEN: [
      "Creative brief",
      "3 concepts with moodboards",
      "Art direction",
      "20 images",
      "2 short videos",
      "1-month content calendar",
      "KPIs",
    ],
    includesES: [
      "Brief creativo",
      "3 conceptos con moodboards",
      "Dirección de arte",
      "20 imágenes",
      "2 vídeos cortos",
      "Calendario 1 mes",
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
      "Campañas estacionales",
      "Black Friday",
      "Rebajas y eventos",
    ],
    faqEN: [
      {
        q: "Does it include content production?",
        a: "Yes, the strategy includes 20 images and 2 short videos. Additional production available separately.",
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
        q: "¿Incluye la producción de contenido?",
        a: "Sí, la estrategia incluye 20 imágenes y 2 vídeos cortos. Producción adicional disponible por separado.",
      },
      {
        q: "¿Cómo de detallada es la estrategia?",
        a: "Completa: análisis de público objetivo, conceptos creativos con moodboards, calendario de contenido, guías por plataforma y KPIs.",
      },
      {
        q: "¿Podéis ejecutar la estrategia también?",
        a: "Sí, combina con nuestros servicios de producción o planes mensuales para ejecución de principio a fin.",
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
    label: "Creación",
    description: "La IA genera el contenido",
  },
  {
    icon: RefreshCw,
    label: "Revisión",
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
  const description = isEN ? service.descriptionEN : service.descriptionES;
  const includes = isEN ? service.includesEN : service.includesES;
  const useCases = isEN ? service.useCasesEN : service.useCasesES;
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
                {isEN ? "What\u2019s Included" : "Qué incluye"}
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
                  : "¿Listo para empezar?"}
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
