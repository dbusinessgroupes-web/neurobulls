import type { Metadata } from "next";

const metadataByLocale: Record<string, { title: string; description: string }> = {
  en: {
    title: "Free AI Photography Prompt Generator",
    description:
      "Generate ultra-realistic AI photography prompts for Midjourney, FLUX, and Stable Diffusion. Free tool, no sign-up required.",
  },
  es: {
    title: "Generador de Prompts de Fotografía IA Gratis",
    description:
      "Genera prompts de fotografía IA ultrarrealista para Midjourney, FLUX y Stable Diffusion. Herramienta gratuita, sin registro.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const data = metadataByLocale[locale] ?? metadataByLocale.en;

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
    },
    alternates: {
      canonical: `https://neurobulls.com/${locale}/tools/prompt-generator`,
      languages: {
        en: "https://neurobulls.com/en/tools/prompt-generator",
        es: "https://neurobulls.com/es/tools/prompt-generator",
      },
    },
  };
}

export default function PromptGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
