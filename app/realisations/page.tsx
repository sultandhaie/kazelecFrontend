import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock,
  FolderCheck,
  Headphones,
  MapPin,
  Phone,
  ShieldCheck,
  Target,
  ThumbsUp,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const trustItems = [
  { icon: BadgeCheck, label: "Qualité garantie", desc: "Des solutions fiables et certifiées" },
  { icon: Target, label: "Expertise prouvée", desc: "Une équipe qualifiée et expérimentée" },
  { icon: CheckCircle2, label: "Respect des délais", desc: "Planning maîtrisé et livraison à temps" },
  { icon: Headphones, label: "Accompagnement", desc: "Suivi et support à chaque étape" },
];

const stats = [
  { value: "120+", label: "Projets réalisés", icon: FolderCheck },
  { value: "30+", label: "Wilayas couvertes", icon: MapPin },
  { value: "100+", label: "Clients satisfaits", icon: Users },
  { value: "10+", label: "Années d'expérience", icon: Clock },
];

const projects = [
  {
    id: 1,
    title: "Poste cabine 250 kVA",
    category: "Postes préfabriqués",
    location: "Oran",
    sector: "Distribution publique",
    power: "250 kVA",
    year: "2024",
    status: "Réalisé",
    image: "/assets/poste-prefabrique.png",
  },
  {
    id: 2,
    title: "Poste kiosque 630 kVA",
    category: "Postes préfabriqués",
    location: "Alger",
    sector: "Zone industrielle",
    power: "630 kVA",
    year: "2024",
    status: "Réalisé",
    image: "/assets/poste-installation.png",
  },
  {
    id: 3,
    title: "Transformateur 1000 kVA",
    category: "Transformateurs",
    location: "Constantine",
    sector: "Industrie",
    power: "1000 kVA",
    year: "2024",
    status: "Réalisé",
    image: "/assets/poste-interieur.png",
  },
  {
    id: 4,
    title: "Cellules moyenne tension",
    category: "Équipements MT/BT",
    location: "Blida",
    sector: "Réseau de distribution",
    power: null,
    year: "2024",
    status: "Réalisé",
    image: "/assets/equipements-mt-bt.png",
  },
  {
    id: 5,
    title: "Tableau électrique MT/BT",
    category: "Équipements MT/BT",
    location: "Sétif",
    sector: "Bâtiment industriel",
    power: null,
    year: "2024",
    status: "Réalisé",
    image: "/assets/equipements-mt-bt.png",
  },
  {
    id: 6,
    title: "Lot de sécurité électrique",
    category: "Autres",
    location: "Alger",
    sector: "Sécurité",
    power: null,
    year: "2024",
    status: "Réalisé",
    image: "/assets/poste-transport.png",
  },
];

const partners = [
  { name: "SONELGAZ", abbr: "SNG" },
  { name: "Schneider Electric", abbr: "SE" },
  { name: "ABB", abbr: "ABB" },
  { name: "Siemens", abbr: "SIE" },
  { name: "Legrand", abbr: "LGR" },
  { name: "Nexans", abbr: "NEX" },
];

const whyCards = [
  {
    icon: ShieldCheck,
    title: "Conformité totale",
    desc: "Tous nos projets respectent les normes algériennes et internationales.",
  },
  {
    icon: Award,
    title: "Matériaux de qualité",
    desc: "Nous utilisons des équipements et matériaux de haute qualité.",
  },
  {
    icon: Target,
    title: "Solutions sur mesure",
    desc: "Chaque projet est étudié et personnalisé selon les besoins du client.",
  },
  {
    icon: Headphones,
    title: "Suivi et maintenance",
    desc: "Nous assurons le suivi après livraison et proposons des contrats de maintenance adaptés.",
  },
];

