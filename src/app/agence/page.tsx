import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { TEAM } from "@/data/demo";

/* ─────────────────────────────────────────────────────────────
   L'AGENCE — Sans animations IA
   ───────────────────────────────────────────────────────────── */

const VALUES = [
  { title: "Indépendance", desc: "Libres de tout réseau, nous agissons uniquement dans votre intérêt." },
  { title: "Proximité", desc: "Ancré localement, nous connaissons chaque rue, chaque quartier." },
  { title: "Transparence", desc: "Information claire à chaque étape, sans zone d'ombre." },
  { title: "Excellence", desc: "Un service haut de gamme accessible à tous les projets." },
];

export default function AgencePage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Notre agence"
          subtitle="Des agents passionnés, un accompagnement humain."
          breadcrumb={[{ label: "L'agence", href: "/agence" }]}
        />

        {/* ── Notre histoire ── */}
        <section className="bg-blanc py-16 lg:py-24 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-5 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
              <div className="lg:col-span-5 relative">
                <div className="img-zoom relative aspect-[3/4] rounded-[4px] overflow-hidden">
                  <Image src="/hero-real-2.jpg" alt="Notre agence" fill className="object-cover" sizes="40vw" />
                </div>
                <div className="hidden lg:block absolute -bottom-6 -left-6 w-32 h-32 bg-bleu/10 rounded-[4px] -z-10" />
              </div>

              <div className="lg:col-span-6 lg:col-start-7 lg:-ml-8 relative z-10 bg-blanc lg:shadow-[0_4px_30px_rgba(0,32,70,0.06)] lg:rounded-[4px] lg:px-12 lg:py-14">
                <p className="font-body text-[12px] font-semibold uppercase tracking-[0.25em] text-bleu mb-3">Notre histoire</p>
                <h2 className="font-display text-3xl lg:text-4xl font-700 text-marine mb-5">
                  Plus qu&apos;une agence,<br />une équipe de confiance
                </h2>
                <div className="space-y-4 font-sans text-[15px] text-gris-600 leading-relaxed">
                  <p>
                    Fondée en 2012, Les Agents de l&apos;Immobilier est née d&apos;une conviction simple :
                    chaque projet immobilier mérite un accompagnement humain, réactif et transparent.
                  </p>
                  <p>
                    Notre indépendance est notre force. Libres de tout réseau, nous sélectionnons
                    les meilleurs outils et méthodes pour servir vos intérêts, et uniquement les vôtres.
                  </p>
                  <p>
                    Implantés au cœur de Montrouge et actifs sur l&apos;ensemble des Hauts-de-Seine,
                    nous cultivons une connaissance fine du terrain qui fait toute la différence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Valeurs ── */}
        <section className="bg-creme py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-5 lg:px-12">
            <div className="text-center mb-12">
              <p className="font-body text-[12px] font-semibold uppercase tracking-[0.25em] text-bleu mb-2">Nos valeurs</p>
              <h2 className="font-display text-3xl lg:text-4xl font-800 text-marine">Ce qui nous guide</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUES.map((v, i) => (
                <div
                  key={v.title}
                  className="bg-blanc rounded-[4px] p-7 shadow-[0_2px_16px_rgba(0,32,70,0.04)] hover:shadow-[0_8px_30px_rgba(0,32,70,0.08)] transition-shadow"
                >
                  <div className="w-10 h-10 rounded-full bg-bleu-pale flex items-center justify-center text-bleu mb-4">
                    <span className="font-display text-[15px] font-800">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-display text-lg font-700 text-marine mb-2">{v.title}</h3>
                  <p className="font-sans text-[14px] text-gris-600 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Équipe ── */}
        <section className="bg-blanc py-16 lg:py-24">
          <div className="max-w-[1400px] mx-auto px-5 lg:px-12">
            <div className="text-center mb-14">
              <p className="font-body text-[12px] font-semibold uppercase tracking-[0.25em] text-bleu mb-2">L&apos;équipe</p>
              <h2 className="font-display text-3xl lg:text-4xl font-800 text-marine">Les visages derrière votre projet</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
              {TEAM.map((member) => (
                <div key={member.name} className="text-center group">
                  <div className="relative w-48 h-48 mx-auto mb-5 rounded-full overflow-hidden border-4 border-creme group-hover:border-bleu/30 transition-colors">
                    <Image src={member.image} alt={member.name} fill className="object-cover" sizes="200px" />
                  </div>
                  <h3 className="font-display text-xl font-700 text-marine">{member.name}</h3>
                  <p className="font-sans text-[13px] text-bleu font-semibold mt-1">{member.role}</p>
                  <p className="font-sans text-[13px] text-gris-400 mt-2">{member.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-marine py-16 lg:py-20 text-center">
          <div className="max-w-2xl mx-auto px-5">
            <h2 className="font-display text-3xl lg:text-4xl font-800 text-blanc mb-4">Parlons de votre projet</h2>
            <p className="font-sans text-[16px] text-blanc/60 mb-8">
              Prenez rendez-vous avec un de nos agents pour discuter de votre projet immobilier.
            </p>
            <a href="/contact" className="inline-block px-10 py-3.5 font-body text-[13px] font-bold uppercase tracking-[0.12em] text-marine bg-blanc hover:bg-creme transition-colors rounded-full">
              Nous contacter
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
