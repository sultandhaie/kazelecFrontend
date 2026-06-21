"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Cable,
  ChevronRight,
  CircuitBoard,
  Cog,
  Factory,
  Headphones,
  Phone,
  ShieldCheck,
  Shield,
  Truck,
  Zap,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getAllProducts, getAllCategories } from "@/lib/products";
import type { Product, Category } from "@/types/product";

const iconMap: Record<string, LucideIcon> = {
  Factory,
  Cog,
  CircuitBoard,
  Cable,
  Wrench,
  Shield,
  Building2,
  Zap,
};

const products = getAllProducts() as Product[];
const categoriesData = getAllCategories() as Category[];

const categoryTabs = [
  { id: "all", icon: Zap, label: "Tous les produits" },
  ...categoriesData.map((cat) => ({
    id: cat.id,
    icon: iconMap[cat.icon] || Zap,
    label: cat.name,
  })),
];

const advantages = [
  {
    icon: ShieldCheck,
    title: "Conformité garantie",
    description:
      "Tous nos produits sont conformes aux normes algériennes et internationales en vigueur.",
  },
  {
    icon: BadgeCheck,
    title: "Qualité supérieure",
    description:
      "Matériaux sélectionnés et contrôles rigoureux pour une fiabilité optimale.",
  },
  {
    icon: Shield,
    title: "Solutions sur mesure",
    description:
      "Nous adaptons nos produits à vos besoins spécifiques et à vos contraintes techniques.",
  },
  {
    icon: Truck,
    title: "Disponibilité rapide",
    description:
      "Stocks optimisés et délais de livraison maîtrisés partout en Algérie.",
  },
];

