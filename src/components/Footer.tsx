"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   FOOTER — Les Agents de l'Immobilier
   
   Fond marine-mid #004274 + bande bottom marine-deep #00335A.
   4 colonnes : Logo+desc, Navigation, Contact, Réseaux.
   ───────────────────────────────────────────────────────────── */

const FOOTER_LINKS = [
  { label: "Acheter", href: "/acheter" },
  { label: "Vendre", href: "/vendre" },
  { label: "Estimer", href: "/estimer" },
  { label: "L'agence", href: "/agence" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-marine-mid text-blanc/80">
      {/* ── Bande bleue accent ── */}
      <div className="h-1 bg-bleu" />

      <div className="max-w-[1400px] mx-auto px-5 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* ── Col 1 : Logo + Description ── */}
          <div className="lg:col-span-1">
            <Image
              src="/logo-3-300x71.webp"
              alt="Les Agents de l'Immobilier"
              width={180}
              height={42}
              className="h-10 w-auto brightness-0 invert mb-5"
            />
            <p className="font-sans text-[14px] leading-relaxed text-blanc/60">
              Agence immobilière indépendante. Un accompagnement 
              sur-mesure pour chaque projet, porté par des agents 
              passionnés de leur métier.
            </p>
          </div>

          {/* ── Col 2 : Navigation ── */}
          <div>
            <h4 className="font-display text-[15px] font-700 uppercase tracking-[0.12em] text-blanc mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-[14px] text-blanc/60 hover:text-bleu transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3 : Contact ── */}
          <div>
            <h4 className="font-display text-[15px] font-700 uppercase tracking-[0.12em] text-blanc mb-5">
              Contact
            </h4>
            <ul className="space-y-3 font-sans text-[14px] text-blanc/60">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-bleu" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                12 Rue de la République<br />92120 Montrouge
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0 text-bleu" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href="tel:+33100000000" className="hover:text-bleu transition-colors">01 00 00 00 00</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0 text-bleu" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:contact@lesagents.immo" className="hover:text-bleu transition-colors">contact@lesagents.immo</a>
              </li>
            </ul>
          </div>

          {/* ── Col 4 : Horaires + Réseaux ── */}
          <div>
            <h4 className="font-display text-[15px] font-700 uppercase tracking-[0.12em] text-blanc mb-5">
              Horaires
            </h4>
            <ul className="space-y-2 font-sans text-[14px] text-blanc/60 mb-6">
              <li>Lun — Ven : 9h00 — 19h00</li>
              <li>Sam : 10h00 — 17h00</li>
              <li>Dim : Sur rendez-vous</li>
            </ul>

            <h4 className="font-display text-[15px] font-700 uppercase tracking-[0.12em] text-blanc mb-4">
              Suivez-nous
            </h4>
            <div className="flex items-center gap-3">
              {["Facebook", "Instagram", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full bg-blanc/10 hover:bg-bleu flex items-center justify-center transition-colors"
                  aria-label={social}
                >
                  <span className="font-sans text-[11px] font-bold text-blanc">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bande basse ── */}
      <div className="bg-marine-deep py-5">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-[12px] text-blanc/40">
            © {new Date().getFullYear()} Les Agents de l&apos;Immobilier. Tous droits réservés.
          </p>
          <div className="flex items-center gap-5 font-sans text-[12px] text-blanc/40">
            <a href="#" className="hover:text-blanc/70 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-blanc/70 transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
