"use client";

import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Headset,
  Send,
  ClipboardList,
  Settings,
  Handshake,
  Headphones,
  FileText,
  Cog,
  Truck,
  HandCoins,
  ChevronRight,
  Factory,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-white text-[#0F172A]">
      {/* ─── HERO CONTACT ─── */}
      <section className="group relative w-full overflow-visible bg-[#002B5C] py-20 md:min-h-[520px] lg:min-h-[520px] lg:py-0">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="h-full w-full bg-cover bg-center transition-transform duration-[2200ms] ease-out group-hover:scale-105"
            style={{ backgroundImage: 'url("/assets/poste-prefabrique.png")' }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#002B5C]/60 via-[#003B7A]/35 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.075)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35" />
        <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-[#FF7A00]/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-white/8 via-white/2 to-transparent" />

        <div className="absolute inset-0 bg-[#002B5C]/55 lg:inset-y-0 lg:left-0 lg:right-auto lg:w-[58%] lg:bg-gradient-to-br lg:from-[#002B5C]/65 lg:to-[#003B7A]/55 [clip-path:none] lg:[clip-path:polygon(0_0,82%_0,100%_100%,0%_100%)]" />

        <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6 lg:items-start lg:px-8 lg:pb-20 lg:pt-20 xl:items-start xl:px-10 xl:pb-24 xl:pt-20">
          <div className="w-full max-w-[600px] xl:max-w-[650px]">
            <p className="opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] font-[var(--font-heading)] text-sm font-semibold uppercase tracking-[0.24em] text-[#FF7A00] lg:text-base xl:text-lg">
              Contactez-nous
            </p>

            <h1 className="mt-3 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] font-[var(--font-heading)] text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] text-white [animation-delay:150ms] md:text-4xl lg:text-[40px] xl:text-[48px]">
              Parlons de vos
              <br />
              projets électriques
            </h1>

            <p className="mt-4 max-w-[520px] opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] font-[var(--font-body)] text-base leading-relaxed text-white/85 [animation-delay:300ms] md:text-lg lg:text-sm xl:text-base">
              Nos experts sont à votre écoute pour vous accompagner dans vos
              projets de postes transformateurs et d&apos;équipements électriques
              MT/BT.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] [animation-delay:450ms] lg:mt-8 lg:gap-4">
              {[
                { icon: Zap, title: "Réponse rapide", desc: "Sous 24h" },
                { icon: ShieldCheck, title: "Conseil expert", desc: "Solutions sur mesure" },
                { icon: Factory, title: "Visite d'usine", desc: "À Sétif sur rendez-vous" },
                { icon: Headphones, title: "Accompagnement", desc: "De l'étude à la mise en service" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#FF7A00]" />
                    <div>
                      <span className="font-[var(--font-heading)] text-xs font-bold text-white xl:text-sm">
                        {item.title}
                      </span>
                      <span className="block font-[var(--font-body)] text-xs text-white/70">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAIN CONTACT AREA ─── */}
      <section className="relative bg-white px-6 py-20 lg:px-8 lg:py-28 xl:px-10 xl:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* LEFT COLUMN — Contact Info Cards */}
          <div className="grid gap-6">
            {/* Card 1: Coordonnées */}
            <article className="rounded-2xl bg-white p-7 shadow-xl shadow-[#002B5C]/8 ring-1 ring-[#E5EAF0] sm:p-8">
              <h2 className="font-[var(--font-heading)] text-xl font-bold tracking-[-0.03em] text-[#003B7A]">
                Nos coordonnées
              </h2>
              <div className="mt-6 grid gap-5">
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FF7A00]/10 text-[#FF7A00]">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-[var(--font-heading)] text-sm font-semibold text-[#003B7A]">
                      Adresse
                    </p>
                    <p className="mt-1 font-[var(--font-body)] text-sm leading-relaxed text-slate-600">
                      Zone Industrielle, Sétif, Algérie
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FF7A00]/10 text-[#FF7A00]">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-[var(--font-heading)] text-sm font-semibold text-[#003B7A]">
                      Téléphone
                    </p>
                    <p className="mt-1 font-[var(--font-body)] text-sm text-slate-600">
                      +213 5XX XXX XXX
                    </p>
                    <p className="font-[var(--font-body)] text-sm text-slate-600">
                      +213 3XX XXX XXX
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FF7A00]/10 text-[#FF7A00]">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-[var(--font-heading)] text-sm font-semibold text-[#003B7A]">
                      Email
                    </p>
                    <p className="mt-1 font-[var(--font-body)] text-sm text-slate-600">
                      contact@kazelec.dz
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FF7A00]/10 text-[#FF7A00]">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-[var(--font-heading)] text-sm font-semibold text-[#003B7A]">
                      Horaires
                    </p>
                    <p className="mt-1 font-[var(--font-body)] text-sm text-slate-600">
                      Lun - Ven : 08:00 - 17:00
                    </p>
                    <p className="font-[var(--font-body)] text-sm text-slate-600">
                      Sam : 08:00 - 12:00
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Card 2: Usine */}
            <article className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#002B5C] to-[#003B7A] p-7 text-white shadow-2xl shadow-[#002B5C]/20 transition duration-300 hover:-translate-y-1 hover:shadow-3xl sm:p-8">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#FF7A00]/15 blur-3xl" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
                <Factory className="h-7 w-7 text-[#FF7A00]" />
              </div>
              <h3 className="relative mt-5 font-[var(--font-heading)] text-xl font-bold tracking-[-0.03em]">
                Visitez notre usine
              </h3>
              <p className="relative mt-3 font-[var(--font-body)] text-sm leading-relaxed text-white/80">
                Découvrez notre unité de production à Sétif et rencontrez nos
                équipes.
              </p>
              <a
                href="#"
                className="relative mt-6 inline-flex items-center gap-2 font-[var(--font-heading)] text-sm font-semibold text-[#FF7A00] transition group-hover:gap-3"
              >
                Prendre rendez-vous
                <ChevronRight className="h-4 w-4" />
              </a>
            </article>
          </div>

          {/* RIGHT COLUMN — Contact Form */}
          <article className="rounded-2xl bg-white p-7 shadow-xl shadow-[#002B5C]/8 ring-1 ring-[#E5EAF0] sm:p-9">
            <h2 className="font-[var(--font-heading)] text-xl font-bold tracking-[-0.03em] text-[#003B7A]">
              Envoyez-nous un message
            </h2>
            <p className="mt-2 font-[var(--font-body)] text-sm text-slate-500">
              Remplissez le formulaire, nous vous répondrons dans les plus brefs
              délais.
            </p>

            <form className="mt-8 grid gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block font-[var(--font-heading)] text-sm font-semibold text-[#003B7A]">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 font-[var(--font-body)] text-sm text-[#0F172A] outline-none transition focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-[var(--font-heading)] text-sm font-semibold text-[#003B7A]">
                    Société
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 font-[var(--font-body)] text-sm text-[#0F172A] outline-none transition focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block font-[var(--font-heading)] text-sm font-semibold text-[#003B7A]">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 font-[var(--font-body)] text-sm text-[#0F172A] outline-none transition focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-[var(--font-heading)] text-sm font-semibold text-[#003B7A]">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 font-[var(--font-body)] text-sm text-[#0F172A] outline-none transition focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block font-[var(--font-heading)] text-sm font-semibold text-[#003B7A]">
                  Sujet *
                </label>
                <select
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 font-[var(--font-body)] text-sm text-[#0F172A] outline-none transition focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="devis">Demande de devis</option>
                  <option value="technique">Conseil technique</option>
                  <option value="partenariat">Partenariat</option>
                  <option value="support">Support après-vente</option>
                  <option value="usine">Visite d&apos;usine</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="mb-1.5 block font-[var(--font-heading)] text-sm font-semibold text-[#003B7A]">
                  Votre message *
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 font-[var(--font-body)] text-sm text-[#0F172A] outline-none transition focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20"
                />
              </div>

              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 accent-[#FF7A00]"
                />
                <span className="font-[var(--font-body)] text-sm text-slate-600">
                  J&apos;accepte d&apos;être contacté par KAZELEC.
                </span>
              </label>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#FF7A00] px-6 py-3.5 font-[var(--font-heading)] text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff8c1a] hover:shadow-xl"
                >
                  Envoyer le message
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </article>
        </div>
      </section>

      {/* ─── WHY CONTACT US ─── */}
      <section className="bg-[#F8FAFC] px-6 py-20 lg:px-8 lg:py-28 xl:px-10 xl:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="font-[var(--font-heading)] text-3xl font-bold tracking-[-0.03em] text-[#003B7A] lg:text-4xl xl:text-5xl">
              Pourquoi nous contacter ?
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#FF7A00]" />
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ClipboardList,
                title: "Demande de devis",
                description:
                  "Obtenez une offre personnalisée pour vos postes transformateurs et équipements électriques.",
              },
              {
                icon: Settings,
                title: "Conseil technique",
                description:
                  "Nos experts vous accompagnent dans le choix des solutions adaptées à vos besoins.",
              },
              {
                icon: Handshake,
                title: "Partenariat",
                description:
                  "Devenez partenaire KAZELEC et développez votre activité avec nous.",
              },
              {
                icon: Headphones,
                title: "Support après-vente",
                description:
                  "Une équipe dédiée pour vous accompagner après l'installation.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="group rounded-xl bg-white p-7 shadow-sm ring-1 ring-[#E5E7EB] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#003B7A]/8 transition group-hover:bg-[#FF7A00]/10">
                    <Icon className="h-6 w-6 text-[#003B7A] transition group-hover:text-[#FF7A00]" />
                  </div>
                  <h3 className="mt-5 font-[var(--font-heading)] text-lg font-semibold tracking-[-0.02em] text-[#003B7A]">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-[var(--font-body)] text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── LOCATION SECTION ─── */}
      <section className="bg-white px-6 py-20 lg:px-8 lg:py-28 xl:px-10 xl:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="font-[var(--font-heading)] text-3xl font-bold tracking-[-0.03em] text-[#003B7A] lg:text-4xl xl:text-5xl">
              Notre emplacement
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#FF7A00]" />
          </div>

          <div className="relative mt-12 overflow-hidden rounded-2xl ring-1 ring-[#E5E7EB]">
            {/* Google Maps embed */}
            <div className="relative h-[400px] lg:h-[480px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.5!2d5.4!3d36.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDEwJzQ4LjAiTiA1wrAyNCcwMC4wIkU!5e0!3m2!1sfr!2sdz!4v1700000000000!5m2!1sfr!2sdz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KAZELEC - Zone Industrielle, Sétif"
                className="absolute inset-0"
              />

              {/* Floating info card */}
              <div className="absolute left-4 top-4 z-10 w-56 rounded-xl bg-white p-4 shadow-xl ring-1 ring-[#E5E7EB] lg:left-6 lg:top-6">
                <Image
                  src="/assets/logo.png"
                  alt="KAZELEC"
                  width={110}
                  height={34}
                  className="h-7 w-auto"
                />
                <p className="mt-2 font-[var(--font-body)] text-xs leading-relaxed text-slate-600">
                  Zone Industrielle,
                  <br />
                  Sétif, Algérie
                </p>
                <a
                  href="https://www.google.com/maps?cid=10668117450045588455"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 font-[var(--font-heading)] text-xs font-semibold text-[#FF7A00] transition hover:gap-2"
                >
                  Voir sur Google Maps
                  <ChevronRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WORK METHOD ─── */}
      <section className="bg-[#F8FAFC] px-6 py-20 lg:px-8 lg:py-28 xl:px-10 xl:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="font-[var(--font-heading)] text-3xl font-bold tracking-[-0.03em] text-[#003B7A] lg:text-4xl xl:text-5xl">
              Notre méthode de travail
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#FF7A00]" />
          </div>

          {/* Desktop horizontal */}
          <div className="relative mt-16 hidden lg:block">
            <div className="absolute left-0 right-0 top-[32px] h-[2px] bg-[#E5E7EB]" />
            <div className="absolute left-0 top-[32px] h-[2px] w-full bg-gradient-to-r from-[#FF7A00] to-[#FF7A00]/60" />

            <div className="relative grid grid-cols-4 gap-8">
              {[
                {
                  icon: FileText,
                  step: "01",
                  title: "Analyse de votre besoin",
                  description: "Étude approfondie de votre projet et de vos contraintes techniques.",
                },
                {
                  icon: Cog,
                  step: "02",
                  title: "Proposition sur mesure",
                  description: "Conception d'une solution adaptée avec devis détaillé et planification.",
                },
                {
                  icon: Truck,
                  step: "03",
                  title: "Réalisation & livraison",
                  description: "Fabrication en usine, contrôle qualité et transport sécurisé.",
                },
                {
                  icon: HandCoins,
                  step: "04",
                  title: "Installation & suivi",
                  description: "Mise en service, formation et support technique continu.",
                },
              ].map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="flex flex-col items-center text-center">
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#003B7A] text-white shadow-lg shadow-[#003B7A]/25 transition hover:scale-110">
                      <Icon className="h-7 w-7" />
                    </div>
                    <p className="mt-5 font-[var(--font-stat)] text-sm font-bold text-[#FF7A00]">
                      ÉTAPE {step.step}
                    </p>
                    <h3 className="mt-2 font-[var(--font-heading)] text-base font-semibold text-[#003B7A]">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-[200px] font-[var(--font-body)] text-sm leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile vertical */}
          <div className="relative mt-12 lg:hidden">
            <div className="absolute left-[31px] top-0 bottom-0 w-[2px] bg-[#E5E7EB]" />
            <div className="absolute left-[31px] top-0 w-[2px] bg-gradient-to-b from-[#FF7A00] to-[#FF7A00]/40" style={{ height: "100%" }} />

            <div className="relative grid gap-10">
              {[
                {
                  icon: FileText,
                  step: "01",
                  title: "Analyse de votre besoin",
                  description: "Étude approfondie de votre projet et de vos contraintes techniques.",
                },
                {
                  icon: Cog,
                  step: "02",
                  title: "Proposition sur mesure",
                  description: "Conception d'une solution adaptée avec devis détaillé et planification.",
                },
                {
                  icon: Truck,
                  step: "03",
                  title: "Réalisation & livraison",
                  description: "Fabrication en usine, contrôle qualité et transport sécurisé.",
                },
                {
                  icon: HandCoins,
                  step: "04",
                  title: "Installation & suivi",
                  description: "Mise en service, formation et support technique continu.",
                },
              ].map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="flex items-start gap-6">
                    <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#003B7A] text-white shadow-lg shadow-[#003B7A]/25">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="pt-2">
                      <p className="font-[var(--font-stat)] text-sm font-bold text-[#FF7A00]">
                        ÉTAPE {step.step}
                      </p>
                      <h3 className="mt-1 font-[var(--font-heading)] text-lg font-semibold text-[#003B7A]">
                        {step.title}
                      </h3>
                      <p className="mt-1 font-[var(--font-body)] text-sm leading-relaxed text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="px-6 py-12 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[24px] bg-gradient-to-r from-[#FF7A00] to-[#ff8c1a] shadow-2xl shadow-orange-500/20">
          <div className="flex flex-col items-center gap-8 p-10 text-center sm:p-12 md:flex-row md:text-left lg:p-14">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/20">
              <Headset className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="font-[var(--font-heading)] text-2xl font-bold tracking-[-0.03em] text-white lg:text-3xl">
                Besoin d&apos;un conseil ou d&apos;un devis ?
              </h2>
              <p className="mt-3 font-[var(--font-body)] text-base font-medium text-white/90">
                Nos experts sont à votre écoute pour vous accompagner dans vos
                projets électriques.
              </p>
            </div>
            <a
              href="tel:+213500000000"
              className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-white px-8 py-4 font-[var(--font-heading)] text-sm font-bold uppercase tracking-wide text-[#003B7A] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Phone className="h-5 w-5" />
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
