import type { Property } from "@/types/property";

/* ─────────────────────────────────────────────────────────────
   DONNÉES DE DÉMO
   
   En production, ces données viendront des APIs Apimo & AC3.
   ───────────────────────────────────────────────────────────── */

export const PROPERTIES: Property[] = [
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
  {
    id: "4",
    slug: "duplex-terrasse-montrouge",
    title: "Duplex avec Terrasse",
    subtitle: "Dernier étage, vue dégagée plein sud",
    location: "Montrouge",
    price: "720 000 €",
    surface: "95 m²",
    rooms: 4,
    bedrooms: 2,
    type: "Duplex",
    image: "/apartment-paris.png",
  },
  {
    id: "5",
    slug: "appartement-familial-asnieres",
    title: "Appartement Familial",
    subtitle: "Lumineux, proche écoles et commerces",
    location: "Asnières-sur-Seine",
    price: "545 000 €",
    surface: "88 m²",
    rooms: 4,
    bedrooms: 3,
    type: "Appartement",
    image: "/loft-contemporain.png",
  },
  {
    id: "6",
    slug: "penthouse-colombes",
    title: "Penthouse Panoramique",
    subtitle: "Terrasse 40m², vue Seine",
    location: "Colombes",
    price: "1 120 000 €",
    surface: "135 m²",
    rooms: 5,
    bedrooms: 3,
    type: "Penthouse",
    image: "/hero-villa.png",
  },
];

export const TEAM = [
  {
    name: "Sophie Martin",
    role: "Directrice — Fondatrice",
    image: "/team-1.png",
    phone: "01 00 00 00 01",
  },
  {
    name: "Thomas Durand",
    role: "Agent Immobilier Senior",
    image: "/team-2.png",
    phone: "01 00 00 00 02",
  },
  {
    name: "Clara Lefevre",
    role: "Chargée de Clientèle",
    image: "/team-3.png",
    phone: "01 00 00 00 03",
  },
];

export const BLOG_POSTS = [
  {
    slug: "marche-immobilier-2025",
    title: "Marché immobilier 2025 : tendances et perspectives",
    excerpt: "Analyse des grandes tendances qui dessinent le paysage immobilier cette année dans les Hauts-de-Seine et la petite couronne.",
    date: "28 Mai 2025",
    category: "Marché",
    image: "/blog-1.png",
    readTime: "5 min",
  },
  {
    slug: "home-staging-conseils",
    title: "Home staging : 7 astuces pour vendre vite et bien",
    excerpt: "Nos conseils de professionnels pour mettre en valeur votre bien et séduire les acquéreurs dès la première visite.",
    date: "15 Mai 2025",
    category: "Conseils",
    image: "/blog-2.png",
    readTime: "4 min",
  },
  {
    slug: "investir-montrouge",
    title: "Pourquoi investir à Montrouge en 2025 ?",
    excerpt: "Proximité de Paris, cadre de vie agréable, projets urbains ambitieux : focus sur une ville en pleine transformation.",
    date: "2 Mai 2025",
    category: "Investissement",
    image: "/apartment-paris.png",
    readTime: "6 min",
  },
];
