import Image from "next/image";
import type { Property } from "@/types/property";
import { TransitionLink } from "@/components/PageTransition";

/* ─────────────────────────────────────────────────────────────
   PROPERTY CARD — Carte de bien réutilisable
   
   Utilisée dans /acheter et potentiellement le /journal.
   Image avec zoom, badge, prix, données techniques.
   ───────────────────────────────────────────────────────────── */

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <TransitionLink
      href={`/biens/${property.slug}`}
      className="group block cursor-pointer"
    >
      {/* ── Image ── */}
      <div className="img-zoom relative aspect-[4/3] mb-4">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute top-3 left-3 z-10 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.15em] text-blanc bg-bleu rounded-full">
          {property.type}
        </span>
      </div>

      {/* ── Lieu ── */}
      <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-bleu mb-1">
        {property.location}
      </p>

      {/* ── Titre ── */}
      <h3 className="font-display text-xl font-600 text-marine group-hover:text-bleu transition-colors leading-tight">
        {property.title}
      </h3>

      {/* ── Données ── */}
      <div className="flex items-center gap-3 mt-2 font-sans text-[13px] text-gris-400">
        <span>{property.surface}</span>
        <span className="w-[1px] h-3 bg-gris-200" />
        <span>{property.rooms} p.</span>
        <span className="w-[1px] h-3 bg-gris-200" />
        <span>{property.bedrooms} ch.</span>
      </div>

      {/* ── Prix ── */}
      <p className="mt-3 font-display text-lg font-700 text-marine">
        {property.price}
      </p>
    </TransitionLink>
  );
}
