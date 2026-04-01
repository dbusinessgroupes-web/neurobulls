"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Camera,
  Video,
  Users,
  Check,
  ShieldCheck,
  Unlock,
  ChevronDown,
  Phone,
  Brain,
  Workflow,
  Package,
  ArrowRight,
  BookOpen,
  Wrench,
  GraduationCap,
  FileCheck,
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
    title: "Starter",
    features: [
      "5 professional 4K photos",
      "Any sector (food, fashion, real estate, product)",
      "48-hour delivery",
      "Web + social + apps formats",
      "Unlimited commercial rights",
      "1 revision included",
      "Satisfaction guarantee",
    ],
  },
  {
    key: "growth",
    icon: Video,
    badge: "Most Popular",
    title: "Growth",
    features: [
      "15 professional 4K photos",
      "1 edited video reel",
      "Exclusive AI model for your brand",
      "5-day delivery",
      "All formats included",
      "3 revisions included",
    ],
  },
  {
    key: "scale",
    icon: Users,
    badge: null,
    title: "Scale",
    features: [
      "30 professional 4K photos",
      "3 edited video reels",
      "Exclusive AI model for your brand",
      "Creative direction and strategy",
      "Dedicated support",
      "7-day delivery",
      "5 revisions included",
    ],
  },
];

/* ─── Automation Services ─── */
const automationServices = [
  {
    key: "voice",
    icon: Phone,
    title: "Voice AI Assistant",
    features: [
      "Answers your business calls 24/7",
      "Natural human voice, indistinguishable from a real person",
      "Manages bookings, appointments, inquiries and information",
      "Transfers to a human when needed",
      "Multilingual support",
      "Full setup in 7 days",
      "Maintenance, support and optimization included",
    ],
  },
  {
    key: "agent",
    icon: Brain,
    title: "Business AI Agent (RAG)",
    features: [
      "AI agent trained on your data",
      "Responds to clients via WhatsApp, email or web with accurate info",
      "Manages leads, sends quotes and follows up automatically",
      "Connected to your CRM, calendar and tools",
      "Learns and improves with every interaction",
      "Full setup in 10 days",
      "Maintenance, support and optimization included",
    ],
  },
  {
    key: "automation",
    icon: Workflow,
    title: "Workflow Automation",
    features: [
      "Connects your tools, eliminates manual work",
      "Auto-replies, invoice generation, data sync, social media posting",
      "Each workflow custom-designed for your use case",
      "No execution limits",
      "Setup in 3-5 days per workflow",
      "Maintenance and support included",
      "Infrastructure hosted on our servers",
    ],
  },
];

/* ─── Prompt Engineering Services ─── */
const promptServices = [
  {
    key: "packs",
    icon: BookOpen,
    title: "Industry Prompt Packs",
    description: "Pre-built prompt libraries for specific sectors: real estate, fashion, food, hospitality, e-commerce. Ready to use immediately.",
  },
  {
    key: "custom",
    icon: Wrench,
    title: "Custom Prompt Development",
    description: "We build and optimize prompts for your specific use case. Tailored to your brand, style, and objectives.",
  },
  {
    key: "training",
    icon: GraduationCap,
    title: "AI Training & Workshops",
    description: "Teach your team to use AI effectively. Hands-on workshops covering tools, techniques, and best practices.",
  },
];

/* ─── Combined Solutions ─── */
const combinedPacks = [
  {
    key: "businessStarter",
    badge: "Entry Point",
    title: "Business Starter",
    desc: "Visual Starter + Voice AI",
    includes: [
      "Starter Visual (5 photos, 48h delivery)",
      "AI Voice Assistant 24/7",
      "Everything set up in 7 days",
      "Maintenance and support included",
    ],
  },
  {
    key: "growthPackage",
    badge: "Best Value",
    title: "Growth Package",
    desc: "Visual Growth + AI Agent + Automation",
    includes: [
      "Growth Visual (15 photos + reel + AI model)",
      "Business AI Agent with Memory (RAG)",
      "2 automation workflows",
      "Everything set up in 14 days",
      "Maintenance and support included",
    ],
  },
];

/* ─── Guarantees ─── */
const guarantees = [
  {
    icon: ShieldCheck,
    title: "Quality Guarantee",
    desc: "If it looks AI, it doesn't leave our studio. We revise until you're satisfied.",
  },
  {
    icon: Unlock,
    title: "No Commitment",
    desc: "Project-based work with no long-term contracts required.",
  },
  {
    icon: FileCheck,
    title: "Full Ownership",
    desc: "You own everything we create. Unlimited commercial rights included.",
  },
];

