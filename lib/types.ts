export interface CoffeeProduct {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  grindType: "Grano Entero (Whole Bean)" | "Molido (Ground)" | "Ambas Presentaciones";
  roastLevel: "Tostión Media (Medium Roast)";
  origin: string;
  producer: string;
  tagline: string;
  description: string;
  sizes: string[];
  image: string;
  badge?: string;
  specifications: {
    label: string;
    value: string;
  }[];
}

export interface OriginStep {
  step: string;
  title: string;
  location: string;
  description: string;
  metric: string;
  iconName: string;
}

export interface ProcessStage {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  highlights: string[];
}

export interface InstagramPost {
  id: string;
  title: string;
  caption: string;
  category: "Origen" | "Cosecha" | "Carlos / Productor" | "Café Servido" | "Empaque" | "Comunidad";
  imageUrl: string;
  link: string;
}
