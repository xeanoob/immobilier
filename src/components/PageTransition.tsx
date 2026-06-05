"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

/* ─────────────────────────────────────────────────────────────
   PAGE TRANSITION — Overlay marine avec logo

   Flow :
   1. Clic sur un TransitionLink
   2. Overlay marine monte (slide-up 400ms)
   3. Logo pulse au centre (opacity)
   4. Navigation Next.js se fait
   5. Overlay descend (slide-down 400ms)

   C'est un vrai choix de design (comme les sites de luxe),
   pas une animation template IA.
   ───────────────────────────────────────────────────────────── */

type TransitionState = "idle" | "entering" | "leaving";

interface TransitionContextValue {
  navigateTo: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextValue>({
  navigateTo: () => {},
});

export function useTransition() {
  return useContext(TransitionContext);
}

/* ── Provider + Overlay ── */
export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [state, setState] = useState<TransitionState>("idle");
  const [targetHref, setTargetHref] = useState<string | null>(null);

  const navigateTo = useCallback((href: string) => {
    if (href === pathname) return;
    setTargetHref(href);
    setState("entering");
  }, [pathname]);

  // Quand l'overlay est entièrement visible → naviguer
  useEffect(() => {
    if (state === "entering" && targetHref) {
      const timer = setTimeout(() => {
        router.push(targetHref);
      }, 500); // durée du slide-up
      return () => clearTimeout(timer);
    }
  }, [state, targetHref, router]);

  // Quand le pathname change → lancer la sortie
  useEffect(() => {
    if (state === "entering" || state === "leaving") {
      setState("leaving");
      const timer = setTimeout(() => {
        setState("idle");
        setTargetHref(null);
      }, 500); // durée du slide-down
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <TransitionContext.Provider value={{ navigateTo }}>
      {children}

      {/* ── Overlay ── */}
      <div
        className={`
          fixed inset-0 z-[100] flex items-center justify-center
          bg-marine pointer-events-none
          ${state === "entering" ? "transition-enter" : ""}
          ${state === "leaving" ? "transition-leave" : ""}
          ${state === "idle" ? "transition-idle" : ""}
        `}
      >
        <div className={`transition-logo ${state !== "idle" ? "transition-logo-visible" : ""}`}>
          <Image
            src="/logo-3-300x71.webp"
            alt="Les Agents de l'Immobilier"
            width={220}
            height={52}
            className="h-12 lg:h-14 w-auto brightness-0 invert"
            priority
          />
        </div>
      </div>
    </TransitionContext.Provider>
  );
}

/* ── TransitionLink — remplace <a> pour les liens internes ── */
export function TransitionLink({
  href,
  children,
  className = "",
  onClick,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const { navigateTo } = useTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Liens externes ou ancres → comportement normal
    if (href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel") || href.startsWith("#")) {
      onClick?.(e);
      return;
    }

    e.preventDefault();
    onClick?.(e);
    navigateTo(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
