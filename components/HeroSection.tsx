import Image from "next/image";
import {
  BadgeCheck,
  Building2,
  Clock3,
  Headphones,
  LockKeyhole,
  Phone,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const trustItems: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: ShieldCheck,
    title: "Homologués SONELGAZ",
    description: "Conformité garantie",
  },
  {
    icon: Clock3,
    title: "Mise en service rapide",
    description: "Installation en quelques jours",
  },
  {
    icon: LockKeyhole,
    title: "Robustesse & sécurité",
    description: "Béton armé, réservoir de sécurité intégré",
  },
  {
    icon: BadgeCheck,
    title: "Solutions certifiées",
    description: "Normes internationales strictes",
  },
  {
    icon: Headphones,
    title: "Accompagnement sur mesure",
    description: "De l’étude à la mise en service",
  },
];

export default function HeroSection() {
  return (
    <section className="group relative w-full overflow-visible bg-[#002B5C] py-20 md:min-h-[680px] lg:h-[calc(100svh-80px)] lg:min-h-[700px] lg:py-0 2xl:h-[720px]">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/assets/hero.webp"
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
          <p className="opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] font-[var(--font-heading)] text-2xl font-extrabold text-[#FF7A00] md:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl">
            Qualité N°1 :
          </p>

          <h1 className="mt-3 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] font-[var(--font-heading)] text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-white [animation-delay:150ms] md:text-5xl lg:text-[40px] xl:text-[48px] 2xl:text-[58px]">
            Votre partenaire de confiance pour les postes transformateurs
            électriques en <span className="text-[#FF7A00]">Algérie</span>.
          </h1>

          <p className="mt-4 max-w-[540px] opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] font-[var(--font-body)] text-base leading-relaxed text-white/90 [animation-delay:300ms] md:text-lg lg:text-sm xl:text-base 2xl:text-lg">
            Basée à Sétif, KAZELEC s’impose comme la référence de la Qualité
            N°1 dans la fabrication de postes transformateurs HT/BT
            préfabriqués.
          </p>

          <div className="mt-5 flex max-w-[560px] items-start gap-3 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] [animation-delay:450ms] xl:gap-4 xl:mt-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/40 text-[#FF7A00] lg:h-10 lg:w-10 xl:h-12 xl:w-12">
              <ShieldCheck className="h-6 w-6 lg:h-5 lg:w-5 xl:h-6 xl:w-6" />
            </div>
            <p className="font-[var(--font-body)] text-sm font-medium leading-relaxed text-white md:text-base lg:text-[13px] xl:text-sm 2xl:text-base">
              Homologués par{" "}
              <span className="font-bold text-[#FF7A00]">SONELGAZ</span>, nos
              postes en béton armé allient robustesse et innovation pour une
              mise en service record.
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-3 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] [animation-delay:600ms] sm:flex-row xl:mt-6 xl:gap-4">
            <a
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#FF7A00] px-5 py-3 font-[var(--font-heading)] text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff8c1a] sm:w-auto xl:px-6 xl:text-sm 2xl:px-7 2xl:py-4"
            >
              <Building2 className="h-5 w-5" />
              Visiter notre usine à Sétif
            </a>

            <a
              href="tel:+213500000000"
              className="inline-flex w-full items-center justify-center gap-3 rounded-lg border border-white/45 bg-white/5 px-5 py-3 font-[var(--font-heading)] text-xs font-bold uppercase tracking-wide text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#003B7A] sm:w-auto xl:px-6 xl:text-sm 2xl:px-7 2xl:py-4"
            >
              <Phone className="h-5 w-5" />
              Appeler nos experts
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-30 mx-auto mt-10 w-[calc(100%-3rem)] max-w-7xl opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] [animation-delay:750ms] lg:absolute lg:bottom-[-96px] lg:left-1/2 lg:mt-0 lg:-translate-x-1/2 xl:bottom-[-82px] 2xl:bottom-[-64px]">
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-2xl lg:grid-cols-5 lg:px-2 lg:py-2 xl:px-4 xl:py-4 2xl:px-6 2xl:py-5">
          {trustItems.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className={`group/card flex gap-4 px-1 py-4 transition hover:bg-slate-50 lg:gap-2 lg:px-3 lg:py-2.5 xl:gap-3 xl:px-4 xl:py-3 2xl:gap-4 2xl:px-5 2xl:py-4 ${
                index === 0 ? "" : "lg:border-l lg:border-slate-200"
              }`}
            >
              <Icon className="mt-1 h-7 w-7 shrink-0 text-[#003B7A] transition group-hover/card:text-[#FF7A00] lg:h-5 lg:w-5 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7" />
              <div>
                <h2 className="font-[var(--font-heading)] text-sm font-bold uppercase leading-snug tracking-wide text-[#003B7A] lg:text-[11px] xl:text-xs 2xl:text-sm">
                  {title}
                </h2>
                <p className="mt-1 font-[var(--font-body)] text-sm leading-relaxed text-slate-600 lg:text-[11px] xl:text-xs 2xl:text-sm">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
