import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PropertyCard from "@/components/PropertyCard";
import { PROPERTIES } from "@/data/demo";

export const metadata = {
  title: "Acheter — Les Agents de l'Immobilier",
  description: "Découvrez nos biens à la vente : appartements, maisons, lofts et duplex.",
};

export default function AcheterPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Acheter"
          subtitle="Trouvez le bien qui correspond à votre projet de vie."
          breadcrumb={[{ label: "Acheter", href: "/acheter" }]}
        />

        {/* ── Filtres ── */}
        <section className="bg-blanc border-b border-gris-100">
          <div className="max-w-[1400px] mx-auto px-5 lg:px-12 py-6">
            <div className="flex flex-wrap items-center gap-3">
              {["Tous", "Appartement", "Maison", "Loft", "Duplex", "Villa"].map((type, i) => (
                <button
                  key={type}
                  className={`
                    px-5 py-2 font-body text-[12px] font-bold uppercase tracking-[0.1em]
                    rounded-full transition-colors
                    ${i === 0
                      ? "bg-bleu text-blanc"
                      : "bg-gris-100 text-gris-600 hover:bg-bleu hover:text-blanc"
                    }
                  `}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Résultats ── */}
        <section className="bg-creme py-14 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-5 lg:px-12">
            <div className="flex items-center justify-between mb-10">
              <p className="font-sans text-[14px] text-gris-400">
                <span className="font-semibold text-marine">{PROPERTIES.length} biens</span> correspondent à votre recherche
              </p>
            </div>

            {/* ── Grille asymétrique : le 1er bien est large ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {PROPERTIES.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
