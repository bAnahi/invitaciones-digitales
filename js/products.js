const PRODUCTS_DATA = [
  {
    id: "baby-shower-victoria",
    nombre: "Llegada Esperada - Baby Shower",
    categoria: "Baby Shower",
    precio: 23,
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
    id: "boda-elegancia-botanica",
    nombre: "Elegancia Botánica",
    categoria: "Bodas",
    precio: 50,
    etiqueta: "Popular",
    imagen: "assets/images/boda-elegancia.jpg",
    descripcion: "Diseño sofisticado con detalles florales en tonos verdes y dorados.",
    caracteristicas: [
      "Confirmación RSVP a WhatsApp",
      "Ubicación interactiva en Waze y Google Maps",
      "Mesa de regalos y datos bancarios"
    ],
    tiempoEntrega: "24 a 48 horas"
  },
  
 {
    id: "graduacion-excelencia-academica",
    nombre: "Mi Graduación - Graduación",
    categoria: "Graduaciones",
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
    precio: 70,
    etiqueta: "Destacado",
    imagen: "assets/images/xv-verenice-crema.png", // Imagen principal
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
    precio: 30,
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
    precio: 75,
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
    precio: 50,
    etiqueta: "Nuevo",
    imagen: "assets/images/boda-carlos-rachel.png",
    descripcion: "Elegante diseño nupcial con arreglos de lirios blancos, anillos dorados entrelazados, detalles botánicos y pasaje bíblico.",
    caracteristicas: [
      "Diseño elegante con flores nupciales y anillos dorados",
      "Pasaje bíblico u oracional personalizado",
    ],
    tiempoEntrega: "24 horas"
  },

  {
    id: "boda-santiago-sara",
    nombre: "Pórtico Romano - Bodas",
    categoria: "Bodas",
    precio: 75,
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
    precio: 55,
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
];
