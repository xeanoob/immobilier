"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import type { Property } from "@/types/property";

/* ─────────────────────────────────────────────────────────────
   SECTION "À LA UNE" — Layout Magazine d'Architecture

   ANTI-TEMPLATE — Ce qui est DIFFÉRENT d'un template :
   
   1. L'annonce STAR occupe toute la largeur en cinéma-scope
      (ratio 21/9), le titre est superposé en bas-gauche
      avec un bloc de données qui DÉBORDE sur la droite
      via un encart blanc en position absolute avec marge
      négative (-translate-y-1/2).
      
   2. Les annonces secondaires sont présentées dans un
      layout "magazine spread" : une image à gauche qui
      prend 55% + texte en superposition à droite, puis
      l'inverse pour la deuxième. Les images DÉBORDENT
      de leur conteneur avec des marges négatives.
      
   3. Pas de cartes avec ombre portée et border-radius.
      Les images sont coupées net, les textes flottent 
      par-dessus. Le rythme vient du VIDE et des DÉCALAGES.

   STRUCTURE :
   ┌──────────────────────────────────────────────────────┐
   │  ANNONCE STAR — full-width cinémascope               │
   │  ┌─────────────────────┐                              │
   │  │ Titre + Lieu        │  ┌─────────────────────┐    │
   │  │ superposé bas-gauche│  │ Encart données      │    │
   │  └─────────────────────┘  │ qui DÉBORDE vers le  │    │
   │                           │ bas (marge négative)  │    │
   │                           └─────────────────────┘    │
   ├──────────────────────────────────────────────────────┤
   │      ANNONCE 2                    ANNONCE 3          │
   │  ┌──────────┐ texte      texte ┌──────────┐        │
   │  │  Image   │ décalé    décalé │  Image   │        │
   │  │  55%     │ à droite  gauche │  55%     │        │
   │  │  hauteur │ marge -   marge -│  hauteur │        │
   │  │  auto    │ négative  négat. │  auto    │        │
   │  └──────────┘                  └──────────┘        │
   └──────────────────────────────────────────────────────┘
   ───────────────────────────────────────────────────────────── */

const FEATURED: Property[] = [
  {
    id: "1",
    slug: "villa-contemporaine-saint-cloud",
    title: "Villa Contemporaine",
    subtitle: "Architecture d'exception sur les hauteurs de Saint-Cloud",
    location: "Saint-Cloud · Hauts-de-Seine",
    price: "2 850 000 €",
    surface: "285 m²",
    rooms: 8,
    bedrooms: 5,
    type: "Villa",
    image: "/hero-villa.png",
    isFeatured: true,
  },
  {
    id: "2",
    slug: "appartement-haussmannien-paris-16",
    title: "Haussmannien Réinventé",
    subtitle: "Moulures d'époque, rénovation contemporaine",
    location: "Paris 16e",
    price: "1 490 000 €",
    surface: "142 m²",
    rooms: 5,
    bedrooms: 3,
    type: "Appartement",
    image: "/apartment-paris.png",
  },
  {
    id: "3",
    slug: "loft-industriel-boulogne",
    title: "Loft Esprit Atelier",
    subtitle: "Double hauteur, briques & verrière",
    location: "Boulogne-Billancourt",
    price: "985 000 €",
    surface: "120 m²",
    rooms: 4,
    bedrooms: 2,
    type: "Loft",
    image: "/loft-contemporain.png",
  },
];

/* ── Badge type de bien ── */
function TypeBadge({ label }: { label: string }) {
  return (
    <span className="
      inline-block px-4 py-1.5
      font-body text-[11px] font-bold uppercase tracking-[0.18em]
      text-blanc bg-bleu
      rounded-full
    ">
      {label}
    </span>
  );
}

/* ── Détail technique (surface, pièces, chambres) ── */
function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center px-5">
      <p className="font-display text-xl lg:text-2xl font-700 text-marine">{value}</p>
      <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-gris-400 mt-0.5">{label}</p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   ANNONCE STAR — Cinémascope full-width
   ═══════════════════════════════════════════════════ */
