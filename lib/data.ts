import { CoffeeProduct, OriginStep, ProcessStage, InstagramPost } from "./types";

export const BRAND_DATA = {
  name: "Kafé Kinki",
  legalName: "Kafe Kinki Specialty Coffee Colombia",
  tagline: "Deleita tu fragancia, el aroma y el sabor",
  subtagline: "Cultivado y producido con dedicación en Pueblo Bello, Sierra Nevada de Santa Marta, Colombia.",
  producer: "Carlos",
  role: "Caficultor & Productor",
  originCity: "Pueblo Bello",
  originRegion: "Cesar, Colombia",
  originMountain: "Sierra Nevada de Santa Marta",
  roastProfile: "Tostión Media (Medium Roast)",
  coffeeType: "100% Café Colombiano de Especialidad",
  instagramHandle: "@kafe_kinki",
  instagramUrl: "https://www.instagram.com/kafe_kinki/",
  whatsapp: "+573000000000", // Representative contact link
  email: "contacto@kafekinki.com",
};

export const COFFEE_PRODUCTS: CoffeeProduct[] = [
  {
    id: "kafe-kinki-grano",
    slug: "kafe-kinki-grano-entero",
    name: "Kafé Kinki — Grano Entero",
    subtitle: "Café Artesanal de la Sierra Nevada",
    grindType: "Grano Entero (Whole Bean)",
    roastLevel: "Tostión Media (Medium Roast)",
    origin: "Pueblo Bello, Cesar — Sierra Nevada de Santa Marta",
    producer: "Carlos",
    tagline: "Conserva toda la frescura, los aceites esenciales y la fragancia intacta.",
    description:
      "Café 100% colombiano de especialidad, cultivado bajo sombrío natural y seleccionado a mano por Carlos. En presentación de grano entero para moler fresco en cada preparación y disfrutar de todo su aroma y sabor característico de la Sierra Nevada.",
    sizes: ["250g", "500g"],
    image: "/images/kafe-kinki-black-bag.jpg",
    badge: "100% Café Artesanal",
    specifications: [
      { label: "Origen", value: "Pueblo Bello, Sierra Nevada (Colombia)" },
      { label: "Productor", value: "Carlos (Cultivador & Productor)" },
      { label: "Tostión", value: "Tostión Media Artesanal" },
      { label: "Presentación", value: "Grano Entero (Bolsa con válvula desgasificadora)" },
      { label: "Composición", value: "100% Café Colombiano" },
    ],
  },
  {
    id: "kafe-kinki-molido",
    slug: "kafe-kinki-molido",
    name: "Kafé Kinki — Café Molido",
    subtitle: "Café Artesanal de la Sierra Nevada",
    grindType: "Molido (Ground)",
    roastLevel: "Tostión Media (Medium Roast)",
    origin: "Pueblo Bello, Cesar — Sierra Nevada de Santa Marta",
    producer: "Carlos",
    tagline: "Listo para infusionar en métodos tradicionales, prensa francesa, filtro o moka.",
    description:
      "El mismo café especial de Pueblo Bello, molido con precisión para brindarte una taza balanceada, aromática y llena de cuerpo desde el primer vertido. Empacado al vacío artesanal para proteger sus notas naturales.",
    sizes: ["250g", "500g"],
    image: "/images/kafe-kinki-white-bag.jpg",
    badge: "Listo para Preparar",
    specifications: [
      { label: "Origen", value: "Pueblo Bello, Sierra Nevada (Colombia)" },
      { label: "Productor", value: "Carlos (Cultivador & Productor)" },
      { label: "Tostión", value: "Tostión Media Artesanal" },
      { label: "Presentación", value: "Molido Fresco (Bolsa hermética)" },
      { label: "Composición", value: "100% Café Colombiano" },
    ],
  },
];

export const ORIGIN_JOURNEY: OriginStep[] = [
  {
    step: "01",
    title: "Pueblo Bello",
    location: "Cesar, Colombia",
    description:
      "El punto de partida en las faldas de la Sierra Nevada. Un enclave agrícola privilegiado rodeado de vegetación exuberante y tradición cafetera.",
    metric: "Pueblo Cafetero",
    iconName: "MapPin",
  },
  {
    step: "02",
    title: "Sierra Nevada de Santa Marta",
    location: "Microclima de Montaña",
    description:
      "La montaña costera más alta del mundo genera corrientes de aire fresco, niebla matutina y suelos fértiles que permiten maduraciones lentas y dulces.",
    metric: "Microclima Único",
    iconName: "Mountain",
  },
  {
    step: "03",
    title: "Cultivo y Sombrío Natural",
    location: "Cafetales de Carlos",
    description:
      "Los cafetos crecen protegidos bajo doseles de árboles nativos, enriqueciendo la biodiversidad y protegiendo el suelo de la erosión.",
    metric: "Sombrío Natural",
    iconName: "Trees",
  },
  {
    step: "04",
    title: "Cosecha Manual Selectiva",
    location: "Maduración Óptima",
    description:
      "Cada cereza se recolecta a mano en su punto exacto de madurez roja, garantizando únicamente frutos sanos y homogéneos.",
    metric: "Recolección a Mano",
    iconName: "Sparkles",
  },
  {
    step: "05",
    title: "Beneficio y Secado al Sol",
    location: "Patios y Camas de Secado",
    description:
      "Proceso cuidadoso donde el grano respira y se seca paulatinamente con la brisa de la sierra, reteniendo los azúcares naturales de la cereza.",
    metric: "Secado Artesanal",
    iconName: "Sun",
  },
  {
    step: "06",
    title: "Tu Taza de Café",
    location: "En tu Mesa",
    description:
      "Una experiencia auténtica, directa del campo colombiano a tu taza, sin intermediarios corporativos y con el sello de su productor.",
    metric: "Directo del Productor",
    iconName: "Coffee",
  },
];