export default function ProduitsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.categoryId === activeCategory);

  return (
    <main className="bg-[#F8FAFC] text-[#0F172A]">
      {/* ─── HERO SECTION ─── */}
      <section className="group relative w-full overflow-visible bg-[#002B5C] py-20 md:min-h-[560px] lg:min-h-[560px] lg:py-0">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/assets/poste-prefabrique.png"
            alt="Catalogue produits KAZELEC"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right transition-transform duration-[2200ms] ease-out group-hover:scale-105"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#002B5C]/60 via-[#003B7A]/35 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.075)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35" />
        <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-[#FF7A00]/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-white/8 via-white/2 to-transparent" />

        <div className="absolute inset-0 bg-[#002B5C]/55 lg:inset-y-0 lg:left-0 lg:right-auto lg:w-[58%] lg:bg-gradient-to-br lg:from-[#002B5C]/65 lg:to-[#003B7A]/55 [clip-path:none] lg:[clip-path:polygon(0_0,82%_0,100%_100%,0%_100%)]" />

        <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6 lg:items-start lg:px-8 lg:pb-28 lg:pt-20 xl:items-start xl:px-10 xl:pb-32 xl:pt-20">
          <div className="w-full max-w-[600px] xl:max-w-[650px]">
            {/* Breadcrumb */}
            <nav className="mb-4 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]">
              <ol className="flex items-center gap-2 font-[var(--font-body)] text-xs text-white/60">
                <li>
                  <Link href="/" className="transition hover:text-white">
                    Accueil
                  </Link>
                </li>
                <li>
                  <ChevronRight className="h-3 w-3" />
                </li>
                <li className="font-semibold text-white">Nos Produits</li>
              </ol>
            </nav>

            <p className="opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] font-[var(--font-heading)] text-sm font-semibold uppercase tracking-[0.24em] text-[#FF7A00] lg:text-base xl:text-lg">
              Nos produits
            </p>

            <h1 className="mt-3 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] font-[var(--font-heading)] text-3xl font-extrabold leading-[1.05] tracking-[-0.03em] text-white [animation-delay:150ms] md:text-4xl lg:text-[40px] xl:text-[48px]">
              Nos produits
            </h1>

            <p className="mt-4 max-w-[520px] opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] font-[var(--font-body)] text-base leading-relaxed text-white/85 [animation-delay:300ms] md:text-lg lg:text-sm xl:text-base">
              Des équipements électriques fiables et performants pour
              répondre à tous vos besoins en distribution électrique MT/BT.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] [animation-delay:450ms] lg:mt-8">
              {[
                { icon: ShieldCheck, title: "Qualité certifiée", desc: "Conformes aux normes internationales" },
                { icon: Zap, title: "Large gamme", desc: "Des solutions pour toutes les applications" },
                { icon: BadgeCheck, title: "Performance", desc: "Matériaux de haute qualité" },
                { icon: Headphones, title: "Support technique", desc: "Accompagnement à chaque étape" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#FF7A00]/40 text-[#FF7A00]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block font-[var(--font-heading)] text-xs font-bold text-white xl:text-sm">
                        {item.title}
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

      {/* ─── CATEGORY NAVIGATION ─── */}
      <section className="relative z-30 -mt-10 px-6 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex gap-1.5 overflow-x-auto rounded-3xl bg-white p-2 shadow-xl ring-1 ring-[#E5E7EB] scrollbar-none lg:p-1.5">
            {categoryTabs.map((cat) => {
              const Icon = cat.icon;
              const isActive = cat.id === activeCategory;
              const isFirst = cat.id === categoryTabs[0].id;
              const isLast = cat.id === categoryTabs[categoryTabs.length - 1].id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`group flex shrink-0 flex-col items-center gap-1 px-3 py-3 text-center transition-all lg:flex-1 lg:px-2 lg:py-4 ${
                    isActive
                      ? `bg-[#003B7A] text-white shadow-lg shadow-[#003B7A]/20 ${
                          isFirst ? "rounded-l-2xl" : ""
                        } ${isLast ? "rounded-r-2xl" : ""} ${
                          !isFirst && !isLast ? "rounded-none" : ""
                        } lg:rounded-2xl`
                      : "rounded-2xl text-[#003B7A] hover:bg-[#F5F7FA] lg:rounded-none"
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 transition lg:h-6 lg:w-6 ${
                      isActive
                        ? "text-[#FF7A00]"
                        : "text-[#003B7A] group-hover:text-[#FF7A00]"
                    }`}
                  />
                  <span className="whitespace-nowrap font-[var(--font-heading)] text-[10px] font-semibold leading-tight lg:text-xs">
                    {cat.label}
                  </span>
                  {isActive && (
                    <div className="hidden h-0.5 w-6 rounded-full bg-[#FF7A00] lg:block" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS CATALOG ─── */}
      <section className="px-6 py-16 lg:px-8 lg:py-20 xl:px-10 xl:py-24">
        <div className="mx-auto max-w-7xl">
          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center">
              <Factory className="mx-auto h-12 w-12 text-slate-300" />
              <p className="mt-4 font-[var(--font-heading)] text-lg font-semibold text-slate-500">
                Aucun produit trouvé pour ces critères.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/produits/${product.slug}`}
                  className="group overflow-hidden rounded-[20px] border border-[#E5E7EB] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div className="relative aspect-square overflow-hidden bg-[#F8FAFC]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <p className="font-[var(--font-body)] text-xs font-medium text-[#FF7A00]">
                      {product.categoryName}
                    </p>
                    <h3 className="mt-1 font-[var(--font-heading)] text-base font-bold tracking-[-0.01em] text-[#003B7A]">
                      {product.name}
                    </h3>
                    <p className="mt-1.5 font-[var(--font-body)] text-xs leading-relaxed text-slate-500 line-clamp-2">
                      {product.shortDescription}
                    </p>

                    <div className="mt-3 grid gap-1">
                      {Object.entries(product.specifications).slice(0, 3).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between text-sm">
                          <span className="font-[var(--font-body)] text-slate-500">{key}</span>
                          <span className="font-[var(--font-heading)] text-xs font-semibold text-[#0F172A]">{value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 inline-flex items-center gap-2 border-b-2 border-transparent font-[var(--font-heading)] text-sm font-semibold text-[#FF7A00] transition-all group-hover:border-[#FF7A00] group-hover:gap-3">
                      Voir les détails
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── ADVANTAGES STRIP ─── */}
      <section className="px-6 pb-16 lg:px-8 lg:pb-20 xl:px-10 xl:pb-24">
        <div className="mx-auto max-w-7xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-[#E5E7EB] lg:p-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#003B7A]/8 transition group-hover:bg-[#FF7A00]/10">
                    <Icon className="h-6 w-6 text-[#003B7A] transition group-hover:text-[#FF7A00]" />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-heading)] text-sm font-bold text-[#003B7A]">
                      {item.title}
                    </h3>
                    <p className="mt-1 font-[var(--font-body)] text-xs leading-relaxed text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="px-6 pb-16 lg:px-8 lg:pb-20 xl:px-10 xl:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-gradient-to-r from-[#FF7A00] to-[#ff8c1a] shadow-2xl shadow-orange-500/20">
          <div className="flex flex-col items-center gap-8 p-10 text-center sm:p-12 md:flex-row md:text-left lg:p-14">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/20">
              <Headphones className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="font-[var(--font-heading)] text-2xl font-bold tracking-[-0.03em] text-white lg:text-3xl">
                Besoin d&apos;un conseil ou d&apos;un devis ?
              </h2>
              <p className="mt-3 font-[var(--font-body)] text-base font-medium text-white/90">
                Nos experts sont à votre écoute pour vous aider à choisir les
                solutions adaptées à vos projets.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-8 py-4 font-[var(--font-heading)] text-sm font-bold uppercase tracking-wide text-[#003B7A] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Phone className="h-5 w-5 text-[#FF7A00]" />
              Contactez-nous
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
