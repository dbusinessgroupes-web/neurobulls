"use client";

import { useLocale } from "next-intl";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { Link } from "@/i18n/navigation";

export default function PoliticaPrivacidad() {
  const locale = useLocale();
  const isES = locale === "es";

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-40 pb-20">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            {isES ? "Política de Privacidad" : "Privacy Policy"}
          </h1>
          <p className="text-sm text-muted-foreground mb-10">
            {isES
              ? "Última actualización: 29 de marzo de 2026"
              : "Last updated: March 29, 2026"}
          </p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            {/* 1. Data Controller */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES
                  ? "1. Responsable del tratamiento"
                  : "1. Data Controller"}
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">
                    {isES ? "Responsable" : "Controller"}:
                  </span>{" "}
                  NeuroBulls / D Business Group ES
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    {isES ? "Domicilio" : "Address"}:
                  </span>{" "}
                  Cartagena, Murcia, {isES ? "España" : "Spain"}
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
              <p className="text-muted-foreground leading-relaxed mt-4">
                {isES
                  ? "Esta política de privacidad se aplica a todos los datos personales recogidos a través de este sitio web y ha sido elaborada de conformidad con el Reglamento General de Protección de Datos (RGPD - Reglamento UE 2016/679) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD)."
                  : "This privacy policy applies to all personal data collected through this website and has been prepared in accordance with the General Data Protection Regulation (GDPR - EU Regulation 2016/679) and the Spanish Organic Law 3/2018 on the Protection of Personal Data and the Guarantee of Digital Rights (LOPDGDD)."}
              </p>
            </section>

            {/* 2. Purpose of Processing */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES
                  ? "2. Finalidad del tratamiento"
                  : "2. Purpose of Data Processing"}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isES
                  ? "Los datos personales que recabamos se tratan con las siguientes finalidades:"
                  : "The personal data we collect is processed for the following purposes:"}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">
                    {isES
                      ? "Consultas del formulario de contacto"
                      : "Contact form inquiries"}
                    :
                  </span>{" "}
                  {isES
                    ? "Gestionar y responder a las solicitudes de información o presupuesto enviadas a través del formulario de contacto del sitio web."
                    : "To manage and respond to information requests or quote inquiries submitted through the website's contact form."}
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    {isES
                      ? "Prestación de servicios"
                      : "Service provision"}
                    :
                  </span>{" "}
                  {isES
                    ? "Tramitar la contratación y ejecución de los servicios solicitados, incluyendo la comunicación durante el desarrollo de los proyectos."
                    : "To process the engagement and execution of requested services, including communication during project development."}
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    {isES ? "Analítica web" : "Web analytics"}:
                  </span>{" "}
                  {isES
                    ? "Analizar el uso del sitio web mediante herramientas de analítica para mejorar la experiencia del usuario y el rendimiento del sitio."
                    : "To analyze website usage through analytics tools to improve user experience and site performance."}
                </li>
              </ul>
            </section>

            {/* 3. Legal Basis */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES
                  ? "3. Base jurídica del tratamiento"
                  : "3. Legal Basis for Processing"}
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">
                    {isES ? "Consentimiento" : "Consent"} (
                    {isES ? "Art. 6.1.a RGPD" : "Art. 6.1.a GDPR"}):
                  </span>{" "}
                  {isES
                    ? "El usuario otorga su consentimiento al enviar el formulario de contacto y aceptar esta política de privacidad."
                    : "The user grants consent by submitting the contact form and accepting this privacy policy."}
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    {isES ? "Interés legítimo" : "Legitimate interest"} (
                    {isES ? "Art. 6.1.f RGPD" : "Art. 6.1.f GDPR"}):
                  </span>{" "}
                  {isES
                    ? "Para el análisis del uso del sitio web mediante herramientas de analítica, con el fin de mejorar nuestros servicios y la experiencia del usuario."
                    : "For the analysis of website usage through analytics tools, in order to improve our services and user experience."}
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    {isES
                      ? "Ejecución contractual"
                      : "Contractual performance"}{" "}
                    ({isES ? "Art. 6.1.b RGPD" : "Art. 6.1.b GDPR"}):
                  </span>{" "}
                  {isES
                    ? "Cuando el tratamiento sea necesario para la ejecución de un contrato de prestación de servicios."
                    : "When the processing is necessary for the performance of a service agreement."}
                </li>
              </ul>
            </section>

            {/* 4. Data Recipients */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES
                  ? "4. Destinatarios de los datos"
                  : "4. Data Recipients"}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isES
                  ? "Los datos personales podrán ser comunicados a los siguientes destinatarios o categorías de destinatarios:"
                  : "Personal data may be disclosed to the following recipients or categories of recipients:"}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">
                    Resend, Inc.:
                  </span>{" "}
                  {isES
                    ? "Proveedor de servicio de correo electrónico transaccional utilizado para gestionar las comunicaciones del formulario de contacto."
                    : "Transactional email service provider used to manage contact form communications."}
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Vercel, Inc.:
                  </span>{" "}
                  {isES
                    ? "Proveedor de alojamiento web y servicios de analítica del sitio web."
                    : "Web hosting provider and website analytics service."}
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                {isES
                  ? "No se cederán datos a terceros salvo obligación legal."
                  : "Data will not be shared with third parties except where required by law."}
              </p>
            </section>

            {/* 5. International Transfers */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES
                  ? "5. Transferencias internacionales"
                  : "5. International Transfers"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isES
                  ? "Algunos de nuestros proveedores de servicios están ubicados en Estados Unidos. En particular:"
                  : "Some of our service providers are located in the United States. Specifically:"}
              </p>
              <ul className="space-y-3 text-muted-foreground mt-4">
                <li>
                  <span className="font-medium text-foreground">
                    Vercel, Inc. ({isES ? "EE.UU." : "USA"}):
                  </span>{" "}
                  {isES
                    ? "Ofrece garantías adecuadas mediante cláusulas contractuales tipo aprobadas por la Comisión Europea y el cumplimiento del EU-US Data Privacy Framework."
                    : "Provides adequate safeguards through Standard Contractual Clauses approved by the European Commission and compliance with the EU-US Data Privacy Framework."}
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Resend, Inc. ({isES ? "EE.UU." : "USA"}):
                  </span>{" "}
                  {isES
                    ? "Ofrece garantías adecuadas mediante cláusulas contractuales tipo y políticas de protección de datos conformes con el RGPD."
                    : "Provides adequate safeguards through Standard Contractual Clauses and GDPR-compliant data protection policies."}
                </li>
              </ul>
            </section>

            {/* 6. Retention Period */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES
                  ? "6. Plazo de conservación"
                  : "6. Data Retention Period"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isES
                  ? "Los datos personales recogidos a través del formulario de contacto se conservarán durante un plazo máximo de 2 años desde la última comunicación, salvo que exista una relación contractual en curso que justifique un plazo mayor. Una vez finalizada la relación, los datos se bloquearán durante los plazos de prescripción legalmente establecidos y posteriormente se suprimirán."
                  : "Personal data collected through the contact form will be retained for a maximum period of 2 years from the last communication, unless there is an ongoing contractual relationship that justifies a longer period. Once the relationship ends, the data will be blocked for the legally established limitation periods and subsequently deleted."}
              </p>
            </section>

            {/* 7. User Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES
                  ? "7. Derechos del interesado"
                  : "7. Data Subject Rights"}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isES
                  ? "De conformidad con el RGPD y la LOPDGDD, el usuario tiene derecho a:"
                  : "In accordance with the GDPR and LOPDGDD, the user has the right to:"}
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">
                    {isES ? "Acceso" : "Access"}:
                  </span>{" "}
                  {isES
                    ? "Conocer si se están tratando sus datos personales y, en tal caso, obtener una copia de los mismos."
                    : "Know whether personal data is being processed and, if so, obtain a copy."}
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    {isES ? "Rectificación" : "Rectification"}:
                  </span>{" "}
                  {isES
                    ? "Solicitar la corrección de datos inexactos o incompletos."
                    : "Request the correction of inaccurate or incomplete data."}
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    {isES ? "Supresión" : "Erasure"}:
                  </span>{" "}
                  {isES
                    ? "Solicitar la eliminación de sus datos cuando ya no sean necesarios para los fines para los que fueron recogidos."
                    : "Request the deletion of data when it is no longer necessary for the purposes for which it was collected."}
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    {isES ? "Portabilidad" : "Portability"}:
                  </span>{" "}
                  {isES
                    ? "Recibir sus datos en un formato estructurado, de uso común y lectura mecánica."
                    : "Receive data in a structured, commonly used, and machine-readable format."}
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    {isES
                      ? "Limitación del tratamiento"
                      : "Restriction of processing"}
                    :
                  </span>{" "}
                  {isES
                    ? "Solicitar la limitación del tratamiento de sus datos en determinadas circunstancias."
                    : "Request the restriction of data processing under certain circumstances."}
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    {isES ? "Oposición" : "Objection"}:
                  </span>{" "}
                  {isES
                    ? "Oponerse al tratamiento de sus datos por motivos relacionados con su situación particular."
                    : "Object to the processing of data on grounds relating to a particular situation."}
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                {isES
                  ? "Para ejercer cualquiera de estos derechos, puede enviar un correo electrónico a"
                  : "To exercise any of these rights, you may send an email to"}{" "}
                <a
                  href="mailto:neurobulls@gmail.com"
                  className="text-nb-red hover:underline"
                >
                  neurobulls@gmail.com
                </a>
                {isES
                  ? ", indicando su solicitud y adjuntando copia de su documento de identidad para verificar su identidad."
                  : ", indicating your request and attaching a copy of your identification document for identity verification."}
              </p>
            </section>

            {/* 8. Right to File Complaint */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES
                  ? "8. Derecho a reclamar ante la autoridad de control"
                  : "8. Right to File a Complaint"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isES
                  ? "Si considera que el tratamiento de sus datos personales vulnera la normativa vigente, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD):"
                  : "If you consider that the processing of your personal data infringes current regulations, you have the right to file a complaint with the Spanish Data Protection Agency (AEPD):"}
              </p>
              <p className="text-muted-foreground mt-2">
                <a
                  href="https://www.aepd.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nb-red hover:underline"
                >
                  www.aepd.es
                </a>
              </p>
            </section>

            {/* 9. Cookie Policy Reference */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES ? "9. Política de cookies" : "9. Cookie Policy"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isES
                  ? "Este sitio web utiliza cookies. Para más información sobre las cookies que utilizamos, consulte nuestra"
                  : "This website uses cookies. For more information about the cookies we use, please refer to our"}{" "}
                <Link
                  href="/politica-cookies"
                  className="text-nb-red hover:underline"
                >
                  {isES ? "Política de Cookies" : "Cookie Policy"}
                </Link>
                .
              </p>
            </section>

            {/* 10. Changes */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES
                  ? "10. Modificaciones de la política"
                  : "10. Policy Changes"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isES
                  ? "NeuroBulls se reserva el derecho de modificar esta política de privacidad para adaptarla a novedades legislativas o jurisprudenciales, así como a prácticas de la industria. En caso de cambios significativos, se informará a los usuarios a través del sitio web."
                  : "NeuroBulls reserves the right to modify this privacy policy to adapt it to legislative or case-law developments, as well as industry practices. In the event of significant changes, users will be informed through the website."}
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
