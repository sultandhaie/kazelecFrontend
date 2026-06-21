"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  Download,
  Factory,
  Headphones,
  Phone,
  ShieldCheck,
  Zap,
  ZoomIn,
} from "lucide-react";
import type { Product } from "@/types/product";
import { getPhoneLink } from "@/lib/contact";

const benefits = [
  { icon: ShieldCheck, title: "Sécurité maximale", desc: "Conforme aux normes en vigueur" },
  { icon: Zap, title: "Installation rapide", desc: "Prêt à l'emploi, gain de temps" },
  { icon: BadgeCheck, title: "Haute performance", desc: "Matériaux de qualité supérieure" },
  { icon: Headphones, title: "Support technique", desc: "Accompagnement à chaque étape" },
];

const tabs = [
  "Présentation",
  "Caractéristiques techniques",
  "Dimensions",
  "Documents",
  "Produits similaires",
];

function getPlaceholderImage(index: number) {
  const placeholders = [
    "/assets/poste-prefabrique.png",
    "/assets/poste-interieur.png",
    "/assets/poste-installation.png",
    "/assets/poste-transport.png",
    "/assets/equipements-mt-bt.png",
  ];
  return placeholders[index % placeholders.length];
}

export default function ProductDetailClient({
  product,
  relatedProducts,
}: {
  product: Product;
  relatedProducts: Product[];
}) {
  const [activeTab, setActiveTab] = React.useState(0);
  const [activeImage, setActiveImage] = React.useState(0);
  const tabContentRef = useRef<HTMLDivElement>(null);

  const specsEntries = Object.entries(product.specifications);
  const dimensionEntries = specsEntries.filter(([key]) =>
    /dimension|longueur|largeur|hauteur|profondeur|poids|encombrement|taille/i.test(key)
  );
  const nonDimensionSpecs = specsEntries.filter(([key]) =>
    !/dimension|longueur|largeur|hauteur|profondeur|poids|encombrement|taille/i.test(key)
  );

  const gallery = product.gallery.length > 0
    ? product.gallery
    : [getPlaceholderImage(0)];

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    tabContentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="bg-[#F8FAFC] text-[#0F172A]">
      {/* ─── HERO PRODUCT ─── */}
      <section className="group relative w-full overflow-visible bg-[#002B5C] py-20 md:min-h-[560px] lg:min-h-[560px] lg:py-0">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={product.image || getPlaceholderImage(0)}
            alt={product.name}
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

        <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6 lg:items-start lg:px-8 lg:pb-20 lg:pt-16 xl:items-start xl:px-10 xl:pb-24 xl:pt-16">
          <div className="w-full max-w-[600px] xl:max-w-[650px]">
            <nav className="mb-4 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]">
              <ol className="flex flex-wrap items-center gap-2 font-[var(--font-body)] text-xs text-white/60">
                <li>
                  <Link href="/" className="transition hover:text-white">
                    Accueil
                  </Link>
                </li>
                <li><ChevronRight className="h-3 w-3" /></li>
                <li>
                  <Link href="/produits" className="transition hover:text-white">
                    Nos produits
                  </Link>
                </li>
                <li><ChevronRight className="h-3 w-3" /></li>
                <li>
                  <Link href="/produits" className="transition hover:text-white">
                    {product.categoryName}
                  </Link>
                </li>
                <li><ChevronRight className="h-3 w-3" /></li>
                <li className="font-semibold text-white">{product.name}</li>
              </ol>
            </nav>

            <p className="opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] font-[var(--font-heading)] text-sm font-semibold uppercase tracking-[0.24em] text-[#FF7A00] lg:text-base xl:text-lg">
              {product.categoryName}
            </p>

            <h1 className="mt-3 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] font-[var(--font-heading)] text-3xl font-extrabold leading-[1.05] tracking-[-0.03em] text-white [animation-delay:150ms] md:text-4xl lg:text-[40px] xl:text-[48px]">
              {product.name}
            </h1>

            <p className="mt-4 max-w-[520px] opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] font-[var(--font-body)] text-base leading-relaxed text-white/85 [animation-delay:300ms] md:text-lg lg:text-sm xl:text-base">
              {product.shortDescription}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] [animation-delay:450ms] lg:mt-8">
              {benefits.map((item) => {
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

      {/* ─── STICKY TABS BAR ─── */}
      <section className="sticky top-20 z-40 border-b border-[#E5E7EB] bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-6 scrollbar-none lg:px-8 xl:px-10">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => handleTabChange(index)}
              className={`relative shrink-0 px-4 py-4 font-[var(--font-heading)] text-sm font-semibold transition ${
                activeTab === index
                  ? "text-[#003B7A]"
                  : "text-slate-500 hover:text-[#003B7A]"
              }`}
            >
              {tab}
              {activeTab === index && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#FF7A00]" />
              )}
            </button>
          ))}
          <div className="ml-auto hidden shrink-0 py-2 lg:block">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#FF7A00] px-5 py-2.5 font-[var(--font-heading)] text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff8c1a]"
            >
              Demander un devis
            </a>
          </div>
        </div>
      </section>

      {/* ─── TAB CONTENT ─── */}
      <div ref={tabContentRef}>
        {/* TAB 0: Présentation */}
        {activeTab === 0 && (
          <>
            <section className="px-6 py-16 lg:px-8 lg:py-20 xl:px-10 xl:py-24">
              <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.2fr_0.8fr] lg:items-start">
                <div>
                  <h2 className="font-[var(--font-heading)] text-xl font-bold tracking-[-0.02em] text-[#003B7A]">
                    Présentation du produit
                  </h2>
                  <p className="mt-4 font-[var(--font-body)] text-sm leading-relaxed text-slate-600">
                    {product.description}
                  </p>
                  {product.features.length > 0 && (
                    <ul className="mt-6 grid gap-3">
                      {product.features.map((item) => (
                        <li key={item} className="flex gap-3 font-[var(--font-body)] text-sm text-slate-700">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF7A00] text-white">
                            <Check className="h-3 w-3" />
                          </span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-[#E5E7EB]">
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#F8FAFC]">
                    <Image
                      src={gallery[activeImage]}
                      alt={product.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-contain p-8 transition-transform duration-500"
                    />
                    <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-[#003B7A] shadow transition hover:bg-white">
                      <ZoomIn className="h-4 w-4" />
                    </button>
                    {gallery.length > 1 && (
                      <>
                        <button
                          onClick={() => setActiveImage((prev) => (prev === 0 ? gallery.length - 1 : prev - 1))}
                          className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[#003B7A] shadow transition hover:bg-white"
                        >
                          <ArrowLeft className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => setActiveImage((prev) => (prev === gallery.length - 1 ? 0 : prev + 1))}
                          className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[#003B7A] shadow transition hover:bg-white"
                        >
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </>
                    )}
                  </div>
                  {gallery.length > 1 && (
                    <div className="mt-3 flex gap-2 overflow-x-auto scrollbar-none">
                      {gallery.map((img, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveImage(index)}
                          className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-xl ring-2 transition ${
                            activeImage === index
                              ? "ring-[#FF7A00]"
                              : "ring-transparent hover:ring-[#E5E7EB]"
                          }`}
                        >
                          <Image
                            src={img}
                            alt={`${product.name} ${index + 1}`}
                            fill
                            sizes="64px"
                            className="object-contain bg-[#F8FAFC] p-1"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#E5E7EB]">
                  <h3 className="font-[var(--font-heading)] text-lg font-bold text-[#003B7A]">
                    Caractéristiques clés
                  </h3>
                  <div className="mt-5 grid gap-3">
                    {specsEntries.slice(0, 7).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between border-b border-[#E5E7EB] pb-3 last:border-0 last:pb-0">
                        <span className="font-[var(--font-body)] text-sm text-slate-500">{key}</span>
                        <span className="font-[var(--font-heading)] text-sm font-semibold text-[#0F172A]">{value}</span>
                      </div>
                    ))}
                  </div>
                  {product.documents.length > 0 && (
                    <a
                      href={product.documents[0].url}
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-[#FF7A00] px-4 py-3 font-[var(--font-heading)] text-sm font-bold text-[#FF7A00] transition hover:bg-[#FF7A00]/5"
                    >
                      <Download className="h-4 w-4" />
                      {product.documents[0].title}
                    </a>
                  )}
                </div>
              </div>
            </section>

            <section className="bg-white px-6 py-16 lg:px-8 lg:py-20 xl:px-10 xl:py-24">
              <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
                <div className="rounded-3xl bg-[#F8FAFC] p-8 ring-1 ring-[#E5E7EB]">
                  <h2 className="font-[var(--font-heading)] text-xl font-bold text-[#003B7A]">
                    Avantages
                  </h2>
                  <ul className="mt-5 grid gap-3">
                    {product.advantages.map((item) => (
                      <li key={item} className="flex gap-3 font-[var(--font-body)] text-sm text-slate-700">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF7A00] text-white">
                          <Check className="h-3 w-3" />
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl bg-[#F8FAFC] p-8 ring-1 ring-[#E5E7EB]">
                  <h2 className="font-[var(--font-heading)] text-xl font-bold text-[#003B7A]">
                    Domaines d&apos;application
                  </h2>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {product.applications.map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <Factory className="mt-0.5 h-4 w-4 shrink-0 text-[#003B7A]" />
                        <span className="font-[var(--font-body)] text-sm text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* TAB 1: Caractéristiques techniques */}
        {activeTab === 1 && (
          <section className="px-6 py-16 lg:px-8 lg:py-20 xl:px-10 xl:py-24">
            <div className="mx-auto max-w-7xl">
              <h2 className="font-[var(--font-heading)] text-2xl font-bold tracking-[-0.02em] text-[#003B7A] lg:text-3xl">
                Spécifications techniques
              </h2>
              <div className="mt-8 overflow-hidden rounded-2xl bg-white ring-1 ring-[#E5E7EB]">
                <table className="w-full">
                  <tbody>
                    {(nonDimensionSpecs.length > 0 ? nonDimensionSpecs : specsEntries).map(([key, value], index) => (
                      <tr
                        key={key}
                        className={index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}
                      >
                        <td className="px-6 py-4 font-[var(--font-heading)] text-sm font-semibold text-[#003B7A]">
                          {key}
                        </td>
                        <td className="px-6 py-4 text-right font-[var(--font-body)] text-sm text-[#0F172A]">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* TAB 2: Dimensions */}
        {activeTab === 2 && (
          <section className="px-6 py-16 lg:px-8 lg:py-20 xl:px-10 xl:py-24">
            <div className="mx-auto max-w-7xl">
              <h2 className="font-[var(--font-heading)] text-2xl font-bold tracking-[-0.02em] text-[#003B7A] lg:text-3xl">
                Dimensions
              </h2>
              {dimensionEntries.length > 0 ? (
                <div className="mt-8 overflow-hidden rounded-2xl bg-white ring-1 ring-[#E5E7EB]">
                  <table className="w-full">
                    <tbody>
                      {dimensionEntries.map(([key, value], index) => (
                        <tr
                          key={key}
                          className={index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}
                        >
                          <td className="px-6 py-4 font-[var(--font-heading)] text-sm font-semibold text-[#003B7A]">
                            {key}
                          </td>
                          <td className="px-6 py-4 text-right font-[var(--font-body)] text-sm text-[#0F172A]">
                            {value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="mt-8 rounded-2xl bg-white p-12 text-center ring-1 ring-[#E5E7EB]">
                  <p className="font-[var(--font-body)] text-sm text-slate-500">
                    Les dimensions détaillées ne sont pas disponibles pour ce produit.
                  </p>
                  <a
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#FF7A00] px-5 py-2.5 font-[var(--font-heading)] text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff8c1a]"
                  >
                    Contactez-nous pour plus d&apos;informations
                  </a>
                </div>
              )}
            </div>
          </section>
        )}

        {/* TAB 3: Documents */}
        {activeTab === 3 && (
          <section className="px-6 py-16 lg:px-8 lg:py-20 xl:px-10 xl:py-24">
            <div className="mx-auto max-w-7xl">
              <h2 className="font-[var(--font-heading)] text-2xl font-bold tracking-[-0.02em] text-[#003B7A] lg:text-3xl">
                Documents
              </h2>
              {product.documents.length > 0 ? (
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {product.documents.map((doc) => (
                    <a
                      key={doc.url}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-[#E5E7EB] transition hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#003B7A]/10 text-[#003B7A] transition group-hover:bg-[#FF7A00] group-hover:text-white">
                        <Download className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-[var(--font-heading)] text-sm font-bold text-[#003B7A] truncate">
                          {doc.title}
                        </p>
                        <p className="mt-0.5 font-[var(--font-body)] text-xs text-slate-500">
                          PDF
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="mt-8 rounded-2xl bg-white p-12 text-center ring-1 ring-[#E5E7EB]">
                  <p className="font-[var(--font-body)] text-sm text-slate-500">
                    Aucun document n&apos;est disponible pour ce produit.
                  </p>
                  <a
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#FF7A00] px-5 py-2.5 font-[var(--font-heading)] text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff8c1a]"
                  >
                    Contactez-nous pour plus d&apos;informations
                  </a>
                </div>
              )}
            </div>
          </section>
        )}

        {/* TAB 4: Produits similaires */}
        {activeTab === 4 && (
          <section className="px-6 py-16 lg:px-8 lg:py-20 xl:px-10 xl:py-24">
            <div className="mx-auto max-w-7xl">
              <h2 className="font-[var(--font-heading)] text-2xl font-bold tracking-[-0.02em] text-[#003B7A] lg:text-3xl">
                Produits similaires
              </h2>
              {relatedProducts.length > 0 ? (
                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {relatedProducts.map((item) => (
                    <Link
                      key={item.id}
                      href={`/produits/${item.slug}`}
                      className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#E5E7EB] transition hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="relative aspect-square overflow-hidden bg-[#F8FAFC]">
                        <Image
                          src={item.image || getPlaceholderImage(0)}
                          alt={item.name}
                          fill
                          sizes="(max-width: 640px) 50vw, 25vw"
                          className="object-cover p-4 transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="font-[var(--font-heading)] text-xs font-bold text-[#003B7A]">
                          {item.name}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="mt-8 rounded-2xl bg-white p-12 text-center ring-1 ring-[#E5E7EB]">
                  <p className="font-[var(--font-body)] text-sm text-slate-500">
                    Aucun produit similaire disponible.
                  </p>
                </div>
              )}
            </div>
          </section>
        )}
      </div>

      {/* ─── EXPERT CTA ─── */}
      <section className="bg-white px-6 py-16 lg:px-8 lg:py-20 xl:px-10 xl:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#002B5C] to-[#003B7A] p-8 text-white">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#FF7A00]/15 blur-3xl" />
            <h2 className="relative font-[var(--font-heading)] text-xl font-bold">
              Besoin d&apos;informations complémentaires ?
            </h2>
            <p className="relative mt-3 font-[var(--font-body)] text-sm leading-relaxed text-white/80">
              Nos experts sont à votre disposition pour vous accompagner dans le
              choix de la solution la plus adaptée à vos besoins.
            </p>
            <div className="relative mt-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                <Headphones className="h-7 w-7 text-[#FF7A00]" />
              </div>
              <div>
                <p className="font-[var(--font-heading)] text-sm font-bold">Expert KAZELEC</p>
                <p className="font-[var(--font-body)] text-xs text-white/60">Disponible Lun-Sam</p>
              </div>
            </div>
            <a
              href="/contact"
              className="relative mt-6 inline-flex items-center gap-2 rounded-lg bg-[#FF7A00] px-6 py-3 font-[var(--font-heading)] text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff8c1a]"
            >
              Nous contacter
              <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
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
                Nos experts sont à votre écoute pour vous aider à choisir la
                solution adaptée à votre projet.
              </p>
            </div>
            <a
              href={getPhoneLink()}
              className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-8 py-4 font-[var(--font-heading)] text-sm font-bold uppercase tracking-wide text-[#003B7A] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Phone className="h-5 w-5 text-[#FF7A00]" />
              Appelez maintenant
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
