import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const metadataByLocale: Record<string, { title: string; description: string }> = {
  es: {
    title: "50 Prompts Gratis para Midjourney y FLUX [2026]",
    description: "Descarga 50 prompts gratuitos para Midjourney y FLUX. Retratos, gastronomía, inmobiliaria, moda y más. Accede a los 500 prompts completos en nuestra tienda.",
  },
  en: {
    title: "50 Free Prompts for Midjourney and FLUX [2026]",
    description: "Download 50 free prompts for Midjourney and FLUX. Portraits, food, real estate, fashion and more. Access the full 500 prompts in our shop.",
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
      canonical: `https://neurobulls.com/${locale}/blog/prompts-midjourney-flux-gratis`,
      languages: {
        es: "https://neurobulls.com/es/blog/prompts-midjourney-flux-gratis",
        en: "https://neurobulls.com/en/blog/prompts-midjourney-flux-gratis",
      },
    },
  };
}

const freePrompts = [
  // Portraits (5)
  { category: { es: "Retratos", en: "Portraits" }, prompt: "Headshot of a 30-year-old businessman in a tailored charcoal suit, standing in a modern glass office, soft directional light from large windows, Canon EOS R5, 85mm f/1.4, corporate LinkedIn style, natural skin texture" },
  { category: { es: "Retratos", en: "Portraits" }, prompt: "Candid portrait of a young woman laughing in a sun-dappled park, wearing a white cotton dress, dappled shade, Fujifilm X-T5, 56mm f/1.2, lifestyle photography, film grain, warm tones" },
  { category: { es: "Retratos", en: "Portraits" }, prompt: "Dramatic low-key portrait of a bearded man in his 40s, single source harsh side light, black background, Nikon Z9, 105mm f/1.4, Rembrandt lighting, visible wrinkles and skin detail" },
  { category: { es: "Retratos", en: "Portraits" }, prompt: "Environmental portrait of a female chef in her restaurant kitchen, wearing chef whites, warm tungsten overhead lighting, stainless steel counters, Sony A1, 35mm f/1.4, editorial documentary style" },
  { category: { es: "Retratos", en: "Portraits" }, prompt: "Beauty portrait of a woman with glowing dewy skin, minimal makeup, ring light catch in eyes, clean white studio background, Hasselblad X2D, 80mm f/1.9, skincare campaign aesthetic, no airbrushing" },
  // Food (4)
  { category: { es: "Gastronomía", en: "Food" }, prompt: "45-degree angle of a gourmet wagyu steak on a matte black plate, charred grill marks, rosemary sprig, micro herbs, dramatic side lighting with warm tones, Phase One IQ4, 80mm f/2.8, Michelin restaurant photography" },
  { category: { es: "Gastronomía", en: "Food" }, prompt: "Flat lay of colorful macarons arranged in a grid on a marble surface, soft diffused daylight from above, pastel colors, Canon EOS R5, 24-70mm at 50mm, patisserie branding photography, crisp detail on each shell" },
  { category: { es: "Gastronomía", en: "Food" }, prompt: "Pouring shot of golden honey dripping from a wooden dipper onto a stack of pancakes with fresh berries, frozen motion, warm backlight, Sony A7R V, 90mm macro, breakfast food styling" },
  { category: { es: "Gastronomía", en: "Food" }, prompt: "Overhead shot of a Mediterranean mezze spread on a rustic wooden table, hummus, falafel, pita bread, colorful salads, olive oil drizzle, natural daylight, Fujifilm GFX 100S, 63mm f/2.8, food travel magazine style" },
  // Real Estate (3)
  { category: { es: "Inmobiliaria", en: "Real Estate" }, prompt: "Interior shot of a Scandinavian-style living room with oak floors, bouclé sofa, floor-to-ceiling windows with forest view, soft morning light, Nikon Z9, 14-24mm at 18mm, interior design magazine cover, straight vertical lines" },
  { category: { es: "Inmobiliaria", en: "Real Estate" }, prompt: "Twilight exterior of a modern Mediterranean villa, warm interior lights glowing through windows, infinity pool reflecting sunset sky, DJI Mavic 3 Pro drone shot, luxury real estate listing photography" },
  { category: { es: "Inmobiliaria", en: "Real Estate" }, prompt: "Kitchen interior of a renovated brownstone apartment, marble island with brass fixtures, pendant lights, morning light through sash windows, Canon EOS R5, 16-35mm at 20mm, Architectural Digest style" },
  // Fashion (4)
  { category: { es: "Moda", en: "Fashion" }, prompt: "Full-body fashion shot of a male model in an oversized camel coat, walking on a cobblestone street in Milan, overcast diffused light, Leica SL3, 50mm f/1.4, GQ editorial style, cinematic color grading" },
  { category: { es: "Moda", en: "Fashion" }, prompt: "Editorial of a woman in a flowing red silk gown, standing in an empty neoclassical museum hall, dramatic directional light from skylights, Phase One IQ4, 80mm f/2.8, haute couture campaign" },
  { category: { es: "Moda", en: "Fashion" }, prompt: "Street style portrait of a woman in a leather jacket and vintage denim, leaning against a graffiti wall in Brooklyn, golden hour backlighting, Sony A7IV, 35mm f/1.4, i-D Magazine aesthetic" },
  { category: { es: "Moda", en: "Fashion" }, prompt: "Backstage fashion shot of a model getting makeup applied, shallow depth of field, warm tungsten lighting mixed with cool daylight, Canon EOS R5, 50mm f/1.2, behind-the-scenes documentary style" },
  // Product (2)
  { category: { es: "Producto", en: "Product" }, prompt: "Product shot of a luxury watch on a dark slate surface, dramatic rim lighting highlighting metal details, subtle smoke wisps, Profoto B10 lighting, Nikon Z9, 105mm macro, commercial advertising, no reflections on glass" },
  { category: { es: "Producto", en: "Product" }, prompt: "Flat lay of skincare products on a wet terrazzo surface, water droplets, eucalyptus leaves, soft diffused toplight, Hasselblad X2D, 90mm f/2.5, minimalist beauty brand aesthetic, pastel color palette" },
  // Lifestyle (2)
  { category: { es: "Lifestyle", en: "Lifestyle" }, prompt: "Couple sitting at a terrace café in Santorini at sunset, white architecture, blue sea in background, warm golden light, Canon EOS R5, 70-200mm at 135mm f/2.8, travel editorial for Condé Nast Traveler" },
  { category: { es: "Lifestyle", en: "Lifestyle" }, prompt: "Woman practicing yoga on a wooden deck overlooking misty mountains at sunrise, wearing earth-tone activewear, soft warm backlight, Sony A1, 85mm f/1.4, wellness brand campaign, serene atmosphere" },
];

