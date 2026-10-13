export default function Footer() {
  const letras = "KYTZIA".split("");
  const fondos = ["#C69C6D", "#A67C00", "#3B2D20", "#C69C6D", "#A67C00", "#3B2D20"];
  return (
    <footer className="bg-[#1C1917] pt-20 text-[#FAF7F2]">
      <div className="page-margin mx-auto max-w-[1400px]">
        <p aria-label="Kytzia" className="flex items-end gap-1" data-reveal>
          {letras.map((l, i) => (
            <span
              key={i}
              aria-hidden={i > 0}
              style={{ background: fondos[i], height: `${62 + ((i * 37) % 38)}%` }}
              className="flex h-[12svh] min-h-[72px] flex-1 items-end justify-center overflow-hidden rounded-t-[14px] pb-2 text-[clamp(1.8rem,6vw,4.5rem)] font-semibold leading-none tracking-[-0.03em] text-white md:h-[18svh]"
            >
              {l}
            </span>
          ))}
        </p>
        <div className="grid gap-10 py-14 md:grid-cols-12">
          <nav aria-label="Mapa del sitio" className="grid grid-cols-2 gap-8 text-[16px] md:col-span-8 md:grid-cols-4">
            <a href="#servicios" className="hover:underline">Tratamientos</a>
            <a href="#nosotros" className="hover:underline">Nosotros</a>
            <a href="#reserva" className="hover:underline">Reservar cita</a>
            <a href="#contacto" className="hover:underline">Contacto</a>
          </nav>
          <div className="text-[16px] leading-[1.6] md:col-span-4">
            <p>Real Audiencia N-60-112 C9, Quito, Ecuador</p>
            <p className="mt-2">099 266 9466 · joavillalva@hotmail.com</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 text-[16px]">
          <p>© {new Date().getFullYear()} Kytzia Esthetic &amp; Spa. Cuidarte es tu mejor inversión.</p>
          <a href="#reserva" className="btn-light !px-6 !py-3 text-[16px]">
            Agendar cita
          </a>
        </div>
      </div>
    </footer>
  );
}
