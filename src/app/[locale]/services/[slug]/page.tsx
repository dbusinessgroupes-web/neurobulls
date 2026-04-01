"use client";

import { useState } from "react";
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
    title: string;
    image: string;
    description: string;
    includes: string[];
    useCases: string[];
    faq: { q: string; a: string }[];
  }
> = {
  "fotografia-ia": {
    title: "AI Editorial Photography",
    image: "/services/ai-photography.jpg",
    description:
      "Complete photo sessions without cameras or studios. Our AI models are indistinguishable from real people. We generate editorial images with the quality of Vogue, Harper\u2019s Bazaar or GQ. Each image goes through our refinement pipeline: pore-level skin texture, cinematic lighting, professional color grading and 4K upscaling.",
    includes: [
      "10 editorial images in 4K",
      "Creative direction",
      "3 creative concepts",
      "Skin realism refinement",
      "4K upscaling",
      "2 revisions",
    ],
    useCases: [
      "Fashion lookbooks",
      "Product catalogs",
      "Editorial content",
      "Ad campaigns",
    ],
    faq: [
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
  },
  "video-ia": {
    title: "AI Video Production",
    image: "/services/ai-video.jpg",
    description:
      "Cinematic videos generated with cutting-edge AI. From 15-second reels to 2-minute ad spots. Each video includes professional editing: color correction, transitions, voiceover and music. Quality indistinguishable from traditional production, but in 48h and at a fraction of the cost.",
    includes: [
      "1 professional video up to 60s",
      "Script and storyboard",
      "Art direction",
      "Editing with color grading",
      "Music",
      "Optional voiceover",
    ],
    useCases: [
      "Instagram/TikTok Reels",
      "Ad spots",
      "Product videos",
      "YouTube Shorts",
    ],
    faq: [
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
  },
  "modelos-ia": {
    title: "AI Model Creation",
    image: "/services/ai-models.jpg",
    description:
      "We create hyperrealistic virtual people you can use as brand ambassadors, virtual influencers or recurring models. Each model is AI-trained for perfect consistency \u2014 same face, complexion and features in any scenario, pose or outfit. Your model works 24/7, doesn\u2019t charge per session and never ages.",
    includes: [
      "1 unique AI model",
      "8 reference photos",
      "Trained LoRA for consistency",
      "Unlimited future use",
      "5 sample images",
      "Technical identity card",
    ],
    useCases: [
      "Virtual Instagram influencer",
      "Recurring campaign model",
      "Brand avatar",
      "YouTube channel persona",
    ],
    faq: [
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
  },
  "redes-sociales-ia": {
    title: "AI Social Media Management",
    image: "/services/ai-social.jpg",
    description:
      "We automate your social media presence with AI-generated visual content. Each post includes hyperrealistic images created specifically for your brand, persuasive copy and hashtag strategy. Your Instagram feed will look like a million-dollar brand, at a fraction of the cost.",
    includes: [
      "15 posts/month with AI images",
      "Optimized copy and hashtags",
      "Content calendar",
      "Scheduling and publishing",
      "Monthly performance report",
    ],
    useCases: ["Instagram", "TikTok", "LinkedIn", "Pinterest"],
    faq: [
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
  },
  "identidad-marca-ia": {
    title: "AI Brand Identity",
    image: "/services/ai-branding.jpg",
    description:
      "Complete brand identities powered by AI. From logo to packaging mockups, everything generated with premium aesthetics. Includes 20 brand images ready for web, social and print.",
    includes: [
      "Logo + variations",
      "Color palette and typography",
      "Stationery mockups",
      "Brand guidelines",
      "20 brand images",
    ],
    useCases: ["Startups", "Rebranding", "Product launches", "New brands"],
    faq: [
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
  },
  "estrategia-campana-ia": {
    title: "AI Campaign Strategy",
    image: "/services/ai-strategy.jpg",
    description:
      "Complete AI-powered marketing campaigns. From creative concept to visual execution, including distribution strategy. Each campaign includes brief, creative concepts, art direction and content calendar optimized for conversion.",
    includes: [
      "Creative brief",
      "3 concepts with moodboards",
      "Art direction",
      "20 images",
      "2 short videos",
      "1-month content calendar",
      "KPIs",
    ],
    useCases: [
      "Product launches",
      "Seasonal campaigns",
      "Black Friday",
      "Sales events",
    ],
    faq: [
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
  },
};

const processSteps = [
  { icon: FileText, label: "Brief", description: "We define your needs" },
  { icon: Sparkles, label: "Creation", description: "AI generates content" },
  { icon: RefreshCw, label: "Review", description: "You review and approve" },
  { icon: Rocket, label: "Delivery", description: "Final files delivered" },
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
  const params = useParams();
  const slug = params.slug as string;

  const service = services[slug];
  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image
              src={service.image}
              alt={service.title}
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
              {service.title}
            </motion.h1>
          </motion.div>
        </section>

        {/* Description */}
        <section className="py-16 px-6">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 px-6">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">
                What&apos;s Included
              </h2>
              <ul className="space-y-4">
                {service.includes.map((item, i) => (
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
                Our Process
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
                Use Cases
              </h2>
              <div className="flex flex-wrap gap-3">
                {service.useCases.map((uc, i) => (
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
                Frequently Asked Questions
              </h2>
              <div className="border-t border-border">
                {service.faq.map((item, i) => (
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
                Ready to get started?
              </h2>
              <Link href={`/contact?service=${slug}`}>
                <Button
                  size="lg"
                  className="bg-nb-red hover:bg-nb-red-hover text-white px-10 py-6 text-lg"
                >
                  Request a Quote
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