export const CRAFT_PROCESS: ProcessStage[] = [
  {
    number: "01",
    title: "El Cafetal y la Siembra",
    subtitle: "Cuidado diario de cada planta",
    description:
      "En Pueblo Bello, cada planta de café es cuidada con atención continua. Carlos camina sus lotes inspeccionando la salud de las hojas, la floración y el desarrollo de las cerezas bajo el clima de la Sierra.",
    image: "/images/hero-sierra-nevada.jpg",
    badge: "Origen & Tierra",
    highlights: [
      "Cultivo bajo sombra natural",
      "Suelos ricos en nutrientes de la Sierra",
      "Respeto por el entorno natural",
    ],
  },
  {
    number: "02",
    title: "La Cosecha Manual",
    subtitle: "Solo cerezas en punto de caramelo",
    description:
      "La recolección es una labor paciente y manual. No se usan máquinas que dañen el fruto: la mirada y la mano experta escogen únicamente las cerezas de rojo intenso.",
    image: "/images/coffee-cherries.jpg",
    badge: "Recolección Manual",
    highlights: [
      "Selección manual cereza por cereza",
      "Punto óptimo de dulzura y madurez",
      "Trato digno y esmerado",
    ],
  },
  {
    number: "03",
    title: "Beneficio y Secado Natural",
    subtitle: "El grano reposa bajo el sol de la sierra",
    description:
      "El café se despulpa y se extiende en camas y patios ventilados. El sol andino y las corrientes de aire de la montaña van secando el grano lentamente hasta alcanzar la humedad ideal.",
    image: "/images/coffee-drying.jpg",
    badge: "Secado al Sol",
    highlights: [
      "Control de humedad artesanal",
      "Ventilación natural de montaña",
      "Cuidado riguroso del grano en pergamino",
    ],
  },
  {
    number: "04",
    title: "Tostión Media Artesanal",
    subtitle: "Resaltando fragancia, aroma y sabor",
    description:
      "La tostión media es el punto donde el café expresa su verdadera identidad: ni demasiado clara ni quemada. Se busca el equilibrio justo para deleitar el aroma y la fragancia que caracteriza a Kafé Kinki.",
    image: "/images/coffee-roasting.jpg",
    badge: "Tostión Media",
    highlights: [
      "Tueste en pequeños lotes",
      "Curva de tueste balanceada",
      "Empaque sellado para máxima frescura",
    ],
  },
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "ig-1",
    title: "Carlos en el Cafetal",
    category: "Carlos / Productor",
    caption: "Cuidando cada planta en Pueblo Bello. La pasión por el café se vive en el campo cada mañana. 🌿☕",
    imageUrl: "/images/carlos-portrait.jpg",
    link: "https://www.instagram.com/kafe_kinki/",
  },
  {
    id: "ig-2",
    title: "Cerezas Rojas de la Sierra",
    category: "Cosecha",
    caption: "Cosecha manual en su punto exacto de maduración. El rojo vivo de la Sierra Nevada. 🍒",
    imageUrl: "/images/coffee-cherries.jpg",
    link: "https://www.instagram.com/kafe_kinki/",
  },
  {
    id: "ig-3",
    title: "Kafé Kinki — Grano Entero",
    category: "Empaque",
    caption: "Deleita tu fragancia, el aroma y el sabor. Café 100% artesanal directo del productor a tu casa. 📦",
    imageUrl: "/images/kafe-kinki-black-bag.jpg",
    link: "https://www.instagram.com/kafe_kinki/",
  },
  {
    id: "ig-4",
    title: "Secado en Camas Elevadas",
    category: "Origen",
    caption: "Secado natural con el sol y la brisa de Pueblo Bello. Cada paso cuenta para un café de especialidad. ☀️",
    imageUrl: "/images/coffee-drying.jpg",
    link: "https://www.instagram.com/kafe_kinki/",
  },
  {
    id: "ig-5",
    title: "Tostión Media Fresca",
    category: "Café Servido",
    caption: "Granos recién tostados. Fragancia y aroma inconfundibles que llenan todo el espacio. ☕✨",
    imageUrl: "/images/coffee-roasting.jpg",
    link: "https://www.instagram.com/kafe_kinki/",
  },
  {
    id: "ig-6",
    title: "La Taza Perfecta",
    category: "Café Servido",
    caption: "Una taza de café colombiano con historia, tierra y corazón. ¡Saludos desde Pueblo Bello! ❤️",
    imageUrl: "/images/coffee-cup-flatlay.jpg",
    link: "https://www.instagram.com/kafe_kinki/",
  },
];
