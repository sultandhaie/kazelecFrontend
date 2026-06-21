import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  Clock,
  Headphones,
  ShieldCheck,
  Truck,
  Zap,
  Factory,
  Wrench,
  BarChart3,
  Users,
  ThumbsUp,
  CalendarCheck,
  PackageCheck,
  Settings,
  Award,
  FileCheck,
  MapPin,
  UserCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nos services | KAZELEC",
  description:
    "Installation, mise en service et accompagnement technique pour vos postes transformateurs et équipements électriques MT/BT.",
};

const trustItems = [
  { icon: Factory, label: "Production locale", desc: "Postes préfabriqués prêts à l'emploi" },
  { icon: BadgeCheck, label: "Qualité certifiée", desc: "Solutions conformes aux normes" },
  { icon: Truck, label: "Livraison rapide", desc: "Installation en quelques jours" },
  { icon: Headphones, label: "Accompagnement", desc: "Conseil technique sur mesure" },
];

const whyCards = [
  {
    icon: Clock,
    title: "Gain de temps",
    desc: "Installation rapide et mise en service en quelques jours seulement.",
  },
  {
    icon: BarChart3,
    title: "Solution économique",
    desc: "Coût inférieur aux solutions traditionnelles et optimisation de l'investissement.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité intégrée",
    desc: "Structures robustes avec réservoir de sécurité pour les fuites d'huile.",
  },
  {
    icon: Headphones,
    title: "Accompagnement technique",
    desc: "Conseils personnalisés de l'étude jusqu'à la mise en service.",
  },
];

const steps = [
  {
    num: "01",
    title: "Analyse du besoin",
    desc: "Nous analysons vos contraintes techniques et vos objectifs de projet.",
    icon: Settings,
  },
  {
    num: "02",
    title: "Conseil & choix de solution",
    desc: "Nous vous orientons vers le poste ou l'équipement le plus adapté.",
    icon: Users,
  },
  {
    num: "03",
    title: "Fabrication ou préparation",
    desc: "Production du poste préfabriqué ou préparation des équipements MT/BT.",
    icon: Wrench,
  },
  {
    num: "04",
    title: "Livraison & installation",
    desc: "Livraison rapide, pose, raccordement et assistance technique.",
    icon: Truck,
  },
  {
    num: "05",
    title: "Mise en service & suivi",
    desc: "Accompagnement jusqu'à la mise en service et support après livraison.",
    icon: ThumbsUp,
  },
];

const stats = [
  { icon: Award, value: "Homologués", label: "SONELGAZ" },
  { icon: FileCheck, value: "Produits testés", label: "et certifiés" },
  { icon: MapPin, value: "Livraison rapide", label: "partout en Algérie" },
  { icon: UserCheck, value: "Accompagnement", label: "sur mesure" },
];

const posteFeatures = [
  "Structure en béton armé avec caisson en fer",
  "Surface au sol optimisée de 13 m²",
  "Installation record en quelques jours",
  "Facile à poser, raccorder et déplacer",
  "Prêt pour le raccordement Sonelgaz",
  "Réservoir de sécurité pour les fuites d'huile",
  "Solution certifiée, sécurisée et prête à l'emploi",
  "Éligible à la récupération de taxe pour vos investissements",
];

