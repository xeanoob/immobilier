import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { BLOG_POSTS } from "@/data/demo";
import { TransitionLink } from "@/components/PageTransition";

export const metadata = {
  title: "Journal — Les Agents de l'Immobilier",
  description: "Actualités immobilières, conseils et analyses du marché.",
};

export default function JournalPage() {
  const featured = BLOG_POSTS[0];
  const others = BLOG_POSTS.slice(1);

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Journal"
          subtitle="Actualités, conseils et analyses du marché immobilier."
          breadcrumb={[{ label: "Journal", href: "/journal" }]}
          image="/blog-1.png"
        />

        <section className="bg-creme py-16 lg:py-24">
          <div className="max-w-[1400px] mx-auto px-5 lg:px-12">

            {/* ── Article à la une — format magazine ── */}
            <TransitionLink href={`/journal/${featured.slug}`} className="group block mb-16 lg:mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                <div className="img-zoom relative aspect-[16/9] lg:aspect-[3/2] lg:col-span-7">
                  <Image src={featured.image} alt={featured.title} fill className="object-cover" sizes="(max-width:1024px) 100vw, 58vw" />
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.15em] text-blanc bg-bleu rounded-full">
                    {featured.category}
                  </span>
                </div>
                <div className="relative z-10 lg:col-span-6 lg:col-start-7 lg:-ml-16 bg-blanc shadow-[0_4px_30px_rgba(0,32,70,0.08)] rounded-[4px] px-8 lg:px-12 py-10 -mt-6 mx-4 lg:mt-0 lg:mx-0">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-sans text-[12px] text-gris-400">{featured.date}</span>
                    <span className="w-1 h-1 bg-gris-300 rounded-full" />
                    <span className="font-sans text-[12px] text-gris-400">{featured.readTime} de lecture</span>
                  </div>
                  <h2 className="font-display text-2xl lg:text-3xl font-700 text-marine group-hover:text-bleu transition-colors leading-tight mb-3">
                    {featured.title}
                  </h2>
                  <p className="font-sans text-[15px] text-gris-600 leading-relaxed mb-5">{featured.excerpt}</p>
                  <span className="editorial-line font-body text-[12px] font-bold uppercase tracking-[0.12em] text-bleu">
                    Lire l&apos;article →
                  </span>
                </div>
              </div>
            </TransitionLink>

            {/* ── Autres articles — grille 2 ou 3 colonnes ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {others.map((post) => (
                <TransitionLink key={post.slug} href={`/journal/${post.slug}`} className="group block">
                  <div className="img-zoom relative aspect-[16/10] mb-4 rounded-[4px] overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                    <span className="absolute top-3 left-3 z-10 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.15em] text-blanc bg-bleu rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-sans text-[12px] text-gris-400">{post.date}</span>
                    <span className="w-1 h-1 bg-gris-300 rounded-full" />
                    <span className="font-sans text-[12px] text-gris-400">{post.readTime}</span>
                  </div>
                  <h3 className="font-display text-xl font-600 text-marine group-hover:text-bleu transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="font-sans text-[14px] text-gris-400 mt-2 line-clamp-2">{post.excerpt}</p>
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
