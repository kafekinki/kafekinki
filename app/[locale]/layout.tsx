import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    metadataBase: new URL("https://kafekinki.com"),
    title: t("title"),
    description: t("description"),
    keywords: t("keywords").split(", "),
    authors: [{ name: "Carlos - Kafé Kinki" }],
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://kafekinki.com/${locale}`,
      siteName: "Kafé Kinki",
      images: [
        {
          url: "/images/kafe-kinki-black-bag.jpg",
          width: 1200,
          height: 800,
          alt: "Kafé Kinki Café de Colombia Artesanal",
        },
      ],
      locale: locale === "es" ? "es_CO" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/images/kafe-kinki-black-bag.jpg"],
    },
    alternates: {
      canonical: `https://kafekinki.com/${locale}`,
      languages: {
        es: "https://kafekinki.com/es",
        en: "https://kafekinki.com/en",
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  // JSON-LD structured data for specialty coffee brand
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CoffeeShop",
    name: "Kafé Kinki",
    description:
      "Grower and producer of Colombian specialty coffee in Pueblo Bello, Sierra Nevada de Santa Marta. Kinki: Real, True, Original in Arhuaco.",
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
      jobTitle: "Caficultor & Productor",
    },
    sameAs: ["https://www.instagram.com/kafe_kinki/"],
  };

  return (
    <html lang={locale} className={`${fraunces.variable} ${plusJakartaSans.variable}`}>
      <head>
        <script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#FBF8F3] text-[#1C1512]">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
