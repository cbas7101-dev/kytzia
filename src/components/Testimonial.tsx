export default function Testimonial() {
  return (
    <section aria-label="Filosofía de Kytzia" className="section-gap bg-[#FAF7F2]">
      <div className="page-margin mx-auto grid max-w-[1400px] gap-10 md:grid-cols-12">
        <div data-reveal className="md:col-span-4 md:col-start-2">
          <div className="arch mx-auto w-full max-w-[300px] overflow-hidden md:mx-0">
            <img
              src="/778957736_1634967511972983_7859768347641626915_n.jpg"
              alt="Johanna Villalva, fundadora de Kytzia Esthetic y Spa"
              className="aspect-[3/4] w-full object-cover object-top"
              width={600}
              height={800}
              loading="lazy"
            />
          </div>
        </div>
        <div className="md:col-span-6 md:pt-[120px]">
          <blockquote data-reveal>
            <p className="max-w-[26ch] text-[clamp(1.5rem,2.6vw,2.25rem)] font-medium leading-[1.2] tracking-[-0.01em] text-stone-900">
              “Cada tratamiento piensa en tu bienestar integral.”
            </p>
          </blockquote>
          <p data-reveal className="mt-6 max-w-[40ch] text-[17px] leading-[1.55] text-stone-900">
            Tu bienestar es mi mayor motivación.
          </p>
          <p data-reveal className="mt-4 text-[16px] text-stone-600">
            Johanna Villalva · Dermo cosmiatra y fundadora
          </p>
          <div data-reveal className="mt-12 w-[40%] max-w-[220px]">
            <img
              src="/650207287_1485833646886371_8925002874463895996_n.jpg"
              alt="Sala de masajes de Kytzia con luz cálida"
              className="arch aspect-square w-full object-cover"
              width={520}
              height={520}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
