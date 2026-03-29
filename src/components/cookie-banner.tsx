"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CookieBanner() {
  const t = useTranslations("cookies");
  const [visible, setVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ necessary: true, analytics: true, marketing: true }));
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ necessary: true, analytics: false, marketing: false }));
    setVisible(false);
  };

  const save = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4"
        >
          <div className="mx-auto max-w-4xl rounded-xl border border-border bg-card p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm text-muted-foreground">{t("message")}</p>
              <button onClick={reject} aria-label="Close" className="text-muted-foreground hover:text-foreground shrink-0">
                <X className="h-4 w-4" />
              </button>
            </div>

            {showCustomize && (
              <div className="mt-4 space-y-3">
                <label className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{t("necessary")}</p>
                    <p className="text-xs text-muted-foreground">{t("necessaryDesc")}</p>
                  </div>
                  <input type="checkbox" checked disabled className="accent-nb-red" />
                </label>
                <label className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{t("analytics")}</p>
                    <p className="text-xs text-muted-foreground">{t("analyticsDesc")}</p>
                  </div>
                  <input type="checkbox" checked={preferences.analytics} onChange={(e) => setPreferences(p => ({...p, analytics: e.target.checked}))} className="accent-nb-red" />
                </label>
                <label className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{t("marketing")}</p>
                    <p className="text-xs text-muted-foreground">{t("marketingDesc")}</p>
                  </div>
                  <input type="checkbox" checked={preferences.marketing} onChange={(e) => setPreferences(p => ({...p, marketing: e.target.checked}))} className="accent-nb-red" />
                </label>
              </div>
            )}

            <div className="mt-4 flex flex-wrap items-center gap-3">
              {showCustomize ? (
                <Button onClick={save} className="bg-nb-red hover:bg-nb-red-hover text-white">{t("save")}</Button>
              ) : (
                <>
                  <Button onClick={accept} className="bg-nb-red hover:bg-nb-red-hover text-white">{t("accept")}</Button>
                  <Button onClick={reject} variant="outline">{t("reject")}</Button>
                  <Button onClick={() => setShowCustomize(true)} variant="ghost" className="text-muted-foreground">{t("customize")}</Button>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
