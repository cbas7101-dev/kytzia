import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#FAF7F2]">
      {/* Giant cropped arch: the motif at enormous scale, entering from the right */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="arch absolute top-1/2 hidden h-[125vh] w-[62vw] -translate-y-1/2 bg-[#C69C6D] md:block md:left-[62%]" />
        <div className="arch absolute left-1/2 top-[58svh] h-[130vw] w-[130vw] -translate-x-1/2 bg-[#C69C6D] md:hidden" />
      </div>

      <div className="page-margin relative mx-auto grid max-w-[1400px] gap-10 pb-20 pt-32 md:min-h-[100svh] md:grid-cols-12 md:items-center md:pb-0 md:pt-24">
        <div className="md:col-span-6">
          <h1
            data-reveal
            className="step-head max-w-[14ch] text-[clamp(2.6rem,5.5vw,5rem)] text-stone-900"
          >
            Tu mejor
            <br />
            versión
          </h1>
          <p data-reveal className="step-lead mt-7 max-w-[38ch] text-stone-900">
            Mi pasión es realzarla. Tu cuerpo también necesita una pausa: libera la tensión y
            regálate un momento de bienestar integral en Quito.
          </p>
          <div data-reveal className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#reserva" className="btn-pill">
              Agenda tu cita
            </a>
            <a href="#servicios" className="btn-ghost">
              Ver tratamientos
            </a>
          </div>
          <p data-reveal className="mt-8 text-[16px] font-medium text-[#3B2D20]">
            Johanna Villalva, dermo cosmiatra · Más de 15 años de experiencia
          </p>
        </div>

        <div className="relative md:col-span-6">
          <div
            data-shutter
            className="arch-full mx-auto flex aspect-square w-[78vw] max-w-[380px] items-center justify-center overflow-hidden bg-white p-8 shadow-[0_24px_60px_-24px_rgba(59,45,32,0.45)] md:ml-auto md:mr-0 md:w-[30vw] md:max-w-[440px] md:p-10"
          >
            <img
              src="/logo.jpg"
              alt="Logo de Kytzia Esthetic y Spa"
              className="h-full w-full object-contain"
              width={880}
              height={880}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      <a
        href="#pausa"
        aria-label="Bajar a la siguiente sección"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-stone-900 md:block"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  );
}
