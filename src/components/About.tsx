export default function About() {
  return (
    <section id="nosotros" className="px-[10px] md:px-5">
      <div className="overflow-hidden rounded-[28px] bg-[#3B2D20] text-[#FAF7F2]">
        <div className="page-margin mx-auto grid max-w-[1400px] gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <h2
              data-reveal
              className="step-head max-w-[12ch] text-[clamp(2.5rem,4.4vw,4rem)] text-[#FAF7F2]"
            >
              Belleza y bienestar
            </h2>
            <div data-reveal className="arch mt-12 w-[72vw] max-w-[380px] overflow-hidden">
              <img
                src="/649958504_1485833520219717_6091983687965498816_n.jpg"
                alt="Espejo orgánico retroiluminado del local de Kytzia"
                className="aspect-[4/5] w-full object-cover"
                width={760}
                height={950}
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-16 md:pt-10">
            <div data-reveal className="max-w-[300px]">
              <p className="text-[22px] font-semibold">Quince años de oficio</p>
              <p className="mt-3 text-[17px] leading-[1.55] text-[#FAF7F2]/90">
                Johanna Villalva, dermo cosmiatra, lidera cada diagnóstico con estética avanzada y
                resultados reales que se ven y se sienten.
              </p>
            </div>
            <div data-reveal className="max-w-[300px]">
              <p className="text-[22px] font-semibold">Trato cálido y personalizado</p>
              <p className="mt-3 text-[17px] leading-[1.55] text-[#FAF7F2]/90">
                Cada tratamiento está pensado en tu bienestar integral: físico, emocional y mental.
              </p>
            </div>
            <div data-reveal>
              <a href="#reserva" className="btn-light">
                Conoce tu diagnóstico
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
