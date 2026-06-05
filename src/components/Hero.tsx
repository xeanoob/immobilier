"use client";

import { useState } from "react";
import { TransitionLink } from "@/components/PageTransition";

/* ─────────────────────────────────────────────────────────────
   HERO — Style site de référence, SANS animations IA
   
   Zéro Framer Motion. Les éléments sont juste là.
   Un vrai site n'anime pas chaque ligne de texte.
   ───────────────────────────────────────────────────────────── */

export default function Hero() {
  const [searchType, setSearchType] = useState("Acheter");

  return (
    <section className="relative min-h-[92svh] flex flex-col justify-end overflow-hidden">

      {/* ── Vraie photo de fond ── */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-real.jpg')" }}
      />

      {/* ── Dégradé blanc → transparent → sombre ── */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(178deg, #FFFFFF 12%, rgba(255,255,255,0.3) 35%, transparent 55%, rgba(0,32,70,0.55) 100%)",
        }}
      />

      {/* ── Contenu ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-5 lg:px-12 pb-12 lg:pb-16">

        {/* ── Titre — pas d'animation ── */}
        <div className="text-center mb-10 lg:mb-14">
          <h1 className="font-display text-[clamp(2rem,5vw,4.2rem)] font-800 text-blanc leading-[1.1] drop-shadow-[0_2px_15px_rgba(0,0,0,0.3)]">
            Votre agence immobilière
            <br />
            <span className="text-bleu drop-shadow-none">dans les Hauts-de-Seine</span>
          </h1>
        </div>

        {/* ── Barre de recherche ── */}
        <div className="max-w-4xl mx-auto">
          {/* Onglets */}
          <div className="flex justify-center gap-2 mb-3">
            {["Acheter", "Louer", "Estimer"].map((tab) => (
              <button
                key={tab}
                onClick={() => setSearchType(tab)}
                className={`
                  px-6 py-2 font-body text-[12px] font-bold uppercase tracking-[0.08em]
                  rounded-full transition-colors duration-200
                  ${searchType === tab
                    ? "bg-bleu text-blanc shadow-lg shadow-bleu/30"
                    : "bg-blanc/80 text-marine hover:bg-blanc"
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Formulaire */}
          <div className="bg-blanc/85 backdrop-blur-sm rounded-[40px] p-3 lg:p-4 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
            <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-3">
              <div className="flex-1 w-full lg:w-auto">
                <input
                  type="text"
                  placeholder="Ville, quartier ou code postal..."
                  className="w-full px-5 lg:px-6 py-3.5 bg-transparent font-sans text-[14px] text-noir placeholder:text-gris-400 focus:outline-none"
                />
              </div>
              <div className="hidden lg:block w-px h-8 bg-gris-200" />
              <div className="w-full lg:w-44">
                <select className="w-full px-4 py-3.5 bg-transparent font-sans text-[14px] text-gris-600 focus:outline-none appearance-none cursor-pointer">
                  <option>Tous types</option>
                  <option>Appartement</option>
                  <option>Maison</option>
                  <option>Loft</option>
                  <option>Villa</option>
                </select>
              </div>
              <div className="hidden lg:block w-px h-8 bg-gris-200" />
              <div className="w-full lg:w-44">
                <select className="w-full px-4 py-3.5 bg-transparent font-sans text-[14px] text-gris-600 focus:outline-none appearance-none cursor-pointer">
                  <option>Budget max</option>
                  <option>300 000 €</option>
                  <option>500 000 €</option>
                  <option>750 000 €</option>
                  <option>1 000 000 €</option>
                  <option>2 000 000 €</option>
                </select>
              </div>
              <TransitionLink
                href={searchType === "Estimer" ? "/estimer" : "/acheter"}
                className="w-full lg:w-auto px-8 py-3.5 font-body text-[12px] font-bold uppercase tracking-[0.1em] text-blanc bg-bleu hover:bg-bleu-hover transition-colors rounded-full text-center whitespace-nowrap shadow-lg shadow-bleu/25"
              >
                Rechercher
              </TransitionLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
