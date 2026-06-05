"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

/* ─────────────────────────────────────────────────────────────
   NAVBAR — Les Agents de l'Immobilier
   
   ANTI-TEMPLATE : 
   - Logo réel de l'agence
   - Navigation en Quicksand uppercase espacée
   - Au scroll : fond blanc + ombre subtile
   - CTA bleu #00A2E4 avec border-radius modéré (comme la charte)
   - Menu mobile avec panneau plein écran animé
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
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500 ease-out
          ${
            scrolled
              ? "bg-blanc/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,32,70,0.08)]"
              : "bg-blanc"
          }
        `}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-5 lg:px-12 h-[72px] lg:h-[88px]">
          {/* ── Logo réel ── */}
          <a href="/" className="relative z-10 shrink-0">
            <Image
              src="/logo-3-300x71.webp"
              alt="Les Agents de l'Immobilier"
              width={220}
              height={52}
              className="h-10 lg:h-[52px] w-auto"
              priority
            />
          </a>

          {/* ── Navigation desktop ── */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="
                  editorial-line
                  font-body text-[13px] font-semibold uppercase tracking-[0.14em]
                  text-marine hover:text-bleu
                  transition-colors duration-300
                "
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ── CTA + Téléphone ── */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+33100000000"
              className="font-sans text-[13px] font-semibold text-marine hover:text-bleu transition-colors"
            >
              01 00 00 00 00
            </a>
            <a
              href="/contact"
              className="
                px-6 py-2.5
                font-body text-[12px] font-bold uppercase tracking-[0.12em]
                text-blanc bg-bleu
                hover:bg-bleu-hover
                transition-colors duration-300
                rounded-full
              "
            >
              Nous contacter
            </a>
          </div>

          {/* ── Burger mobile ── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-[60] w-9 h-9 flex flex-col items-center justify-center gap-[6px]"
            aria-label="Menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-7 h-[2px] bg-marine origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-[2px] bg-marine ml-auto"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-7 h-[2px] bg-marine origin-center"
            />
          </button>
        </div>
      </motion.header>

      {/* ── Menu mobile plein écran ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="
              fixed inset-0 z-40
              bg-marine flex flex-col items-center justify-center
              gap-8
            "
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.06 }}
                className="
                  font-display text-3xl font-light uppercase tracking-[0.08em]
                  text-blanc hover:text-bleu transition-colors
                "
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="
                mt-4 px-8 py-3
                font-body text-[13px] font-bold uppercase tracking-[0.12em]
                text-blanc border-2 border-bleu
                hover:bg-bleu transition-colors
                rounded-full
              "
              onClick={() => setMobileOpen(false)}
            >
              Nous contacter
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
