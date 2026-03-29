# NeuroBulls — Spec de Diseño Completa

## Visión

NeuroBulls es la primera agencia de marketing de IA del mundo centrada exclusivamente en campañas publicitarias con modelos humanos generados por inteligencia artificial. Web bilingüe (ES/EN), mercado global, base en España.

## Stack Técnico

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Estilos:** Tailwind CSS v4 + shadcn/ui
- **Animaciones:** Framer Motion (scroll reveals, hover, transiciones)
- **i18n:** next-intl (ES/EN, selector en header)
- **Email:** Resend (formulario contacto → neurobulls@gmail.com)
- **Observabilidad:** @vercel/analytics + @vercel/speed-insights
- **Fuentes:** Geist Sans (UI) + Geist Mono (datos/precios)
- **Deploy:** Vercel Hobby → neurobulls.com
- **Repo:** github.com/dbusinessgroupes-web/neurobulls

## Paleta de Colores

| Token | Hex | Uso |
|-------|-----|-----|
| bg-primary | #0A0A0A | Fondo principal |
| bg-secondary | #141414 | Tarjetas, secciones alternas |
| bg-elevated | #1A1A1A | Hover states, elevaciones |
| accent-red | #E31837 | CTA principal, highlights, energía |
| accent-gold | #C9A84C | Premium, exclusividad, iconos |
| text-primary | #FAFAFA | Texto principal |
| text-secondary | #888888 | Texto secundario |
| border | #222222 | Bordes sutiles |

## Estructura de Rutas

```
/[locale]/                    → Landing (hero + servicios + portfolio + stats + CTA)
/[locale]/services            → Servicios + Pricing (4 tiers + à la carte)
/[locale]/work                → Portfolio grid
/[locale]/work/[slug]         → Case study individual
/[locale]/about               → Misión, tecnología, equipo
/[locale]/contact             → Formulario + datos de contacto
/[locale]/blog                → Blog/insights (estructura preparada)
/[locale]/aviso-legal         → Aviso Legal
/[locale]/politica-privacidad → Política de Privacidad (RGPD)
/[locale]/politica-cookies    → Política de Cookies
/[locale]/terminos            → Términos y Condiciones
```

## Diseño Visual — Página por Página

### Landing Page (/)

**Header (sticky, blur backdrop):**
- Logo NeuroBulls izquierda (toro estilizado + texto)
- Nav: Services | Work | About | Contact
- Selector idioma (ES/EN) + CTA "Start a Project" (botón rojo)
- Al hacer scroll: header se comprime, fondo negro con blur

**Hero Section:**
- Tipografía gigante (80-120px desktop): "THE FUTURE OF MARKETING IS NOT HUMAN"
- Subtítulo: "AI-powered campaigns. Hyperrealistic models. Unlimited creativity."
- Fondo: grid de imágenes placeholder de modelos IA en composición bento
- CTA principal: "Discover Our Work" (rojo) + "See Pricing" (outline dorado)
- Scroll indicator animado abajo
- Animación: texto reveal letra por letra, imágenes con parallax

**Stats/Social Proof:**
- Banda horizontal con números animados (count-up al scroll):
  - "85% Cost Reduction vs Traditional Shoots"
  - "48h Average Delivery Time"
  - "500+ AI Models Created"
  - "3x Higher Engagement Rate"

**Services Preview (3 cards):**
- AI Photography | AI Video Production | AI Campaign Strategy
- Cada card: icono dorado, título, descripción corta, hover con borde rojo
- CTA: "Explore All Services →"
- Animación: stagger fade-in desde abajo

**Portfolio Showcase (3-4 cases destacados):**
- Grid asimétrico tipo bento (1 grande + 2 medianas + 1 pequeña)
- Cada card: imagen fullbleed, overlay con nombre del proyecto + industria
- Hover: zoom sutil + aparece tagline
- CTA: "View All Work →"

**How It Works (proceso en 4 pasos):**
1. Brief → 2. AI Creation → 3. Review & Refine → 4. Deliver & Launch
- Timeline horizontal con iconos, animación scroll-driven
- Cada paso: icono, título, descripción breve

