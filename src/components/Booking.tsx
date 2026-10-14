import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Leaf, MessageCircle, Smile, Sparkles } from "lucide-react";
import {
  especialistas,
  fechaCorta,
  horarios,
  proximosDias,
  servicios,
  waLink,
} from "../data/kytzia";

const etapas = ["Servicio", "Especialista", "Fecha y hora", "Tus datos", "Confirmación"];

const etapaIconos = [Sparkles, Smile, Check, MessageCircle, Leaf];

function PuntosMotivo() {
  const puntos = useMemo(() => {
    const lista: { x: number; y: number; color: string }[] = [];
    for (let i = 0; i < 56; i++) {
      const fila = Math.floor(i / 14);
      const col = i % 14;
      lista.push({
        x: 4 + col * 7,
        y: 12 + fila * 25 + (col % 2 === 0 ? 6 : 0),
        color: fila < 2 ? "#C69C6D" : "#E4D5BE",
      });
    }
    return lista;
  }, []);
  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-label="Tu reserva paso a paso"
      className="mx-auto h-[64px] w-full max-w-[520px]"
      preserveAspectRatio="xMidYMid meet"
    >
      {puntos.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={2.4} fill={p.color} />
      ))}
    </svg>
  );
}

export default function Booking() {
  const [paso, setPaso] = useState(0);
  const [servicioId, setServicioId] = useState<string | null>(null);
  const [especialistaId, setEspecialistaId] = useState<string | null>(null);
  const [dia, setDia] = useState<number | null>(null);
  const [hora, setHora] = useState<string | null>(null);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [nota, setNota] = useState("");
  const [confirmada, setConfirmada] = useState(false);

  const dias = useMemo(() => proximosDias(10), []);
  const servicio = servicios.find((s) => s.id === servicioId) ?? null;
  const especialista = especialistas.find((e) => e.id === especialistaId) ?? null;

  const expertosFiltrados = servicio
    ? especialistas.filter((e) => e.areas.includes(servicio.id))
    : especialistas;

  function puedeAvanzar(): boolean {
    if (paso === 0) return servicioId !== null;
    if (paso === 1) return especialistaId !== null;
    if (paso === 2) return dia !== null && hora !== null;
    if (paso === 3) return nombre.trim().length > 1 && telefono.trim().length > 6;
    return true;
  }

  function mensajeReserva(): string {
    const fecha = dia !== null ? fechaCorta(dias[dia]) : "";
    return `Hola Kytzia, quiero agendar: ${servicio?.nombre} con ${especialista?.nombre} el ${fecha} a las ${hora}. Soy ${nombre} (${telefono}).${nota ? ` Nota: ${nota}` : ""}`;
  }

  return (
    <section id="reserva" className="section-gap bg-[#F1E9DC]">
      <div className="page-margin mx-auto max-w-[1400px]">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2 data-reveal className="step-head text-[clamp(2.2rem,4vw,3.75rem)] text-stone-900 md:col-span-5">
            Reserva tu pausa
          </h2>
          <p data-reveal className="step-body max-w-[46ch] text-stone-900 md:col-span-7">
            Cinco momentos y listo: eliges el tratamiento, a tu especialista, el día y la hora, nos
            dejas tus datos y confirmas por WhatsApp.
          </p>
        </div>

        <div data-reveal className="mt-6">
          <PuntosMotivo />
        </div>

        <ol className="mt-4 grid gap-2 sm:grid-cols-3 md:grid-cols-5" aria-label="Etapas de la reserva">
          {etapas.map((nombreEtapa, i) => {
            const EtapaIcon = etapaIconos[i] ?? Check;
            return (
              <li
                key={nombreEtapa}
                aria-current={i === paso ? "step" : undefined}
                className={`flex items-center gap-2 rounded-[16px] px-4 py-3 text-[15px] font-semibold ${
                  i === paso || i < paso || (i === 4 && confirmada)
                    ? "bg-[#3B2D20] text-white"
                    : "bg-[#FAF7F2] text-stone-500"
                }`}
              >
                <EtapaIcon size={16} />
                {nombreEtapa}
              </li>
            );
          })}
        </ol>

        <div className="mt-6 rounded-[28px] bg-[#FAF7F2] p-6 md:p-10" data-ui>
          {paso === 0 && (
            <div>
              <p className="step-lead font-semibold text-stone-900">¿Qué te gustaría agendar?</p>
              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {servicios.map((s) => {
                  const activo = servicioId === s.id;
                  const SIcon = s.id === "hifu" ? Sparkles : s.id === "faciales" ? Smile : Leaf;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => {
                        setServicioId(s.id);
                        setEspecialistaId(null);
                      }}
                      aria-pressed={activo}
                      className={`rounded-[20px] border-2 p-5 text-left transition-colors ${
                        activo
                          ? "border-[#A67C00] bg-[#3B2D20] text-white"
                          : "border-transparent bg-white text-stone-900 hover:border-[#E4D5BE]"
                      }`}
                    >
                      <span
                        className={`arch-full flex h-11 w-11 items-center justify-center ${
                          activo ? "bg-[#C69C6D] text-[#3B2D20]" : "bg-[#F1E9DC] text-[#3B2D20]"
                        }`}
                      >
                        <SIcon size={20} />
                      </span>
                      <span className="mt-3 block text-[19px] font-semibold leading-tight">{s.nombre}</span>
                      <span className={`mt-1 block text-[15px] ${activo ? "text-white/80" : "text-stone-500"}`}>
                        {s.duracion} · {s.beneficio}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {paso === 1 && (
            <div>
              <p className="step-lead font-semibold text-stone-900">Elige a tu especialista</p>
              <ul className="mt-6 grid max-w-[560px] gap-3">
                {expertosFiltrados.map((e) => (
                  <li key={e.id}>
                    <button
                      type="button"
                      onClick={() => setEspecialistaId(e.id)}
                      aria-pressed={especialistaId === e.id}
                      className={`flex w-full items-center gap-4 rounded-[20px] p-4 text-left ${
                        especialistaId === e.id ? "bg-[#3B2D20] text-white" : "bg-white text-stone-900"
                      }`}
                    >
                      <span className="arch-full flex h-14 w-14 shrink-0 items-center justify-center bg-[#F1E9DC] text-[20px] font-semibold text-[#3B2D20]">
                        {e.nombre.charAt(0)}
                      </span>
                      <span>
                        <span className="block text-[20px] font-semibold">{e.nombre}</span>
                        <span
                          className={`block text-[16px] ${
                            especialistaId === e.id ? "text-white/85" : "text-stone-600"
                          }`}
                        >
                          {e.rol}
                        </span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {paso === 2 && (
            <div>
              <p className="step-lead font-semibold text-stone-900">Elige el día y la hora</p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
                {dias.map((d, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setDia(i)}
                    aria-pressed={dia === i}
                    className={`rounded-[16px] px-3 py-4 text-[16px] font-semibold capitalize ${
                      dia === i ? "bg-[#3B2D20] text-white" : "bg-white text-stone-900"
                    }`}
                  >
                    {fechaCorta(d)}
                  </button>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-7">
                {horarios.map((h) => (
                  <button
                    key={h}
                    type="button"
                    onClick={() => setHora(h)}
                    aria-pressed={hora === h}
                    className={`rounded-[16px] px-3 py-3 text-[16px] font-semibold tabular-nums ${
                      hora === h ? "bg-[#3B2D20] text-white" : "bg-white text-stone-900"
                    }`}
                  >
                    {h}
                  </button>
                ))}
              </div>
            </div>
          )}

          {paso === 3 && (
            <div className="max-w-[620px]">
              <p className="step-lead font-semibold text-stone-900">Cuéntanos quién nos visita</p>
              <form
                className="mt-6 grid gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (puedeAvanzar()) setPaso(4);
                }}
              >
                <label className="grid gap-2 text-[16px] font-medium text-stone-900">
                  Nombre y apellido
                  <input
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="¿Cómo te llamas?"
                    autoComplete="name"
                    className="rounded-[14px] border-2 border-[#E4D5BE] bg-white px-4 py-3 text-[17px] text-stone-900 placeholder:text-stone-400"
                  />
                </label>
                <label className="grid gap-2 text-[16px] font-medium text-stone-900">
                  Teléfono o WhatsApp
                  <input
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="099 000 0000"
                    inputMode="tel"
                    autoComplete="tel"
                    className="rounded-[14px] border-2 border-[#E4D5BE] bg-white px-4 py-3 text-[17px] text-stone-900 placeholder:text-stone-400"
                  />
                </label>
                <label className="grid gap-2 text-[16px] font-medium text-stone-900">
                  ¿Algo que debamos saber? (opcional)
                  <textarea
                    value={nota}
                    onChange={(e) => setNota(e.target.value)}
                    placeholder="Alergias, embarazo, primera visita…"
                    rows={3}
                    className="rounded-[14px] border-2 border-[#E4D5BE] bg-white px-4 py-3 text-[17px] text-stone-900 placeholder:text-stone-400"
                  />
                </label>
              </form>
            </div>
          )}

          {paso === 4 && (
            <div className="max-w-[640px]">
              <p className="step-lead font-semibold text-stone-900">Verifica y confirma tu reserva</p>
              <dl className="mt-6 grid gap-3 rounded-[20px] bg-white p-6 text-[17px]">
                <div className="flex justify-between gap-4">
                  <dt className="text-stone-600">Tratamiento</dt>
                  <dd className="font-semibold text-stone-900">{servicio?.nombre}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-stone-600">Especialista</dt>
                  <dd className="font-semibold text-stone-900">{especialista?.nombre}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-stone-600">Fecha</dt>
                  <dd className="font-semibold capitalize text-stone-900">
                    {dia !== null ? fechaCorta(dias[dia]) : ""}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-stone-600">Hora</dt>
                  <dd className="font-semibold tabular-nums text-stone-900">{hora}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-stone-600">Cliente</dt>
                  <dd className="font-semibold text-stone-900">
                    {nombre} · {telefono}
                  </dd>
                </div>
              </dl>
              {!confirmada ? (
                <a
                  href={waLink(mensajeReserva())}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setConfirmada(true)}
                  className="btn-cta mt-6"
                >
                  <MessageCircle size={20} />
                  Confirmar por WhatsApp
                </a>
              ) : (
                <p className="mt-6 flex items-center gap-3 rounded-[20px] bg-[#3B2D20] p-6 text-[18px] font-medium text-white">
                  <Check size={22} />
                  ¡Reserva enviada! Te confirmamos por WhatsApp en minutos.
                </p>
              )}
            </div>
          )}

          {!(paso === 4 && confirmada) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {paso > 0 && (
                <button type="button" onClick={() => setPaso(paso - 1)} className="btn-ghost">
                  <ArrowLeft size={20} />
                  Atrás
                </button>
              )}
              {paso < 4 && (
                <button
                  type="button"
                  disabled={!puedeAvanzar()}
                  onClick={() => puedeAvanzar() && setPaso(paso + 1)}
                  className="btn-cta disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
                >
                  Continuar
                  <ArrowRight size={20} />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
