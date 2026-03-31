import { useTranslations } from "next-intl";
import { Logo } from "./logo";
import { Link } from "@/i18n/navigation";
import { Mail, MapPin } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  const t = useTranslations("footer");
  const tc = useTranslations("contact");

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-xs">
              {t("poweredBy")}
            </p>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com/neurobulls" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-nb-red transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="mailto:neurobulls@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-nb-red transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">{t("company")}</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("aboutLink")}</Link>
              <Link href="/work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("workLink")}</Link>
              <a href="mailto:neurobulls@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{tc("info.email")}</a>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">{t("servicesTitle")}</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("serviceVisualStarter")}</Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("serviceVisualPro")}</Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("serviceVisualPremium")}</Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("serviceVoice")}</Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("serviceAgent")}</Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("serviceAutomation")}</Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">{t("legal")}</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/aviso-legal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("legalNotice")}</Link>
              <Link href="/politica-privacidad" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("privacy")}</Link>
              <Link href="/politica-cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("cookies")}</Link>
              <Link href="/terminos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("terms")}</Link>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 NeuroBulls — D Business Group ES. {t("rights")}
          </p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span>{tc("info.locationValue")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
