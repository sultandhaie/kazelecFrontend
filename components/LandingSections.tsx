import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Cable,
  Check,
  ChevronRight,
  CircuitBoard,
  Factory,
  HardHat,
  Menu,
  Phone,
  ShieldCheck,
  Truck,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Nos produits", href: "/produits" },
  { label: "Nos services", href: "/services" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
];

const prefabBenefits = [
  "Plus rapide, plus économique et plus pratique",
  "Coût inférieur aux modèles traditionnels",
  "Éligibilité à la récupération de taxe",
  "Installation record en quelques jours seulement",
  "Surface au sol optimisée de 13 m²",
  "Facile à poser, à raccorder et à déplacer",
  "Structure en béton armé avec caisson en fer",
  "Réservoir de sécurité pour les fuites d’huile",
  "Livrée prête pour le raccordement Sonelgaz",
];

const equipmentFeatures: Array<{ icon: LucideIcon; label: string }> = [
  { icon: CircuitBoard, label: "Cellules moyenne tension fiables" },
  { icon: Zap, label: "Transformateurs HT/BT" },
  { icon: ShieldCheck, label: "Équipements SF6" },
  { icon: Cable, label: "Câbles, disjoncteurs, cosses" },
  { icon: BadgeCheck, label: "Produits testés et certifiés" },
  { icon: Truck, label: "Livraison rapide avec facture" },
];

const stats = [
  { value: "+1000", label: "Postes installés à travers l’Algérie" },
  { value: "100%", label: "Produits homologués SONELGAZ" },
  { value: "+10 ans", label: "D’expérience et de savoir-faire" },
  { value: "Rapide", label: "Livraison partout en Algérie" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center" aria-label="KAZELEC accueil">
      <Image
        src="/assets/logo.png"
        alt="KAZELEC - Qualité N°1"
        width={140}
        height={44}
        priority
        className="h-11 w-auto"
      />
    </Link>
  );
}

function ImagePanel({
  src,
  label,
  className = "",
  clear = false,
  children,
}: {
  src: string;
  label: string;
  className?: string;
  clear?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div
      aria-label={label}
      role="img"
      className={`group relative overflow-hidden rounded-2xl bg-[#003B7A] bg-cover bg-center shadow-2xl shadow-[#002B5C]/15 ${className}`}
      style={{
        backgroundImage: clear
          ? `url("${src}")`
          : `linear-gradient(135deg, rgba(0, 43, 92, 0.22), rgba(255, 122, 0, 0.12)), url("${src}")`,
      }}
    >
      {!clear && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.30),transparent_24%),linear-gradient(135deg,rgba(0,59,122,0.12),rgba(0,43,92,0.54))] transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,transparent_48%,rgba(255,122,0,0.42)_49%,transparent_51%,transparent_100%)] opacity-40" />
        </>
      )}
      {children}
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="font-[var(--font-heading)] text-sm font-semibold uppercase tracking-[0.24em] text-[#FF7A00]">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold leading-tight tracking-[-0.03em] text-[#003B7A] lg:text-4xl xl:text-5xl">
        {title}
      </h2>
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E5EAF0] bg-white/95 shadow-[0_8px_28px_rgba(0,43,92,0.08)] backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8 xl:px-10">
        <Logo />

        <div className="hidden items-center gap-4 font-[var(--font-heading)] tracking-wide lg:flex xl:gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-semibold text-[#1D2A3A] transition hover:text-[#FF7A00] xl:text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="tel:+213500000000"
          className="hidden items-center gap-3 rounded-full border border-[#E5EAF0] bg-white py-2 pl-2 pr-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[#FF7A00]/40 hover:shadow-lg xl:flex"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF7A00] text-white">
            <Phone className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-[var(--font-heading)] text-sm font-bold text-[#003B7A]">
              +213 5XX XXX XXX
            </span>
            <span className="font-[var(--font-body)] text-xs font-medium text-slate-500">
              Appelez nos experts
            </span>
          </span>
        </a>

        <details className="group relative lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-lg border border-[#E5EAF0] text-[#003B7A] transition hover:border-[#FF7A00] hover:text-[#FF7A00] [&::-webkit-details-marker]:hidden">
            <Menu className="h-6 w-6" />
          </summary>
          <div className="absolute right-0 top-14 w-72 rounded-2xl bg-white p-3 shadow-2xl shadow-[#002B5C]/20 ring-1 ring-[#E5EAF0]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-lg px-4 py-3 font-[var(--font-heading)] text-sm font-semibold tracking-wide text-[#003B7A] transition hover:bg-[#F5F7FA] hover:text-[#FF7A00]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+213500000000"
              className="mt-3 flex items-center gap-3 rounded-lg bg-[#FF7A00] px-4 py-3 font-[var(--font-heading)] text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" />
              +213 5XX XXX XXX
            </a>
          </div>
        </details>
      </nav>
    </header>
  );
}