export default async function PromptsGratisPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === "es";

  // Group prompts by category
  const grouped: Record<string, typeof freePrompts> = {};
  for (const p of freePrompts) {
    const cat = isEs ? p.category.es : p.category.en;
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(p);
  }

  return (
    <article className="space-y-12">
      {/* Header */}
      <header className="space-y-4">
        <p className="text-sm text-nb-gold font-medium uppercase tracking-wider">
          {isEs ? "Recursos Gratuitos" : "Free Resources"}
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
          {isEs
            ? "50 Prompts Gratis para Midjourney y FLUX [2026]"
            : "50 Free Prompts for Midjourney and FLUX [2026]"}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {isEs
            ? "Hemos seleccionado 20 prompts de nuestro pack de 500 para que los pruebes gratis. Copia y pega directamente en Midjourney, FLUX, Stable Diffusion o cualquier otro generador de imágenes con IA. Además, puedes descargar la muestra en PDF con 45 prompts adicionales."
            : "We have selected 20 prompts from our pack of 500 for you to try for free. Copy and paste directly into Midjourney, FLUX, Stable Diffusion or any other AI image generator. Plus, you can download the PDF sample with 45 additional prompts."}
        </p>
      </header>

      {/* Download sample CTA */}
      <section className="bg-card border border-border rounded-xl p-6 flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-1">
          <h2 className="text-lg font-bold">
            {isEs ? "Descarga la muestra en PDF" : "Download the PDF sample"}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            {isEs
              ? "45 prompts en PDF listos para usar. Sin registro, sin spam."
              : "45 prompts in PDF ready to use. No registration, no spam."}
          </p>
        </div>
        <a href="/shop/sample.pdf" download>
          <Button variant="outline" className="border-nb-gold/30 text-nb-gold hover:bg-nb-gold/10 shrink-0">
            <Download className="mr-2 h-4 w-4" />
            {isEs ? "Descargar PDF gratis" : "Download free PDF"}
          </Button>
        </a>
      </section>

      {/* How to use */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          {isEs ? "Cómo usar estos prompts" : "How to use these prompts"}
        </h2>
        <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
          <li>{isEs ? "Copia el prompt completo tal cual aparece." : "Copy the full prompt exactly as it appears."}</li>
          <li>{isEs ? "Pégalo en tu herramienta de generación de imágenes (Midjourney, FLUX, Stable Diffusion, etc.)." : "Paste it into your image generation tool (Midjourney, FLUX, Stable Diffusion, etc.)."}</li>
          <li>{isEs ? "Ajusta los detalles del sujeto (edad, género, rasgos) según necesites." : "Adjust subject details (age, gender, features) as needed."}</li>
          <li>{isEs ? "Cambia la ubicación o la iluminación para adaptarlo a tu proyecto." : "Change the location or lighting to adapt it to your project."}</li>
          <li>{isEs ? "Mantén siempre la referencia de cámara y lente para obtener resultados consistentes." : "Always keep the camera and lens reference for consistent results."}</li>
        </ol>
      </section>

      {/* Prompts by category */}
      {Object.entries(grouped).map(([category, items]) => (
        <section key={category} className="space-y-6">
          <h2 className="text-2xl font-bold">{category}</h2>
          {items.map((item, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-4 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-nb-gold bg-nb-gold/10 px-2 py-0.5 rounded">
                  {isEs ? `Prompt ${i + 1}` : `Prompt ${i + 1}`}
                </span>
              </div>
              <code className="text-sm text-foreground/90 leading-relaxed block whitespace-pre-wrap">
                {item.prompt}
              </code>
            </div>
          ))}
        </section>
      ))}

      {/* What's in the full pack */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          {isEs ? "Qué incluye el pack completo de 500 prompts" : "What the full 500 prompt pack includes"}
        </h2>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-nb-gold font-bold">+</span>
            <span>{isEs ? "500 prompts en 20 categorías: retratos, moda, gastronomía, inmobiliaria, producto, lifestyle, deportes, mascotas, bodas, arquitectura y más." : "500 prompts across 20 categories: portraits, fashion, food, real estate, product, lifestyle, sports, pets, weddings, architecture and more."}</span>
          </li>
          <li className="flex gap-2">
            <span className="text-nb-gold font-bold">+</span>
            <span>{isEs ? "Negative prompts para cada categoría, eliminando artefactos y errores comunes." : "Negative prompts for each category, eliminating artifacts and common errors."}</span>
          </li>
          <li className="flex gap-2">
            <span className="text-nb-gold font-bold">+</span>
            <span>{isEs ? "Guía de consistencia de personajes para mantener la misma cara en múltiples imágenes." : "Character consistency guide to maintain the same face across multiple images."}</span>
          </li>
          <li className="flex gap-2">
            <span className="text-nb-gold font-bold">+</span>
            <span>{isEs ? "Templates de vídeo para Kling, Runway y Sora." : "Video templates for Kling, Runway and Sora."}</span>
          </li>
          <li className="flex gap-2">
            <span className="text-nb-gold font-bold">+</span>
            <span>{isEs ? "Actualizaciones mensuales con nuevos prompts y categorías." : "Monthly updates with new prompts and categories."}</span>
          </li>
        </ul>
      </section>

      {/* Internal links */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold">
          {isEs ? "Más recursos" : "More resources"}
        </h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>
            <Link href="/blog/mejores-prompts-ia-fotografia" className="text-nb-gold hover:underline">
              {isEs ? "Los 10 mejores prompts de IA para fotografía ultrarrealista" : "The 10 best AI prompts for ultra-realistic photography"}
            </Link>
          </li>
          <li>
            <Link href="/blog/como-crear-imagenes-ia-realistas" className="text-nb-gold hover:underline">
              {isEs ? "Cómo crear imágenes con IA que parecen reales: Guía completa" : "How to create AI images that look real: Complete guide"}
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-nb-gold hover:underline">
              {isEs ? "Servicios de producción visual con IA de NeuroBulls" : "NeuroBulls AI visual production services"}
            </Link>
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-card border border-border rounded-xl p-8 sm:p-10 text-center space-y-4">
        <h2 className="text-2xl font-bold">
          {isEs
            ? "Accede a los 500 prompts completos"
            : "Access the full 500 prompts"}
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          {isEs
            ? "Descarga la muestra gratis y accede a los 500 prompts completos con negative prompts, guía de personajes y templates de vídeo. Todo por 9\u20ac, pago único."
            : "Download the free sample and access the full 500 prompts with negative prompts, character guide and video templates. All for $9, one-time payment."}
        </p>
        <Link href="/shop">
          <Button className="bg-nb-red hover:bg-nb-red-hover text-white font-semibold px-8 py-6 text-base mt-2">
            {isEs ? "Ir a la tienda" : "Go to shop"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </section>
    </article>
  );
}
