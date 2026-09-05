import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kafekinki.com"),
  title: "Kafé Kinki | Café de Especialidad de la Sierra Nevada — Pueblo Bello, Colombia",
  description:
    "Kafé Kinki es café 100% colombiano de especialidad, cultivado y producido por Carlos en Pueblo Bello, Cesar, en la Sierra Nevada de Santa Marta. Café artesanal en grano entero y molido con tostión media.",
  keywords: [
    "Kafe Kinki",
    "Café de especialidad Colombia",
    "Pueblo Bello Cesar",
    "Sierra Nevada de Santa Marta",
    "Café artesanal colombiano",
    "Café grano entero",
    "Café molido",
    "Carlos productor de café",
    "Specialty Coffee Colombia",
  ],
  authors: [{ name: "Carlos - Kafé Kinki" }],
  openGraph: {
    title: "Kafé Kinki | Café de Especialidad de la Sierra Nevada",
    description:
      "Deleita tu fragancia, el aroma y el sabor. Café 100% artesanal cultivado por Carlos en Pueblo Bello, Colombia.",
    url: "https://kafekinki.com",
    siteName: "Kafé Kinki",
    images: [
      {
        url: "/images/kafe-kinki-black-bag.jpg",
        width: 1200,
        height: 800,
        alt: "Kafé Kinki Café de Colombia Artesanal",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kafé Kinki | Café de Especialidad de la Sierra Nevada",
    description:
      "Café 100% colombiano de especialidad directo del productor Carlos en Pueblo Bello, Cesar.",
    images: ["/images/kafe-kinki-black-bag.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data Schema for Local Specialty Coffee Producer
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CoffeeShop",
    name: "Kafé Kinki",
    description:
      "Grower and producer of Colombian specialty coffee in Pueblo Bello, Sierra Nevada de Santa Marta.",
    image: "https://kafekinki.com/images/kafe-kinki-black-bag.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pueblo Bello",
      addressRegion: "Cesar",
      addressCountry: "CO",
    },
    founder: {
      "@type": "Person",
      name: "Carlos",
      jobTitle: "Caficultor y Productor",
    },
    sameAs: ["https://www.instagram.com/kafe_kinki/"],
  };

  return (
    <html lang="es" className={`${fraunces.variable} ${plusJakartaSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#FBF8F3] text-[#1C1512]">
        {children}
      </body>
    </html>
  );
}
