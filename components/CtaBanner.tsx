import Link from "next/link";
import { Headphones, Phone } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="px-6 pb-16 lg:px-8 lg:pb-20 xl:px-10 xl:pb-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-gradient-to-r from-[#FF7A00] to-[#ff8c1a] shadow-2xl shadow-orange-500/20">
        {/* Subtle tower illustration */}
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-10">
          <svg viewBox="0 0 200 200" fill="none" className="h-full w-full">
            <path d="M180 200V40L100 0L20 40V200" stroke="white" strokeWidth="2" />
            <line x1="100" y1="0" x2="100" y2="200" stroke="white" strokeWidth="1.5" />
            <line x1="20" y1="80" x2="180" y2="80" stroke="white" strokeWidth="1" />
            <line x1="40" y1="140" x2="160" y2="140" stroke="white" strokeWidth="1" />
            <line x1="60" y1="50" x2="140" y2="50" stroke="white" strokeWidth="1" />
          </svg>
        </div>

        <div className="relative flex flex-col items-center gap-8 p-10 text-center sm:p-12 md:flex-row md:text-left lg:p-14">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/20">
            <Headphones className="h-8 w-8 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="font-[var(--font-heading)] text-2xl font-bold tracking-[-0.03em] text-white lg:text-3xl">
              Vous avez un projet ? Parlons-en !
            </h2>
            <p className="mt-3 font-[var(--font-body)] text-base font-medium text-white/90">
              Nos experts sont à votre écoute pour vous accompagner dans la réussite
              de vos projets électriques.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-8 py-4 font-[var(--font-heading)] text-sm font-bold uppercase tracking-wide text-[#FF7A00] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Phone className="h-5 w-5 text-[#FF7A00]" />
            Contactez-nous
          </Link>
        </div>
      </div>
    </section>
  );
}