const equipementFeatures = [
  "Transformateurs HT/BT de haute qualité",
  "Équipements SF6 certifiés",
  "Cellules moyenne tension fiables",
  "Câbles électriques et accessoires",
  "Disjoncteurs, cosses et lots de sécurité",
  "Produits testés, certifiés et livrés avec facture",
  "Disponibilité rapide",
  "Service professionnel et accompagnement sur mesure",
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-[#0F172A]">

      {/* ═══════════════════════════════════════════
          SECTION 1 — HERO SERVICES
      ═══════════════════════════════════════════ */}
      <section className="group relative w-full overflow-visible bg-[#002B5C] py-20 md:min-h-[560px] lg:min-h-[560px] lg:py-0">
        {/* Image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/assets/hero.webp"
            alt="Services KAZELEC"
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
          <div className="w-full max-w-[640px] xl:max-w-[700px]">
            <p className="opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] font-[var(--font-heading)] text-sm font-semibold uppercase tracking-[0.24em] text-[#FF7A00] lg:text-base xl:text-lg">
              Nos services
            </p>

            <h1 className="mt-4 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] font-[var(--font-heading)] text-3xl font-extrabold leading-[1.05] tracking-[-0.03em] text-white [animation-delay:150ms] md:text-4xl lg:text-[40px] xl:text-[48px]">
              Des services complets pour vos projets électriques
            </h1>

            <p className="mt-5 max-w-[560px] opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] font-[var(--font-body)] text-base leading-relaxed text-white/85 [animation-delay:300ms] md:text-lg lg:text-sm xl:text-base">
              KAZELEC accompagne ses clients avec des solutions fiables, certifiées et
              prêtes à l&apos;emploi : de la production de postes transformateurs préfabriqués
              à la distribution d&apos;équipements électriques MT/BT.
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
          SECTION 2 — INTRO / EXPERTISE CARDS
      ═══════════════════════════════════════════ */}
      <section className="px-6 py-16 lg:px-8 lg:py-20 xl:px-10 xl:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center">
            <h2 className="font-[var(--font-heading)] text-3xl font-bold tracking-[-0.02em] text-[#003B7A] lg:text-4xl">
              Nos domaines d&apos;expertise
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-[var(--font-body)] text-base text-slate-600">
              Nous fournissons plusieurs solutions pour satisfaire différents besoins
              industriels, publics et privés.
            </p>
          </div>

          {/* ── SERVICE CARD 1 — Postes préfabriqués ── */}
          <div className="mt-14 overflow-hidden rounded-3xl bg-white ring-1 ring-[#E5E7EB] shadow-lg shadow-[#002B5C]/5 lg:mt-20">
            <div className="grid lg:grid-cols-[1.1fr_1fr]">
              {/* Image */}
              <div className="relative min-h-[360px] overflow-hidden bg-[#F8FAFC] lg:min-h-0">
                <Image
                  src="/assets/poste-prefabrique.png"
                  alt="Production de postes préfabriqués"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1800ms] ease-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002B5C]/20 to-transparent" />
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center p-8 lg:p-10 xl:p-12">
                <p className="font-[var(--font-heading)] text-sm font-semibold uppercase tracking-[0.2em] text-[#FF7A00]">
                  01 — Production
                </p>
                <h3 className="mt-3 font-[var(--font-heading)] text-2xl font-bold tracking-[-0.02em] text-[#002B5C] lg:text-3xl">
                  Production des postes préfabriqués prêts à l&apos;emploi
                </h3>
                <p className="mt-1 font-[var(--font-body)] text-sm font-medium text-[#003B7A]/70">
                  Poste transformateur préfabriqué en béton
                </p>
                <p className="mt-4 font-[var(--font-body)] text-sm leading-relaxed text-slate-600">
                  KAZELEC fabrique des postes transformateurs préfabriqués HT/BT en béton
                  armé, prêts à l&apos;emploi, conçus pour offrir une solution plus rapide, plus
                  économique et plus pratique que les modèles traditionnels.
                </p>

                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {posteFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 font-[var(--font-body)] text-sm text-slate-700">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF7A00] text-white">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Highlight */}
                <div className="mt-6 rounded-2xl bg-[#F8FAFC] p-5 ring-1 ring-[#E5E7EB]">
                  <h4 className="font-[var(--font-heading)] text-sm font-bold text-[#003B7A]">
                    Pourquoi choisir un poste préfabriqué ?
                  </h4>
                  <p className="mt-2 font-[var(--font-body)] text-sm leading-relaxed text-slate-600">
                    Plus rapide, plus économique et plus pratique, notre solution de postes
                    transformateurs se distingue par un coût inférieur aux modèles
                    traditionnels et une installation rapide en quelques jours seulement.
                  </p>
                </div>

                <Link
                  href="/produits?category=postes-prefabriques"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-[#FF7A00] px-6 py-3 font-[var(--font-heading)] text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff8c1a]"
                >
                  Découvrir nos postes préfabriqués
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* ── SERVICE CARD 2 — Équipements MT/BT ── */}
          <div className="mt-8 overflow-hidden rounded-3xl bg-white ring-1 ring-[#E5E7EB] shadow-lg shadow-[#002B5C]/5 lg:mt-10">
            <div className="grid lg:grid-cols-[1fr_1.1fr]">
              {/* Text (left on desktop) */}
              <div className="flex flex-col justify-center p-8 lg:p-10 xl:p-12 lg:order-1 order-2">
                <p className="font-[var(--font-heading)] text-sm font-semibold uppercase tracking-[0.2em] text-[#FF7A00]">
                  02 — Distribution
                </p>
                <h3 className="mt-3 font-[var(--font-heading)] text-2xl font-bold tracking-[-0.02em] text-[#002B5C] lg:text-3xl">
                  Distribution des équipements électriques MT/BT
                </h3>
                <p className="mt-1 font-[var(--font-body)] text-sm font-medium text-[#003B7A]/70">
                  Accessoires poste transformateur
                </p>
                <p className="mt-4 font-[var(--font-body)] text-sm leading-relaxed text-slate-600">
                  En tant que revendeur agréé de transformateurs et d&apos;équipements SF6 de
                  haute qualité, KAZELEC fournit des solutions complètes, prêtes à
                  l&apos;installation et conformes aux normes internationales les plus strictes.
                </p>

                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {equipementFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 font-[var(--font-body)] text-sm text-slate-700">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF7A00] text-white">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Highlight */}
                <div className="mt-6 rounded-2xl bg-[#F8FAFC] p-5 ring-1 ring-[#E5E7EB]">
                  <h4 className="font-[var(--font-heading)] text-sm font-bold text-[#003B7A]">
                    Votre partenaire de confiance
                  </h4>
                  <p className="mt-2 font-[var(--font-body)] text-sm leading-relaxed text-slate-600">
                    Notre offre inclut les équipements essentiels pour les postes
                    transformateurs, soutenus par une disponibilité rapide, un service
                    professionnel et un accompagnement technique adapté à vos projets.
                  </p>
                </div>

                <Link
                  href="/produits?category=equipements-mt-bt"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-[#FF7A00] px-6 py-3 font-[var(--font-heading)] text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff8c1a]"
                >
                  Voir les équipements MT/BT
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Image (right on desktop) */}
              <div className="relative min-h-[360px] overflow-hidden bg-[#F8FAFC] lg:min-h-0 lg:order-2 order-1">
                <Image
                  src="/assets/equipements-mt-bt.png"
                  alt="Distribution d'équipements MT/BT"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1800ms] ease-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002B5C]/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — WHY CHOOSE OUR SERVICES
      ═══════════════════════════════════════════ */}
      <section className="bg-[#F8FAFC] px-6 py-16 lg:px-8 lg:py-20 xl:px-10 xl:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-[var(--font-heading)] text-3xl font-bold tracking-[-0.02em] text-[#003B7A] lg:text-4xl">
            Pourquoi choisir les services KAZELEC ?
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="group/card rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[#E5E7EB] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#002B5C]/5"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#003B7A]/10 text-[#003B7A] transition-colors duration-300 group-hover/card:bg-[#FF7A00]/10 group-hover/card:text-[#FF7A00]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-[var(--font-heading)] text-lg font-bold text-[#002B5C]">
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
          SECTION 4 — PROCESS TIMELINE
      ═══════════════════════════════════════════ */}
      <section className="px-6 py-16 lg:px-8 lg:py-20 xl:px-10 xl:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-[var(--font-heading)] text-3xl font-bold tracking-[-0.02em] text-[#003B7A] lg:text-4xl">
            Notre processus d&apos;accompagnement
          </h2>

          {/* Desktop horizontal timeline */}
          <div className="relative mt-14 hidden lg:block">
            {/* Connector line */}
            <div className="absolute left-0 right-0 top-7 h-px bg-[#E5E7EB]" />
            {/* Dotted orange line */}
            <div className="absolute left-0 right-0 top-7 h-px border-t-2 border-dashed border-[#FF7A00]/40" />

            <div className="relative grid grid-cols-5 gap-4">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.num} className="flex flex-col items-center text-center">
                    {/* Node */}
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#003B7A] text-white shadow-lg shadow-[#002B5C]/20 ring-4 ring-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    {/* Number */}
                    <span className="mt-4 font-[var(--font-heading)] text-xs font-bold text-[#FF7A00]">
                      {step.num}
                    </span>
                    {/* Title */}
                    <h4 className="mt-1 font-[var(--font-heading)] text-sm font-bold text-[#002B5C]">
                      {step.title}
                    </h4>
                    {/* Desc */}
                    <p className="mt-2 max-w-[180px] font-[var(--font-body)] text-xs leading-relaxed text-slate-500">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="relative mt-12 space-y-0 lg:hidden">
            {/* Vertical dotted line */}
            <div className="absolute left-6 top-0 bottom-0 w-px border-l-2 border-dashed border-[#FF7A00]/40" />

            <div className="space-y-8">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.num} className="relative flex gap-5">
                    {/* Node */}
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#003B7A] text-white shadow-md ring-4 ring-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="pt-1">
                      <span className="font-[var(--font-heading)] text-xs font-bold text-[#FF7A00]">
                        {step.num}
                      </span>
                      <h4 className="mt-0.5 font-[var(--font-heading)] text-base font-bold text-[#002B5C]">
                        {step.title}
                      </h4>
                      <p className="mt-1 font-[var(--font-body)] text-sm leading-relaxed text-slate-500">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — CERTIFICATION / TRUST BAND
      ═══════════════════════════════════════════ */}
      <section className="px-6 pb-16 lg:px-8 lg:pb-20 xl:px-10 xl:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-gradient-to-br from-[#002B5C] to-[#003B7A] px-8 py-12 shadow-2xl shadow-[#002B5C]/25 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.value} className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#FF7A00]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-[var(--font-heading)] text-base font-bold text-white">
                      {stat.value}
                    </p>
                    <p className="font-[var(--font-body)] text-sm text-white/70">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6 — CTA
      ═══════════════════════════════════════════ */}
      <CtaBanner />

    </main>
  );
}
