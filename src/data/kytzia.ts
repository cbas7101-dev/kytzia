export type Servicio = {
  id: string;
  nombre: string;
  descripcion: string;
  beneficio: string;
  duracion: string;
  imagen: string;
  alt: string;
};

export type Especialista = {
  id: string;
  nombre: string;
  rol: string;
  areas: string[];
};

export const WHATSAPP = "593992669466";

export const servicios: Servicio[] = [
  {
    id: "hifu",
    nombre: "Tratamiento HIFU",
    descripcion:
      "Tecnología avanzada que reafirma y eleva la piel, atenúa arrugas y estimula el colágeno sin cirugía.",
    beneficio: "Reafirma, eleva y rejuvenece con resultados naturales y progresivos.",
    duracion: "Sesión de 60 minutos",
    imagen: "/735981511_1590682559734812_6632777824874494802_n.jpg",
    alt: "Sesión de tratamiento facial HIFU en Kytzia Esthetic y Spa",
  },
  {
    id: "faciales",
    nombre: "Faciales y limpieza profunda",
    descripcion:
      "Cuidado de la piel diseñado para resaltar tu belleza natural, con diagnóstico personalizado.",
    beneficio: "Piel luminosa, hidratada y visiblemente renovada.",
    duracion: "Sesión de 75 minutos",
    imagen: "/650192676_1485833586886377_7227603567393271583_n.jpg",
    alt: "Sala de tratamiento facial con espejo en arco retroiluminado",
  },
  {
    id: "corporales",
    nombre: "Corporales y masajes",
    descripcion:
      "Masajes relajantes para liberar la tensión, desconectarte de la rutina y renovar tu energía.",
    beneficio: "Libera tensión y regálate una pausa de bienestar integral.",
    duracion: "Sesión de 60 minutos",
    imagen: "/650207287_1485833646886371_8925002874463895996_n.jpg",
    alt: "Sala de masajes con camilla, luz cálida y espejo en arco",
  },
];

/* Johanna Villalva es real (brief). Los demás especialistas son
   contenido de muestra: confirmar con la clienta antes de lanzar. */
export const especialistas: Especialista[] = [
  { id: "johanna", nombre: "Johanna Villalva", rol: "Dermo Cosmiatra", areas: ["hifu", "faciales"] },
  { id: "muestra-1", nombre: "Daniela Paredes", rol: "Masoterapia", areas: ["corporales", "faciales"] },
  { id: "muestra-2", nombre: "Carolina Méndez", rol: "Estética corporal", areas: ["corporales", "hifu"] },
];

export const horarios = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00", "18:30"];

export const faqs = [
  {
    tema: "HIFU",
    pregunta: "¿Qué es el tratamiento HIFU?",
    respuesta:
      "Es una tecnología avanzada que estimula el colágeno, reafirma y eleva la piel y atenúa arrugas de expresión sin cirugía, con resultados naturales y progresivos.",
  },
  {
    tema: "Reserva",
    pregunta: "¿Cómo reservo mi cita?",
    respuesta:
      "Elige tu servicio, tu especialista y el día y la hora que prefieras en el formulario de reserva de esta página. Confirmamos tu cita por WhatsApp al 099 266 9466.",
  },
  {
    tema: "Lugar",
    pregunta: "¿Dónde están ubicados?",
    respuesta:
      "En Real Audiencia N-60-112 C9, al lado de la Pastelería Flores, en Quito, Ecuador. Un espacio de luz cálida, madera y plantas pensado para tu pausa.",
  },
  {
    tema: "Enfoque",
    pregunta: "¿Qué hace diferente a Kytzia?",
    respuesta:
      "Más de 15 años de experiencia en estética avanzada, trato cálido y personalizado, y una filosofía de bienestar integral: físico, emocional y mental.",
  },
  {
    tema: "Primera vez",
    pregunta: "¿Nunca me he hecho un tratamiento?",
    respuesta:
      "Empezamos con un diagnóstico de tu piel y tus objetivos. Te recomendamos el tratamiento ideal y avanzamos a tu ritmo, con resultados reales que se ven y se sienten.",
  },
];

export function waLink(mensaje: string): string {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
}

export function proximosDias(cantidad = 10): Date[] {
  const dias: Date[] = [];
  const hoy = new Date();
  for (let i = 1; dias.length < cantidad; i++) {
    const d = new Date(hoy);
    d.setDate(hoy.getDate() + i);
    if (d.getDay() !== 0) dias.push(d);
  }
  return dias;
}

export function fechaCorta(d: Date): string {
  return d.toLocaleDateString("es-EC", { weekday: "short", day: "numeric", month: "short" });
}