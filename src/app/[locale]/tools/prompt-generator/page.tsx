"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Copy, ArrowRight, Sparkles } from "lucide-react";

// ─── Prompt data pools ───

const SUBJECTS: Record<string, string[]> = {
  portrait: [
    "a 28-year-old woman with freckles, auburn hair in loose waves, green eyes, wearing a cream linen blouse",
    "a 35-year-old man with a sharp jawline, salt-and-pepper beard, deep brown eyes, wearing a navy turtleneck",
    "a 22-year-old woman with dark skin, close-cropped natural hair, golden hoop earrings, wearing an off-shoulder white top",
    "a 40-year-old East Asian man with round glasses, clean-shaven, wearing a charcoal wool coat",
    "a 30-year-old Latina woman with long dark curly hair, hazel eyes, subtle gold necklace, wearing a burgundy silk blouse",
    "a 25-year-old Scandinavian woman with platinum blonde hair, ice-blue eyes, minimal makeup, wearing a grey cashmere sweater",
    "a 45-year-old Middle Eastern man with a neatly trimmed beard, warm brown eyes, wearing a tailored olive jacket",
    "a 19-year-old South Asian woman with kohl-lined eyes, thick dark braid, wearing a terracotta-colored crop top",
    "a 33-year-old Black man with a fade haircut, strong cheekbones, wearing a white open-collar shirt",
    "a 27-year-old woman with red lipstick, jet-black bob cut, porcelain skin, wearing a black leather jacket",
  ],
  food: [
    "a perfectly plated wagyu steak with micro herbs, truffle jus, and edible flowers on a matte black plate",
    "a rustic sourdough bread with golden crust, torn open revealing airy crumb, on a wooden cutting board with butter curls",
    "a towering gourmet burger with melted aged cheddar, caramelized onions, and brioche bun on parchment paper",
    "a vibrant poke bowl with fresh tuna, avocado roses, edamame, pickled ginger, and black sesame on a ceramic bowl",
    "an artisan flat white coffee with latte art, served in a handmade ceramic cup on a marble surface",
    "a freshly baked croissant cut in half showing flaky layers, golden and buttery, on a linen napkin",
    "a colorful sushi platter with nigiri, maki rolls, and sashimi arranged on a slate board with wasabi and ginger",
    "a steaming bowl of ramen with chashu pork, soft-boiled egg, nori, and spring onions in rich tonkotsu broth",
    "a decadent chocolate lava cake with molten center flowing out, dusted with cocoa powder, served with vanilla ice cream",
    "a Mediterranean mezze spread with hummus, falafel, tabbouleh, pita bread, and olives on a terracotta platter",
  ],
  realEstate: [
    "a minimalist Scandinavian living room with floor-to-ceiling windows, white oak floors, and a Barcelona chair",
    "a luxury penthouse terrace overlooking a city skyline at golden hour, with outdoor loungers and potted olive trees",
    "a modern kitchen with white marble island, brass fixtures, open shelving with ceramic dishware, and pendant lights",
    "a cozy reading nook by a large arched window with built-in bookshelves, velvet cushions, and warm afternoon light",
    "a Mediterranean villa courtyard with terracotta tiles, a stone fountain, climbing bougainvillea, and wrought-iron furniture",
    "a contemporary bathroom with freestanding stone bathtub, rainfall shower, floor-to-ceiling marble, and brass accents",
    "a loft apartment with exposed brick walls, industrial beams, polished concrete floors, and mid-century modern furniture",
    "an architect-designed glass house surrounded by forest, with cantilevered decks and infinity pool",
  ],
  fashion: [
    "a model in a structured Balenciaga-inspired coat walking down a rain-slicked Parisian cobblestone street at dusk",
    "a model wearing a flowing silk maxi dress in emerald green, standing in a golden wheat field at sunset",
    "a model in an oversized blazer and tailored trousers, leaning against a brutalist concrete wall in harsh midday light",
    "a model in streetwear — vintage band tee, cargo pants, chunky sneakers — sitting on subway stairs in NYC",
    "a model in haute couture black gown with dramatic sleeves, photographed in an empty marble-floored gallery",
    "a model in relaxed Italian summer style — linen shirt, tan chinos, loafers — on a whitewashed Mediterranean terrace",
    "a model in a hand-knit oversized sweater and wide-leg jeans, walking through autumn leaves in Central Park",
    "a model in a tailored red power suit, standing in an Art Deco elevator with brass details and warm lighting",
  ],
  product: [
    "a luxury perfume bottle with amber liquid, refracted light creating rainbow caustics, on a polished obsidian surface",
    "a pair of white leather sneakers on a floating concrete slab, studio lighting with soft shadows",
    "a mechanical wristwatch with exposed movement, photographed at 45 degrees on brushed steel, with shallow depth of field",
    "a skincare serum bottle with dewdrops on glass, surrounded by fresh botanicals on a white marble surface",
    "wireless earbuds in matte black, floating with dramatic side lighting against a dark gradient background",
    "a handcrafted leather bag in cognac brown, placed on a reclaimed wood table with soft window light",
    "a ceramic mug filled with matcha latte, steam rising, set on a woven rattan coaster with morning light",
    "a pair of designer sunglasses casting geometric shadows, on a pastel pink surface with hard directional light",
  ],
  lifestyle: [
    "a couple sharing coffee at a Parisian sidewalk cafe in early morning, cobblestone streets wet from overnight rain",
    "a solo traveler reading a book on a wooden dock at a misty Nordic lake at sunrise, wrapped in a blanket",
    "friends laughing around a rustic outdoor dinner table with string lights, wine glasses, and Mediterranean food at dusk",
    "a woman practicing yoga on a cliff overlooking the ocean at golden hour, wind in her hair",
    "a man working on a laptop at a sunlit co-working space with large plants, exposed brick, and pour-over coffee",
    "a family cooking together in a bright farmhouse kitchen with fresh ingredients, flour-dusted surfaces, and warm light",
    "an artist painting in a loft studio, surrounded by canvases, with late afternoon light streaming through skylights",
    "a surfer walking along a deserted beach at dawn carrying a board, footprints in wet sand, pastel sky",
  ],
};

