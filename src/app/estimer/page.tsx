import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Estimer mon bien — Les Agents de l'Immobilier",
  description: "Obtenez une estimation gratuite et précise de votre bien immobilier par nos experts locaux.",
};

const ARGUMENTS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "100% Gratuit",
    desc: "Notre estimation est entièrement gratuite et sans aucun engagement de votre part.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Confidentiel",
    desc: "Vos informations personnelles et les détails de votre bien restent strictement confidentiels.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Sous 48h",
    desc: "Recevez votre estimation détaillée dans les 48 heures suivant votre demande.",
  },
];

export default function EstimerPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Estimer votre bien"
          subtitle="Une estimation juste, basée sur notre expertise du marché local."
          breadcrumb={[{ label: "Estimer", href: "/estimer" }]}
          image="/loft-contemporain.png"
        />

        <section className="bg-creme py-16 lg:py-24">
          <div className="max-w-[1400px] mx-auto px-5 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

              {/* ── Formulaire (8 colonnes) ── */}
              <div className="lg:col-span-7">
                <h2 className="font-display text-2xl lg:text-3xl font-700 text-marine mb-2">
                  Demander une estimation
                </h2>
                <p className="font-sans text-[15px] text-gris-600 mb-8">
                  Remplissez ce formulaire et un de nos agents vous recontactera pour organiser une visite d&apos;estimation.
                </p>
                <ContactForm variant="estimation" />
              </div>

              {/* ── Colonne arguments (4 colonnes) ── */}
              <div className="lg:col-span-5">
                <div className="bg-blanc rounded-[4px] shadow-[0_4px_30px_rgba(0,32,70,0.06)] p-8 lg:p-10 space-y-8 lg:sticky lg:top-28">
                  <h3 className="font-display text-xl font-700 text-marine">Pourquoi nous faire confiance ?</h3>
                  {ARGUMENTS.map((arg) => (
                    <div key={arg.title} className="flex gap-4">
                      <div className="w-11 h-11 rounded-full bg-bleu-pale flex items-center justify-center shrink-0 text-bleu">
                        {arg.icon}
                      </div>
                      <div>
                        <h4 className="font-display text-[16px] font-600 text-marine">{arg.title}</h4>
                        <p className="font-sans text-[13px] text-gris-400 mt-0.5 leading-relaxed">{arg.desc}</p>
                      </div>
                    </div>
                  ))}
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