export function IntroSection() {
  return (
    <section className="relative bg-white px-6 pb-16 pt-24 lg:px-8 lg:pb-[5.5rem] lg:pt-28 xl:px-10 xl:pb-28 xl:pt-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF7A00]/50 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="border-l-4 border-[#FF7A00] pl-7">
          <p className="font-[var(--font-heading)] text-sm font-semibold uppercase tracking-[0.24em] text-[#FF7A00]">
            Industrie électrique algérienne
          </p>
          <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-bold leading-tight tracking-[-0.03em] text-[#003B7A] lg:text-4xl xl:text-5xl">
            Un partenaire stratégique pour les projets qui ne peuvent pas
            attendre.
          </h2>
          <p className="mt-6 max-w-3xl font-[var(--font-body)] text-base leading-relaxed text-slate-600 xl:text-lg">
            Plus qu’un fabricant, nous sommes votre partenaire stratégique : de
            la distribution d’équipements de marques mondiales à
            l’accompagnement technique sur mesure, nous garantissons des
            solutions certifiées. Venez visiter notre unité de production
            moderne à Sétif ou appelez nos experts pour transformer vos défis
            techniques en succès concrets.
          </p>
        </div>

        <article className="group relative overflow-hidden rounded-2xl bg-[#F5F7FA] p-8 shadow-xl shadow-[#002B5C]/8 ring-1 ring-[#E5EAF0] transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div className="absolute right-0 top-0 h-32 w-32 bg-[#FF7A00]/10 blur-2xl" />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#002B5C] to-[#003B7A] text-white">
            <Factory className="h-8 w-8" />
          </div>
          <h3 className="relative mt-8 font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.03em] text-[#003B7A]">
            Unité de production moderne à Sétif
          </h3>
          <p className="relative mt-4 font-[var(--font-body)] leading-relaxed text-slate-600">
            Fabrication, contrôle qualité et préparation au raccordement dans
            une même chaîne opérationnelle.
          </p>
          <a
            href="/about"
            className="relative mt-8 inline-flex items-center gap-2 font-[var(--font-heading)] text-sm font-semibold text-[#FF7A00] transition group-hover:gap-3"
          >
            En savoir plus
            <ChevronRight className="h-4 w-4" />
          </a>
        </article>
      </div>
    </section>
  );
}

export function ProductPrefabSection() {
  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] px-6 py-20 lg:px-8 lg:py-[5.5rem] xl:px-10 xl:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,59,122,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(0,59,122,0.05)_1px,transparent_1px)] bg-[size:76px_76px] opacity-60" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="1 Production des postes préfabriqués prêt à l’emploi"
          title="Poste transformateur préfabriqué en béton"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <article className="rounded-2xl bg-white p-7 shadow-xl shadow-[#002B5C]/8 ring-1 ring-[#E5EAF0] sm:p-9">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF7A00]/10 text-[#FF7A00]">
                <HardHat className="h-6 w-6" />
              </span>
              <h3 className="font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.03em] text-[#003B7A]">
                Pourquoi choisir un poste préfabriqué
              </h3>
            </div>
            <ul className="mt-8 grid gap-4">
              {prefabBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex gap-3 font-[var(--font-body)] font-medium text-slate-700"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF7A00] text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </article>

          <div className="grid gap-4 sm:grid-cols-[1fr_150px]">
            <ImagePanel
              src="/assets/poste-prefabrique.png"
              label="Poste préfabriqué en béton"
              className="min-h-[380px] xl:min-h-[420px]"
              clear
            />
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-1">
              {[
                ["/assets/poste-installation.png", "Installation"],
                ["/assets/poste-transport.png", "Transport"],
                ["/assets/poste-interieur.png", "Intérieur"],
              ].map(([src, label]) => (
                <ImagePanel
                  key={label}
                  src={src}
                  label={label}
                  className="min-h-28"
                  clear
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductDistributionSection() {
  return (
    <section className="bg-white px-6 py-20 lg:px-8 lg:py-[5.5rem] xl:px-10 xl:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="2 Distribution des équipements électriques MT/BT"
          title="Accessoires poste transformateur"
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-stretch">
          <article className="h-full rounded-2xl bg-[#F5F7FA] p-7 ring-1 ring-[#E5EAF0] sm:p-9">
            <h3 className="font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.03em] text-[#003B7A]">
              Votre partenaire de confiance
            </h3>
            <p className="mt-4 font-[var(--font-body)] text-base font-medium leading-relaxed text-slate-600 xl:text-lg">
              KAZELEC vous accompagne comme revendeur agréé de transformateurs,
              équipements SF6, cellules moyenne tension, câbles, disjoncteurs,
              cosses et lots de sécurité. Chaque produit est testé, certifié,
              disponible rapidement et livré avec facture pour sécuriser vos
              achats techniques.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {equipmentFeatures.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-[#E5EAF0] transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <Icon className="h-5 w-5 shrink-0 text-[#FF7A00]" />
                  <span className="font-[var(--font-heading)] text-sm font-semibold text-[#003B7A]">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="/produits"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-[#003B7A] px-6 py-4 font-[var(--font-heading)] text-sm font-semibold uppercase tracking-wide text-white shadow-xl shadow-[#003B7A]/20 transition hover:scale-[1.02] hover:bg-[#002B5C]"
            >
              Voir nos équipements
              <ArrowRight className="h-4 w-4" />
            </a>
          </article>

          <ImagePanel
            src="/assets/equipements-mt-bt.png"
            label="Équipements électriques moyenne et basse tension"
            className="min-h-[420px] bg-white xl:min-h-[460px]"
            clear
          />
        </div>
      </div>
    </section>
  );
}

export function StatsCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#002B5C] px-6 py-16 text-white lg:px-8 xl:px-10">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:80px_80px] opacity-50" />
      <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-[#FF7A00]/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_360px] lg:items-center">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.value} className="border-l border-white/18 pl-5">
              <p className="font-[var(--font-stat)] text-4xl font-bold tracking-[-0.03em] text-white">
                {stat.value}
              </p>
              <p className="mt-2 font-[var(--font-body)] text-sm font-medium leading-relaxed text-blue-100">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <article className="rounded-2xl bg-[#FF7A00] p-7 shadow-2xl shadow-black/20">
          <h2 className="font-[var(--font-heading)] text-2xl font-bold tracking-[-0.03em]">
            Besoin d’un conseil ou d’un devis ?
          </h2>
          <p className="mt-3 font-[var(--font-body)] font-medium text-white/90">
            Nos experts sont à votre écoute.
          </p>
          <a
            href="tel:+213500000000"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-4 font-[var(--font-heading)] text-sm font-semibold uppercase tracking-wide text-[#003B7A] transition hover:scale-[1.02]"
          >
            Appeler maintenant
            <Phone className="h-4 w-4" />
          </a>
        </article>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="bg-white px-6 pt-16 lg:px-8 xl:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 border-b border-[#E5EAF0] pb-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-6 max-w-md font-[var(--font-body)] leading-relaxed text-slate-600">
            KAZELEC conçoit, fabrique et distribue des solutions électriques
            HT/BT certifiées pour les projets industriels, tertiaires et
            énergétiques en Algérie.
          </p>
          <div className="mt-6 flex gap-3">
            {["in", "f", "x"].map((item) => (
              <a
                key={item}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5EAF0] font-[var(--font-heading)] text-sm font-bold text-[#003B7A] transition hover:-translate-y-1 hover:border-[#FF7A00] hover:bg-[#FF7A00] hover:text-white"
                aria-label={`Réseau social ${item}`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-[var(--font-heading)] text-sm font-bold uppercase tracking-[0.2em] text-[#003B7A]">
            Liens rapides
          </h3>
          <div className="mt-5 grid gap-3">
            {navItems.slice(1, 6).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-[var(--font-body)] text-sm font-medium text-slate-600 transition hover:text-[#FF7A00]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-[var(--font-heading)] text-sm font-bold uppercase tracking-[0.2em] text-[#003B7A]">
            Contact
          </h3>
          <div className="mt-5 grid gap-3 font-[var(--font-body)] text-sm font-medium leading-relaxed text-slate-600">
            <p>Zone Industrielle, Sétif, Algérie</p>
            <a href="tel:+213500000000" className="hover:text-[#FF7A00]">
              +213 5XX XXX XXX
            </a>
            <a href="mailto:contact@kazelec.dz" className="hover:text-[#FF7A00]">
              contact@kazelec.dz
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 py-6 font-[var(--font-body)] text-sm font-medium text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 KAZELEC. Tous droits réservés.</p>
        <p>Qualité N°1 pour l’énergie industrielle en Algérie.</p>
      </div>
    </footer>
  );
}