function StarProperty({ property }: { property: Property }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] as const }}
      className="relative group cursor-pointer"
    >
      {/* ── Image cinémascope : ratio large, pas carré ── */}
      <div className="img-zoom relative aspect-[16/9] lg:aspect-[21/9] w-full">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* ── Gradient bas-gauche pour le texte ── */}
        <div className="absolute inset-0 bg-gradient-to-tr from-marine/80 via-marine/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-marine/50 to-transparent" />

        {/* ── Badge en haut à gauche ── */}
        <div className="absolute top-5 left-5 lg:top-8 lg:left-8 z-10">
          <TypeBadge label={property.type} />
        </div>

        {/* ── Texte superposé en bas à gauche 
             ANTI-TEMPLATE : on ne met PAS le texte 
             dans une carte séparée sous l'image ── */}
        <div className="absolute bottom-0 left-0 z-10 p-5 lg:p-10 max-w-2xl">
          <p className="font-body text-[12px] font-semibold uppercase tracking-[0.2em] text-bleu mb-2">
            {property.location}
          </p>
          <h3 className="font-display text-3xl lg:text-5xl xl:text-6xl font-700 text-blanc leading-[1.05]">
            {property.title}
          </h3>
          <p className="font-sans text-[15px] text-blanc/70 font-light mt-2 hidden lg:block">
            {property.subtitle}
          </p>
        </div>
      </div>

      {/* ── Encart de données qui DÉBORDE vers le bas 
           ANTI-TEMPLATE : marge négative pour que l'encart 
           chevauche l'image et la section suivante. 
           C'est ça qui casse le look "template". ── */}
      <div className="
        relative z-20
        mx-5 lg:mx-auto
        -mt-10 lg:-mt-14
        max-w-3xl
        bg-blanc
        shadow-[0_8px_40px_rgba(0,32,70,0.1)]
        rounded-[4px]
        px-6 lg:px-10 py-6 lg:py-8
        flex flex-col sm:flex-row items-center justify-between gap-6
      ">
        <div className="flex items-center divide-x divide-gris-200">
          <Stat label="Surface" value={property.surface} />
          <Stat label="Pièces" value={String(property.rooms)} />
          <Stat label="Chambres" value={String(property.bedrooms)} />
        </div>

        <div className="flex items-center gap-5">
          <p className="font-display text-2xl lg:text-3xl font-700 text-marine">
            {property.price}
          </p>
          <a
            href={`/biens/${property.slug}`}
            className="
              px-6 py-2.5
              font-body text-[11px] font-bold uppercase tracking-[0.12em]
              text-blanc bg-bleu hover:bg-bleu-hover
              transition-colors rounded-full
              whitespace-nowrap
            "
          >
            Découvrir
          </a>
        </div>
      </div>
    </motion.article>
  );
}

/* ═══════════════════════════════════════════════════
   ANNONCE SECONDAIRE — Layout magazine asymétrique
   
   ANTI-TEMPLATE : l'image prend 60% de la largeur,
   le texte est superposé dans un encart blanc qui 
   CHEVAUCHE l'image. À droite pour l'une, à gauche 
   pour l'autre. Ça crée un rythme en zig-zag.
   ═══════════════════════════════════════════════════ */
