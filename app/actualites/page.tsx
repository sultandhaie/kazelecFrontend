"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  Clock,
  Lightbulb,
  Mail,
  Newspaper,
  Search,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { getAllNews, getAllCategories } from "@/lib/news";
import type { NewsArticle } from "@/types/news";

const allArticles = getAllNews();
const allCategories = getAllCategories();

const trustItems = [
  { icon: Newspaper, label: "Informations fiables", desc: "Des contenus vérifiés et transparents" },
  { icon: Lightbulb, label: "Innovations", desc: "Les dernières avancées et technologies" },
  { icon: Target, label: "Projets & Réalisations", desc: "Nos projets en cours et accomplis" },
  { icon: Calendar, label: "Événements", desc: "Salons, rencontres et événements à venir" },
];

const filterCategories = ["Tous", ...allCategories];

const popularArticles = allArticles.slice(0, 4);

const whyCards = [
  { icon: Zap, title: "Restez informés", desc: "Suivez nos actualités en temps réel." },
  { icon: CheckCircle2, title: "Informations fiables", desc: "Des contenus vérifiés et publiés par notre équipe." },
  { icon: Newspaper, title: "Contenu quotidien", desc: "De nouvelles actualités publiées régulièrement." },
  { icon: Users, title: "Engagement", desc: "Nous partageons notre expertise et notre savoir-faire." },
];

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

