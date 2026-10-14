import { Check } from "lucide-react";

const puntos = [
  "Diagnóstico personalizado en cada visita",
  "Estética avanzada sin cirugía",
  "Bienestar físico, emocional y mental",
];

export default function About() {
  return (
    <section id="nosotros" className="px-[10px] md:px-5">
      <div className="overflow-hidden rounded-[28px] bg-[#3B2D20] text-[#FAF7F2]">
        <div className="page-margin mx-auto grid max-w-[1400px] items-center gap-10 py-14 md:grid-cols-2 md:gap-14 md:py-20">
          <div>
            <p
              data-reveal
              className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#C69C6D]"
            >
              Nosotros
            </p>
            <h2
              data-reveal
              className="step-head mt-3 max-w-[12ch] text-[clamp(2.2rem,4vw,3.5rem)] text-[#FAF7F2]"
            >
              Belleza y bienestar
            </h2>
            <p data-reveal className="mt-5 max-w-[44ch] text-[17px] leading-[1.6] text-[#FAF7F2]/85">
              Johanna Villalva, dermo cosmiatra, lidera cada diagnóstico con estética avanzada
              y resultados reales que se ven y se sienten.
            </p>
            <ul className="mt-6 grid gap-3">
              {puntos.map((p) => (
                <li
                  key={p}
                  data-reveal
                  className="flex items-center gap-3 rounded-[14px] bg-white/[0.07] px-4 py-3 text-[16px] font-medium"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C69C6D] text-[#3B2D20]">
                    <Check size={16} strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <div data-reveal className="mt-7 flex flex-wrap items-center gap-4">
              <a href="#reserva" className="btn-light">
                Conoce tu diagnóstico
              </a>
              <span className="rounded-full border border-white/20 px-4 py-2 text-[14px] font-semibold text-white/85">
                +15 años de oficio
              </span>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-3 md:gap-4">
            <div
              data-reveal
              className="arch col-span-3 overflow-hidden bg-[#2a2016]"
            >
              <img
                src="/649838166_1485833466886389_7105780186883274438_n.jpg"
                alt="Recepción de Kytzia: madera, luz cálida y mostrador blanco"
                className="aspect-[3/4] w-full object-cover"
                width={760}
                height={1010}
                loading="lazy"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-3 md:gap-4">
              <div data-reveal className="overflow-hidden rounded-[20px] bg-[#2a2016]">
                <img
                  src="/650255033_1485833390219730_8330625070390554603_n.jpg"
                  alt="Mostrador de Kytzia con logo iluminado"
                  className="aspect-square w-full object-cover"
                  width={520}
                  height={520}
                  loading="lazy"
                />
              </div>
              <div
                data-reveal
                className="flex flex-1 flex-col justify-center rounded-[20px] bg-[#C69C6D] p-5 text-[#3B2D20]"
              >
                <p className="text-[26px] font-semibold leading-none">15+</p>
                <p className="mt-1 text-[14px] font-medium leading-snug">
                  años de estética avanzada y trato cálido
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
