import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { TransitionLink } from "@/components/PageTransition";

/* ─────────────────────────────────────────────────────────────
   VENDRE — Sans animations IA
   ───────────────────────────────────────────────────────────── */

const STEPS = [
  {
    num: "01",
    title: "Estimation précise",
    desc: "Nous analysons votre bien, le marché local et les transactions récentes pour déterminer un prix juste et réaliste. Notre estimation est gratuite et sans engagement.",
    image: "/hero-real-2.jpg",
  },
  {
    num: "02",
    title: "Mise en valeur",
    desc: "Photos professionnelles, visite virtuelle, home staging digital : nous présentons votre bien sous son meilleur jour pour attirer les acquéreurs qualifiés.",
    image: "/hero-real.jpg",
  },
  {
    num: "03",
    title: "Accompagnement complet",
    desc: "De la première visite à la signature chez le notaire, nous gérons chaque étape avec rigueur et transparence. Vous êtes informé en temps réel.",
    image: "/hero-real-2.jpg",
  },
];

function StepBlock({ step, index }: { step: typeof STEPS[0]; index: number }) {
  const reverse = index % 2 !== 0;

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center ${index > 0 ? "mt-16 lg:mt-24" : ""}`}>
      <div className={`img-zoom relative aspect-[4/3] ${reverse ? "lg:order-2" : ""}`}>
        <Image src={step.image} alt={step.title} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
      </div>
      <div className={`
        relative z-10 bg-blanc shadow-[0_4px_30px_rgba(0,32,70,0.08)] rounded-[4px] px-8 lg:px-12 py-10 lg:py-14
        -mt-6 mx-4 lg:mt-0 lg:mx-0
        ${reverse ? "lg:-mr-16 lg:order-1" : "lg:-ml-16"}
      `}>
        <span className="font-display text-5xl font-800 text-bleu/15">{step.num}</span>
        <h3 className="font-display text-2xl lg:text-3xl font-700 text-marine mt-2 mb-4">{step.title}</h3>
        <p className="font-sans text-[15px] text-gris-600 leading-relaxed">{step.desc}</p>
      </div>
    </div>
  );
}

export default function VendrePage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Vendre votre bien"
          subtitle="Un accompagnement d'expert pour vendre rapidement et au meilleur prix."
          breadcrumb={[{ label: "Vendre", href: "/vendre" }]}
          image="/hero-real-2.jpg"
        />

        <section className="bg-creme py-16 lg:py-24">
          <div className="max-w-[1400px] mx-auto px-5 lg:px-12">
            <div className="text-center mb-14 lg:mb-20">
              <p className="font-body text-[12px] font-semibold uppercase tracking-[0.25em] text-bleu mb-2">Notre méthode</p>
              <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-800 text-marine">3 étapes pour vendre sereinement</h2>
            </div>
            {STEPS.map((step, i) => (
              <StepBlock key={step.num} step={step} index={i} />
            ))}
          </div>
        </section>

        <section className="bg-creme py-16 lg:py-20 text-center">
          <div className="max-w-2xl mx-auto px-5">
            <h2 className="font-display text-3xl lg:text-4xl font-800 text-marine mb-4">Prêt à vendre ?</h2>
            <p className="font-sans text-[16px] text-gris-600 mb-8">
              Commencez par une estimation gratuite et sans engagement de votre bien.
            </p>
            <TransitionLink href="/estimer" className="inline-block px-10 py-3.5 font-body text-[13px] font-bold uppercase tracking-[0.12em] text-blanc bg-bleu hover:bg-bleu-hover transition-colors rounded-full">
              Estimer mon bien
            </TransitionLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
