"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { PROPERTIES, TEAM } from "@/data/demo";

/* ─────────────────────────────────────────────────────────────
   FICHE BIEN — Page détail d'une propriété
   
   Galerie mosaïque + specs + description + agent contact.
   ───────────────────────────────────────────────────────────── */

/* On utilise la data démo. En prod → API fetch via slug. */
function getPropertyBySlug(slug: string) {
  return PROPERTIES.find((p) => p.slug === slug) || PROPERTIES[0];
}

export default function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const [resolvedParams, setResolvedParams] = useState<{ slug: string } | null>(null);

  // Resolve the params promise
  if (!resolvedParams) {
    params.then(setResolvedParams);
    return null;
  }

  return <PropertyDetailContent slug={resolvedParams.slug} />;
}

function PropertyDetailContent({ slug }: { slug: string }) {
  const property = getPropertyBySlug(slug);
  const agent = TEAM[0];


  const similar = PROPERTIES.filter((p) => p.id !== property.id).slice(0, 3);

  const SPECS = [
    { label: "Surface", value: property.surface },
    { label: "Pièces", value: String(property.rooms) },
    { label: "Chambres", value: String(property.bedrooms) },
    { label: "Type", value: property.type },
    { label: "Étage", value: "3e / 5" },
    { label: "Année", value: "2018" },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* ── Galerie mosaïque ── */}
        <section className="pt-[72px] lg:pt-[88px]">
          <div className="max-w-[1400px] mx-auto px-5 lg:px-12 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 h-[300px] lg:h-[500px]">
              <div className="img-zoom relative lg:col-span-2 lg:row-span-2 rounded-l-[4px] overflow-hidden">
                <Image src={property.image} alt={property.title} fill className="object-cover" sizes="50vw" priority />
              </div>
              <div className="hidden lg:block img-zoom relative overflow-hidden">
                <Image src="/apartment-paris.png" alt="Vue 2" fill className="object-cover" sizes="25vw" />
              </div>
              <div className="hidden lg:block img-zoom relative rounded-tr-[4px] overflow-hidden">
                <Image src="/loft-contemporain.png" alt="Vue 3" fill className="object-cover" sizes="25vw" />
              </div>
              <div className="hidden lg:block img-zoom relative overflow-hidden">
                <Image src="/loft-contemporain.png" alt="Vue 4" fill className="object-cover" sizes="25vw" />
              </div>
              <div className="hidden lg:block img-zoom relative rounded-br-[4px] overflow-hidden">
                <Image src="/apartment-paris.png" alt="Vue 5" fill className="object-cover" sizes="25vw" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Contenu principal ── */}
        <section className="bg-blanc pb-16 lg:pb-24">
          <div className="max-w-[1400px] mx-auto px-5 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

              {/* ── Colonne gauche : infos bien ── */}
              <div className="lg:col-span-7">
                {/* Header */}
                <div className="mb-8">
                  <span className="inline-block px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.15em] text-blanc bg-bleu rounded-full mb-3">
                    {property.type}
                  </span>
                  <h1 className="font-display text-3xl lg:text-4xl xl:text-5xl font-800 text-marine leading-[1.1]">
                    {property.title}
                  </h1>
                  <p className="font-body text-[13px] font-semibold uppercase tracking-[0.15em] text-bleu mt-2">
                    {property.location}
                  </p>
                  <p className="font-display text-2xl lg:text-3xl font-700 text-marine mt-4">
                    {property.price}
                  </p>
                </div>

                {/* Specs grid */}
                <div className="grid grid-cols-3 gap-4 mb-10 p-6 bg-creme rounded-[4px]">
                  {SPECS.map((spec) => (
                    <div key={spec.label} className="text-center">
                      <p className="font-display text-xl font-700 text-marine">{spec.value}</p>
                      <p className="font-sans text-[11px] uppercase tracking-[0.12em] text-gris-400 mt-0.5">{spec.label}</p>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div>
                  <h2 className="font-display text-xl font-700 text-marine mb-4">Description</h2>
                  <div className="space-y-4 font-sans text-[15px] text-gris-600 leading-relaxed">
                    <p>{property.subtitle}</p>
                    <p>
                      Ce bien d&apos;exception offre des prestations haut de gamme dans un cadre de vie 
                      privilégié. Les volumes généreux et la luminosité naturelle en font un lieu de vie 
                      unique. La cuisine équipée s&apos;ouvre sur un séjour traversant, offrant une vue 
                      dégagée sur les espaces verts environnants.
                    </p>
                    <p>
                      Les chambres, spacieuses et calmes, disposent chacune d&apos;un rangement intégré. 
                      La suite parentale bénéficie d&apos;une salle d&apos;eau privative et d&apos;un dressing. 
                      À cela s&apos;ajoutent un parking sécurisé et une cave.
                    </p>
                  </div>

                  {/* Points forts */}
                  <h3 className="font-display text-lg font-700 text-marine mt-8 mb-4">Points forts</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {["Luminosité exceptionnelle", "Terrasse plein sud", "Parking sécurisé", "Cave privative", "Gardien", "Proche transports"].map((point) => (
                      <div key={point} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-bleu shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-sans text-[14px] text-gris-600">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Colonne droite : agent + CTA ── */}
              <div className="lg:col-span-5">
                <div className="bg-blanc rounded-[4px] shadow-[0_4px_30px_rgba(0,32,70,0.08)] p-8 lg:sticky lg:top-28">
                  <h3 className="font-display text-lg font-700 text-marine mb-5">Votre interlocuteur</h3>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-creme">
                      <Image src={agent.image} alt={agent.name} fill className="object-cover" sizes="64px" />
                    </div>
                    <div>
                      <p className="font-display text-[16px] font-600 text-marine">{agent.name}</p>
                      <p className="font-sans text-[13px] text-bleu">{agent.role}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <a href={`tel:${agent.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 px-5 py-3 bg-creme rounded-[4px] hover:bg-bleu-pale transition-colors">
                      <svg className="w-4 h-4 text-bleu" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                      <span className="font-sans text-[14px] font-semibold text-marine">{agent.phone}</span>
                    </a>
                    <a href="mailto:contact@lesagents.immo" className="flex items-center gap-3 px-5 py-3 bg-creme rounded-[4px] hover:bg-bleu-pale transition-colors">
                      <svg className="w-4 h-4 text-bleu" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      <span className="font-sans text-[14px] font-semibold text-marine">Envoyer un email</span>
                    </a>
                  </div>

                  <a
                    href="/contact"
                    className="block w-full text-center px-6 py-3.5 font-body text-[13px] font-bold uppercase tracking-[0.12em] text-blanc bg-bleu hover:bg-bleu-hover transition-colors rounded-full"
                  >
                    Demander une visite
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Biens similaires ── */}
        <section className="bg-creme py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-5 lg:px-12">
            <h2 className="font-display text-2xl lg:text-3xl font-800 text-marine mb-10">Biens similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {similar.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
