import { useState } from "react";
import { faqs } from "../data/kytzia";

const colores = ["#3B2D20", "#1C1917", "#3B2D20"];

export default function Faq() {
  const [abierta, setAbierta] = useState(0);

  return (
    <section aria-label="Preguntas frecuentes" className="section-gap bg-[#FAF7F2]">
      <div className="mx-auto max-w-[900px] px-5">
        <h2 data-reveal className="step-head text-center text-[clamp(2.2rem,4vw,3.5rem)] text-stone-900">
          Preguntas que nos hacen
        </h2>
        <div className="mt-12 grid gap-4">
          {faqs.map((f, i) => {
            const esAbierta = abierta === i;
            return (
              <article
                key={f.pregunta}
                data-reveal
                style={{ background: colores[i % colores.length] }}
                className="relative overflow-hidden rounded-[20px] text-white"
              >
                <button
                  type="button"
                  onClick={() => setAbierta(esAbierta ? -1 : i)}
                  aria-expanded={esAbierta}
                  className="grid w-full gap-1 px-6 py-5 text-left md:px-8"
                >
                  <span className="text-[16px] font-medium opacity-90">{f.tema}</span>
                  <span className="text-[20px] font-semibold">{f.pregunta}</span>
                </button>
                {esAbierta && (
                  <p className="max-w-[56ch] px-6 pb-6 text-[17px] leading-[1.55] md:px-8">
                    {f.respuesta}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
