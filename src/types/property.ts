/* ─────────────────────────────────────────────────────────────
   TYPES — Données immobilières
   
   Typées strictement pour l'intégration future avec 
   les APIs Apimo & AC3.
   ───────────────────────────────────────────────────────────── */

export interface Property {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  price: string;
  surface: string;
  rooms: number;
  bedrooms: number;
  type: "Appartement" | "Maison" | "Loft" | "Villa" | "Duplex" | "Penthouse";
  image: string;
  isFeatured?: boolean;
}