const LIGHTING: Record<string, string[]> = {
  natural: [
    "golden hour sunlight streaming through large windows",
    "soft overcast daylight creating even, flattering illumination",
    "dappled sunlight filtering through tree canopy",
    "early morning blue-hour ambient light with warm practicals",
    "open shade with reflected warm bounce from sandstone walls",
    "backlit by late afternoon sun with natural rim lighting",
  ],
  studio: [
    "Rembrandt lighting with 45-degree key light and subtle fill",
    "butterfly lighting from directly above creating defined cheekbone shadows",
    "clamshell lighting with beauty dish above and silver reflector below",
    "single strobe with large octabox creating soft directional light",
    "cross-lighting with two strip softboxes creating dramatic edge definition",
    "high-key studio setup with three-light configuration and white background",
  ],
  macro: [
    "focused spotlight with precision snoot highlighting fine details",
    "ring light providing even frontal illumination for maximum detail capture",
    "side-lit with a small softbox to reveal surface texture",
    "backlit to create translucency and glow through thin materials",
    "dual LED panels at opposing 45-degree angles for shadowless detail",
  ],
  dramatic: [
    "single bare bulb from below creating chiaroscuro effect",
    "harsh side light with deep shadows and no fill",
    "neon-tinted rim lighting against pure black background",
    "spotlight beam cutting through atmospheric haze and smoke",
    "moonlight simulation with cool blue key and warm practical accent",
    "split lighting with hard shadow bisecting the face vertically",
  ],
};

const COLOR_GRADING = [
  "warm analog film tones with lifted blacks and amber highlights",
  "cool desaturated palette with teal shadows and cream highlights",
  "rich Kodak Portra 400 color science with creamy skin tones",
  "high-contrast Fujifilm Velvia-inspired vivid colors",
  "muted earth tones with olive and ochre color cast",
  "clean neutral white balance with true-to-life color reproduction",
  "cinematic orange and teal color grade",
  "faded film look with grain, slight magenta shift in highlights",
  "editorial high-fashion processing with deep blacks and punchy contrast",
  "soft pastel processing with low saturation and raised shadows",
];

const CAMERAS: Record<string, string> = {
  "canon-eos-r5": "Canon EOS R5, RF 85mm f/1.2L USM, f/1.4, 1/250s, ISO 100",
  "sony-a7rv": "Sony A7R V, FE 70-200mm f/2.8 GM II, f/2.8, 1/500s, ISO 200",
  "fujifilm-xt5": "Fujifilm X-T5, XF 56mm f/1.2 R WR, f/1.2, 1/160s, ISO 160",
  "iphone-15-pro": "iPhone 15 Pro, 48MP Main Camera, ProRAW, f/1.78, 24mm equivalent",
};

const DETAILS = [
  "visible skin pores and fine hair texture",
  "catchlight reflections in the eyes",
  "fabric weave visible at full resolution",
  "micro-imperfections that add realism",
  "natural skin texture with subsurface scattering",
];

const QUALITY_TAGS =
  "photorealistic, ultra-detailed, 8K resolution, sharp focus, professional photography, visible pores, subtle film grain, ray-traced lighting, volumetric atmosphere";

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generatePrompt(
  category: string,
  style: string,
  camera: string
): string {
  const subject = pickRandom(SUBJECTS[category] || SUBJECTS.portrait);
  const lightingOptions = LIGHTING[style] || LIGHTING.natural;
  const lighting = pickRandom(lightingOptions);
  const color = pickRandom(COLOR_GRADING);
  const detail = pickRandom(DETAILS);
  const cameraSpec = CAMERAS[camera] || CAMERAS["canon-eos-r5"];

  return `${subject}. ${lighting}. Shot on ${cameraSpec}. ${color}. ${detail}. ${QUALITY_TAGS}. --ar 3:4 --style raw --v 6.1`;
}

