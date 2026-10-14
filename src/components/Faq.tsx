import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "../data/kytzia";

export default function Faq() {
  const [abierta, setAbierta] = useState(0);

  return (
    <section aria-label="Preguntas frecuentes" className="section-gap bg-[#FAF7F2]">
      <div className="page-margin mx-auto grid max-w-[1400px] gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <p data-reveal className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#A67C00]">
            Dudas comunes
          </p>
          <h2 data-reveal className="step-head mt-2 text-[clamp(2rem,3.4vw,3rem)] text-stone-900">
            Preguntas que nos hacen
          </h2>
          <p data-reveal className="mt-4 max-w-[36ch] text-[17px] text-stone-600">
            Todo lo que necesitas antes de tu primera visita. ¿Otra duda? Escríbenos por WhatsApp.
          </p>
          <a data-reveal href="#contacto" className="btn-ghost mt-6 !py-3 text-[16px]">
            Hablar con Kytzia
          </a>
        </div>
        <div className="md:col-span-8">
          <div className="grid gap-3">
            {faqs.map((f, i) => {
              const esAbierta = abierta === i;
              return (
                <article
                  key={f.pregunta}
                  data-reveal
                  className={`overflow-hidden rounded-[20px] border transition-colors ${
                    esAbierta
                      ? "border-[#3B2D20] bg-[#3B2D20] text-white"
                      : "border-[#E4D5BE] bg-white text-stone-900 hover:border-[#C69C6D]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setAbierta(esAbierta ? -1 : i)}
                    aria-expanded={esAbierta}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span>
                      <span
                        className={`block text-[13px] font-semibold uppercase tracking-[0.16em] ${
                          esAbierta ? "text-[#C69C6D]" : "text-[#A67C00]"
                        }`}
                      >
                        {f.tema}
                      </span>
                      <span className="mt-1 block text-[19px] font-semibold">{f.pregunta}</span>
                    </span>
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-transform ${
                        esAbierta ? "rotate-45 bg-[#C69C6D] text-[#3B2D20]" : "bg-[#F1E9DC] text-[#3B2D20]"
                      }`}
                    >
                      <Plus size={20} />
                    </span>
                  </button>
                  {esAbierta && (
                    <p className="max-w-[60ch] px-6 pb-6 text-[16px] leading-[1.6] text-white/90">
                      {f.respuesta}
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
