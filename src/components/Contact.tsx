import { useState } from "react";
import { AtSign, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { waLink } from "../data/kytzia";

export default function Contact() {
  const [nombre, setNombre] = useState("");
  const [interes, setInteres] = useState("Quiero agendar una cita");

  return (
    <section id="contacto" aria-label="Contacto" className="section-gap bg-[#FAF7F2]">
      <div className="page-margin mx-auto max-w-[1200px]">
        <div data-reveal className="relative overflow-hidden rounded-[28px] bg-[#3B2D20] text-white">
          <div className="grid gap-10 p-8 md:grid-cols-2 md:p-12">
            <div>
              <h2 className="step-head max-w-[10ch] text-[clamp(1.9rem,3vw,2.75rem)]">
                Visítanos en Quito
              </h2>
              <p className="mt-4 max-w-[38ch] text-[17px] text-white/85">
                Real Audiencia N-60-112 C9, al lado de Pastelería Flores. Te esperamos con luz
                cálida y trato de casa.
              </p>
              <ul className="mt-8 grid gap-4 text-[17px]">
                <li>
                  <a href="tel:+593992669466" className="flex items-center gap-3 hover:underline">
                    <Phone size={20} /> 099 266 9466
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/kytzia.estheticspa"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 hover:underline"
                  >
                    <AtSign size={20} /> @kytzia.estheticspa
                  </a>
                </li>
                <li>
                  <a href="mailto:joavillalva@hotmail.com" className="flex items-center gap-3 hover:underline">
                    <Mail size={20} /> joavillalva@hotmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={20} /> Real Audiencia N-60-112 C9, Quito
                </li>
              </ul>
            </div>
            <form
              data-ui
              className="grid content-start gap-3 rounded-[20px] bg-[#FAF7F2] p-6 text-stone-900 md:p-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <p className="text-[20px] font-semibold">Escríbenos por WhatsApp</p>
              <label className="grid gap-2 text-[16px] font-medium">
                Tu nombre
                <input
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="¿Cómo te llamas?"
                  autoComplete="name"
                  className="rounded-[14px] border-2 border-[#E4D5BE] bg-white px-4 py-3 text-[17px] placeholder:text-stone-400"
                />
              </label>
              <label className="grid gap-2 text-[16px] font-medium">
                ¿En qué te ayudamos?
                <select
                  value={interes}
                  onChange={(e) => setInteres(e.target.value)}
                  className="rounded-[14px] border-2 border-[#E4D5BE] bg-white px-4 py-3 text-[17px]"
                >
                  <option>Quiero agendar una cita</option>
                  <option>Quiero información del HIFU</option>
                  <option>Quiero información de faciales</option>
                  <option>Quiero información de masajes</option>
                </select>
              </label>
              <a
                href={waLink(`Hola Kytzia, soy ${nombre || "(nombre)"}. ${interes}.`)}
                target="_blank"
                rel="noreferrer"
                className="btn-pill mt-2 justify-center"
              >
                <MessageCircle size={20} />
                Enviar mensaje
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