function SecondaryProperty({
  property,
  reverse = false,
}: {
  property: Property;
  reverse?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
      className={`
        relative group cursor-pointer
        grid grid-cols-1 lg:grid-cols-12 items-center
        gap-0
      `}
    >
      {/* ── Image : 7 colonnes sur 12 ── */}
      <div
        className={`
          img-zoom relative aspect-[4/3] lg:aspect-[3/2]
          ${reverse ? "lg:col-start-6 lg:col-span-7 lg:order-2" : "lg:col-span-7"}
        `}
      >
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 58vw"
        />
        {/* ── Badge ── */}
        <div className="absolute top-4 left-4 lg:top-6 lg:left-6 z-10">
          <TypeBadge label={property.type} />
        </div>
      </div>

      {/* ── Encart texte : CHEVAUCHE l'image via marge négative 
           ANTI-TEMPLATE : sur desktop, l'encart a une marge 
           négative de -80px qui le fait pénétrer dans l'image.
           Pas de "carte à côté", c'est une SUPERPOSITION. ── */}
      <div
        className={`
          relative z-10
          bg-blanc
          shadow-[0_4px_30px_rgba(0,32,70,0.08)]
          rounded-[4px]
          px-6 lg:px-10 py-8 lg:py-10
          ${
            reverse
              ? "lg:col-start-1 lg:col-span-7 lg:order-1 lg:-mr-20"
              : "lg:col-start-6 lg:col-span-7 lg:-ml-20"
          }
          /* Sur mobile, simple empilement */
          -mt-8 mx-4 lg:mt-0 lg:mx-0
        `}
      >
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-bleu mb-3">
          {property.location}
        </p>

        <h3 className="font-display text-2xl lg:text-3xl font-700 text-marine leading-tight">
          {property.title}
        </h3>

        <p className="font-sans text-[15px] text-gris-600 font-light mt-2 leading-relaxed">
          {property.subtitle}
        </p>

        {/* ── Données techniques ── */}
        <div className="flex items-center gap-5 mt-5 text-[13px] font-sans text-gris-400">
          <span>{property.surface}</span>
          <span className="w-[1px] h-3 bg-gris-200" />
          <span>{property.rooms} pièces</span>
          <span className="w-[1px] h-3 bg-gris-200" />
          <span>{property.bedrooms} ch.</span>
        </div>

        <div className="flex items-center justify-between mt-6 pt-5 border-t border-gris-100">
          <p className="font-display text-xl lg:text-2xl font-700 text-marine">
            {property.price}
          </p>
          <a
            href={`/biens/${property.slug}`}
            className="
              editorial-line
              font-body text-[12px] font-bold uppercase tracking-[0.12em]
              text-bleu hover:text-bleu-hover
              transition-colors
            "
          >
            Voir ce bien →
          </a>
        </div>
      </div>
    </motion.article>
  );
}

/* ═══════════════════════════════════════════════════
   COMPOSANT PRINCIPAL
   ═══════════════════════════════════════════════════ */
export default function FeaturedProperties() {
  const star = FEATURED[0];
  const secondary = FEATURED.slice(1);
  const sectionRef = useRef(null);
  const titleInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="a-la-une" className="relative bg-creme pt-20 lg:pt-28 pb-16 lg:pb-24">

      {/* ── Titre de section — style éditorial ── */}
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-[1400px] mx-auto px-5 lg:px-12 mb-14 lg:mb-20"
      >
        {/* ── Ligne décorative bleue ── */}
        <motion.div
          className="w-12 h-[3px] bg-bleu rounded-full mb-6"
          initial={{ width: 0 }}
          animate={titleInView ? { width: 48 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <div>
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.25em] text-bleu mb-2">
              Sélection
            </p>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-800 text-marine leading-[1.05]">
              Nos biens à la une
            </h2>
          </div>

          <a
            href="/biens"
            className="
              editorial-line
              font-body text-[12px] font-bold uppercase tracking-[0.12em]
              text-marine hover:text-bleu
              transition-colors self-start lg:self-auto
            "
          >
            Voir tous les biens →
          </a>
        </div>
      </motion.div>

      {/* ── Annonce Star ── */}
      <div className="max-w-[1400px] mx-auto px-5 lg:px-12">
        <StarProperty property={star} />
      </div>

      {/* ── Annonces secondaires en zigzag ── */}
      <div className="max-w-[1400px] mx-auto px-5 lg:px-12 mt-16 lg:mt-24 space-y-14 lg:space-y-20">
        {secondary.map((property, i) => (
          <SecondaryProperty
            key={property.id}
            property={property}
            reverse={i % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}
