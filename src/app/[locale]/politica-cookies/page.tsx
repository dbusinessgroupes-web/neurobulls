"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { Link } from "@/i18n/navigation";

export default function PoliticaCookies() {
  const isES = false;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-40 pb-20">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            {isES ? "Política de Cookies" : "Cookie Policy"}
          </h1>
          <p className="text-sm text-muted-foreground mb-10">
            {isES
              ? "Última actualización: 29 de marzo de 2026"
              : "Last updated: March 29, 2026"}
          </p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            {/* 1. What Are Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES ? "1. Qué son las cookies" : "1. What Are Cookies"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isES
                  ? "Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo del usuario (ordenador, tablet o teléfono móvil) cuando los visita. Permiten que el sitio web recuerde información sobre su visita, como sus preferencias de idioma y otras configuraciones, lo que puede facilitar su próxima visita y hacer que el sitio resulte más útil."
                  : "Cookies are small text files that websites store on the user's device (computer, tablet, or mobile phone) when they visit. They allow the website to remember information about your visit, such as your language preferences and other settings, which can make your next visit easier and the site more useful to you."}
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                {isES
                  ? "De conformidad con el artículo 22.2 de la Ley 34/2002 de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), le informamos sobre las cookies utilizadas en este sitio web."
                  : "In accordance with Article 22.2 of Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), we inform you about the cookies used on this website."}
              </p>
            </section>

            {/* 2. Types of Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES
                  ? "2. Tipos de cookies utilizadas"
                  : "2. Types of Cookies Used"}
              </h2>

              <h3 className="text-xl font-medium text-foreground mt-6 mb-3">
                {isES
                  ? "2.1 Cookies necesarias (sin consentimiento)"
                  : "2.1 Necessary Cookies (no consent required)"}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isES
                  ? "Estas cookies son esenciales para el funcionamiento básico del sitio web. No requieren el consentimiento del usuario conforme a la normativa vigente."
                  : "These cookies are essential for the basic operation of the website. They do not require user consent under current regulations."}
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-3 font-medium text-foreground border-b border-border">
                        Cookie
                      </th>
                      <th className="text-left p-3 font-medium text-foreground border-b border-border">
                        {isES ? "Proveedor" : "Provider"}
                      </th>
                      <th className="text-left p-3 font-medium text-foreground border-b border-border">
                        {isES ? "Finalidad" : "Purpose"}
                      </th>
                      <th className="text-left p-3 font-medium text-foreground border-b border-border">
                        {isES ? "Tipo" : "Type"}
                      </th>
                      <th className="text-left p-3 font-medium text-foreground border-b border-border">
                        {isES ? "Duración" : "Duration"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border">
                      <td className="p-3 font-mono text-xs">cookie-consent</td>
                      <td className="p-3">NeuroBulls</td>
                      <td className="p-3">
                        {isES
                          ? "Almacena las preferencias de consentimiento de cookies del usuario"
                          : "Stores the user's cookie consent preferences"}
                      </td>
                      <td className="p-3">Local Storage</td>
                      <td className="p-3">
                        {isES ? "Persistente" : "Persistent"}
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-mono text-xs">NEXT_LOCALE</td>
                      <td className="p-3">NeuroBulls</td>
                      <td className="p-3">
                        {isES
                          ? "Almacena la preferencia de idioma del usuario"
                          : "Stores the user's language preference"}
                      </td>
                      <td className="p-3">Cookie</td>
                      <td className="p-3">1 {isES ? "año" : "year"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-medium text-foreground mt-8 mb-3">
                {isES
                  ? "2.2 Cookies de analítica (requieren consentimiento)"
                  : "2.2 Analytics Cookies (consent required)"}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isES
                  ? "Estas cookies nos permiten analizar el uso del sitio web para medir y mejorar su rendimiento. Solo se activan cuando el usuario otorga su consentimiento."
                  : "These cookies allow us to analyze website usage to measure and improve its performance. They are only activated when the user grants consent."}
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-3 font-medium text-foreground border-b border-border">
                        Cookie
                      </th>
                      <th className="text-left p-3 font-medium text-foreground border-b border-border">
                        {isES ? "Proveedor" : "Provider"}
                      </th>
                      <th className="text-left p-3 font-medium text-foreground border-b border-border">
                        {isES ? "Finalidad" : "Purpose"}
                      </th>
                      <th className="text-left p-3 font-medium text-foreground border-b border-border">
                        {isES ? "Tipo" : "Type"}
                      </th>
                      <th className="text-left p-3 font-medium text-foreground border-b border-border">
                        {isES ? "Duración" : "Duration"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border">
                      <td className="p-3 font-mono text-xs">va</td>
                      <td className="p-3">Vercel Analytics</td>
                      <td className="p-3">
                        {isES
                          ? "Recoge datos anónimos sobre el uso del sitio web, como páginas visitadas, duración de la sesión y tipo de dispositivo"
                          : "Collects anonymous data about website usage, such as pages visited, session duration, and device type"}
                      </td>
                      <td className="p-3">Cookie</td>
                      <td className="p-3">
                        {isES ? "Sesión" : "Session"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 3. How to Manage Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES
                  ? "3. Cómo gestionar las cookies"
                  : "3. How to Manage Cookies"}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isES
                  ? "Además del panel de configuración de cookies de este sitio web, puede configurar su navegador para aceptar, rechazar o eliminar cookies. A continuación se indican los enlaces a las instrucciones de los navegadores más utilizados:"
                  : "In addition to the cookie settings panel on this website, you can configure your browser to accept, reject, or delete cookies. Below are links to instructions for the most commonly used browsers:"}
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-nb-red hover:underline"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-nb-red hover:underline"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/guide/safari/manage-cookies-sfri11471"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-nb-red hover:underline"
                  >
                    Safari
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/microsoft-edge/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-nb-red hover:underline"
                  >
                    Microsoft Edge
                  </a>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                {isES
                  ? "Tenga en cuenta que, si deshabilita las cookies necesarias, algunas funcionalidades del sitio web podrían no funcionar correctamente."
                  : "Please note that if you disable necessary cookies, some website features may not function properly."}
              </p>
            </section>

            {/* 4. How to Revoke Consent */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES
                  ? "4. Cómo revocar el consentimiento"
                  : "4. How to Revoke Consent"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isES
                  ? "Puede revocar su consentimiento en cualquier momento eliminando las cookies de su navegador o utilizando el panel de configuración de cookies de este sitio web. Para acceder al panel de cookies, puede eliminar la clave \"cookie-consent\" del almacenamiento local de su navegador, lo que hará que el banner de cookies vuelva a aparecer en su próxima visita."
                  : "You can revoke your consent at any time by deleting cookies from your browser or using this website's cookie settings panel. To access the cookie panel, you can delete the \"cookie-consent\" key from your browser's local storage, which will cause the cookie banner to reappear on your next visit."}
              </p>
            </section>

            {/* 5. Privacy Policy Link */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES
                  ? "5. Política de privacidad"
                  : "5. Privacy Policy"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isES
                  ? "Para más información sobre cómo tratamos sus datos personales, consulte nuestra"
                  : "For more information about how we process your personal data, please refer to our"}{" "}
                <Link
                  href="/politica-privacidad"
                  className="text-nb-red hover:underline"
                >
                  {isES ? "Política de Privacidad" : "Privacy Policy"}
                </Link>
                .
              </p>
            </section>

            {/* 6. Changes */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES
                  ? "6. Actualización de esta política"
                  : "6. Updates to This Policy"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isES
                  ? "NeuroBulls se reserva el derecho de modificar esta política de cookies para adaptarla a novedades legislativas o cambios en las cookies utilizadas. Le recomendamos revisarla periódicamente. Cualquier cambio significativo será comunicado a través del banner de cookies del sitio web."
                  : "NeuroBulls reserves the right to modify this cookie policy to adapt it to legislative developments or changes in the cookies used. We recommend reviewing it periodically. Any significant changes will be communicated through the website's cookie banner."}
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
