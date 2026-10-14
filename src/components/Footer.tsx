import { AtSign, Clock, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-4 bg-[#1C1917] pt-14 text-[#FAF7F2]">
      <div className="page-margin mx-auto max-w-[1400px]">
        <div className="grid gap-10 pb-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#inicio" className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white">
                <img src="/logo.jpg" alt="Logo Kytzia" className="h-full w-full object-contain" width={96} height={96} loading="lazy" />
              </span>
              <span className="text-[20px] font-semibold tracking-tight">
                Kytzia <span className="font-normal text-[#C69C6D]">Esthetic &amp; Spa</span>
              </span>
            </a>
            <p className="mt-4 max-w-[38ch] text-[16px] leading-relaxed text-white/70">
              Cuidarte es tu mejor inversión. Estética avanzada y bienestar integral en el
              norte de Quito.
            </p>
            <a href="#reserva" className="btn-cta mt-6 !px-6 !py-3 text-[16px]">
              Agendar cita
            </a>
          </div>
          <nav aria-label="Mapa del sitio" className="grid grid-cols-2 gap-3 text-[16px] md:col-span-3">
            <span className="col-span-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-white/50">
              Explora
            </span>
            <a href="#servicios" className="hover:text-[#C69C6D] hover:underline">Tratamientos</a>
            <a href="#nosotros" className="hover:text-[#C69C6D] hover:underline">Nosotros</a>
            <a href="#reserva" className="hover:text-[#C69C6D] hover:underline">Reservar cita</a>
            <a href="#contacto" className="hover:text-[#C69C6D] hover:underline">Contacto</a>
          </nav>
          <div className="text-[15px] leading-[1.7] md:col-span-4">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-white/50">
              Visítanos
            </p>
            <ul className="mt-3 grid gap-2 text-white/85">
              <li className="flex items-start gap-2">
                <MapPin size={17} className="mt-1 shrink-0 text-[#C69C6D]" />
                Real Audiencia N-60-112 C9, junto a Pastelería Flores, Quito
              </li>
              <li>
                <a href="tel:+593992669466" className="flex items-center gap-2 hover:underline">
                  <Phone size={17} className="shrink-0 text-[#C69C6D]" /> 099 266 9466
                </a>
              </li>
              <li>
                <a href="mailto:joavillalva@hotmail.com" className="flex items-center gap-2 hover:underline">
                  <Mail size={17} className="shrink-0 text-[#C69C6D]" /> joavillalva@hotmail.com
                </a>
              </li>
              <li>
                <a href="https://instagram.com/kytzia.estheticspa" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline">
                  <AtSign size={17} className="shrink-0 text-[#C69C6D]" /> @kytzia.estheticspa
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <Clock size={17} className="shrink-0" /> Lun – Sáb · 09:00 – 18:30
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 py-6 text-[14px] text-white/60">
          <p>© {new Date().getFullYear()} Kytzia Esthetic &amp; Spa. Todos los derechos reservados.</p>
          <p>Hecho con calma en Quito.</p>
        </div>
      </div>
    </footer>
  );
}
