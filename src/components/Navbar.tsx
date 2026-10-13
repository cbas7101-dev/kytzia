export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="page-margin mx-auto flex max-w-[1400px] items-center justify-between py-6">
        <a href="#inicio" className="text-[22px] font-semibold tracking-[-0.03em] text-stone-900">
          Kytzia <span className="font-normal text-[#A67C00]">Esthetic &amp; Spa</span>
        </a>
        <nav aria-label="Navegación principal" className="hidden items-center gap-9 text-[17px] font-medium md:flex">
          <a href="#servicios" className="transition-colors hover:text-[#A67C00]">
            Servicios
          </a>
          <a href="#nosotros" className="transition-colors hover:text-[#A67C00]">
            Nosotros
          </a>
          <a href="#reserva" className="transition-colors hover:text-[#A67C00]">
            Reserva
          </a>
        </nav>
        <a href="#reserva" className="btn-pill !px-6 !py-3 text-[16px]">
          Agendar cita
        </a>
      </div>
    </header>
  );
}
