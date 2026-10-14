import { ArrowUpRight, MapPin, Phone } from "lucide-react";

export default function FinalCta() {
  return (
    <section aria-label="Agenda tu cita" className="px-[10px] md:px-5">
      <a
        href="#reserva"
        data-reveal
        className="group relative block overflow-hidden rounded-[28px] bg-[#C69C6D] transition-colors hover:bg-[#A88157] focus-visible:bg-[#A88157] md:rounded-[36px]"
      >
        <span className="page-margin mx-auto flex min-h-[46svh] max-w-[1400px] flex-col justify-center gap-8 px-8 py-14 md:min-h-[52svh] md:py-16">
          <span className="flex flex-wrap items-start justify-between gap-6 text-[17px] font-medium text-[#3B2D20]">
            <span className="max-w-[34ch] text-[19px] leading-snug">
              Date ese descanso que tanto necesitas. Hoy es el día.
            </span>
            <span className="flex items-center gap-2 rounded-full bg-[#3B2D20] px-5 py-3 text-[15px] font-semibold text-white">
              Reserva en 1 minuto
              <ArrowUpRight size={18} />
            </span>
          </span>
          <span className="block text-center text-[clamp(3.5rem,15vw,13rem)] font-semibold leading-[0.9] tracking-[-0.04em] text-white">
            Agenda
          </span>
          <span className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[15px] font-semibold text-[#3B2D20]">
            <span className="flex items-center gap-2">
              <Phone size={16} /> 099 266 9466
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16} /> Real Audiencia N-60-112, Quito
            </span>
          </span>
        </span>
      </a>
    </section>
  );
}
