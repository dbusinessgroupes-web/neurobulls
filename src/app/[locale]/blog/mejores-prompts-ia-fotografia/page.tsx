import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const metadataByLocale: Record<string, { title: string; description: string }> = {
  es: {
    title: "Los 10 Mejores Prompts de IA para Fotografía Ultrarrealista [2026]",
    description: "Descubre los 10 prompts de IA más efectivos para crear fotografías ultrarrealistas con Midjourney, FLUX y Stable Diffusion. Framework AVB incluido.",
  },
  en: {
    title: "The 10 Best AI Prompts for Ultra-Realistic Photography [2026]",
    description: "Discover the 10 most effective AI prompts for creating ultra-realistic photos with Midjourney, FLUX and Stable Diffusion. AVB framework included.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const data = metadataByLocale[locale] ?? metadataByLocale.en;

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      type: "article",
      siteName: "NeuroBulls",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
    },
    alternates: {
      canonical: `https://neurobulls.com/${locale}/blog/mejores-prompts-ia-fotografia`,
      languages: {
        es: "https://neurobulls.com/es/blog/mejores-prompts-ia-fotografia",
        en: "https://neurobulls.com/en/blog/mejores-prompts-ia-fotografia",
      },
    },
  };
}

const promptsEs = [
  {
    prompt: "Portrait of a 28-year-old Spanish woman sitting at a marble café table in Madrid, golden hour sunlight through floor-to-ceiling windows, wearing a cream silk blouse, Canon EOS R5, 85mm f/1.4, shallow depth of field, editorial Vogue España style",
    why: "Combina sujeto específico, ubicación real, hora del día, equipo fotográfico y referencia editorial. La IA entiende exactamente qué estilo visual reproducir.",
  },
  {
    prompt: "Flat lay of artisanal sourdough bread on a rustic oak cutting board, scattered flour dust, warm kitchen ambient light from above, Fujifilm X-T5, 35mm f/2, food photography style, 4K resolution, hyper-detailed texture on crust",
    why: "Los detalles de textura (harina, corteza) y el ángulo cenital son claves para fotografía gastronómica profesional que parezca real.",
  },
  {
    prompt: "Modern minimalist penthouse living room, floor-to-ceiling windows overlooking Barcelona skyline at sunset, Italian leather sofa, polished concrete floors, architectural photography, Nikon Z9, 24mm tilt-shift lens, interior design magazine cover",
    why: "La referencia a lente tilt-shift y revista de diseño interior guía a la IA hacia una perspectiva arquitectónica profesional con líneas rectas.",
  },
  {
    prompt: "Close-up portrait of a male model with light stubble, wearing a navy wool overcoat, standing in a foggy London street, soft diffused lighting, Hasselblad X2D, 90mm f/2.5, cinematic color grading, visible skin pores and texture",
    why: "Pedir textura de piel visible y poros elimina el aspecto plástico típico de la IA. La cámara Hasselblad implica resolución y detalle extremo.",
  },
  {
    prompt: "Overhead shot of a colorful acai bowl with fresh berries, granola, coconut flakes and edible flowers, white ceramic bowl on a light grey marble surface, natural window light from left, Sony A7IV, 50mm macro, food blog aesthetic",
    why: "La dirección de luz (izquierda), el ángulo cenital y los ingredientes específicos crean una composición gastronómica creíble y atractiva.",
  },
  {
    prompt: "Full-body fashion editorial of a tall woman walking through a sunlit olive grove in Tuscany, wearing a flowing linen dress, wind catching the fabric, golden afternoon light, Phase One IQ4, 110mm f/2.8, Condé Nast Traveler style",
    why: "El movimiento del tejido con el viento añade dinamismo natural. La referencia a Condé Nast establece un nivel editorial específico.",
  },
  {
    prompt: "Product shot of a luxury perfume bottle on a reflective black surface, dramatic side lighting with golden highlights, wisps of smoke in the background, Profoto B10 lighting, Nikon Z9, 105mm macro, commercial advertising photography",
    why: "La iluminación lateral con reflejos dorados y el humo crean atmósfera premium. Mencionar equipo de iluminación profesional eleva la calidad.",
  },
  {
    prompt: "Candid street portrait of an elderly craftsman in his leather workshop in Florence, warm tungsten lighting, tools hanging on walls, hands working on a saddle, Leica Q3, 28mm f/1.7, documentary photography style, natural grain",
    why: "El estilo documental con grano natural y la escena contextualizada transmiten autenticidad. La Leica Q3 implica un look fotográfico específico.",
  },
  {
    prompt: "Aerial view of a contemporary white villa with infinity pool overlooking the Mediterranean sea, drone photography, DJI Mavic 3 Pro, late afternoon golden light, real estate luxury listing photography, crystal clear turquoise water",
    why: "Especificar el dron concreto y el contexto (listing inmobiliario) produce imágenes que funcionan directamente en portales de propiedades.",
  },
  {
    prompt: "Beauty close-up of a woman's face with dewy skin, minimal makeup, soft ring light reflection in eyes, clean white background, Canon EOS R5, 100mm macro f/2.8, beauty campaign for skincare brand, visible skin texture, no airbrushing",
    why: "Pedir \"no airbrushing\" y textura visible contrarresta la tendencia de la IA a suavizar la piel. El reflejo del ring light en los ojos añade realismo.",
  },
];

