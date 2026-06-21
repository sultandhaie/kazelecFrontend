"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Calendar,
  ChevronRight,
  Clock,
  Mail,
  Share2,
  Tag,
  ExternalLink,
} from "lucide-react";
import type { NewsArticle } from "@/types/news";

type SidebarArticle = {
  slug: string;
  title: string;
  date: string;
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

export default function ArticleDetailClient({
  article,
  prevArticle,
  nextArticle,
  popularArticles,
}: {
  article: NewsArticle;
  prevArticle: { slug: string; title: string } | null;
  nextArticle: { slug: string; title: string } | null;
  popularArticles: SidebarArticle[];
}) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <main className="bg-[#F8FAFC] text-[#0F172A]">

      {/* ═══════════════════════════════════════════
          SECTION 1 — ARTICLE HERO
      ═══════════════════════════════════════════ */}
      <section className="group relative w-full overflow-visible bg-[#002B5C] py-20 md:min-h-[560px] lg:min-h-[560px] lg:py-0">
        {/* Image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={article.coverImage}
            alt={article.title}
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
        <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6 lg:items-start lg:px-8 lg:pb-20 lg:pt-12 xl:items-start xl:px-10 xl:pb-24 xl:pt-12">
          <div className="w-full max-w-[600px] xl:max-w-[650px]">
            {/* Breadcrumb */}
            <nav className="mb-4 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]">
              <ol className="flex flex-wrap items-center gap-2 font-[var(--font-body)] text-xs text-white/60">
                <li>
                  <Link href="/" className="transition hover:text-white">
                    Accueil
                  </Link>
                </li>
                <li><ChevronRight className="h-3 w-3" /></li>
                <li>
                  <Link href="/actualites" className="transition hover:text-white">
                    Actualités
                  </Link>
                </li>
                <li><ChevronRight className="h-3 w-3" /></li>
                <li className="font-semibold text-white line-clamp-1">{article.title}</li>
              </ol>
            </nav>

            <p className="opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] font-[var(--font-heading)] text-sm font-semibold uppercase tracking-[0.24em] text-[#FF7A00] lg:text-base xl:text-lg">
              {article.category}
            </p>

            <h1 className="mt-3 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] font-[var(--font-heading)] text-2xl font-extrabold leading-[1.1] tracking-[-0.03em] text-white [animation-delay:150ms] md:text-3xl lg:text-[32px] xl:text-[38px]">
              {article.title}
            </h1>

            <p className="mt-4 max-w-[520px] opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] font-[var(--font-body)] text-base leading-relaxed text-white/85 [animation-delay:300ms] md:text-lg lg:text-sm xl:text-base">
              {article.excerpt}
            </p>

            {/* Meta */}
            <div className="mt-6 flex flex-wrap items-center gap-4 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] [animation-delay:450ms]">
              <span className="inline-flex items-center gap-1.5 font-[var(--font-body)] text-sm text-white/70">
                <Calendar className="h-4 w-4 text-[#FF7A00]" />
                {formatDate(article.publishedAt)}
              </span>
              <span className="inline-flex items-center gap-1.5 font-[var(--font-body)] text-sm text-white/70">
                <Clock className="h-4 w-4 text-[#FF7A00]" />
                {article.readingTime} min de lecture
              </span>
              <span className="inline-flex items-center gap-1.5 font-[var(--font-body)] text-sm text-white/70">
                <Briefcase className="h-4 w-4 text-[#FF7A00]" />
                {article.author}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — MAIN ARTICLE LAYOUT
      ═══════════════════════════════════════════ */}
      <section className="px-6 py-16 lg:px-8 lg:py-20 xl:px-10 xl:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_360px]">

          {/* ── LEFT ARTICLE CARD ── */}
          <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#E5E7EB] sm:p-8 lg:p-10">
            {/* Content blocks */}
            {article.content.map((block, index) => {
              if (block.type === "paragraph") {
                return (
                  <p
                    key={index}
                    className="font-[var(--font-body)] text-sm leading-relaxed text-slate-600"
                  >
                    {block.value}
                  </p>
                );
              }
              return null;
            })}

            {/* Main image */}
            <div className="relative my-8 aspect-[16/9] overflow-hidden rounded-2xl bg-[#F8FAFC]">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>

            {/* Gallery */}
            {article.gallery.length > 0 && (
              <div className="mt-10">
                <h2 className="font-[var(--font-heading)] text-xl font-bold tracking-[-0.02em] text-[#003B7A]">
                  Galerie du projet
                </h2>
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
                  {article.gallery.map((img, index) => (
                    <div
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`relative aspect-square cursor-pointer overflow-hidden rounded-xl bg-[#F8FAFC] ring-2 transition-all duration-300 ${
                        activeImage === index
                          ? "ring-[#FF7A00]"
                          : "ring-transparent hover:ring-[#E5E7EB]"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Galerie ${index + 1}`}
                        fill
                        sizes="(max-width: 640px) 50vw, 20vw"
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {article.tags.length > 0 && (
              <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-[#E5E7EB] pt-6">
                <span className="font-[var(--font-heading)] text-sm font-bold text-[#002B5C]">
                  Tags :
                </span>
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#003B7A]/10 px-3 py-1 font-[var(--font-body)] text-xs font-medium text-[#003B7A]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Share */}
            <div className="mt-6 flex items-center gap-4 border-t border-[#E5E7EB] pt-6">
              <span className="font-[var(--font-heading)] text-sm font-bold text-[#002B5C]">
                Partager cet article
              </span>
              <div className="flex items-center gap-3">
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#003B7A]/10 text-[#003B7A] transition hover:bg-[#003B7A] hover:text-white">
                  <Share2 className="h-4 w-4" />
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#003B7A]/10 text-[#003B7A] transition hover:bg-[#003B7A] hover:text-white">
                  <ExternalLink className="h-4 w-4" />
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#003B7A]/10 text-[#003B7A] transition hover:bg-[#003B7A] hover:text-white">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Prev / Next navigation */}
            <div className="mt-8 grid gap-4 border-t border-[#E5E7EB] pt-8 sm:grid-cols-2">
              {prevArticle ? (
                <Link
                  href={`/actualites/${prevArticle.slug}`}
                  className="group/nav flex items-start gap-3 rounded-2xl bg-[#F8FAFC] p-4 ring-1 ring-[#E5E7EB] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <ArrowLeft className="mt-1 h-5 w-5 shrink-0 text-[#FF7A00] transition-transform group-hover/nav:-translate-x-1" />
                  <div>
                    <span className="block font-[var(--font-body)] text-xs text-slate-400">
                      Article précédent
                    </span>
                    <span className="mt-1 block font-[var(--font-heading)] text-sm font-bold text-[#002B5C] line-clamp-2">
                      {prevArticle.title}
                    </span>
                  </div>
                </Link>
              ) : (
                <div />
              )}
              {nextArticle ? (
                <Link
                  href={`/actualites/${nextArticle.slug}`}
                  className="group/nav flex items-start gap-3 rounded-2xl bg-[#F8FAFC] p-4 text-right ring-1 ring-[#E5E7EB] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:justify-end"
                >
                  <div>
                    <span className="block font-[var(--font-body)] text-xs text-slate-400">
                      Article suivant
                    </span>
                    <span className="mt-1 block font-[var(--font-heading)] text-sm font-bold text-[#002B5C] line-clamp-2">
                      {nextArticle.title}
                    </span>
                  </div>
                  <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-[#FF7A00] transition-transform group-hover/nav:translate-x-1" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </article>

          {/* ── RIGHT SIDEBAR ── */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start lg:space-y-8">

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
                        {formatDate(item.date)}
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

          </aside>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — FINAL CTA
      ═══════════════════════════════════════════ */}
      <CtaBanner />

    </main>
  );
}