**Comparador "Traditional vs NeuroBulls":**
- Split layout con 2 columnas
- Izquierda (gris, tachado): Traditional Agency — 4-8 weeks, €15.000+, limited variations
- Derecha (rojo/dorado, destacado): NeuroBulls — 48h, from €400, unlimited variations
- Animación: números que cambian en counter

**Testimonials/Trust:**
- Sección con quotes de clientes (placeholder editables)
- Logos de industrias servidas (Fashion, Beauty, Tech, Real Estate, Food)

**CTA Final (full-section):**
- Fondo con gradiente sutil rojo→negro
- Texto grande: "Your next campaign doesn't need a casting call. It needs NeuroBulls."
- Botón grande: "Start Your Project"

**Footer:**
- 4 columnas: Company (About, Careers, Blog) | Services | Legal (4 links) | Contact
- Redes sociales: Instagram (@neurobulls), email
- © 2026 NeuroBulls — D Business Group ES
- Badge "Powered by AI"

### Services (/services)

**Hero:** Título "Our Services" + subtítulo sobre el modelo productizado

**Paquetes (4 tiers en grid):**
- Spark (€1.900/mes) — Entrada
- Pulse (€4.500/mes) — Crecimiento
- Surge (€9.500/mes) — Premium (badge "Most Popular")
- Apex (desde €18.000/mes) — Enterprise
- Cada tier: lista de features con checks, CTA

**Servicios à la carte (accordion o tabs):**
- AI Model Creation (desde €800)
- AI Photography (desde €400)
- AI Video Production (desde €300)
- AI Social Media Management (desde €600/mes)
- AI Brand Identity (desde €1.500)
- AI Campaign Strategy (desde €1.500)

**Comparador de ahorro:**
- Tabla visual: "What you'd pay traditionally" vs "What you pay with us"

### Work (/work)

**Grid filtrable:**
- Filtros: All | Fashion | Beauty | Tech | Real Estate | Food
- Cards con imagen, título, tags de servicio
- Hover: overlay con descripción corta

**Case Study Individual (/work/[slug]):**
- Hero image fullscreen
- Challenge → Approach → Results (métricas)
- Galería de piezas creadas
- CTA: "Start a Similar Project"

### About (/about)

- Misión: "We believe the future of marketing is AI-native"
- Sección de tecnología: qué herramientas IA usamos (sin revelar secretos)
- Equipo: "Founded by D Business Group ES" + visión del fundador
- Timeline de la empresa (simplificado)

### Contact (/contact)

- Formulario: Nombre, Email, Empresa, Servicio (select), Presupuesto (select), Mensaje
- Envía a neurobulls@gmail.com vía Resend API
- Datos: neurobulls@gmail.com | Instagram: @neurobulls
- Mapa o zona horaria: Madrid, Spain (CET)

### Páginas Legales

Todas con contenido real cumpliendo legislación española:
- **Aviso Legal:** LSSI-CE art. 10 — D Business Group ES, datos de empresa
- **Política de Privacidad:** RGPD + LOPDGDD — formulario contacto, analytics, cookies
- **Política de Cookies:** LSSI-CE art. 22.2 — banner con aceptar/rechazar + tabla de cookies
- **Términos y Condiciones:** LCGC + LGDCU — servicios, pagos, propiedad intelectual IA

## SEO

- Metadata dinámica por página y locale (generateMetadata)
- Open Graph images generadas con next/og
- sitemap.xml y robots.txt automáticos
- Schema.org structured data (Organization, Service, LocalBusiness)
- URLs limpias con locale prefix (/es/, /en/)
- Alt text en todas las imágenes
- H1 único por página

## Logo

SVG minimalista: silueta de toro estilizada con líneas geométricas/circuitos (neuro + bull), integrado con tipografía "NEUROBULLS" en mayúsculas, peso bold. Variantes: logo completo, icono solo, monocromo.

## Componentes Clave

- `CookieBanner` — consentimiento RGPD con aceptar/rechazar/configurar
- `LanguageSwitcher` — toggle ES/EN en header
- `AnimatedCounter` — números que cuentan al entrar en viewport
- `ScrollReveal` — wrapper de Framer Motion para fade-in al scroll
- `BentoGrid` — layout asimétrico para portfolio
- `PricingCard` — card de tier con highlight para "popular"
- `ContactForm` — formulario con validación + envío vía Resend
- `ComparisonTable` — traditional vs NeuroBulls
