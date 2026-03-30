"use client";

import { useLocale } from "next-intl";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";

export default function Terminos() {
  const locale = useLocale();
  const isES = locale === "es";

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-40 pb-20">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            {isES ? "Términos y Condiciones" : "Terms and Conditions"}
          </h1>
          <p className="text-sm text-muted-foreground mb-10">
            {isES
              ? "Última actualización: 29 de marzo de 2026"
              : "Last updated: March 29, 2026"}
          </p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            {/* 1. Parties */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES ? "1. Partes" : "1. Parties"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isES
                  ? "Los presentes términos y condiciones regulan la relación entre NeuroBulls, nombre comercial de D Business Group ES, con domicilio social en España (en adelante, \"NeuroBulls\" o \"el Prestador\"), y cualquier persona física o jurídica que contrate los servicios ofrecidos a través del sitio web neurobulls.com (en adelante, \"el Cliente\")."
                  : "These terms and conditions govern the relationship between NeuroBulls, a trade name of D Business Group ES, with registered office in Spain (hereinafter, \"NeuroBulls\" or \"the Provider\"), and any natural or legal person who engages the services offered through the website neurobulls.com (hereinafter, \"the Client\")."}
              </p>
            </section>

            {/* 2. Object */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES
                  ? "2. Objeto de los servicios"
                  : "2. Object of Services"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isES
                  ? "NeuroBulls ofrece servicios de marketing con inteligencia artificial, incluyendo pero no limitados a: fotografía generada por IA, vídeo generado por IA, creación de modelos virtuales, estrategia de contenido y consultoría de marketing digital, según se describe en el sitio web y en las propuestas comerciales individuales."
                  : "NeuroBulls offers AI marketing services, including but not limited to: AI-generated photography, AI-generated video, virtual model creation, content strategy, and digital marketing consultancy, as described on the website and in individual commercial proposals."}
              </p>
            </section>

            {/* 3. Contracting Process */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES
                  ? "3. Proceso de contratación"
                  : "3. Contracting Process"}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isES
                  ? "El proceso de contratación de los servicios de NeuroBulls sigue las siguientes etapas:"
                  : "The process of engaging NeuroBulls services follows these stages:"}
              </p>
              <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
                <li>
                  <span className="font-medium text-foreground">
                    {isES ? "Contacto inicial" : "Initial contact"}:
                  </span>{" "}
                  {isES
                    ? "El Cliente envía una solicitud a través del formulario de contacto del sitio web o por correo electrónico a neurobulls@gmail.com."
                    : "The Client submits an inquiry through the website's contact form or via email to neurobulls@gmail.com."}
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    {isES ? "Propuesta" : "Proposal"}:
                  </span>{" "}
                  {isES
                    ? "NeuroBulls elabora una propuesta comercial detallada con el alcance, plazos y precio de los servicios solicitados."
                    : "NeuroBulls prepares a detailed commercial proposal outlining the scope, timelines, and pricing of the requested services."}
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    {isES ? "Aceptación" : "Acceptance"}:
                  </span>{" "}
                  {isES
                    ? "El Cliente acepta la propuesta por escrito (correo electrónico o firma de contrato), momento en el que se formaliza la relación contractual."
                    : "The Client accepts the proposal in writing (email or contract signature), at which point the contractual relationship is formalized."}
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    {isES ? "Ejecución" : "Execution"}:
                  </span>{" "}
                  {isES
                    ? "NeuroBulls procede a la ejecución de los servicios conforme a los términos acordados."
                    : "NeuroBulls proceeds with the execution of services according to the agreed terms."}
                </li>
              </ol>
            </section>

            {/* 4. Pricing */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES ? "4. Precios" : "4. Pricing"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isES
                  ? "Los precios de los servicios son los publicados en el sitio web o los indicados en la propuesta comercial individual. Todos los precios se expresan en euros. Los precios no incluyen el Impuesto sobre el Valor Añadido (IVA, 21%) salvo que se indique expresamente lo contrario. NeuroBulls se reserva el derecho de modificar los precios publicados en el sitio web en cualquier momento, sin que ello afecte a los servicios ya contratados."
                  : "Service prices are those published on the website or indicated in the individual commercial proposal. All prices are expressed in euros. Prices do not include Value Added Tax (VAT, 21%) unless expressly stated otherwise. NeuroBulls reserves the right to modify the prices published on the website at any time, without affecting already contracted services."}
              </p>
            </section>

            {/* 5. Payment */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES ? "5. Condiciones de pago" : "5. Payment Terms"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isES
                  ? "Salvo que se acuerde otra cosa por escrito, las condiciones de pago estándar son las siguientes:"
                  : "Unless otherwise agreed in writing, the standard payment terms are as follows:"}
              </p>
              <ul className="space-y-2 text-muted-foreground mt-4">
                <li>
                  <span className="font-medium text-foreground">50%</span>{" "}
                  {isES
                    ? "del importe total al confirmar la contratación del servicio (pago por adelantado)."
                    : "of the total amount upon confirmation of the service engagement (upfront payment)."}
                </li>
                <li>
                  <span className="font-medium text-foreground">50%</span>{" "}
                  {isES
                    ? "del importe total a la entrega final del trabajo."
                    : "of the total amount upon final delivery of the work."}
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                {isES
                  ? "Para paquetes mensuales, el pago se realizará mensualmente por adelantado."
                  : "For monthly packages, payment is made monthly in advance."}
              </p>
            </section>

            {/* 6. Delivery */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES ? "6. Plazos de entrega" : "6. Delivery Timelines"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isES
                  ? "Los plazos de entrega serán los especificados en la propuesta comercial o en la descripción del paquete de servicios seleccionado. Los plazos comienzan a contar desde la recepción del pago inicial y de todos los materiales necesarios proporcionados por el Cliente. NeuroBulls hará todos los esfuerzos razonables para cumplir con los plazos establecidos, si bien los plazos indicados son estimativos y no constituyen un compromiso firme salvo que se estipule expresamente lo contrario."
                  : "Delivery timelines will be as specified in the commercial proposal or in the description of the selected service package. Timelines commence from the receipt of the initial payment and all necessary materials provided by the Client. NeuroBulls will make all reasonable efforts to meet the established timelines, although the indicated timelines are estimates and do not constitute a firm commitment unless expressly stipulated otherwise."}
              </p>
            </section>

            {/* 7. Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES ? "7. Propiedad intelectual" : "7. Intellectual Property"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isES
                  ? "Una vez completado el pago total de los servicios, el Cliente recibirá una licencia comercial completa sobre los entregables producidos por NeuroBulls para su uso comercial sin restricciones."
                  : "Upon full payment for the services, the Client will receive a full commercial license over the deliverables produced by NeuroBulls for unrestricted commercial use."}
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                {isES
                  ? "NeuroBulls se reserva el derecho de utilizar los entregables en su portfolio, sitio web, redes sociales y materiales promocionales con fines de autopromoción, salvo que se firme un acuerdo de confidencialidad (NDA) que lo impida."
                  : "NeuroBulls reserves the right to use the deliverables in its portfolio, website, social media, and promotional materials for self-promotion purposes, unless a Non-Disclosure Agreement (NDA) is signed that prevents it."}
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                {isES
                  ? "Las herramientas, metodologías, plantillas y procesos internos de NeuroBulls no se transfieren al Cliente y siguen siendo propiedad exclusiva de NeuroBulls."
                  : "NeuroBulls' internal tools, methodologies, templates, and processes are not transferred to the Client and remain the exclusive property of NeuroBulls."}
              </p>
            </section>

            {/* 8. AI-Generated Content */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES
                  ? "8. Contenido generado por inteligencia artificial"
                  : "8. AI-Generated Content"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isES
                  ? "El Cliente reconoce y acepta que todos los modelos, imágenes y vídeos creados por NeuroBulls son generados mediante inteligencia artificial y no representan a personas reales. Los modelos virtuales son creaciones ficticias generadas por IA."
                  : "The Client acknowledges and accepts that all models, images, and videos created by NeuroBulls are generated using artificial intelligence and do not represent real people. Virtual models are fictional AI-generated creations."}
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                {isES
                  ? "El Cliente asume la responsabilidad del uso que haga del contenido generado por IA, incluyendo el cumplimiento de la normativa aplicable sobre publicidad, derechos de imagen y etiquetado de contenido generado por IA en su jurisdicción."
                  : "The Client assumes responsibility for the use made of AI-generated content, including compliance with applicable regulations regarding advertising, image rights, and labeling of AI-generated content in their jurisdiction."}
              </p>
            </section>

            {/* 9. Revisions */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES ? "9. Revisiones" : "9. Revisions"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isES
                  ? "El número de revisiones incluidas dependerá del paquete de servicios contratado y se especificará en la propuesta comercial. Las revisiones adicionales fuera del alcance acordado podrán estar sujetas a un coste adicional, que será comunicado al Cliente antes de su ejecución."
                  : "The number of included revisions will depend on the contracted service package and will be specified in the commercial proposal. Additional revisions outside the agreed scope may be subject to additional costs, which will be communicated to the Client before execution."}
              </p>
            </section>

            {/* 10. Cancellation */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES ? "10. Cancelación" : "10. Cancellation"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isES
                  ? "Para paquetes mensuales, cualquiera de las partes podrá cancelar la relación contractual mediante preaviso por escrito con al menos 30 días naturales de antelación."
                  : "For monthly packages, either party may cancel the contractual relationship by providing written notice at least 30 calendar days in advance."}
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                {isES
                  ? "Para proyectos puntuales, en caso de cancelación por parte del Cliente una vez iniciado el trabajo, NeuroBulls facturará proporcionalmente por el trabajo ya realizado. El pago por adelantado no será reembolsable si el trabajo correspondiente ya ha sido ejecutado."
                  : "For one-off projects, in the event of cancellation by the Client once work has commenced, NeuroBulls will invoice proportionally for work already completed. The upfront payment is non-refundable if the corresponding work has already been executed."}
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                {isES
                  ? "NeuroBulls se reserva el derecho de cancelar un proyecto en caso de impago, incumplimiento de estos términos por parte del Cliente, o circunstancias de fuerza mayor."
                  : "NeuroBulls reserves the right to cancel a project in the event of non-payment, breach of these terms by the Client, or force majeure circumstances."}
              </p>
            </section>

            {/* 11. Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES
                  ? "11. Limitación de responsabilidad"
                  : "11. Limitation of Liability"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isES
                  ? "La responsabilidad total de NeuroBulls frente al Cliente por cualquier reclamación derivada de o relacionada con los servicios prestados estará limitada al importe total abonado por el Cliente por dichos servicios."
                  : "The total liability of NeuroBulls to the Client for any claim arising from or related to the services provided shall be limited to the total amount paid by the Client for such services."}
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                {isES
                  ? "NeuroBulls no será responsable de daños indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo la pérdida de beneficios, datos, uso u otra pérdida intangible, derivados del uso o la imposibilidad de uso de los entregables."
                  : "NeuroBulls shall not be liable for indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, use, or other intangible loss, arising from the use or inability to use the deliverables."}
              </p>
            </section>

            {/* 12. Applicable Law */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES
                  ? "12. Legislación aplicable"
                  : "12. Applicable Law"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isES
                  ? "Los presentes términos y condiciones se rigen por la legislación española. Para la resolución de cualquier controversia derivada de la interpretación o ejecución de estos términos, ambas partes se someten expresamente a la jurisdicción de los Juzgados y Tribunales competentes en España, con renuncia a cualquier otro fuero que pudiera corresponderles."
                  : "These terms and conditions are governed by Spanish law. For the resolution of any dispute arising from the interpretation or execution of these terms, both parties expressly submit to the competent Courts and Tribunals in Spain, waiving any other jurisdiction that may apply."}
              </p>
            </section>

            {/* 13. ODR Platform */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES
                  ? "13. Resolución de litigios en línea (consumidores UE)"
                  : "13. Online Dispute Resolution (EU Consumers)"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isES
                  ? "De conformidad con el Reglamento (UE) 524/2013, informamos a los consumidores de la Unión Europea que la Comisión Europea pone a su disposición una plataforma de resolución de litigios en línea (plataforma ODR), accesible en el siguiente enlace:"
                  : "In accordance with Regulation (EU) 524/2013, we inform consumers in the European Union that the European Commission provides an online dispute resolution platform (ODR platform), accessible at the following link:"}
              </p>
              <p className="text-muted-foreground mt-2">
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nb-red hover:underline"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                {isES
                  ? "Nuestro correo electrónico de contacto para reclamaciones es"
                  : "Our contact email for complaints is"}{" "}
                <a
                  href="mailto:neurobulls@gmail.com"
                  className="text-nb-red hover:underline"
                >
                  neurobulls@gmail.com
                </a>
                .
              </p>
            </section>

            {/* 14. Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isES ? "14. Contacto" : "14. Contact"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isES
                  ? "Para cualquier consulta relacionada con estos términos y condiciones, puede contactar con nosotros a través del correo electrónico"
                  : "For any inquiries related to these terms and conditions, you may contact us via email at"}{" "}
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
