"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CookieBanner } from "@/components/cookie-banner";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function ContactPage() {
  const t = useTranslations();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    privacy: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, privacy: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          budget: "",
          message: "",
          privacy: false,
        });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const serviceOptions = [
    { value: "", label: t("contact.form.serviceOptions.default") },
    { value: "photopack", label: t("contact.form.serviceOptions.photopack") },
    { value: "videoreel", label: t("contact.form.serviceOptions.videoreel") },
    { value: "videospot", label: t("contact.form.serviceOptions.videospot") },
    { value: "videolong", label: t("contact.form.serviceOptions.videolong") },
    { value: "model", label: t("contact.form.serviceOptions.model") },
    { value: "campaign", label: t("contact.form.serviceOptions.campaign") },
    { value: "packRealestate", label: t("contact.form.serviceOptions.packRealestate") },
    { value: "packFashion", label: t("contact.form.serviceOptions.packFashion") },
    { value: "packBeauty", label: t("contact.form.serviceOptions.packBeauty") },
    { value: "packFood", label: t("contact.form.serviceOptions.packFood") },
    { value: "packTech", label: t("contact.form.serviceOptions.packTech") },
    { value: "monthlyGrowth", label: t("contact.form.serviceOptions.monthlyGrowth") },
    { value: "monthlyScale", label: t("contact.form.serviceOptions.monthlyScale") },
    { value: "freeSample", label: t("contact.form.serviceOptions.freeSample") },
    { value: "other", label: t("contact.form.serviceOptions.other") },
  ];

  const budgetOptions = [
    { value: "", label: t("contact.form.budgetOptions.default") },
    { value: "under500", label: t("contact.form.budgetOptions.under500") },
    { value: "500to1000", label: t("contact.form.budgetOptions.500to1000") },
    { value: "1000to2500", label: t("contact.form.budgetOptions.1000to2500") },
    { value: "2500to5000", label: t("contact.form.budgetOptions.2500to5000") },
    { value: "over5000", label: t("contact.form.budgetOptions.over5000") },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "neurobulls@gmail.com",
      href: "mailto:neurobulls@gmail.com",
    },
    {
      icon: InstagramIcon,
      title: "Instagram",
      value: "@neurobulls",
      href: "https://instagram.com/neurobulls",
    },
    {
      icon: MapPin,
      title: t("contact.info.location"),
      value: t("contact.info.locationValue"),
      href: null,
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        {/* Hero */}
        <section className="pt-40 pb-20 px-6">
          <div className="mx-auto max-w-4xl text-center">
            <ScrollReveal>
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              >
                {t("contact.title")}
              </motion.h1>
            </ScrollReveal>
            <ScrollReveal>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mt-6 text-lg text-muted-foreground sm:text-xl"
              >
                {t("contact.subtitle")}
              </motion.p>
            </ScrollReveal>
          </div>
        </section>

        {/* Two columns */}
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-6xl grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Left: Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <Card className="border-border bg-card">
                  <CardContent className="p-6 sm:p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          {t("contact.form.name")} *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t("contact.form.namePlaceholder")}
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          {t("contact.form.email")} *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t("contact.form.emailPlaceholder")}
                        />
                      </div>

                      {/* Company */}
                      <div className="space-y-2">
                        <Label htmlFor="company">
                          {t("contact.form.company")}
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder={t("contact.form.companyPlaceholder")}
                        />
                      </div>

                      {/* Service */}
                      <div className="space-y-2">
                        <Label htmlFor="service">
                          {t("contact.form.service")}
                        </Label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground"
                        >
                          {serviceOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Budget */}
                      <div className="space-y-2">
                        <Label htmlFor="budget">
                          {t("contact.form.budget")}
                        </Label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground"
                        >
                          {budgetOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <Label htmlFor="message">
                          {t("contact.form.message")} *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder={t("contact.form.messagePlaceholder")}
                        />
                      </div>

                      {/* Privacy */}
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="privacy"
                          checked={formData.privacy}
                          onChange={handleCheckbox}
                          required
                          className="mt-1 h-4 w-4 rounded border-border"
                        />
                        <Label
                          htmlFor="privacy"
                          className="text-sm text-muted-foreground leading-relaxed"
                        >
                          {t("contact.form.privacy")}{" "}
                          <Link
                            href="/politica-privacidad"
                            className="text-nb-red underline hover:text-nb-red-hover"
                          >
                            {t("contact.form.privacyLink")}
                          </Link>
                        </Label>
                      </div>

                      {/* Submit */}
                      <Button
                        type="submit"
                        disabled={loading || !formData.privacy}
                        className="w-full bg-nb-red text-white hover:bg-nb-red-hover"
                      >
                        {loading ? (
                          <>
                            <Send className="mr-2 h-4 w-4 animate-pulse" />
                            {t("contact.form.sending")}
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            {t("contact.form.submit")}
                          </>
                        )}
                      </Button>

                      {/* Success */}
                      {success && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="rounded-lg bg-green-500/10 p-4 text-green-500 space-y-2"
                        >
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 shrink-0" />
                            <p className="text-sm">
                              {t("contact.form.success")}
                            </p>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {t("contact.form.successFallback")}{" "}
                            <a
                              href="mailto:neurobulls@gmail.com"
                              className="font-medium text-nb-red hover:text-nb-red-hover underline"
                            >
                              neurobulls@gmail.com
                            </a>
                          </p>
                        </motion.div>
                      )}

                      {/* Error */}
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-2 rounded-lg bg-red-500/10 p-4 text-red-500"
                        >
                          <AlertCircle className="h-5 w-5 shrink-0" />
                          <p className="text-sm">{t("contact.form.error")}</p>
                        </motion.div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>

            {/* Right: Contact Info Cards */}
            <div className="lg:col-span-2">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {contactInfo.map((item) => (
                  <motion.div key={item.title} variants={fadeUp}>
                    <ScrollReveal>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("mailto:")
                              ? undefined
                              : "_blank"
                          }
                          rel={
                            item.href.startsWith("mailto:")
                              ? undefined
                              : "noopener noreferrer"
                          }
                          className="block"
                        >
                          <Card className="border-border bg-card rounded-xl transition-colors hover:border-nb-red/30">
                            <CardContent className="flex items-center gap-4 p-6">
                              <item.icon className="h-6 w-6 shrink-0 text-nb-gold" />
                              <div>
                                <p className="text-sm text-muted-foreground">
                                  {item.title}
                                </p>
                                <p className="font-medium">{item.value}</p>
                              </div>
                            </CardContent>
                          </Card>
                        </a>
                      ) : (
                        <Card className="border-border bg-card rounded-xl">
                          <CardContent className="flex items-center gap-4 p-6">
                            <item.icon className="h-6 w-6 shrink-0 text-nb-gold" />
                            <div>
                              <p className="text-sm text-muted-foreground">
                                {item.title}
                              </p>
                              <p className="font-medium">{item.value}</p>
                            </div>
                          </CardContent>
                        </Card>
                      )}
                    </ScrollReveal>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA bottom */}
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-4xl text-center">
            <ScrollReveal>
              <Card className="border-border bg-card rounded-xl">
                <CardContent className="p-8">
                  <p className="text-muted-foreground">
                    {t("contact.cta.text")}{" "}
                    <a
                      href="mailto:neurobulls@gmail.com"
                      className="font-medium text-nb-red hover:text-nb-red-hover underline"
                    >
                      neurobulls@gmail.com
                    </a>
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