/* ─── FAQ ─── */
const faqItems = [
  {
    q: "What industries do you work with?",
    a: "We work with businesses across fashion, hospitality, real estate, food, technology, and e-commerce. Our AI tools adapt to any industry that needs visual content or automation.",
  },
  {
    q: "How long does delivery take?",
    a: "Starter: 48 hours. Growth: 5 business days. Scale: 7 business days. Automation services: 5-10 days depending on complexity.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes, we serve clients worldwide. Our team operates remotely and our AI tools work across time zones and languages.",
  },
  {
    q: "What's included in your AI automation services?",
    a: "Full setup, training, ongoing support, and maintenance. We design, build, and optimize your automations so they run flawlessly. External API costs are on the client's account (typically €15-50/month).",
  },
  {
    q: "Can you create content in multiple languages?",
    a: "Yes, our AI tools support 50+ languages. We can produce visual content, voice assistants, and AI agents in any language your business needs.",
  },
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* ─── Hero ─── */}
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
              Everything your business needs. In one place.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Premium visual production and intelligent automation. Enterprise technology, accessible to you.
            </motion.p>
          </motion.div>
        </section>

        {/* ─── Section 1: Visual Production ─── */}
        <section className="py-24 lg:py-32 px-6">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  Visual Production
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  Content that sells. Photos and videos indistinguishable from reality.
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
                          {tier.badge}
                        </Badge>
                      )}
                      <tier.icon className="h-10 w-10 text-nb-gold mb-4" />
                      <h3 className="text-xl font-bold">{tier.title}</h3>
                      <ul className="space-y-2 flex-1 mt-4">
                        {tier.features.map((feature, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-nb-gold shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6">
                        <Link href="/contact">
                          <Button className="w-full bg-nb-red hover:bg-nb-red-hover text-white">
                            Get a Quote
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
                Need long videos, special campaigns or monthly volume?{" "}
                <Link href="/contact" className="text-nb-gold hover:underline">
                  Contact us for a custom quote.
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* ─── Section 2: AI Automation ─── */}
        <section className="py-24 lg:py-32 px-6 bg-muted/30">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  AI Automation
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  Your business running itself. 24/7, without hiring staff.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {automationServices.map((service, i) => (
                <ScrollReveal key={service.key} delay={i * 0.1}>
                  <Card className="border-border bg-card h-full flex flex-col transition-all duration-300 hover:border-nb-red hover:-translate-y-1">
                    <CardContent className="p-6 flex flex-col flex-1">
                      <service.icon className="h-10 w-10 text-nb-gold mb-4" />
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <ul className="space-y-2 flex-1 mt-4">
                        {service.features.map((feature, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-nb-gold shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6">
                        <Link href="/contact">
                          <Button className="w-full bg-nb-red hover:bg-nb-red-hover text-white">
                            Get a Quote
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

        {/* ─── Section 3: Prompt Engineering Services ─── */}
        <section className="py-24 lg:py-32 px-6">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  Prompt Engineering Services
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  Professional prompts that produce professional results.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {promptServices.map((service, i) => (
                <ScrollReveal key={service.key} delay={i * 0.1}>
                  <Card className="border-border bg-card h-full flex flex-col transition-all duration-300 hover:border-nb-gold hover:-translate-y-1">
                    <CardContent className="p-6 flex flex-col flex-1">
                      <service.icon className="h-10 w-10 text-nb-gold mb-4" />
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">
                        {service.description}
                      </p>
                      <div className="mt-6">
                        <Link href={service.key === "packs" ? "/shop" : "/contact"}>
                          <Button variant="outline" className="w-full">
                            {service.key === "packs" ? "Browse Products" : "Get a Quote"}
                            <ArrowRight className="ml-2 h-4 w-4" />
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

        {/* ─── Section 4: Combined Solutions ─── */}
        <section className="py-24 lg:py-32 px-6 bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  Combined Solutions
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  Visual + Automation. The combo that transforms your business.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {combinedPacks.map((pack, i) => (
                <ScrollReveal key={pack.key} delay={i * 0.1}>
                  <Card className="border-nb-gold/30 bg-gradient-to-b from-nb-gold/5 via-card to-card h-full flex flex-col transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 flex flex-col flex-1">
                      <Badge className="bg-nb-gold text-black border-0 px-3 py-0.5 text-xs font-semibold mb-3 w-fit">
                        {pack.badge}
                      </Badge>
                      <Package className="h-10 w-10 text-nb-gold mb-4" />
                      <h3 className="text-xl font-bold">{pack.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2 mb-4">{pack.desc}</p>
                      <ul className="space-y-2 flex-1">
                        {pack.includes.map((item, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-nb-gold shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6">
                        <Link href="/contact">
                          <Button className="w-full bg-nb-red hover:bg-nb-red-hover text-white">
                            Get a Quote
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

        {/* ─── Guarantees ─── */}
        <section className="py-24 lg:py-32 px-6">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  Our Guarantee
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {guarantees.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <Card className="border-border bg-card h-full">
                    <CardContent className="p-6 text-center">
                      <item.icon className="h-10 w-10 text-nb-gold mx-auto mb-4" />
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-24 lg:py-32 px-6 bg-muted/30">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  Frequently Asked Questions
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-3">
              {faqItems.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <div className="rounded-xl border border-border bg-card overflow-hidden">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                    >
                      <span className="text-sm sm:text-base font-semibold">{faq.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                          openFaq === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-5">
                        <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="relative py-32 lg:py-40 px-6">
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-nb-red/10 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-1/3 -z-10 h-[600px] w-[600px] rounded-full bg-nb-red/5 blur-[160px]" />
          <div className="absolute top-1/4 right-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-nb-gold/5 blur-[100px]" />

          <div className="mx-auto max-w-4xl text-center">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
                Ready to transform your business?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                Tell us what you need and we'll prepare a custom quote.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-nb-red hover:bg-nb-red-hover text-white px-10 py-6 text-lg">
                    Get a Proposal
                  </Button>
                </Link>
                <Link href="/work">
                  <Button size="lg" variant="outline" className="px-10 py-6 text-lg">
                    View Portfolio
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
