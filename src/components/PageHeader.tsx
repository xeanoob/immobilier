"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ─────────────────────────────────────────────────────────────
   PAGE HEADER — Bandeau titre pour pages intérieures
   
   Image de fond + overlay marine + titre Jost display.
   Utilisé sur toutes les pages sauf la home.
   ───────────────────────────────────────────────────────────── */

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href: string }[];
  image?: string;
}

export default function PageHeader({
  title,
  subtitle,
  breadcrumb,
  image = "/hero-villa.png",
}: PageHeaderProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative h-[340px] lg:h-[420px] flex items-end overflow-hidden"
    >
      {/* ── Image + overlay ── */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-marine/75" />

      {/* ── Contenu ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-5 lg:px-12 pb-10 lg:pb-14">
        {/* Fil d'Ariane */}
        {breadcrumb && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4 flex items-center gap-2 font-sans text-[12px] text-blanc/50"
          >
            <a href="/" className="hover:text-blanc transition-colors">Accueil</a>
            {breadcrumb.map((item) => (
              <span key={item.href} className="flex items-center gap-2">
                <span>/</span>
                <a href={item.href} className="hover:text-blanc transition-colors">
                  {item.label}
                </a>
              </span>
            ))}
          </motion.nav>
        )}

        <motion.div
          className="w-10 h-[3px] bg-bleu rounded-full mb-4"
          initial={{ width: 0 }}
          animate={inView ? { width: 40 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="font-display text-4xl lg:text-5xl xl:text-6xl font-800 text-blanc leading-[1.05]"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-3 font-sans text-[16px] text-blanc/60 max-w-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
