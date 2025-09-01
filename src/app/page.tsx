import Link from "next/link";
import Image from "next/image";
import OpenProjectButton from "@/components/OpenProjectButton";

// SEO nativo del App Router
export const metadata = {
  title: "Tito Studio – Lanzamos tu MVP en 4 semanas",
  description:
    "Diseño de producto y desarrollo para startups: MVPs rápidos, estrategia de producto y crecimiento. Lanzamos en semanas, no meses.",
  alternates: {
    canonical: "https://tito.studio/", // ajusta el dominio
  },
  openGraph: {
    type: "website",
    url: "https://tito.studio/",
    title: "Tito Studio – Lanzamos tu MVP en 4 semanas",
    description:
      "Creamos MVPs y definimos tu estrategia de producto para que tu startup crezca desde el primer día.",
    images: [
      {
        url: "/og.jpg", // súbela a /public
        width: 1200,
        height: 630,
        alt: "Tito Studio – Diseño y desarrollo de MVPs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tito Studio – Lanzamos tu MVP en 4 semanas",
    description:
      "Diseño de producto, MVPs y growth para startups. Rápido, honesto y sin rodeos.",
    images: ["/og.jpg"],
  },
};

export default function HomePage() {
  // Si ya generas JSON-LD aparte, mantenlo:
  // const ld = jsonLdHome();

  return (
    <>
      {/* JSON-LD opcional: quita si lo defines en layout */}
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      /> */}

      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur border-b border-[#E4E4E4]">
        <div className="mx-auto max-w-[1200px] h-[56px] px-6 sm:px-8 flex items-center justify-between">
          <Link href="/" aria-label="Ir a inicio">
            <Image
              src="/logo-tito-studio.svg"
              alt="Tito Studio"
              width={96}
              height={24}
              priority
            />
          </Link>

          <OpenProjectButton className="rounded-md border border-[#E4E4E4] px-4 py-2" />
        </div>
      </header>

      <main className="pt-[56px]">
        {/* HERO */}
        <section className="hero">
          <div className="py-[80px] sm:py-[160px] max-w-[1200px] w-full mx-auto px-6 sm:px-0">
            <div className="max-w-[720px] flex flex-col gap-4 mx-auto ">
              <h1 className="text-[28px] sm:text-[28px] leading-tight">
                Convierte tu idea en un MVP listo para lanzar en 4 semanas. Sin
                necesidad de equipo técnico.
              </h1>
              <p className="text-[18px] sm:text-[18px] text-[#868686]">
                Creamos MVPs y definimos tu estrategia de producto para que tu
                startup crezca desde el primer día.
              </p>
              <div className="mt-4">
                <OpenProjectButton className="rounded-md border border-[#E4E4E4] px-4 py-2" />
              </div>
            </div>
          </div>
        </section>

        {/* QUOTE / BG */}
        <section id="quote" aria-labelledby="quote-title" className="px-[16px]">
          <div className="bg-[url('/background.png')] bg-cover bg-center max-w-[1200px] rounded-[8px] overflow-hidden mx-auto">
            <div className="flex flex-col bg-[#00000040] mx-auto justify-center items-center sm:py-[140px] py-[80px] sm:px-6 px-[16px]">
              <h2
                id="quote-title"
                className="text-[22px] sm:text-[24px] text-white max-w-[680px] sm:text-center text-lefttito"
              >
                ¿Tienes una idea pero no sabes cómo convertirla en producto? En
                Tito Studio te acompañamos desde la validación hasta tu MVP
                funcional. Rápido, honesto y sin rodeos.
              </h2>
            </div>
          </div>
        </section>

        {/* CLIENTES */}
        <section id="clients" aria-labelledby="clients-title">
          <div className="py-[80px] sm:py-[160px] max-w-[1200px] w-full mx-auto grid grid-cols-12 gap-[24px] px-6 sm:px-0">
            <div className="col-span-12 sm:col-span-4 text-[16px] ">
              <h2 id="clients-title">Clientes</h2>
            </div>
            <div className="col-span-12 sm:col-span-8">
              <p className="text-[20px] sm:text-[24px] ">
                Trabajamos con una amplia gama de clientes, forjando un futuro
                mejor al convertir buenas ideas en grandes experiencias.
              </p>
              <div className="flex flex-wrap items-center gap-8 py-10 justify-evenly sm:justify-between">
                <Image
                  src="/logo-yorsio.png"
                  alt="Vercel"
                  width={110}
                  height={32}
                  sizes="(max-width: 640px) 96px, 110px"
                />
                <Image
                  src="/logo-sopa.png"
                  alt="Vercel"
                  width={110}
                  height={32}
                  sizes="(max-width: 640px) 96px, 110px"
                />{" "}
                <Image
                  src="/logo-signos.png"
                  alt="Vercel"
                  width={110}
                  height={32}
                  sizes="(max-width: 640px) 96px, 110px"
                />{" "}
                <Image
                  src="/logo-calmido.png"
                  alt="Vercel"
                  width={110}
                  height={32}
                  sizes="(max-width: 640px) 96px, 110px"
                />{" "}
              </div>
            </div>
          </div>
        </section>

        {/* QUIÉNES SOMOS */}
        <section id="who-we-are" aria-labelledby="about-title">
          <div className="py-[80px] sm:py-[160px] max-w-[1200px] w-full mx-auto grid grid-cols-12 gap-[24px] px-6 sm:px-0">
            <div className="col-span-12 sm:col-span-4 text-[16px] ">
              <h2 id="about-title">Quiénes somos</h2>
            </div>
            <div className="col-span-12 sm:col-span-8">
              <p className="text-[20px] sm:text-[24px] ">
                Más de 10 años desarrollando productos digitales en startups.
                Ahora ayudamos a emprendedores a lanzar sus ideas de forma
                honesta y enfocada a resultados.
              </p>
            </div>
          </div>
        </section>

        {/* POR QUÉ CON NOSOTROS */}
        <section id="services" aria-labelledby="why-title">
          <div className="py-[80px] sm:py-[160px] max-w-[1200px] w-full mx-auto grid grid-cols-12 gap-[24px] px-6 sm:px-0">
            <div className="col-span-12 sm:col-span-4 text-[16px] ">
              <h2 id="why-title">Por qué con nosotros</h2>
            </div>
            <div className="col-span-12 sm:col-span-8">
              <p className="text-[20px] sm:text-[24px]">
                Lanzarás en semanas, no en meses. Ahorrando costes y
                desarrollando lo necesario con una estrategia clara.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section aria-labelledby="services-title">
          <div className="py-[80px] sm:py-[160px] max-w-[1200px] w-full mx-auto grid grid-cols-12 gap-[24px] px-6 sm:px-0">
            <div className="col-span-12 sm:col-span-4 text-[16px] ">
              <h2 id="services-title">Servicios</h2>
            </div>
            <div className="col-span-12 sm:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
              <article className="border-t border-[#D9D9D9] pt-2">
                <h3 className="text-[16px] font-medium py-2">Product Design</h3>
                <ul className="flex flex-col py-2 gap-2 text-[#878787] ">
                  <li>UX/UI</li>
                  <li>Wireframes y prototipos</li>
                  <li>Diseño de MVPs</li>
                  <li>Landing pages</li>
                  <li>Consultoría de estrategia de producto</li>
                </ul>
              </article>

              <article className="border-t border-[#D9D9D9] pt-2">
                <h3 className="text-[16px] font-medium py-2">Graphic Design</h3>
                <ul className="flex flex-col py-2 gap-2 text-[#878787] ">
                  <li>Branding</li>
                  <li>Recursos gráficos</li>
                  <li>Pitch decks</li>
                  <li>Assets visuales</li>
                </ul>
              </article>

              <article className="border-t border-[#D9D9D9] pt-2">
                <h3 className="text-[16px] font-medium py-2">Desarrollo web</h3>
                <ul className="flex flex-col py-2 gap-2 text-[#878787] ">
                  <li>WordPress</li>
                  <li>Webflow</li>
                  <li>Low-code / No-code</li>
                  <li>Automatizaciones e integraciones</li>
                  <li>Desarrollo a medida</li>
                </ul>
              </article>

              <article className="border-t border-[#D9D9D9] pt-2">
                <h3 className="text-[16px] font-medium py-2">
                  Estrategia y crecimiento
                </h3>
                <ul className="flex flex-col py-2 gap-2 text-[#878787] ">
                  <li>Consultoría de producto digital</li>
                  <li>Definición de roadmap</li>
                  <li>SEO / SEM</li>
                  <li>Estrategia de captación</li>
                  <li>Iteración continua</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="call-to-action" aria-labelledby="cta-title">
          <div className="py-[80px] sm:py-[160px] max-w-[1200px] w-full mx-auto grid grid-cols-12 gap-[24px] px-6 sm:px-0">
            <div className="col-span-12 sm:col-span-4 text-[16px]">
              <h2 id="cta-title">Empezar proyecto</h2>
            </div>
            <div className="col-span-12 sm:col-span-6 flex flex-col gap-6 items-start">
              <p className="text-[20px] sm:text-[24px] ">
                Creemos algo grande juntos. Cuéntanos en qué punto estás y vemos
                si podemos ayudarte.
              </p>

              <OpenProjectButton className="rounded-md border border-[#E4E4E4] px-4 py-2" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