export default function RealisationsPage() {
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
            alt="Réalisations KAZELEC"
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
              Nos réalisations
            </p>

            <h1 className="mt-4 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] font-[var(--font-heading)] text-3xl font-extrabold leading-[1.05] tracking-[-0.03em] text-white [animation-delay:150ms] md:text-4xl lg:text-[40px] xl:text-[48px]">
              Nos réalisations
            </h1>

            <p className="mt-5 max-w-[520px] opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] font-[var(--font-body)] text-base leading-relaxed text-white/85 [animation-delay:300ms] md:text-lg lg:text-sm xl:text-base">
              Découvrez quelques projets réalisés par KAZELEC à travers l&apos;Algérie.
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
          SECTION 2 — STATS BAR
      ═══════════════════════════════════════════ */}
      <section className="relative z-30 -mt-12 px-6 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-white px-6 py-8 shadow-xl ring-1 ring-[#E5E7EB] sm:px-10 sm:py-10">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF7A00]/10 text-[#FF7A00]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="mt-2 font-[var(--font-heading)] text-2xl font-extrabold text-[#003B7A]">
                    {stat.value}
                  </span>
                  <span className="mt-0.5 font-[var(--font-body)] text-sm text-slate-500">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — PROJECTS SECTION
      ═══════════════════════════════════════════ */}
      <section className="px-6 py-16 lg:px-8 lg:py-20 xl:px-10 xl:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center">
            <h2 className="font-[var(--font-heading)] text-3xl font-bold tracking-[-0.02em] text-[#003B7A] lg:text-4xl">
              Quelques réalisations KAZELEC
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#FF7A00]" />
            <p className="mx-auto mt-4 max-w-2xl font-[var(--font-body)] text-base text-slate-600">
              Des projets réalisés à travers l&apos;Algérie dans les secteurs industriels,
              publics et énergétiques.
            </p>
          </div>

          {/* Project Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group/card overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#E5E7EB] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#002B5C]/8"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-[#F8FAFC]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                  />
                  {/* Category badge */}
                  <span className="absolute left-3 top-3 rounded-full bg-[#003B7A] px-3 py-1 font-[var(--font-heading)] text-xs font-bold text-white shadow-md">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-[var(--font-heading)] text-lg font-bold text-[#002B5C]">
                    {project.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-1.5 font-[var(--font-body)] text-sm text-slate-500">
                    <MapPin className="h-3.5 w-3.5 text-[#FF7A00]" />
                    {project.location}
                  </div>
                  <p className="mt-1 font-[var(--font-body)] text-sm text-slate-500">
                    {project.sector}
                  </p>

                  {/* Footer infos */}
                  <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-[#E5E7EB] pt-4">
                    {project.power && (
                      <span className="inline-flex items-center gap-1 font-[var(--font-body)] text-xs font-medium text-[#003B7A]">
                        <Zap className="h-3 w-3 text-[#FF7A00]" />
                        {project.power}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 font-[var(--font-body)] text-xs font-medium text-slate-500">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {project.year}
                    </span>
                    <span className="inline-flex items-center gap-1 font-[var(--font-body)] text-xs font-medium text-green-600">
                      <span className="h-2 w-2 rounded-full bg-green-500" />
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — ACHIEVEMENT CTA BAND
      ═══════════════════════════════════════════ */}
      <section className="px-6 pb-16 lg:px-8 lg:pb-20 xl:px-10 xl:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-white px-8 py-10 shadow-lg ring-1 ring-[#E5E7EB] sm:px-12 sm:py-12 lg:flex lg:items-center lg:gap-12 lg:px-16 lg:py-14">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#FF7A00]/10 text-[#FF7A00]">
            <TrendingUp className="h-8 w-8" />
          </div>
          <div className="mt-6 lg:mt-0 lg:flex-1">
            <h2 className="font-[var(--font-heading)] text-2xl font-bold tracking-[-0.02em] text-[#002B5C] lg:text-3xl">
              120+ projets réalisés à travers l&apos;Algérie
            </h2>
            <p className="mt-2 font-[var(--font-body)] text-base text-slate-600">
              Des solutions fiables, certifiées et adaptées à tous vos besoins électriques.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#FF7A00] px-7 py-3.5 font-[var(--font-heading)] text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff8c1a] lg:mt-0"
          >
            Demander un devis
            <Phone className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — PARTNERS
      ═══════════════════════════════════════════ */}
      <section className="bg-[#F8FAFC] px-6 py-16 lg:px-8 lg:py-20 xl:px-10 xl:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="font-[var(--font-heading)] text-3xl font-bold tracking-[-0.02em] text-[#003B7A] lg:text-4xl">
              Nos partenaires
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-[var(--font-body)] text-base text-slate-600">
              Nous collaborons avec des acteurs reconnus pour garantir des solutions
              fiables et certifiées.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="group/partner flex flex-col items-center justify-center rounded-xl bg-white px-4 py-8 shadow-sm ring-1 ring-[#E5E7EB] transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#003B7A]/10 font-[var(--font-heading)] text-lg font-extrabold text-[#003B7A] transition-colors duration-300 group-hover/partner:bg-[#003B7A] group-hover/partner:text-white">
                  {partner.abbr}
                </div>
                <span className="mt-3 text-center font-[var(--font-heading)] text-xs font-bold text-[#002B5C]">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6 — WHY OUR PROJECTS
      ═══════════════════════════════════════════ */}
      <section className="px-6 py-16 lg:px-8 lg:py-20 xl:px-10 xl:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#F8FAFC] px-8 py-12 ring-1 ring-[#E5E7EB] sm:px-12 sm:py-14 lg:px-16 lg:py-16">
          <h2 className="text-center font-[var(--font-heading)] text-3xl font-bold tracking-[-0.02em] text-[#003B7A] lg:text-4xl">
            Pourquoi nos réalisations font la différence ?
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="group/why rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#E5E7EB] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#002B5C]/5"
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
          SECTION 7 — FINAL CTA
      ═══════════════════════════════════════════ */}
      <CtaBanner />

    </main>
  );
}
