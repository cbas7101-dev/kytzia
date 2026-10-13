const celdas = [
  { titulo: "Más de 15 años", texto: "de experiencia en estética avanzada" },
  { titulo: "HIFU sin cirugía", texto: "reafirma, eleva y estimula el colágeno" },
  { titulo: "Quito norte", texto: "Real Audiencia, junto a Pastelería Flores" },
  { titulo: "Bienestar integral", texto: "físico, emocional y mental en cada visita" },
];

export default function Proof() {
  return (
    <section aria-label="Kytzia en datos" className="bg-[#FAF7F2] pb-4">
      <div className="page-margin mx-auto grid max-w-[1400px] gap-2 sm:grid-cols-2 lg:grid-cols-5">
        <div data-reveal className="rounded-[20px] bg-[#3B2D20] p-6 sm:col-span-2 lg:col-span-1">
          <h2 className="text-[clamp(1.5rem,2vw,1.9rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-white">
            Kytzia en datos
          </h2>
        </div>
        {celdas.map((c) => (
          <div key={c.titulo} data-reveal className="rounded-[20px] bg-[#F1E9DC] p-6">
            <p className="text-[22px] font-semibold leading-[1.1] tracking-[-0.02em] text-stone-900">
              {c.titulo}
            </p>
            <p className="mt-2 text-[16px] text-stone-600">{c.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