const promptsEn = [
  {
    prompt: "Portrait of a 28-year-old Spanish woman sitting at a marble cafe table in Madrid, golden hour sunlight through floor-to-ceiling windows, wearing a cream silk blouse, Canon EOS R5, 85mm f/1.4, shallow depth of field, editorial Vogue style",
    why: "Combines specific subject, real location, time of day, camera gear and editorial reference. The AI knows exactly which visual style to reproduce.",
  },
  {
    prompt: "Flat lay of artisanal sourdough bread on a rustic oak cutting board, scattered flour dust, warm kitchen ambient light from above, Fujifilm X-T5, 35mm f/2, food photography style, 4K resolution, hyper-detailed texture on crust",
    why: "Texture details (flour, crust) and the overhead angle are key for professional food photography that looks real.",
  },
  {
    prompt: "Modern minimalist penthouse living room, floor-to-ceiling windows overlooking Barcelona skyline at sunset, Italian leather sofa, polished concrete floors, architectural photography, Nikon Z9, 24mm tilt-shift lens, interior design magazine cover",
    why: "The tilt-shift lens and interior design magazine reference guides the AI toward professional architectural perspective with straight lines.",
  },
  {
    prompt: "Close-up portrait of a male model with light stubble, wearing a navy wool overcoat, standing in a foggy London street, soft diffused lighting, Hasselblad X2D, 90mm f/2.5, cinematic color grading, visible skin pores and texture",
    why: "Requesting visible skin texture and pores eliminates the plastic look typical of AI. The Hasselblad camera implies extreme resolution and detail.",
  },
  {
    prompt: "Overhead shot of a colorful acai bowl with fresh berries, granola, coconut flakes and edible flowers, white ceramic bowl on a light grey marble surface, natural window light from left, Sony A7IV, 50mm macro, food blog aesthetic",
    why: "Light direction (left), overhead angle and specific ingredients create a believable and attractive food composition.",
  },
  {
    prompt: "Full-body fashion editorial of a tall woman walking through a sunlit olive grove in Tuscany, wearing a flowing linen dress, wind catching the fabric, golden afternoon light, Phase One IQ4, 110mm f/2.8, Conde Nast Traveler style",
    why: "Fabric movement in the wind adds natural dynamism. The Conde Nast reference establishes a specific editorial level.",
  },
  {
    prompt: "Product shot of a luxury perfume bottle on a reflective black surface, dramatic side lighting with golden highlights, wisps of smoke in the background, Profoto B10 lighting, Nikon Z9, 105mm macro, commercial advertising photography",
    why: "Side lighting with golden highlights and smoke creates premium atmosphere. Mentioning professional lighting gear elevates quality.",
  },
  {
    prompt: "Candid street portrait of an elderly craftsman in his leather workshop in Florence, warm tungsten lighting, tools hanging on walls, hands working on a saddle, Leica Q3, 28mm f/1.7, documentary photography style, natural grain",
    why: "Documentary style with natural grain and contextualized scene conveys authenticity. The Leica Q3 implies a specific photographic look.",
  },
  {
    prompt: "Aerial view of a contemporary white villa with infinity pool overlooking the Mediterranean sea, drone photography, DJI Mavic 3 Pro, late afternoon golden light, real estate luxury listing photography, crystal clear turquoise water",
    why: "Specifying the exact drone and context (real estate listing) produces images that work directly on property portals.",
  },
  {
    prompt: "Beauty close-up of a woman's face with dewy skin, minimal makeup, soft ring light reflection in eyes, clean white background, Canon EOS R5, 100mm macro f/2.8, beauty campaign for skincare brand, visible skin texture, no airbrushing",
    why: "Requesting 'no airbrushing' and visible texture counteracts the AI's tendency to smooth skin. Ring light reflection in eyes adds realism.",
  },
];

