export function jsonLdHome() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tito Studio",
    url: "https://tito.studio",
    slogan: "Lanzamos tu MVP en 4 semanas",
    sameAs: ["https://www.linkedin.com/company/tito-studio"],
    logo: "https://tito.studio/og.jpg",
  };
}

export function jsonLdService({ name, slug }: { name: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${name} — Tito Studio`,
    provider: { "@type": "Organization", name: "Tito Studio" },
    areaServed: "ES",
    url: `https://tito.studio/servicios/${slug}`,
  };
}

export function jsonLdCity({ name, slug }: { name: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `MVP en ${name} — Tito Studio`,
    url: `https://tito.studio/mvp-en/${slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: name,
      addressCountry: "ES",
    },
  };
}
