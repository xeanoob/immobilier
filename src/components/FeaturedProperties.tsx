import Image from "next/image";
import type { Property } from "@/types/property";
import { TransitionLink } from "@/components/PageTransition";

/* ─────────────────────────────────────────────────────────────
   SECTION "À LA UNE" — Sans animations IA
   
   Le layout asymétrique est gardé (c'est du design, pas de 
   l'animation). Mais toutes les animations Framer Motion 
   (fade-in, stagger, animated lines) sont supprimées.
   
   On garde uniquement le hover CSS (img-zoom, editorial-line).
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

function TypeBadge({ label }: { label: string }) {
  return (
    <span className="inline-block px-4 py-1.5 font-body text-[11px] font-bold uppercase tracking-[0.18em] text-blanc bg-bleu rounded-full">
      {label}
    </span>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center px-5">
      <p className="font-display text-xl lg:text-2xl font-700 text-marine">{value}</p>
      <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-gris-400 mt-0.5">{label}</p>
    </div>
  );
}

/* ── Annonce Star ── */
function StarProperty({ property }: { property: Property }) {
  return (
    <article className="relative group cursor-pointer">
      <div className="img-zoom relative aspect-[16/9] lg:aspect-[21/9] w-full">
        <Image src={property.image} alt={property.title} fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-tr from-marine/80 via-marine/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-marine/50 to-transparent" />
        <div className="absolute top-5 left-5 lg:top-8 lg:left-8 z-10">
          <TypeBadge label={property.type} />
        </div>
        <div className="absolute bottom-0 left-0 z-10 p-5 lg:p-10 max-w-2xl">
          <p className="font-body text-[12px] font-semibold uppercase tracking-[0.2em] text-bleu mb-2">{property.location}</p>
          <h3 className="font-display text-3xl lg:text-5xl xl:text-6xl font-700 text-blanc leading-[1.05]">{property.title}</h3>
          <p className="font-sans text-[15px] text-blanc/70 font-light mt-2 hidden lg:block">{property.subtitle}</p>
        </div>
      </div>

      <div className="relative z-20 mx-5 lg:mx-auto -mt-10 lg:-mt-14 max-w-3xl bg-blanc shadow-[0_8px_40px_rgba(0,32,70,0.1)] rounded-[4px] px-6 lg:px-10 py-6 lg:py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center divide-x divide-gris-200">
          <Stat label="Surface" value={property.surface} />
          <Stat label="Pièces" value={String(property.rooms)} />
          <Stat label="Chambres" value={String(property.bedrooms)} />
        </div>
        <div className="flex items-center gap-5">
          <p className="font-display text-2xl lg:text-3xl font-700 text-marine">{property.price}</p>
          <TransitionLink href={`/biens/${property.slug}`} className="px-6 py-2.5 font-body text-[11px] font-bold uppercase tracking-[0.12em] text-blanc bg-bleu hover:bg-bleu-hover transition-colors rounded-full whitespace-nowrap">
            Découvrir
          </TransitionLink>
        </div>
      </div>
    </article>
  );
}

/* ── Annonce secondaire zigzag ── */
function SecondaryProperty({ property, reverse = false }: { property: Property; reverse?: boolean }) {
  return (
    <article className={`relative group cursor-pointer grid grid-cols-1 lg:grid-cols-12 items-center gap-0`}>
      <div className={`img-zoom relative aspect-[4/3] lg:aspect-[3/2] ${reverse ? "lg:col-start-6 lg:col-span-7 lg:order-2" : "lg:col-span-7"}`}>
        <Image src={property.image} alt={property.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 58vw" />
        <div className="absolute top-4 left-4 lg:top-6 lg:left-6 z-10">
          <TypeBadge label={property.type} />
        </div>
      </div>

      <div className={`relative z-10 bg-blanc shadow-[0_4px_30px_rgba(0,32,70,0.08)] rounded-[4px] px-6 lg:px-10 py-8 lg:py-10 ${reverse ? "lg:col-start-1 lg:col-span-7 lg:order-1 lg:-mr-20" : "lg:col-start-6 lg:col-span-7 lg:-ml-20"} -mt-8 mx-4 lg:mt-0 lg:mx-0`}>
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-bleu mb-3">{property.location}</p>
        <h3 className="font-display text-2xl lg:text-3xl font-700 text-marine leading-tight">{property.title}</h3>
        <p className="font-sans text-[15px] text-gris-600 font-light mt-2 leading-relaxed">{property.subtitle}</p>
        <div className="flex items-center gap-5 mt-5 text-[13px] font-sans text-gris-400">
          <span>{property.surface}</span>
          <span className="w-[1px] h-3 bg-gris-200" />
          <span>{property.rooms} pièces</span>
          <span className="w-[1px] h-3 bg-gris-200" />
          <span>{property.bedrooms} ch.</span>
        </div>
        <div className="flex items-center justify-between mt-6 pt-5 border-t border-gris-100">
          <p className="font-display text-xl lg:text-2xl font-700 text-marine">{property.price}</p>
          <TransitionLink href={`/biens/${property.slug}`} className="editorial-line font-body text-[12px] font-bold uppercase tracking-[0.12em] text-bleu hover:text-bleu-hover transition-colors">
            Voir ce bien →
          </TransitionLink>
        </div>
      </div>
    </article>
  );
}

/* ── Composant principal ── */
export default function FeaturedProperties() {
  const star = FEATURED[0];
  const secondary = FEATURED.slice(1);

  return (
    <section id="a-la-une" className="relative bg-creme pt-20 lg:pt-28 pb-16 lg:pb-24">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-12 mb-14 lg:mb-20">
        <div className="w-12 h-[3px] bg-bleu rounded-full mb-6" />
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <div>
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.25em] text-bleu mb-2">Sélection</p>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-800 text-marine leading-[1.05]">Nos biens à la une</h2>
          </div>
          <TransitionLink href="/biens" className="editorial-line font-body text-[12px] font-bold uppercase tracking-[0.12em] text-marine hover:text-bleu transition-colors self-start lg:self-auto">
            Voir tous les biens →
          </TransitionLink>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 lg:px-12">
        <StarProperty property={star} />
      </div>

      <div className="max-w-[1400px] mx-auto px-5 lg:px-12 mt-16 lg:mt-24 space-y-14 lg:space-y-20">
        {secondary.map((property, i) => (
          <SecondaryProperty key={property.id} property={property} reverse={i % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}
