const PRODUCTS_DATA = [
  {
    id: "baby-shower-victoria",
    nombre: "Llegada Esperada - Baby Shower",
    categoria: "Baby Shower",
    formato: "estatica",
    precio: 35,
    etiqueta: "Destacado",
    imagen: "assets/images/baby-shower-victoria.png",
    descripcion: "Hermoso diseño acuarela en tonos rosa y crema con osito en globo aerostático, ideal para la llegada de tu pequeña.",
    caracteristicas: [
      "Diseño personalizado con datos del evento",
      "Ilustración temática de osito y globos",
      "Versión digital lista para enviar por WhatsApp",
      "Cita bíblica u orativa opcional",
      "Ubicación exacta del salón"
    ],
    tiempoEntrega: "24 horas"
  },

  {
    id: "graduacion-excelencia-academica",
    nombre: "Mi Graduación - Graduación",
    categoria: "Graduaciones",
    formato: "estatica",
    precio: 35,
    etiqueta: "Nuevo",
    imagen: "assets/images/Excelencia academica.png",
    descripcion: "Elegante diseño en tono borgoña con detalles botánicos, birrete en acuarela y cita de agradecimiento.",
    caracteristicas: [
      "Ilustración temática de birrete y diploma dorado",
      "Detalles botánicos de follaje elegante",
      "Cita bíblica u oracional personalizada",
      "Sección con fecha, hora y dirección del evento",
      "Versión digital en alta resolución lista para WhatsApp"
    ],
    tiempoEntrega: "24 horas"
  },
  {
    id: "xv-verenice-estrada",
    nombre: "Jardín Imperial - XV Años",
    categoria: "XV años",
    formato: "estatica",
    precio: 85,
    etiqueta: "Destacado",
    imagen: "assets/images/xv-verenice-crema.png",
    imagenes: [
      "assets/images/xv-verenice-crema.png",
      "assets/images/xv-verenice-verde.png",
      "assets/images/xv-verenice-oscuro.png"
    ],
    descripcion: "Elegante diseño con tiara dorada, arreglos florales y disponible en 3 paletas de colores distintas.",
    caracteristicas: [
      "Disponible en 3 colores (Crema, Verde Olivo y Moca/Oscuro)",
      "Botón de ubicación del lugar",
      "Confirmación de asistencia RSVP directa a WhatsApp",
      "Sección de padres y tiara en acabado dorado"
    ],
    tiempoEntrega: "24 horas"
  },
  {
    id: "xv-clarissa-montes",
    nombre: "Flor de Cerezo - XV Años",
    categoria: "XV años",
    formato: "estatica",
    precio: 60,
    etiqueta: "Popular",
    imagen: "assets/images/xv-clarissa-rosa.png",
    imagenes: [
      "assets/images/xv-clarissa-rosa.png",
      "assets/images/xv-clarissa-azul.png"
    ],
    descripcion: "Hermoso y delicado diseño floral con flores de cerezo, espacio circular para foto de la quinceañera y pasaje bíblico.",
    caracteristicas: [
      "Disponible en 2 colores (Rosa Pastel y Azul Noche con Dorado)",
      "Marco circular personalizado para foto de la cumpleañera",
      "Cita bíblica u oracional personalizada"
    ],
    tiempoEntrega: "24 horas"
  },
  {
    id: "xv-samantha-hernandez",
    nombre: "Reina Floral - XV Años",
    categoria: "XV años",
    formato: "estatica",
    precio: 85,
    etiqueta: "Popular",
    imagen: "assets/images/xv-samantha-rosa.png",
    imagenes: [
      "assets/images/xv-samantha-rosa.png",
      "assets/images/xv-samantha-lila.png",
      "assets/images/xv-samantha-azul.png",
      "assets/images/xv-samantha-verde.png"
    ],
    descripcion: "Diseño real con marco geométrico, corona de tiara y rosas en 4 paletas de colores distintas.",
    caracteristicas: [
      "Disponible en 4 colores (Rosa, Lila, Azul Marino y Verde Esmeralda)",
      "Detalle de tiara de princesa y marco geométrico en acabado dorado",
      "Cita bíblica u oracional personalizada",
      "Botón directo de ubicación del evento",
      "Confirmación de asistencia vía WhatsApp"
    ],
    tiempoEntrega: "24 horas"
  },
  {
    id: "boda-carlos-rachel",
    nombre: "Nuestra Boda - Bodas",
    categoria: "Bodas",
    formato: "estatica",
    precio: 40,
    etiqueta: "Nuevo",
    imagen: "assets/images/boda-carlos-rachel.png",
    descripcion: "Elegante diseño nupcial con arreglos de lirios blancos, anillos dorados entrelazados, detalles botánicos y pasaje bíblico.",
    caracteristicas: [
      "Diseño elegante con flores nupciales y anillos dorados",
      "Pasaje bíblico u oracional personalizado"
    ],
    tiempoEntrega: "24 horas"
  },
  {
    id: "boda-santiago-sara",
    nombre: "Pórtico Romano - Bodas",
    categoria: "Bodas",
    formato: "estatica",
    precio: 85,
    etiqueta: "Nuevo",
    imagen: "assets/images/boda-santiago-azul.png",
    imagenes: [
      "assets/images/boda-santiago-azul.png",
      "assets/images/boda-santiago-naranja.png",
      "assets/images/boda-santiago-morado.png",
      "assets/images/boda-santiago-rosa.png"
    ],
    descripcion: "Diseño nupcial estilo acuarela con pórtico de columnas romanas, copas para brindis, follaje de hojas y pasaje bíblico.",
    caracteristicas: [
      "Disponible en 4 variaciones de color (Azul, Melocotón, Morado y Rosa)",
      "Ilustración de columnas romanas y arreglos florales en acuarela",
      "Detalle de copas de brindis al centro",
      "Pasaje bíblico",
      "Botón de ubicación del evento",
      "Botón de confirmación de asistencia"
    ],
    tiempoEntrega: "24 horas"
  },
  {
    id: "boda-carlos-sonia",
    nombre: "Eucalipto & Anillos - Bodas",
    categoria: "Bodas",
    formato: "estatica",
    precio: 95,
    etiqueta: "Nuevo",
    imagen: "assets/images/boda-carlos-sonia-dorado.png",
    imagenes: [
      "assets/images/boda-carlos-sonia-dorado.png",
      "assets/images/boda-carlos-sonia-verde.png"
    ],
    descripcion: "Diseño de boda botánico con marco circular para foto de la pareja, ramas de eucalipto, anillos de matrimonio y pasaje bíblico.",
    caracteristicas: [
      "Disponible en 2 tonos de marco (Dorado y Verde Olivo)",
      "Marco circular para foto personalizada de los novios",
      "Detalle central con anillos de matrimonio",
      "Ilustraciones de ramas de eucalipto",
      "Pasaje bíblico",
      "Botón de ubicación del evento",
      "Botón de confirmación de asistencia"
    ],
    tiempoEntrega: "24 horas"
  },
  {
    id: "boda-mateo-sofia-web",
    nombre: "Enlace Matrimonial - Bodas",
    categoria: "Bodas",
    formato: "web",
    precio: 240,
    etiqueta: "Popular",
    imagen: "assets/images/boda-mateo-sofia-web.png",
    demoUrl: "https://boche-invitaciones.my.canva.site/mateo-y-sofia",
    descripcion: "Experiencia digital interactiva en formato sitio web para smartphones. Incluye sobre animado, música, mapa GPS, pases y confirmación de asistencia.",
    caracteristicas: [
      "📱 Diseño adaptado 100% a pantallas de teléfono móvil",
      "✉️ Animación de sobre con pase personalizado",
      "🎵 Reproductor con la canción de los novios",
      "📍 Ubicación GPS directa en Waze y Google Maps",
      "📸 Galería Polaroid estilo Save the Date",
      "⏱️ Cuenta regresiva en tiempo real",
      "📝 Confirmación digital RSVP vía WhatsApp / Formulario"
    ],
    tiempoEntrega: "24 a 48 horas"
  },

  {
  id: "15-anos-tatiana-web",
  nombre: "15 primaveras - XV Años",
  categoria: "XV años",
  formato: "web",
  precio: 225,
  etiqueta: "Destacado",
  imagen: "assets/images/15-anos-tatiana-web.png",
  demoUrl: "https://boche-invitaciones.my.canva.site/xv-primaveras",
  descripcion: "Invitación web interactiva para XV años con sobre animado azul marino, música de fondo, itinerario, ubicación GPS y confirmación de asistencia RSVP.",
  caracteristicas: [
    "Sobre animado interactivo con sello dorado",
    "Reproductor de música integrado (¡Dale play!)",
    "Contador regresivo en tiempo real",
    "Botones interactivos para mapa GPS (Misa y Recepción)",
    "Sección para sugerencia de obsequios / sobres",
    "Confirmación de asistencia directa (RSVP)"
  ],
  tiempoEntrega: "24 a 48 horas"
},

{
  id: "baby-shower-santiago-web",
  nombre: "Pequeños Pasos - Baby Shower",
  categoria: "Baby Shower",
  formato: "web",
  precio: 150,
  etiqueta: "Nuevo",
  imagen: "assets/images/baby-shower-santiago-web.png",
  demoUrl: "https://boche-invitaciones.my.canva.site/", // <-- Reemplaza con tu link publicado de Canva
  descripcion: "Encantadora invitación web interactiva para Baby Shower con temática de osito en globo aerostático, reproductor de música, mapa de ubicación, lista de regalos y contador regresivo.",
  caracteristicas: [
    "Diseño animado con temática de osito y nubes celestes",
    "Reproductor de música integrado (¡Dale play!)",
    "Versículo y texto bíblico personalizado",
    "Botón directo con mapa de ubicación GPS",
    "Botón interactivo para Mesa/Lista de Regalos",
    "Contador regresivo en tiempo real",
    "Confirmación de asistencia directa (RSVP)"
  ],
  tiempoEntrega: "24 a 48 horas"
}
];