export default function ActualitesPage() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filteredArticles =
    activeFilter === "Tous"
      ? allArticles
      : allArticles.filter((a) => a.category === activeFilter);

  return (
    <main className="bg-white text-[#0F172A]">

      {/* ═══════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════ */}
      <section className="group relative w-full overflow-visible bg-[#002B5C] py-20 md:min-h-[560px] lg:min-h-[560px] lg:py-0">
        {/* Image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/assets/poste-installation.png"
            alt="Actualités KAZELEC"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right transition-transform duration-[2200ms] ease-out group-hover:scale-105"
          />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002B5C]/60 via-[#003B7A]/35 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.075)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35" />
        <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-[#FF7A00]/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-white/8 via-white/2 to-transparent" />

        {/* Diagonal panel */}
        <div className="absolute inset-0 bg-[#002B5C]/55 lg:inset-y-0 lg:left-0 lg:right-auto lg:w-[58%] lg:bg-gradient-to-br lg:from-[#002B5C]/65 lg:to-[#003B7A]/55 [clip-path:none] lg:[clip-path:polygon(0_0,82%_0,100%_100%,0%_100%)]" />

        {/* Content */}
        <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6 lg:items-start lg:px-8 lg:pb-20 lg:pt-16 xl:items-start xl:px-10 xl:pb-24 xl:pt-16">
          <div className="w-full max-w-[600px] xl:max-w-[650px]">
            <p className="opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] font-[var(--font-heading)] text-sm font-semibold uppercase tracking-[0.24em] text-[#FF7A00] lg:text-base xl:text-lg">
              Actualités
            </p>

            <h1 className="mt-4 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] font-[var(--font-heading)] text-3xl font-extrabold leading-[1.05] tracking-[-0.03em] text-white [animation-delay:150ms] md:text-4xl lg:text-[40px] xl:text-[48px]">
              Nos actualités
            </h1>

            <p className="mt-5 max-w-[540px] opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] font-[var(--font-body)] text-base leading-relaxed text-white/85 [animation-delay:300ms] md:text-lg lg:text-sm xl:text-base">
              Restez informés de nos dernières nouvelles, projets, réalisations et
              innovations dans le domaine électrique.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] [animation-delay:450ms] lg:mt-10">
              {trustItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#FF7A00]/40 text-[#FF7A00]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block font-[var(--font-heading)] text-xs font-bold text-white xl:text-sm">
                        {item.label}
                      </span>
                      <span className="block font-[var(--font-body)] text-[11px] text-white/60">
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

      {/* ═══════════════════════════════════════════
          SECTION 2 — FILTER BAR
      ═══════════════════════════════════════════ */}
      <section className="sticky top-20 z-40 border-b border-[#E5E7EB] bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-4 lg:px-8 xl:px-10">
          {/* Category filters */}
          <div className="flex flex-1 items-center gap-2 overflow-x-auto scrollbar-none">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`shrink-0 rounded-full px-4 py-2 font-[var(--font-heading)] text-sm font-semibold transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-[#FF7A00] text-white shadow-md shadow-orange-500/25"
                    : "border border-[#003B7A]/20 bg-white text-[#003B7A] hover:border-[#FF7A00] hover:text-[#FF7A00]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative hidden shrink-0 md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Rechercher une actualité..."
              className="w-64 rounded-full border border-[#E5E7EB] bg-[#F8FAFC] py-2.5 pl-10 pr-4 font-[var(--font-body)] text-sm text-[#0F172A] placeholder-slate-400 outline-none transition focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — NEWS LAYOUT
      ═══════════════════════════════════════════ */}
      <section className="px-6 py-16 lg:px-8 lg:py-20 xl:px-10 xl:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_320px]">

          {/* ── NEWS GRID ── */}
          <div>
            <div className="grid gap-6 sm:grid-cols-2">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/actualites/${article.slug}`}
                  className="group/card overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#E5E7EB] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#002B5C]/8"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden bg-[#F8FAFC]">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-[#003B7A] px-3 py-1 font-[var(--font-heading)] text-xs font-bold text-white shadow-md">
                      {article.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-[var(--font-heading)] text-base font-bold leading-snug text-[#002B5C] transition-colors group-hover/card:text-[#FF7A00]">
                      {article.title}
                    </h3>
                    <p className="mt-2 font-[var(--font-body)] text-sm leading-relaxed text-slate-500 line-clamp-2">
                      {article.excerpt}
                    </p>

                    <div className="mt-4 flex items-center gap-4 border-t border-[#E5E7EB] pt-4">
                      <span className="inline-flex items-center gap-1.5 font-[var(--font-body)] text-xs text-slate-400">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDate(article.publishedAt)}
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-[var(--font-body)] text-xs text-slate-400">
                        <Clock className="h-3.5 w-3.5" />
                        {article.readingTime} min de lecture
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <p className="mt-12 text-center font-[var(--font-body)] text-slate-500">
                Aucune actualité trouvée pour cette catégorie.
              </p>
            )}

            {/* Load more */}
            {filteredArticles.length > 0 && (
              <div className="mt-12 text-center">
                <button className="rounded-full border-2 border-[#FF7A00] bg-white px-8 py-3 font-[var(--font-heading)] text-sm font-bold text-[#FF7A00] transition-all duration-300 hover:bg-[#FF7A00] hover:text-white">
                  Charger plus d&apos;actualités
                </button>
              </div>
            )}
          </div>

          {/* ── SIDEBAR ── */}
          <div className="space-y-6 lg:space-y-8">
            {/* Popular articles */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#E5E7EB]">
              <h3 className="font-[var(--font-heading)] text-lg font-bold text-[#002B5C]">
                Articles populaires
              </h3>
              <div className="mt-5 space-y-4">
                {popularArticles.map((item, index) => (
                  <Link
                    key={item.slug}
                    href={`/actualites/${item.slug}`}
                    className="group/pop flex items-start gap-3"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FF7A00]/10 font-[var(--font-heading)] text-xs font-bold text-[#FF7A00]">
                      {index + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="font-[var(--font-heading)] text-sm font-bold leading-snug text-[#002B5C] transition-colors group-hover/pop:text-[#FF7A00] line-clamp-2">
                        {item.title}
                      </p>
                      <p className="mt-1 font-[var(--font-body)] text-xs text-slate-400">
                        {formatDate(item.publishedAt)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#002B5C] to-[#003B7A] p-6 text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#FF7A00]">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-[var(--font-heading)] text-lg font-bold">
                Abonnez-vous à notre newsletter
              </h3>
              <p className="mt-2 font-[var(--font-body)] text-sm leading-relaxed text-white/70">
                Recevez nos dernières actualités et nouveautés directement dans votre
                boîte mail.
              </p>
              <input
                type="email"
                placeholder="Votre adresse email"
                className="mt-4 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 font-[var(--font-body)] text-sm text-white placeholder-white/50 outline-none transition focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/30"
              />
              <button className="mt-3 w-full rounded-lg bg-[#FF7A00] py-2.5 font-[var(--font-heading)] text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:bg-[#ff8c1a]">
                S&apos;abonner
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — WHY FOLLOW US
      ═══════════════════════════════════════════ */}
      <section className="bg-[#F8FAFC] px-6 py-16 lg:px-8 lg:py-20 xl:px-10 xl:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-white px-8 py-12 ring-1 ring-[#E5E7EB] sm:px-12 sm:py-14 lg:px-16 lg:py-16">
          <h2 className="text-center font-[var(--font-heading)] text-3xl font-bold tracking-[-0.02em] text-[#003B7A] lg:text-4xl">
            Pourquoi suivre nos actualités ?
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="group/why rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-[#E5E7EB] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#002B5C]/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#003B7A]/10 text-[#003B7A] transition-colors duration-300 group-hover/why:bg-[#FF7A00]/10 group-hover/why:text-[#FF7A00]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-[var(--font-heading)] text-base font-bold text-[#002B5C]">
                    {card.title}
                  </h3>
                  <p className="mt-2 font-[var(--font-body)] text-sm leading-relaxed text-slate-600">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — FINAL CTA
      ═══════════════════════════════════════════ */}
      <CtaBanner />

    </main>
  );
}
