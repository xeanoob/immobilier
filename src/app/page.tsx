import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import { BLOG_POSTS } from "@/data/demo";
import { TransitionLink } from "@/components/PageTransition";

/* ─────────────────────────────────────────────────────────────
   PAGE D'ACCUEIL — Zéro animation IA
   
   Pas de motion, pas de useInView, pas de fade-in stagger.
   Les éléments sont juste là. Comme un vrai site.
   ───────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProperties />

        {/* ═══════════════════════════════════════
            L'AGENCE — bloc éditorial asymétrique
           ═══════════════════════════════════════ */}
        <section className="bg-blanc py-16 lg:py-28 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-5 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
              {/* Image */}
              <div className="lg:col-span-5 relative">
                <div className="img-zoom relative aspect-[3/4] rounded-[4px] overflow-hidden">
                  <Image
                    src="/apartment-paris.png"
                    alt="L'agence"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="hidden lg:block absolute -bottom-6 -left-6 w-28 h-28 bg-bleu/8 -z-10" />
              </div>

              {/* Texte */}
              <div className="lg:col-span-6 lg:col-start-7 lg:-ml-12 relative z-10 bg-blanc lg:shadow-[0_4px_30px_rgba(0,32,70,0.06)] lg:rounded-[4px] lg:px-12 lg:py-14">
                <div className="w-10 h-[3px] bg-bleu rounded-full mb-5" />
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
                <TransitionLink
                  href="/agence"
                  className="inline-block mt-6 editorial-line font-body text-[12px] font-bold uppercase tracking-[0.12em] text-bleu hover:text-bleu-hover transition-colors"
                >
                  En savoir plus sur l&apos;agence →
                </TransitionLink>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            JOURNAL — aperçu
           ═══════════════════════════════════════ */}
        <section className="bg-creme py-16 lg:py-24">
          <div className="max-w-[1400px] mx-auto px-5 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
              <div>
                <div className="w-10 h-[3px] bg-bleu rounded-full mb-5" />
                <h2 className="font-display text-3xl lg:text-4xl font-800 text-marine">
                  Dernières actualités
                </h2>
              </div>
              <TransitionLink
                href="/journal"
                className="editorial-line font-body text-[12px] font-bold uppercase tracking-[0.12em] text-marine hover:text-bleu transition-colors self-start lg:self-auto"
              >
                Tout le journal →
              </TransitionLink>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {BLOG_POSTS.map((post) => (
                <TransitionLink
                  key={post.slug}
                  href={`/journal/${post.slug}`}
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
                </TransitionLink>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
