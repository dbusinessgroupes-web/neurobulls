"use client";

import { useLocale } from "next-intl";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";

export default function AvisoLegal() {
  const locale = useLocale();
  const isES = locale === "es";

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-40 pb-20">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            {isES ? "Aviso Legal" : "Legal Notice"}
          </h1>
          <p className="text-sm text-muted-foreground mb-10">
            {isES
              ? "Última actualización: 29 de marzo de 2026"
              : "Last updated: March 29, 2026"}
          </p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            {/* 1. Identification */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES
                  ? "1. Datos identificativos"
                  : "1. Identification Details"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isES ? (
                  <>
                    En cumplimiento del deber de información establecido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se comunican los siguientes datos identificativos del titular de este sitio web:
                  </>
                ) : (
                  <>
                    In compliance with the duty of information established in Article 10 of Law 34/2002, of July 11, on Information Society Services and Electronic Commerce (LSSI-CE), the following identification details of the owner of this website are provided:
                  </>
                )}
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">
                    {isES ? "Nombre comercial" : "Trade name"}:
                  </span>{" "}
                  NeuroBulls
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    {isES ? "Titular" : "Owner"}:
                  </span>{" "}
                  D Business Group ES
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    {isES ? "Domicilio social" : "Registered office"}:
                  </span>{" "}
                  Madrid, {isES ? "España" : "Spain"}
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    {isES ? "Correo electrónico" : "Email"}:
                  </span>{" "}
                  <a
                    href="mailto:neurobulls@gmail.com"
                    className="text-nb-red hover:underline"
                  >
                    neurobulls@gmail.com
                  </a>
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    {isES ? "Sitio web" : "Website"}:
                  </span>{" "}
                  <a
                    href="https://neurobulls.com"
                    className="text-nb-red hover:underline"
                  >
                    neurobulls.com
                  </a>
                </li>
              </ul>
            </section>

            {/* 2. Purpose */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES
                  ? "2. Objeto del sitio web"
                  : "2. Purpose of the Website"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isES
                  ? "El presente sitio web tiene como finalidad informar sobre los servicios de marketing con inteligencia artificial ofrecidos por NeuroBulls, incluyendo fotografía, vídeo, modelos y estrategia de contenido generados mediante IA. Asimismo, facilita un medio de contacto para la contratación de dichos servicios."
                  : "This website aims to provide information about the artificial intelligence marketing services offered by NeuroBulls, including AI-generated photography, video, models, and content strategy. It also provides a means of contact for the engagement of such services."}
              </p>
            </section>

            {/* 3. Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES ? "3. Propiedad intelectual" : "3. Intellectual Property"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isES
                  ? "Todos los contenidos de este sitio web, incluyendo a título enunciativo pero no limitativo, textos, gráficos, imágenes, logotipos, iconos, software, diseño gráfico, código fuente y contenidos generados por inteligencia artificial, son propiedad de NeuroBulls / D Business Group ES o de sus respectivos licenciantes, y están protegidos por las leyes de propiedad intelectual e industrial aplicables."
                  : "All content on this website, including but not limited to texts, graphics, images, logos, icons, software, graphic design, source code, and AI-generated content, is the property of NeuroBulls / D Business Group ES or its respective licensors, and is protected by applicable intellectual and industrial property laws."}
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                {isES
                  ? "Queda prohibida la reproducción, distribución, comunicación pública o transformación de los contenidos de este sitio web sin la autorización expresa y por escrito de NeuroBulls, salvo en los casos legalmente permitidos."
                  : "The reproduction, distribution, public communication, or transformation of the contents of this website is prohibited without the express written authorization of NeuroBulls, except in legally permitted cases."}
              </p>
            </section>

            {/* 4. Conditions of Use */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES
                  ? "4. Condiciones de uso"
                  : "4. Conditions of Use"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isES
                  ? "El usuario se compromete a hacer un uso adecuado del sitio web de conformidad con la ley, el presente aviso legal, las buenas costumbres y el orden público. El usuario se obliga a no utilizar el sitio web con fines ilícitos o contrarios al contenido del presente aviso legal, lesivos de los derechos e intereses de terceros, o que de cualquier modo puedan dañar, inutilizar o deteriorar el sitio web o impedir su normal utilización."
                  : "The user undertakes to use this website appropriately in accordance with the law, this legal notice, good customs, and public order. The user shall not use the website for unlawful purposes or contrary to this legal notice, harmful to the rights and interests of third parties, or in any way that may damage, disable, or impair the website or prevent its normal use."}
              </p>
            </section>

            {/* 5. Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES
                  ? "5. Limitación de responsabilidad"
                  : "5. Limitation of Liability"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isES
                  ? "NeuroBulls no se responsabiliza de los daños y perjuicios de cualquier naturaleza que pudieran derivarse del uso del sitio web, incluyendo, sin limitación: errores u omisiones en los contenidos, falta de disponibilidad del sitio web, la transmisión de virus o programas maliciosos a pesar de haber adoptado las medidas tecnológicas necesarias para evitarlo, y los daños derivados del uso indebido de los contenidos por parte de los usuarios."
                  : "NeuroBulls shall not be liable for any damages of any nature arising from the use of this website, including but not limited to: errors or omissions in the content, lack of availability of the website, transmission of viruses or malicious programs despite having adopted the necessary technological measures to prevent it, and damages arising from the misuse of content by users."}
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                {isES
                  ? "NeuroBulls se reserva el derecho de modificar el contenido del sitio web sin previo aviso y sin ninguna obligación de comunicar dichas modificaciones a los usuarios."
                  : "NeuroBulls reserves the right to modify the content of the website without prior notice and without any obligation to communicate such modifications to users."}
              </p>
            </section>

            {/* 6. Links */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES
                  ? "6. Enlaces a terceros"
                  : "6. Third-Party Links"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isES
                  ? "Este sitio web puede contener enlaces a sitios de terceros. NeuroBulls no se responsabiliza del contenido, las políticas de privacidad o las prácticas de sitios web de terceros. El acceso a dichos sitios se realiza bajo la exclusiva responsabilidad del usuario."
                  : "This website may contain links to third-party sites. NeuroBulls is not responsible for the content, privacy policies, or practices of third-party websites. Access to such sites is at the sole responsibility of the user."}
              </p>
            </section>

            {/* 7. Applicable Law and Jurisdiction */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES
                  ? "7. Legislación aplicable y jurisdicción"
                  : "7. Applicable Law and Jurisdiction"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isES
                  ? "El presente aviso legal se rige en todos y cada uno de sus extremos por la legislación española. Para la resolución de cualquier controversia que pudiera derivarse del acceso o uso del sitio web, NeuroBulls y el usuario acuerdan someterse expresamente a los Juzgados y Tribunales de la ciudad de Madrid, con renuncia expresa a cualquier otro fuero que pudiera corresponderles, salvo que la legislación aplicable disponga imperativamente otro fuero distinto."
                  : "This legal notice is governed in all respects by Spanish law. For the resolution of any dispute arising from access to or use of this website, NeuroBulls and the user expressly agree to submit to the Courts and Tribunals of the city of Madrid, with express waiver of any other jurisdiction that may apply, unless applicable legislation imperatively provides for a different jurisdiction."}
              </p>
            </section>

            {/* 8. Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES ? "8. Contacto" : "8. Contact"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isES
                  ? "Para cualquier consulta relacionada con este aviso legal, puede contactar con nosotros a través del correo electrónico"
                  : "For any inquiries related to this legal notice, you may contact us via email at"}{" "}
                <a
                  href="mailto:neurobulls@gmail.com"
                  className="text-nb-red hover:underline"
                >
                  neurobulls@gmail.com
                </a>
                .
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
