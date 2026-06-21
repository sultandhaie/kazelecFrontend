import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  Factory,
  Headphones,
  Headset,
  Phone,
  ShieldCheck,
  Shield,
  Truck,
  Zap,
  Clock,
  Award,
  Lightbulb,
  ClipboardCheck,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos | KAZELEC - Qualité N°1",
  description:
    "Découvrez KAZELEC, entreprise algérienne spécialisée dans la fabrication de postes transformateurs HT/BT préfabriqués homologués SONELGAZ à Sétif.",
};

const values = [
  {
    icon: Award,
    title: "Qualité N°1",
    description:
      "Chaque produit est fabriqué selon les standards les plus élevés. Nous garantissons des solutions fiables et conformes aux normes SONELGAZ.",
  },
  {
    icon: Shield,
    title: "Sécurité",
    description:
      "La sécurité est au cœur de nos processus. Nos postes préfabriqués intègrent des réservoirs de sécurité et des structures en béton armé.",
  },
  {
    icon: Clock,
    title: "Rapidité",
    description:
      "De la fabrication à l'installation, nous optimisons chaque étape pour une mise en service record en quelques jours seulement.",
  },
  {
    icon: Headphones,
    title: "Accompagnement",
    description:
      "De l'étude du projet à la mise en service, nos experts vous conseillent et vous accompagnent à chaque étape.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Nous investissons continuellement dans nos équipements pour offrir des solutions plus performantes et plus économiques.",
  },
];

const stats = [
  {
    icon: Zap,
    value: "+1000",
    label: "Postes installés à travers l'Algérie",
  },
  {
    icon: BadgeCheck,
    value: "100%",
    label: "Produits homologués SONELGAZ",
  },
  {
    icon: Clock,
    value: "+10 ans",
    label: "D'expérience et de savoir-faire",
  },
  {
    icon: Truck,
    value: "Rapide",
    label: "Livraison partout en Algérie",
  },
];

const galleryImages = [
  { src: "/assets/poste-prefabrique.png", caption: "FABRICATION CONTRÔLÉE" },
  { src: "/assets/poste-transport.png", caption: "TRANSPORT SÉCURISÉ" },
  { src: "/assets/poste-installation.png", caption: "INSTALLATION RAPIDE" },
  { src: "/assets/poste-interieur.png", caption: "MISE EN SERVICE" },
];

const processSteps = [
  { icon: ClipboardCheck, step: "01", title: "Étude du projet" },
  { icon: Factory, step: "02", title: "Fabrication" },
  { icon: Truck, step: "03", title: "Transport" },
  { icon: Zap, step: "04", title: "Installation & Mise en service" },
];

const certifications = [
  "Homologation SONELGAZ pour tous nos postes transformateurs",
  "Conformité aux normes internationales IEC et NFC",
  "Contrôle qualité rigoureux à chaque étape de production",
  "Certification des matériaux : béton armé et acier certifiés",
  "Respect des normes de sécurité industrie les plus strictes",
  "Traçabilité complète de chaque composant livré",
];

