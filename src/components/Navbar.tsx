"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { TransitionLink } from "@/components/PageTransition";

/* ─────────────────────────────────────────────────────────────
   NAVBAR — Avec TransitionLink pour les transitions de page
   ───────────────────────────────────────────────────────────── */

const NAV_LINKS = [
  { label: "Acheter", href: "/acheter" },
  { label: "Vendre", href: "/vendre" },
  { label: "Estimer", href: "/estimer" },
  { label: "L'agence", href: "/agence" },
  { label: "Journal", href: "/journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${scrolled
            ? "bg-blanc/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,32,70,0.08)]"
            : "bg-blanc"
          }
        `}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-5 lg:px-12 h-[72px] lg:h-[88px]">
          <TransitionLink href="/" className="relative z-10 shrink-0">
            <Image
              src="/logo-3-300x71.webp"
              alt="Les Agents de l'Immobilier"
              width={220}
              height={52}
              className="h-10 lg:h-[52px] w-auto"
              priority
            />
          </TransitionLink>

          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {NAV_LINKS.map((link) => (
              <TransitionLink
                key={link.label}
                href={link.href}
                className="editorial-line font-body text-[13px] font-semibold uppercase tracking-[0.14em] text-marine hover:text-bleu transition-colors duration-200"
              >
                {link.label}
              </TransitionLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <a href="tel:+33100000000" className="font-sans text-[13px] font-semibold text-marine hover:text-bleu transition-colors">
              01 00 00 00 00
            </a>
            <TransitionLink href="/contact" className="px-6 py-2.5 font-body text-[12px] font-bold uppercase tracking-[0.12em] text-blanc bg-bleu hover:bg-bleu-hover transition-colors rounded-full">
              Nous contacter
            </TransitionLink>
          </div>

          {/* Burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-[60] w-9 h-9 flex flex-col items-center justify-center gap-[6px]"
            aria-label="Menu"
          >
            <span className={`block w-7 h-[2px] bg-marine transition-transform duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
            <span className={`block w-5 h-[2px] bg-marine ml-auto transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-7 h-[2px] bg-marine transition-transform duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
          </button>
        </div>
      </header>

      {/* Menu mobile */}
      <div className={`
        fixed inset-0 z-40 bg-marine flex flex-col items-center justify-center gap-8
        transition-transform duration-300
        ${mobileOpen ? "translate-x-0" : "translate-x-full"}
      `}>
        {NAV_LINKS.map((link) => (
          <TransitionLink
            key={link.label}
            href={link.href}
            className="font-display text-3xl font-light uppercase tracking-[0.08em] text-blanc hover:text-bleu transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </TransitionLink>
        ))}
        <TransitionLink
          href="/contact"
          className="mt-4 px-8 py-3 font-body text-[13px] font-bold uppercase tracking-[0.12em] text-blanc border-2 border-bleu hover:bg-bleu transition-colors rounded-full"
          onClick={() => setMobileOpen(false)}
        >
          Nous contacter
        </TransitionLink>
      </div>
    </>
  );
}