// ─── Storage key ───
const COUNTER_KEY = "nb_prompt_counter";

function getCount(): number {
  if (typeof window === "undefined") return 0;
  const stored = localStorage.getItem(COUNTER_KEY);
  if (stored) return parseInt(stored, 10);
  const seed = Math.floor(Math.random() * 4000) + 1000;
  localStorage.setItem(COUNTER_KEY, String(seed));
  return seed;
}

// ─── Component ───

export default function PromptGeneratorPage() {
  const t = useTranslations("tools");
  const locale = useLocale();

  const [category, setCategory] = useState("portrait");
  const [style, setStyle] = useState("natural");
  const [camera, setCamera] = useState("canon-eos-r5");

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const handleCategory = (v: any) => { if (v) setCategory(String(v)); };
  const handleStyle = (v: any) => { if (v) setStyle(String(v)); };
  const handleCamera = (v: any) => { if (v) setCamera(String(v)); };
  /* eslint-enable @typescript-eslint/no-explicit-any */
  const [prompt, setPrompt] = useState("");
  const [copied, setCopied] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(getCount());
  }, []);

  const handleGenerate = useCallback(() => {
    const result = generatePrompt(category, style, camera);
    setPrompt(result);
    setCopied(false);
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem(COUNTER_KEY, String(newCount));
  }, [category, style, camera, count]);

  const handleCopy = useCallback(async () => {
    if (!prompt) return;
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [prompt]);

  const categoryOptions = [
    { value: "portrait", label: t("categories.portrait") },
    { value: "food", label: t("categories.food") },
    { value: "realEstate", label: t("categories.realEstate") },
    { value: "fashion", label: t("categories.fashion") },
    { value: "product", label: t("categories.product") },
    { value: "lifestyle", label: t("categories.lifestyle") },
  ];

  const styleOptions = [
    { value: "natural", label: t("styles.natural") },
    { value: "studio", label: t("styles.studio") },
    { value: "macro", label: t("styles.macro") },
    { value: "dramatic", label: t("styles.dramatic") },
  ];

  const cameraOptions = [
    { value: "canon-eos-r5", label: "Canon EOS R5" },
    { value: "sony-a7rv", label: "Sony A7RV" },
    { value: "fujifilm-xt5", label: "Fujifilm X-T5" },
    { value: "iphone-15-pro", label: "iPhone 15 Pro" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        {/* Hero */}
        <section className="pt-36 pb-12 px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {t("title")}
            </h1>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>
        </section>

        {/* Generator */}
        <section className="px-4 sm:px-6 pb-16">
          <div className="mx-auto max-w-2xl">
            <Card className="border-border bg-card rounded-xl">
              <CardContent className="p-6 sm:p-8 space-y-6">
                {/* Dropdowns */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Category */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">
                      {t("categoryLabel")}
                    </label>
                    <Select value={category} onValueChange={handleCategory}>
                      <SelectTrigger className="w-full h-10 bg-background border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categoryOptions.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Style */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">
                      {t("styleLabel")}
                    </label>
                    <Select value={style} onValueChange={handleStyle}>
                      <SelectTrigger className="w-full h-10 bg-background border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {styleOptions.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Camera */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">
                      {t("cameraLabel")}
                    </label>
                    <Select value={camera} onValueChange={handleCamera}>
                      <SelectTrigger className="w-full h-10 bg-background border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {cameraOptions.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Generate button */}
                <Button
                  onClick={handleGenerate}
                  className="w-full bg-nb-red hover:bg-nb-red-hover text-white font-semibold py-6 text-base"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  {t("generateButton")}
                </Button>

                {/* Result area */}
                {prompt && (
                  <div className="relative">
                    <div className="bg-background border border-border rounded-lg p-4 pr-12 font-mono text-sm leading-relaxed text-foreground/90 whitespace-pre-wrap break-words">
                      {prompt}
                    </div>
                    <button
                      onClick={handleCopy}
                      className="absolute top-3 right-3 p-2 rounded-md hover:bg-muted transition-colors"
                      aria-label={t("copyButton")}
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-green-400" />
                      ) : (
                        <Copy className="h-4 w-4 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                )}

                {/* Counter */}
                <p className="text-center text-sm text-muted-foreground">
                  {t("counter", { count: count.toLocaleString(locale) })}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Upsell banner */}
        <section className="px-4 sm:px-6 pb-20">
          <div className="mx-auto max-w-2xl">
            <Card className="border-nb-gold/30 bg-card rounded-xl overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-nb-gold/60 via-nb-gold to-nb-gold/60" />
              <CardContent className="p-6 sm:p-8 space-y-4 text-center">
                <h2 className="text-xl font-bold sm:text-2xl">
                  {t("upsell.title")}
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base">
                  {t("upsell.description")}
                </p>
                <Link href="/shop">
                  <Button className="bg-nb-gold hover:bg-nb-gold-hover text-background font-semibold px-8 py-5 text-base mt-2">
                    {t("upsell.button")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
