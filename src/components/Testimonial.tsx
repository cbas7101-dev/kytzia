export default function Testimonial() {
  return (
    <section aria-label="Filosofía de Kytzia" className="section-gap bg-[#FAF7F2]">
      <div className="page-margin mx-auto grid max-w-[1400px] items-center gap-10 md:grid-cols-12">
        <div data-reveal className="md:col-span-5 md:col-start-1">
          <div className="overflow-hidden rounded-[28px] border border-[#E4D5BE] bg-white p-3">
            <img
              src="/778957736_1634967511972983_7859768347641626915_n.jpg"
              alt="Johanna Villalva, fundadora de Kytzia Esthetic y Spa"
              className="aspect-[4/5] w-full rounded-[20px] object-contain bg-[#FAF7F2]"
              width={600}
              height={750}
              loading="lazy"
            />
          </div>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p
            data-reveal
            className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#A67C00]"
          >
            Nuestra fundadora
          </p>
          <blockquote data-reveal>
            <p className="mt-3 max-w-[24ch] text-[clamp(1.8rem,3vw,2.8rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-stone-900">
              “Cada tratamiento piensa en tu bienestar integral.”
            </p>
          </blockquote>
          <p data-reveal className="mt-5 max-w-[42ch] text-[17px] leading-[1.6] text-stone-700">
            Tu bienestar es mi mayor motivación. Te recibo con diagnóstico honesto,
            trato cálido y resultados que se ven y se sienten.
          </p>
          <p data-reveal className="mt-4 text-[16px] font-semibold text-stone-900">
            Johanna Villalva · Dermo cosmiatra y fundadora
          </p>
          <div data-reveal className="mt-8 grid max-w-[520px] grid-cols-3 gap-3">
            {[
              ["15+", "años de experiencia"],
              ["3", "rituales: facial, corporal, HIFU"],
              ["1:1", "atención personalizada"],
            ].map(([n, t]) => (
              <div key={t} className="rounded-[16px] bg-[#F1E9DC] p-4">
                <p className="text-[22px] font-semibold text-[#3B2D20]">{n}</p>
                <p className="mt-1 text-[13px] font-medium leading-snug text-stone-600">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
