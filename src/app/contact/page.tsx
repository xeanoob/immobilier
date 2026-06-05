import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Les Agents de l'Immobilier",
  description: "Contactez notre agence. Nous sommes à votre écoute pour tous vos projets immobiliers.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Nous contacter"
          subtitle="Une question, un projet ? Nous sommes à votre écoute."
          breadcrumb={[{ label: "Contact", href: "/contact" }]}
        />

        <section className="bg-creme py-16 lg:py-24">
          <div className="max-w-[1400px] mx-auto px-5 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

              {/* ── Formulaire ── */}
              <div className="lg:col-span-7">
                <h2 className="font-display text-2xl lg:text-3xl font-700 text-marine mb-2">
                  Envoyez-nous un message
                </h2>
                <p className="font-sans text-[15px] text-gris-600 mb-8">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les meilleurs délais.
                </p>
                <ContactForm variant="contact" />
              </div>

              {/* ── Infos de contact ── */}
              <div className="lg:col-span-5">
                <div className="bg-blanc rounded-[4px] shadow-[0_4px_30px_rgba(0,32,70,0.06)] p-8 lg:p-10 lg:sticky lg:top-28">
                  <h3 className="font-display text-xl font-700 text-marine mb-6">Informations pratiques</h3>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-bleu-pale flex items-center justify-center shrink-0 text-bleu">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-display text-[15px] font-600 text-marine">Adresse</h4>
                        <p className="font-sans text-[14px] text-gris-400 mt-0.5">12 Rue de la République<br />92120 Montrouge</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-bleu-pale flex items-center justify-center shrink-0 text-bleu">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-display text-[15px] font-600 text-marine">Téléphone</h4>
                        <a href="tel:+33100000000" className="font-sans text-[14px] text-gris-400 hover:text-bleu transition-colors">01 00 00 00 00</a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-bleu-pale flex items-center justify-center shrink-0 text-bleu">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-display text-[15px] font-600 text-marine">Email</h4>
                        <a href="mailto:contact@lesagents.immo" className="font-sans text-[14px] text-gris-400 hover:text-bleu transition-colors">contact@lesagents.immo</a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-bleu-pale flex items-center justify-center shrink-0 text-bleu">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-display text-[15px] font-600 text-marine">Horaires</h4>
                        <p className="font-sans text-[14px] text-gris-400 mt-0.5">
                          Lun — Ven : 9h00 — 19h00<br />
                          Sam : 10h00 — 17h00<br />
                          Dim : Sur rendez-vous
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ── Map placeholder ── */}
                  <div className="mt-8 relative aspect-[16/10] bg-gris-100 rounded-[4px] overflow-hidden flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-8 h-8 text-gris-300 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      <p className="font-sans text-[12px] text-gris-300">Carte interactive</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
