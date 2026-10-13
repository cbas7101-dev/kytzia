import { useState } from "react";
import { Leaf, Smile, Sparkles } from "lucide-react";
import { servicios } from "../data/kytzia";

const iconos: Record<string, typeof Sparkles> = {
  hifu: Sparkles,
  faciales: Smile,
  corporales: Leaf,
};

const discos = ["#C69C6D", "#A67C00", "#3B2D20"];

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
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 aspect-square w-[min(52vh,80vw)] -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-500"
            style={{ background: discos[indice] }}
          />
          <div className="arch relative w-[min(40vh,60vw)] overflow-hidden">
            <img
              key={elegido.id}
              src={elegido.imagen}
              alt={elegido.alt}
              className="aspect-[3/4] w-full object-cover"
              width={720}
              height={960}
              loading="lazy"
            />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <h2 data-reveal className="step-head text-[clamp(2.2rem,2.9vw,2.75rem)] text-stone-900">
            Tratamientos
          </h2>
          <ul className="mt-8">
            {servicios.map((s, i) => {
              const ItemIcon = iconos[s.id] ?? Sparkles;
              const activo = s.id === elegido.id;
              return (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => seleccionar(i)}
                    aria-pressed={activo}
                    className={`flex w-full items-center gap-4 py-3 text-left text-[clamp(1.2rem,1.8vw,1.55rem)] font-semibold leading-[1.15] tracking-[-0.02em] transition-colors ${
                      activo ? "text-stone-900" : "text-stone-500 hover:text-stone-800"
                    }`}
                  >
                    <span
                      className={`arch-full flex h-11 w-11 shrink-0 items-center justify-center ${
                        activo ? "bg-[#3B2D20] text-white" : "bg-[#F1E9DC] text-[#3B2D20]"
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
          <div data-reveal className="mt-6 flex items-start gap-3 text-[17px] text-stone-900">
            <span className="arch-full mt-1 flex h-9 w-9 shrink-0 items-center justify-center bg-[#F1E9DC] text-[#3B2D20]">
              <Icono size={18} />
            </span>
            <div>
              <p className="font-medium">{elegido.beneficio}</p>
              <p className="mt-1 text-stone-600">
                {elegido.descripcion} {elegido.duracion}.
              </p>
              <a
                href="#reserva"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-stone-900 underline underline-offset-8"
              >
                Reservar este tratamiento
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
