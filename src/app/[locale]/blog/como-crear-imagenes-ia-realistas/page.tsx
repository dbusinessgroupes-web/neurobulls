import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const metadataByLocale: Record<string, { title: string; description: string }> = {
  es: {
    title: "Cómo Crear Imágenes con IA que Parecen Reales: Guía Completa [2026]",
    description: "Aprende el framework AVB de 8 capas para crear imágenes hiperrealistas con IA. Guía paso a paso con ejemplos para Midjourney, FLUX y Stable Diffusion.",
  },
  en: {
    title: "How to Create AI Images That Look Real: Complete Guide [2026]",
    description: "Learn the 8-layer AVB framework for creating hyper-realistic AI images. Step-by-step guide with examples for Midjourney, FLUX and Stable Diffusion.",
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
      canonical: `https://neurobulls.com/${locale}/blog/como-crear-imagenes-ia-realistas`,
      languages: {
        es: "https://neurobulls.com/es/blog/como-crear-imagenes-ia-realistas",
        en: "https://neurobulls.com/en/blog/como-crear-imagenes-ia-realistas",
      },
    },
  };
}

export default async function ComoCrearImagenesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === "es";

  const layers = isEs
    ? [
        { name: "Sujeto", desc: "Quién o qué aparece en la imagen. Edad, género, rasgos, expresión, postura." },
        { name: "Vestuario / Objeto", desc: "Ropa, accesorios, productos. Material, color, marca si es relevante." },
        { name: "Ubicación", desc: "Dónde ocurre la escena. Ciudad, interior/exterior, elementos del entorno." },
        { name: "Iluminación", desc: "Tipo de luz, dirección, temperatura de color. Golden hour, tungsten, difusa, dura." },
        { name: "Cámara y lente", desc: "Modelo de cámara, distancia focal, apertura. Esto define la perspectiva y el bokeh." },
        { name: "Estilo de referencia", desc: "Publicación, fotógrafo o género. Vogue, Annie Leibovitz, documental, street." },
        { name: "Detalles de textura", desc: "Poros de piel, grano, reflejos, imperfecciones. Lo que hace que parezca real." },
        { name: "Negative prompts", desc: "Lo que NO quieres: blur, watermark, plastic skin, extra fingers, deformed." },
      ]
    : [
        { name: "Subject", desc: "Who or what appears in the image. Age, gender, features, expression, posture." },
        { name: "Wardrobe / Object", desc: "Clothing, accessories, products. Material, color, brand if relevant." },
        { name: "Location", desc: "Where the scene takes place. City, indoor/outdoor, environment elements." },
        { name: "Lighting", desc: "Type of light, direction, color temperature. Golden hour, tungsten, diffused, hard." },
        { name: "Camera and lens", desc: "Camera model, focal length, aperture. This defines perspective and bokeh." },
        { name: "Reference style", desc: "Publication, photographer or genre. Vogue, Annie Leibovitz, documentary, street." },
        { name: "Texture details", desc: "Skin pores, grain, reflections, imperfections. What makes it look real." },
        { name: "Negative prompts", desc: "What you do NOT want: blur, watermark, plastic skin, extra fingers, deformed." },
      ];

  const examples = [
    {
      category: isEs ? "Retrato editorial" : "Editorial portrait",
      prompt:
        "Close-up editorial portrait of a 25-year-old woman with freckles and auburn hair, wearing a cashmere turtleneck, sitting by a rain-streaked window in a Parisian apartment, soft overcast daylight, Canon EOS R5, 85mm f/1.2, Vogue Paris aesthetic, visible skin texture and pores, no airbrushing, no plastic skin",
      breakdown: isEs
        ? "Sujeto (mujer 25 con pecas), Vestuario (cashmere), Ubicación (apartamento París), Iluminación (luz nublada), Cámara (Canon R5 85mm), Estilo (Vogue Paris), Textura (poros visibles), Negative (no airbrushing)."
        : "Subject (25yo woman with freckles), Wardrobe (cashmere), Location (Paris apartment), Lighting (overcast), Camera (Canon R5 85mm), Style (Vogue Paris), Texture (visible pores), Negative (no airbrushing).",
    },
    {
      category: isEs ? "Fotografía gastronómica" : "Food photography",
      prompt:
        "Overhead flat lay of a rustic Italian dinner table with homemade pasta, fresh tomatoes, basil, olive oil bottle, aged parmesan, linen napkin, warm candlelight mixed with soft window light from right, Fujifilm GFX 100S, 63mm f/2.8, Bon Appetit magazine style, hyper-detailed food texture, no artificial coloring, no oversaturation",
      breakdown: isEs
        ? "Sujeto (mesa italiana), Objetos (pasta, tomates, albahaca), Ubicación (implícita: comedor rústico), Iluminación (velas + ventana derecha), Cámara (Fujifilm GFX), Estilo (Bon Appetit), Textura (detalle comida), Negative (sin coloración artificial)."
        : "Subject (Italian dinner table), Objects (pasta, tomatoes, basil), Location (implied: rustic dining), Lighting (candles + right window), Camera (Fujifilm GFX), Style (Bon Appetit), Texture (food detail), Negative (no artificial coloring).",
    },
    {
      category: isEs ? "Inmobiliaria de lujo" : "Luxury real estate",
      prompt:
        "Wide-angle interior shot of a contemporary luxury bathroom with freestanding marble bathtub, floor-to-ceiling windows overlooking a pine forest, morning golden light streaming in, heated stone floor, Nikon Z9, 14-24mm f/2.8 at 16mm, Architectural Digest cover style, sharp architectural lines, no lens distortion, no chromatic aberration",
      breakdown: isEs
        ? "Sujeto (baño de lujo), Objeto (bañera mármol), Ubicación (ventanales a bosque), Iluminación (golden morning), Cámara (Nikon Z9 gran angular), Estilo (Architectural Digest), Textura (líneas arquitectónicas), Negative (sin distorsión)."
        : "Subject (luxury bathroom), Object (marble bathtub), Location (windows to forest), Lighting (golden morning), Camera (Nikon Z9 wide), Style (Architectural Digest), Texture (architectural lines), Negative (no distortion).",
    },
  ];

  return (
    <article className="space-y-12">
      {/* Header */}
      <header className="space-y-4">
        <p className="text-sm text-nb-gold font-medium uppercase tracking-wider">
          {isEs ? "Guía Completa" : "Complete Guide"}
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
          {isEs
            ? "Cómo Crear Imágenes con IA que Parecen Reales: Guía Completa [2026]"
            : "How to Create AI Images That Look Real: Complete Guide [2026]"}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {isEs
            ? "La diferencia entre una imagen de IA que parece falsa y una que es indistinguible de una foto real está en la estructura del prompt. En NeuroBulls usamos un framework de 8 capas que llamamos AVB (Anatomy, Vibe, Background) para conseguir resultados profesionales de forma consistente."
            : "The difference between an AI image that looks fake and one that is indistinguishable from a real photo lies in the prompt structure. At NeuroBulls we use an 8-layer framework called AVB (Anatomy, Vibe, Background) to achieve professional results consistently."}
        </p>
      </header>

      {/* Why AI images look fake */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          {isEs ? "Por qué las imágenes de IA parecen falsas" : "Why AI images look fake"}
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          {isEs
            ? "Los errores más comunes son: piel demasiado suave (aspecto plástico), iluminación inconsistente, fondos genéricos, proporciones anatómicas incorrectas y falta de detalle en texturas. Todos estos problemas se solucionan con un prompt bien estructurado."
            : "The most common mistakes are: overly smooth skin (plastic look), inconsistent lighting, generic backgrounds, incorrect anatomical proportions and lack of texture detail. All these problems are solved with a well-structured prompt."}
        </p>
      </section>

      {/* AVB Framework */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">
          {isEs ? "El Framework AVB: 8 capas para prompts perfectos" : "The AVB Framework: 8 layers for perfect prompts"}
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          {isEs
            ? "Cada prompt debe incluir estas 8 capas en orden. No todas son obligatorias, pero cuantas más incluyas, mejor será el resultado."
            : "Each prompt should include these 8 layers in order. Not all are mandatory, but the more you include, the better the result."}
        </p>

        <div className="space-y-4">
          {layers.map((layer, i) => (
            <div key={i} className="flex gap-4 items-start border border-border rounded-lg p-4 bg-card">
              <div className="w-8 h-8 rounded-full bg-nb-gold/10 flex items-center justify-center shrink-0">
                <span className="text-sm font-bold text-nb-gold">{i + 1}</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{layer.name}</h3>
                <p className="text-sm text-muted-foreground">{layer.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Examples */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold">
          {isEs ? "3 ejemplos prácticos con el framework AVB" : "3 practical examples with the AVB framework"}
        </h2>

        {examples.map((ex, i) => (
          <div key={i} className="space-y-3 border-l-2 border-nb-gold/30 pl-6">
            <h3 className="text-lg font-semibold">
              {isEs ? `Ejemplo ${i + 1}: ${ex.category}` : `Example ${i + 1}: ${ex.category}`}
            </h3>
            <div className="bg-card border border-border rounded-lg p-4">
              <code className="text-sm text-nb-gold leading-relaxed block whitespace-pre-wrap">
                {ex.prompt}
              </code>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-medium text-foreground">
                {isEs ? "Desglose: " : "Breakdown: "}
              </span>
              {ex.breakdown}
            </p>
          </div>
        ))}
      </section>

      {/* Common mistakes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          {isEs ? "Errores comunes que debes evitar" : "Common mistakes to avoid"}
        </h2>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-nb-red font-bold shrink-0">&times;</span>
            <span>{isEs ? "Prompts demasiado cortos: \"a beautiful woman\" nunca dará resultados profesionales." : "Prompts too short: 'a beautiful woman' will never give professional results."}</span>
          </li>
          <li className="flex gap-2">
            <span className="text-nb-red font-bold shrink-0">&times;</span>
            <span>{isEs ? "No especificar cámara ni lente: la IA no sabe qué perspectiva usar." : "Not specifying camera or lens: the AI doesn't know what perspective to use."}</span>
          </li>
          <li className="flex gap-2">
            <span className="text-nb-red font-bold shrink-0">&times;</span>
            <span>{isEs ? "Olvidar los negative prompts: sin ellos, aparecen artefactos y manos deformadas." : "Forgetting negative prompts: without them, artifacts and deformed hands appear."}</span>
          </li>
          <li className="flex gap-2">
            <span className="text-nb-red font-bold shrink-0">&times;</span>
            <span>{isEs ? "Usar adjetivos vagos como \"amazing\" o \"beautiful\" en lugar de descripciones concretas." : "Using vague adjectives like 'amazing' or 'beautiful' instead of concrete descriptions."}</span>
          </li>
          <li className="flex gap-2">
            <span className="text-nb-red font-bold shrink-0">&times;</span>
            <span>{isEs ? "No especificar iluminación: la IA usará una luz plana y aburrida por defecto." : "Not specifying lighting: the AI will use flat, boring light by default."}</span>
          </li>
        </ul>
      </section>

      {/* Compatible tools */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          {isEs ? "Herramientas compatibles" : "Compatible tools"}
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          {isEs
            ? "El framework AVB funciona con cualquier modelo de generación de imágenes. Los resultados más consistentes los hemos obtenido con FLUX.2 Pro, Midjourney v6 y Stable Diffusion XL. Todos nuestros 500 prompts están optimizados para estas tres plataformas."
            : "The AVB framework works with any image generation model. The most consistent results we have obtained with FLUX.2 Pro, Midjourney v6 and Stable Diffusion XL. All our 500 prompts are optimized for these three platforms."}
        </p>
      </section>

      {/* Internal links */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold">
          {isEs ? "Artículos relacionados" : "Related articles"}
        </h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>
            <Link href="/blog/mejores-prompts-ia-fotografia" className="text-nb-gold hover:underline">
              {isEs ? "Los 10 mejores prompts de IA para fotografía ultrarrealista" : "The 10 best AI prompts for ultra-realistic photography"}
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
            ? "Descarga los 500 prompts con el framework completo"
            : "Download the 500 prompts with the complete framework"}
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          {isEs
            ? "500 prompts profesionales en 20 categorías, negative prompts incluidos, guía de consistencia de personajes y templates de vídeo. Listos para copiar y pegar en Midjourney, FLUX o Stable Diffusion."
            : "500 professional prompts across 20 categories, negative prompts included, character consistency guide and video templates. Ready to copy and paste into Midjourney, FLUX or Stable Diffusion."}
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
