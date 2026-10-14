import { useState } from "react";
import { ArrowRight, Leaf, Smile, Sparkles } from "lucide-react";
import { servicios } from "../data/kytzia";

const iconos: Record<string, typeof Sparkles> = {
  hifu: Sparkles,
  faciales: Smile,
  corporales: Leaf,
};

export default function Services() {
  const [elegido, setElegido] = useState(servicios[0]);
  const [indice, setIndice] = useState(0);
  const Icono = iconos[elegido.id] ?? Sparkles;

  function seleccionar(i: number) {
    setIndice(i);
    setElegido(servicios[i]);
  }

  return (
    <section id="servicios" className="section-gap bg-[#FAF7F2]">
      <div className="page-margin mx-auto grid max-w-[1400px] items-center gap-14 md:grid-cols-2">
        <div className="relative order-2 flex justify-center md:order-1" data-reveal>
          <div className="relative w-full max-w-[420px] overflow-hidden rounded-[28px] border border-[#E4D5BE] bg-white p-3 shadow-[0_20px_50px_-24px_rgba(59,45,32,0.35)]">
            <div className="overflow-hidden rounded-[20px] bg-[#FAF7F2]">
              <img
                key={elegido.id}
                src={elegido.imagen}
                alt={elegido.alt}
                className="aspect-[4/5] w-full object-contain"
                width={720}
                height={900}
                loading="lazy"
              />
            </div>
            <div className="flex items-center justify-between px-2 pb-1 pt-3">
              <span className="rounded-full bg-[#3B2D20] px-3 py-1 text-[13px] font-semibold text-white">
                {String(indice + 1).padStart(2, "0")} / 0{servicios.length}
              </span>
              <span className="text-[14px] font-medium text-stone-500">{elegido.duracion}</span>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <p data-reveal className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#A67C00]">
            Tratamientos
          </p>
          <h2 data-reveal className="step-head mt-2 text-[clamp(2.2rem,2.9vw,2.75rem)] text-stone-900">
            Elige tu momento
          </h2>
          <ul className="mt-6 rounded-[20px] border border-[#E4D5BE] bg-white/60 p-2">
            {servicios.map((s, i) => {
              const ItemIcon = iconos[s.id] ?? Sparkles;
              const activo = s.id === elegido.id;
              return (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => seleccionar(i)}
                    aria-pressed={activo}
                    className={`flex w-full items-center gap-4 rounded-[14px] px-4 py-3 text-left text-[clamp(1.1rem,1.6vw,1.35rem)] font-semibold leading-[1.15] tracking-[-0.02em] transition-colors ${
                      activo ? "bg-[#3B2D20] text-white" : "text-stone-500 hover:bg-white hover:text-stone-900"
                    }`}
                  >
                    <span
                      className={`arch-full flex h-11 w-11 shrink-0 items-center justify-center ${
                        activo ? "bg-[#C69C6D] text-[#3B2D20]" : "bg-[#F1E9DC] text-[#3B2D20]"
                      }`}
                    >
                      <ItemIcon size={20} />
                    </span>
                    {s.nombre}
                  </button>
                </li>
              );
            })}
          </ul>
          <div data-reveal className="mt-6 rounded-[20px] bg-[#F1E9DC] p-6 text-[17px] text-stone-900">
            <span className="flex items-start gap-3">
              <span className="arch-full mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center bg-[#3B2D20] text-white">
                <Icono size={18} />
              </span>
              <span>
                <span className="font-semibold">{elegido.beneficio}</span>
                <span className="mt-1 block text-stone-600">
                  {elegido.descripcion} {elegido.duracion}.
                </span>
              </span>
            </span>
            <a
              href="#reserva"
              className="btn-cta mt-5 w-full justify-center !text-[18px]"
            >
              Reservar este tratamiento
              <ArrowRight size={22} strokeWidth={2.6} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