export default async function MejoresPromptsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === "es";
  const prompts = isEs ? promptsEs : promptsEn;

  return (
    <article className="space-y-12">
      {/* Article header */}
      <header className="space-y-4">
        <p className="text-sm text-nb-gold font-medium uppercase tracking-wider">
          {isEs ? "Guía de Prompts" : "Prompt Guide"}
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
          {isEs
            ? "Los 10 Mejores Prompts de IA para Fotografía Ultrarrealista [2026]"
            : "The 10 Best AI Prompts for Ultra-Realistic Photography [2026]"}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {isEs
            ? "Crear imágenes con IA que parezcan fotografías reales no es cuestión de suerte. Es cuestión de saber escribir el prompt correcto. En esta guía te damos 10 prompts probados que generan resultados hiperrealistas en Midjourney, FLUX, Stable Diffusion y cualquier otro modelo de generación de imágenes."
            : "Creating AI images that look like real photographs is not about luck. It is about writing the right prompt. In this guide we give you 10 proven prompts that generate hyper-realistic results in Midjourney, FLUX, Stable Diffusion and any other image generation model."}
        </p>
      </header>

      {/* Intro section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          {isEs ? "Por qué importa el prompt" : "Why the prompt matters"}
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          {isEs
            ? "El 90% de la calidad de una imagen generada con IA depende del prompt. Un buen prompt incluye: sujeto detallado, ubicación concreta, iluminación específica, equipo fotográfico (cámara + lente), estilo de referencia y detalles de textura. Nuestro framework AVB (Anatomy, Vibe, Background) estructura estos elementos para obtener resultados consistentes."
            : "90% of the quality of an AI-generated image depends on the prompt. A good prompt includes: detailed subject, specific location, specific lighting, camera gear (body + lens), reference style and texture details. Our AVB framework (Anatomy, Vibe, Background) structures these elements for consistent results."}
        </p>
      </section>

      {/* Prompts list */}
      <section className="space-y-10">
        <h2 className="text-2xl font-bold">
          {isEs ? "Los 10 prompts" : "The 10 prompts"}
        </h2>

        {prompts.map((item, i) => (
          <div key={i} className="space-y-3 border-l-2 border-nb-gold/30 pl-6">
            <h3 className="text-lg font-semibold text-foreground">
              {i + 1}. {isEs ? `Prompt ${i + 1}` : `Prompt ${i + 1}`}
            </h3>
            <div className="bg-card border border-border rounded-lg p-4">
              <code className="text-sm text-nb-gold leading-relaxed block whitespace-pre-wrap">
                {item.prompt}
              </code>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-medium text-foreground">
                {isEs ? "Por qué funciona: " : "Why it works: "}
              </span>
              {item.why}
            </p>
          </div>
        ))}
      </section>

      {/* Tips section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          {isEs ? "Consejos para mejorar tus prompts" : "Tips to improve your prompts"}
        </h2>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-nb-gold font-bold shrink-0">1.</span>
            <span>{isEs ? "Siempre incluye un modelo de cámara y lente específicos. Esto ancla el estilo visual." : "Always include a specific camera model and lens. This anchors the visual style."}</span>
          </li>
          <li className="flex gap-2">
            <span className="text-nb-gold font-bold shrink-0">2.</span>
            <span>{isEs ? "Especifica la hora del día y el tipo de iluminación (golden hour, tungsten, difusa, etc.)." : "Specify the time of day and lighting type (golden hour, tungsten, diffused, etc.)."}</span>
          </li>
          <li className="flex gap-2">
            <span className="text-nb-gold font-bold shrink-0">3.</span>
            <span>{isEs ? "Usa negative prompts para evitar artefactos: \"no blurry, no watermark, no text overlay, no plastic skin\"." : "Use negative prompts to avoid artifacts: 'no blurry, no watermark, no text overlay, no plastic skin'."}</span>
          </li>
          <li className="flex gap-2">
            <span className="text-nb-gold font-bold shrink-0">4.</span>
            <span>{isEs ? "Referencia publicaciones reales (Vogue, Architectural Digest, National Geographic) para establecer el nivel de calidad." : "Reference real publications (Vogue, Architectural Digest, National Geographic) to set the quality level."}</span>
          </li>
          <li className="flex gap-2">
            <span className="text-nb-gold font-bold shrink-0">5.</span>
            <span>{isEs ? "Pide texturas visibles: poros de piel, grano del pan, vetas de la madera. Esto elimina el aspecto artificial." : "Request visible textures: skin pores, bread grain, wood veins. This eliminates the artificial look."}</span>
          </li>
        </ul>
      </section>

      {/* Internal links */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold">
          {isEs ? "Sigue aprendiendo" : "Keep learning"}
        </h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>
            <Link href="/blog/como-crear-imagenes-ia-realistas" className="text-nb-gold hover:underline">
              {isEs ? "Cómo crear imágenes con IA que parecen reales: Guía completa" : "How to create AI images that look real: Complete guide"}
            </Link>
          </li>
          <li>
            <Link href="/blog/prompts-midjourney-flux-gratis" className="text-nb-gold hover:underline">
              {isEs ? "50 Prompts gratis para Midjourney y FLUX" : "50 Free prompts for Midjourney and FLUX"}
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-nb-gold hover:underline">
              {isEs ? "Nuestros servicios de producción visual con IA" : "Our AI visual production services"}
            </Link>
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-card border border-border rounded-xl p-8 sm:p-10 text-center space-y-4">
        <h2 className="text-2xl font-bold">
          {isEs
            ? "Estos son solo 10 de los 500 prompts"
            : "These are just 10 of the 500 prompts"}
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          {isEs
            ? "Nuestro pack completo incluye 500 prompts en 20 categorías, negative prompts, guía de consistencia de personajes y templates de vídeo. Todo por 9\u20ac."
            : "Our complete pack includes 500 prompts across 20 categories, negative prompts, character consistency guide and video templates. All for $9."}
        </p>
        <Link href="/shop">
          <Button className="bg-nb-red hover:bg-nb-red-hover text-white font-semibold px-8 py-6 text-base mt-2">
            {isEs
              ? "Descargar los 500 prompts completos"
              : "Download all 500 prompts"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </section>
    </article>
  );
}
