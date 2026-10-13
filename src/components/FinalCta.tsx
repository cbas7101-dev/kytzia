export default function FinalCta() {
  return (
    <section aria-label="Agenda tu cita" className="px-[10px] md:px-5">
      <a
        href="#reserva"
        data-reveal
        className="group relative block overflow-hidden rounded-t-[180px] bg-[#C69C6D] transition-colors hover:bg-[#A88157] focus-visible:bg-[#A88157] md:rounded-t-[280px]"
      >
        <span className="page-margin mx-auto flex min-h-[52svh] max-w-[1400px] flex-col justify-between gap-8 px-8 pb-14 pt-32 md:min-h-[62svh] md:pb-20 md:pt-40">
          <span className="flex items-start justify-between gap-6 px-4 text-[19px] font-medium text-[#3B2D20] md:px-16">
            <span className="max-w-[28ch]">
              Date ese descanso que tanto necesitas. Hoy es el día.
            </span>
            <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden="true" className="shrink-0">
              <path
                d="M10 38L38 10M38 10H16M38 10V32"
                stroke="#3B2D20"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="block whitespace-nowrap text-center text-[clamp(3.5rem,16.5vw,15rem)] font-semibold leading-[0.85] tracking-[-0.04em] text-white">
            Agenda
          </span>
        </span>
      </a>
    </section>
  );
}
