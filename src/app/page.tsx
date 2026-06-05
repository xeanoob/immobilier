"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import { BLOG_POSTS } from "@/data/demo";

/* ─────────────────────────────────────────────────────────────
   PAGE D'ACCUEIL

   Structure volontairement courte, pas de "landing page" :
   
   1. Hero
   2. Biens à la une
   3. Bloc éditorial "l'agence" — asymétrique, pas un grid de 3
   4. Aperçu journal — preuve de vie, pas une section IA
   
   Pas de :
   - Section "Nos services" avec 3 icônes (= IA)
   - Section "Chiffres clés" 350+ / 98% / 45j (= IA)
   - Section "Équipe" en grid (= doublon de /agence)
   - CTA centré "Prêt à concrétiser votre projet ?" (= IA)
   ───────────────────────────────────────────────────────────── */

export default function Home() {
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, margin: "-80px" });
  const blogRef = useRef(null);
  const blogInView = useInView(blogRef, { once: true, margin: "-60px" });

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProperties />

        {/* ═══════════════════════════════════════
            L'AGENCE — bloc éditorial asymétrique
            
            Pas un grid 3 colonnes avec icônes.
            Juste une photo + du texte. Comme un 
            vrai site fait par un humain.
           ═══════════════════════════════════════ */}
        <section className="bg-blanc py-16 lg:py-28 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-5 lg:px-12">
            <motion.div
              ref={aboutRef}
              initial={{ opacity: 0, y: 40 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center"
            >
              {/* Image : pas centrée, occupe 5 colonnes */}
              <div className="lg:col-span-5 relative">
                <div className="img-zoom relative aspect-[3/4] rounded-[4px] overflow-hidden">
                  <Image
                    src="/apartment-paris.png"
                    alt="L'agence Les Agents de l'Immobilier"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                {/* Petit bloc bleu décoratif */}
                <div className="hidden lg:block absolute -bottom-6 -left-6 w-28 h-28 bg-bleu/8 -z-10" />
              </div>

              {/* Texte : chevauche l'image via -ml-12 */}
              <div className="lg:col-span-6 lg:col-start-7 lg:-ml-12 relative z-10 bg-blanc lg:shadow-[0_4px_30px_rgba(0,32,70,0.06)] lg:rounded-[4px] lg:px-12 lg:py-14">
                <motion.div
                  className="w-10 h-[3px] bg-bleu rounded-full mb-5"
                  initial={{ width: 0 }}
                  animate={aboutInView ? { width: 40 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />
                <h2 className="font-display text-3xl lg:text-4xl font-700 text-marine mb-5 leading-tight">
                  Une agence à taille humaine,<br />ancrée dans son quartier
                </h2>
                <div className="space-y-4 font-sans text-[15px] text-gris-600 leading-relaxed">
                  <p>
                    Implantés à Montrouge depuis 2012, nous connaissons 
                    chaque rue des Hauts-de-Seine. Cette connaissance du terrain 
                    fait la différence quand il s&apos;agit de fixer le bon prix 
                    ou de trouver le bon quartier.
                  </p>
                  <p>
                    Nous ne sommes pas un réseau. Chaque dossier est suivi 
                    par un interlocuteur unique, du premier appel à la remise 
                    des clés.
                  </p>
                </div>
                <a
                  href="/agence"
                  className="inline-block mt-6 editorial-line font-body text-[12px] font-bold uppercase tracking-[0.12em] text-bleu hover:text-bleu-hover transition-colors"
                >
                  En savoir plus sur l&apos;agence →
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            JOURNAL — aperçu des derniers articles
            
            Montre que le site est vivant. Pas une 
            section "témoignages" IA.
           ═══════════════════════════════════════ */}
        <section ref={blogRef} className="bg-creme py-16 lg:py-24">
          <div className="max-w-[1400px] mx-auto px-5 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
              <div>
                <motion.div
                  className="w-10 h-[3px] bg-bleu rounded-full mb-5"
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                />
                <h2 className="font-display text-3xl lg:text-4xl font-800 text-marine">
                  Dernières actualités
                </h2>
              </div>
              <a
                href="/journal"
                className="editorial-line font-body text-[12px] font-bold uppercase tracking-[0.12em] text-marine hover:text-bleu transition-colors self-start lg:self-auto"
              >
                Tout le journal →
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {BLOG_POSTS.map((post, i) => (
                <motion.a
                  key={post.slug}
                  href={`/journal/${post.slug}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={blogInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="group block"
                >
                  <div className="img-zoom relative aspect-[16/10] mb-4 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-bleu">
                      {post.category}
                    </span>
                    <span className="w-1 h-1 bg-gris-300 rounded-full" />
                    <span className="font-sans text-[12px] text-gris-400">{post.date}</span>
                  </div>
                  <h3 className="font-display text-lg font-600 text-marine group-hover:text-bleu transition-colors leading-snug">
                    {post.title}
                  </h3>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
