"use client";

import { useState } from "react";

/* ─────────────────────────────────────────────────────────────
   CONTACT FORM — Formulaire de contact réutilisable
   ───────────────────────────────────────────────────────────── */

interface ContactFormProps {
  variant?: "contact" | "estimation";
}

export default function ContactForm({ variant = "contact" }: ContactFormProps) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="bg-bleu-pale rounded-[4px] p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-bleu/20 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-bleu" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-700 text-marine mb-2">Message envoyé !</h3>
        <p className="font-sans text-[14px] text-gris-600">
          Nous vous recontactons dans les meilleurs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-body text-[12px] font-semibold uppercase tracking-[0.1em] text-gris-600 mb-1.5">
            Prénom
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 bg-creme border border-gris-200 rounded-[4px] font-sans text-[14px] text-noir focus:outline-none focus:border-bleu transition-colors"
            placeholder="Votre prénom"
          />
        </div>
        <div>
          <label className="block font-body text-[12px] font-semibold uppercase tracking-[0.1em] text-gris-600 mb-1.5">
            Nom
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 bg-creme border border-gris-200 rounded-[4px] font-sans text-[14px] text-noir focus:outline-none focus:border-bleu transition-colors"
            placeholder="Votre nom"
          />
        </div>
      </div>

      <div>
        <label className="block font-body text-[12px] font-semibold uppercase tracking-[0.1em] text-gris-600 mb-1.5">
          Email
        </label>
        <input
          type="email"
          required
          className="w-full px-4 py-3 bg-creme border border-gris-200 rounded-[4px] font-sans text-[14px] text-noir focus:outline-none focus:border-bleu transition-colors"
          placeholder="votre@email.com"
        />
      </div>

      <div>
        <label className="block font-body text-[12px] font-semibold uppercase tracking-[0.1em] text-gris-600 mb-1.5">
          Téléphone
        </label>
        <input
          type="tel"
          className="w-full px-4 py-3 bg-creme border border-gris-200 rounded-[4px] font-sans text-[14px] text-noir focus:outline-none focus:border-bleu transition-colors"
          placeholder="06 00 00 00 00"
        />
      </div>

      {variant === "estimation" && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-body text-[12px] font-semibold uppercase tracking-[0.1em] text-gris-600 mb-1.5">
                Type de bien
              </label>
              <select className="w-full px-4 py-3 bg-creme border border-gris-200 rounded-[4px] font-sans text-[14px] text-noir focus:outline-none focus:border-bleu transition-colors">
                <option>Appartement</option>
                <option>Maison</option>
                <option>Loft</option>
                <option>Duplex</option>
                <option>Autre</option>
              </select>
            </div>
            <div>
              <label className="block font-body text-[12px] font-semibold uppercase tracking-[0.1em] text-gris-600 mb-1.5">
                Surface (m²)
              </label>
              <input
                type="number"
                className="w-full px-4 py-3 bg-creme border border-gris-200 rounded-[4px] font-sans text-[14px] text-noir focus:outline-none focus:border-bleu transition-colors"
                placeholder="Ex: 85"
              />
            </div>
          </div>
          <div>
            <label className="block font-body text-[12px] font-semibold uppercase tracking-[0.1em] text-gris-600 mb-1.5">
              Adresse du bien
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-creme border border-gris-200 rounded-[4px] font-sans text-[14px] text-noir focus:outline-none focus:border-bleu transition-colors"
              placeholder="Adresse complète"
            />
          </div>
        </>
      )}

      <div>
        <label className="block font-body text-[12px] font-semibold uppercase tracking-[0.1em] text-gris-600 mb-1.5">
          Message
        </label>
        <textarea
          rows={4}
          required
          className="w-full px-4 py-3 bg-creme border border-gris-200 rounded-[4px] font-sans text-[14px] text-noir focus:outline-none focus:border-bleu transition-colors resize-none"
          placeholder={
            variant === "estimation"
              ? "Décrivez votre bien (nombre de pièces, état, particularités...)"
              : "Votre message..."
          }
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto px-10 py-3.5 font-body text-[13px] font-bold uppercase tracking-[0.12em] text-blanc bg-bleu hover:bg-bleu-hover transition-colors rounded-full"
      >
        {variant === "estimation" ? "Demander mon estimation" : "Envoyer le message"}
      </button>
    </form>
  );
}