const whyKazelec = [
  {
    icon: ShieldCheck,
    title: "Qualité certifiée",
    description:
      "Tous nos produits sont homologués SONELGAZ et conformes aux normes internationales. Chaque poste subit des tests rigoureux avant livraison.",
  },
  {
    icon: Clock,
    title: "Installation rapide",
    description:
      "Nos postes préfabriqués s'installent en quelques jours. La fabrication en usine réduit considérablement les délais sur site.",
  },
  {
    icon: Headphones,
    title: "Accompagnement technique",
    description:
      "Nos ingénieurs vous assistent de l'étude initiale jusqu'à la mise en service. Un support dédié tout au long du projet.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-[#0F172A]">
      {/* ─── SECTION 1: HERO ABOUT ─── */}
      <section className="group relative w-full overflow-visible bg-[#002B5C] py-20 md:min-h-[680px] lg:h-[calc(100svh-80px)] lg:min-h-[700px] lg:py-0 2xl:h-[720px]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/assets/about-hero.webp"
            alt="Poste transformateur électrique préfabriqué KAZELEC"
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

        <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6 lg:items-start lg:px-8 lg:pb-44 lg:pt-24 xl:items-start xl:px-10 xl:pb-40 xl:pt-24 2xl:pb-36">
          <div className="w-full max-w-[590px] xl:max-w-[650px]">
            <p className="opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] font-[var(--font-heading)] text-sm font-semibold uppercase tracking-[0.24em] text-[#FF7A00] lg:text-base xl:text-lg">
              À propos de KAZELEC
            </p>

            <h1 className="mt-3 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] font-[var(--font-heading)] text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-white [animation-delay:150ms] md:text-5xl lg:text-[40px] xl:text-[48px] 2xl:text-[58px]">
              Qualité N°1,
              <br />
              notre engagement,
              <br />
              votre performance.
            </h1>

            <p className="mt-4 max-w-[540px] opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] font-[var(--font-body)] text-base leading-relaxed text-white/90 [animation-delay:300ms] md:text-lg lg:text-sm xl:text-base 2xl:text-lg">
              Basée à Sétif, KAZELEC est une entreprise algérienne spécialisée
              dans la fabrication de postes transformateurs préfabriqués HT/BT en
              béton armé et la distribution d&apos;équipements électriques MT/BT de
              haute qualité.
            </p>

            <div className="mt-5 flex flex-col gap-3 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] [animation-delay:450ms] sm:flex-row xl:mt-6 xl:gap-4">
              <a
                href="#"
                className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#FF7A00] px-5 py-3 font-[var(--font-heading)] text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff8c1a] sm:w-auto xl:px-6 xl:text-sm 2xl:px-7 2xl:py-4"
              >
                Visiter notre usine à Sétif
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: COMPANY STORY ─── */}
      <section className="relative bg-white px-6 py-20 lg:px-8 lg:py-28 xl:px-10 xl:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="border-l-4 border-[#FF7A00] pl-7">
            <h2 className="font-[var(--font-heading)] text-3xl font-bold leading-tight tracking-[-0.03em] text-[#003B7A] lg:text-4xl xl:text-5xl">
              Plus qu&apos;un fabricant,
              <br />
              un partenaire de confiance
            </h2>
            <p className="mt-6 max-w-2xl font-[var(--font-body)] text-base leading-relaxed text-slate-600 xl:text-lg">
              Chez KAZELEC, nous plaçons la Qualité N°1 au cœur de tout ce que
              nous faisons. Depuis plus d&apos;une décennie, nous concevons et
              fabriquons des postes transformateurs préfabriqués qui répondent
              aux exigences les plus strictes du secteur électrique algérien.
              Notre unité de production à Sétif regroupe expertise humaine et
              équipements modernes pour garantir des produits fiables, durables
              et conformes aux normes SONELGAZ.
            </p>
            <p className="mt-4 max-w-2xl font-[var(--font-body)] text-base leading-relaxed text-slate-600 xl:text-lg">
              De la distribution d&apos;équipements de marques internationales
              à la fabrication sur mesure, KAZELEC s&apos;impose comme un
              partenaire stratégique pour les projets industriels, tertiaires
              et énergétiques à travers toute l&apos;Algérie.
            </p>
          </div>

          <article className="group relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#002B5C] to-[#003B7A] p-8 text-white shadow-2xl shadow-[#002B5C]/20 transition duration-300 hover:-translate-y-[6px] hover:shadow-3xl sm:p-10">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#FF7A00]/15 blur-3xl" />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-xl bg-white/10">
              <Factory className="h-8 w-8 text-[#FF7A00]" />
            </div>
            <h3 className="relative mt-8 font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.03em]">
              Unité de production moderne à Sétif
            </h3>
            <p className="relative mt-4 font-[var(--font-body)] leading-relaxed text-white/80">
              Notre usine dispose de chaînes de fabrication équipées des
              dernières technologies, d&apos;un laboratoire de contrôle qualité
              intégré et d&apos;un espace logistique optimisé pour la
              préparation et l&apos;expédition rapide de chaque commande.
            </p>
            <a
              href="#"
              className="relative mt-8 inline-flex items-center gap-2 font-[var(--font-heading)] text-sm font-semibold text-[#FF7A00] transition group-hover:gap-3"
            >
              En savoir plus
              <ChevronRight className="h-4 w-4" />
            </a>
          </article>
        </div>
      </section>

      {/* ─── SECTION 3: VALUES ─── */}
      <section className="bg-white px-6 py-20 lg:px-8 lg:py-28 xl:px-10 xl:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="font-[var(--font-heading)] text-3xl font-bold tracking-[-0.03em] text-[#003B7A] lg:text-4xl xl:text-5xl">
              Nos valeurs, nos engagements
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#FF7A00]" />
          </div>

          <div className="mt-14 grid gap-0 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group flex flex-col items-center px-6 py-10 text-center transition border-b border-[#E5E7EB] last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 lg:border-r lg:last:border-r-0"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#003B7A]/8 transition group-hover:bg-[#FF7A00]/10">
                    <Icon className="h-7 w-7 text-[#003B7A] transition group-hover:text-[#FF7A00]" />
                  </div>
                  <h3 className="mt-5 font-[var(--font-heading)] text-lg font-semibold tracking-[-0.02em] text-[#003B7A]">
                    {value.title}
                  </h3>
                  <p className="mt-3 font-[var(--font-body)] text-sm leading-relaxed text-slate-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: STATS BAND ─── */}
      <section className="px-6 py-12 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl rounded-[24px] bg-gradient-to-br from-[#002B5C] to-[#003B7A] p-10 shadow-2xl shadow-[#002B5C]/20">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.value}
                  className="group border-l border-white/18 pl-6 transition hover:scale-[1.03]"
                >
                  <Icon className="mb-3 h-6 w-6 text-[#FF7A00]" />
                  <p className="font-[var(--font-stat)] text-4xl font-bold tracking-[-0.03em] text-white lg:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 font-[var(--font-body)] text-sm font-medium leading-relaxed text-white/70">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: PRODUCTION GALLERY ─── */}
      <section className="bg-white px-6 py-20 lg:px-8 lg:py-28 xl:px-10 xl:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="font-[var(--font-heading)] text-3xl font-bold tracking-[-0.03em] text-[#003B7A] lg:text-4xl xl:text-5xl">
              Une production locale, un savoir-faire reconnu
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-[var(--font-body)] text-base leading-relaxed text-slate-600 xl:text-lg">
              De la fabrication à la mise en service, chaque étape est
              maîtrisée en interne pour garantir qualité et rapidité.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((image) => (
              <div
                key={image.caption}
                className="group overflow-hidden rounded-2xl shadow-md transition hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url("${image.src}")`,
                    }}
                  />
                </div>
                <div className="bg-white px-4 py-3">
                  <p className="font-[var(--font-heading)] text-xs font-bold uppercase tracking-[0.15em] text-[#003B7A]">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: TIMELINE PROCESS ─── */}
      <section className="bg-[#F8FAFC] px-6 py-20 lg:px-8 lg:py-28 xl:px-10 xl:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="font-[var(--font-heading)] text-3xl font-bold tracking-[-0.03em] text-[#003B7A] lg:text-4xl xl:text-5xl">
              Notre processus
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#FF7A00]" />
          </div>

          {/* Desktop horizontal timeline */}
          <div className="relative mt-16 hidden lg:block">
            {/* Connector line */}
            <div className="absolute left-0 right-0 top-[32px] h-[2px] bg-[#E5E7EB]" />
            <div className="absolute left-0 top-[32px] h-[2px] w-full bg-gradient-to-r from-[#FF7A00] to-[#FF7A00]/60" />

            <div className="relative grid grid-cols-4 gap-8">
              {processSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="flex flex-col items-center text-center">
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#003B7A] text-white shadow-lg shadow-[#003B7A]/25 transition hover:scale-110">
                      <Icon className="h-7 w-7" />
                    </div>
                    <p className="mt-5 font-[var(--font-stat)] text-sm font-bold text-[#FF7A00]">
                      ÉTAPE {step.step}
                    </p>
                    <h3 className="mt-2 font-[var(--font-heading)] text-lg font-semibold text-[#003B7A]">
                      {step.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="relative mt-12 lg:hidden">
            <div className="absolute left-[31px] top-0 bottom-0 w-[2px] bg-[#E5E7EB]" />
            <div className="absolute left-[31px] top-0 w-[2px] bg-gradient-to-b from-[#FF7A00] to-[#FF7A00]/40" style={{ height: "100%" }} />

            <div className="relative grid gap-10">
              {processSteps.map((step) => {
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
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: CERTIFICATIONS ─── */}
      <section className="bg-white px-6 py-20 lg:px-8 lg:py-28 xl:px-10 xl:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-2xl shadow-xl shadow-[#002B5C]/10">
            <div
              className="aspect-[4/3] w-full bg-cover bg-center"
              style={{
                backgroundImage: 'url("/assets/poste-prefabrique.png")',
              }}
            />
          </div>

          <div>
            <h2 className="font-[var(--font-heading)] text-3xl font-bold tracking-[-0.03em] text-[#003B7A] lg:text-4xl xl:text-5xl">
              Des solutions homologuées et certifiées
            </h2>
            <p className="mt-6 font-[var(--font-body)] text-base leading-relaxed text-slate-600 xl:text-lg">
              KAZELEC garantit la conformité de chaque produit livré. Nos
              postes transformateurs et équipements électriques répondent aux
              normes les plus exigeantes du secteur.
            </p>

            <ul className="mt-8 grid gap-4">
              {certifications.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 font-[var(--font-body)] font-medium text-slate-700"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF7A00] text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: WHY KAZELEC ─── */}
      <section className="bg-[#F8FAFC] px-6 py-20 lg:px-8 lg:py-28 xl:px-10 xl:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="font-[var(--font-heading)] text-3xl font-bold tracking-[-0.03em] text-[#003B7A] lg:text-4xl xl:text-5xl">
              Pourquoi choisir KAZELEC ?
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#FF7A00]" />
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyKazelec.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="group rounded-xl bg-white p-8 shadow-sm ring-1 ring-[#E5E7EB] transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#003B7A]/8 transition group-hover:bg-[#FF7A00]/10">
                    <Icon className="h-7 w-7 text-[#003B7A] transition group-hover:text-[#FF7A00]" />
                  </div>
                  <h3 className="mt-6 font-[var(--font-heading)] text-xl font-semibold tracking-[-0.02em] text-[#003B7A]">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-[var(--font-body)] text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: ORANGE CTA ─── */}
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
                projets.
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
