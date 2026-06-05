import Image from "next/image";

/* ─────────────────────────────────────────────────────────────
   PAGE HEADER — Sans Framer Motion
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
  image = "/hero-real.jpg",
}: PageHeaderProps) {
  return (
    <section className="relative h-[340px] lg:h-[420px] flex items-end overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-marine/75" />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-5 lg:px-12 pb-10 lg:pb-14">
        {breadcrumb && (
          <nav className="mb-4 flex items-center gap-2 font-sans text-[12px] text-blanc/50">
            <a href="/" className="hover:text-blanc transition-colors">Accueil</a>
            {breadcrumb.map((item) => (
              <span key={item.href} className="flex items-center gap-2">
                <span>/</span>
                <a href={item.href} className="hover:text-blanc transition-colors">
                  {item.label}
                </a>
              </span>
            ))}
          </nav>
        )}

        <div className="w-10 h-[3px] bg-bleu rounded-full mb-4" />

        <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-800 text-blanc leading-[1.05]">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-3 font-sans text-[16px] text-blanc/60 max-w-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
