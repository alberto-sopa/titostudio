import type { Metadata } from "next";
import "./globals.css";
import LocalTime from "@/components/LocalTime";
import ProjectModal from "@/components/ProjectModal";
import OpenProjectButton from "@/components/OpenProjectButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://tito.studio"),
  title: {
    default: "Tito Studio — Lanzamos tu MVP en 4 semanas",
    template: "%s · Tito Studio",
  },
  description:
    "Agencia boutique de producto: UX/UI, desarrollo de MVPs, y estrategia de crecimiento. Lanzamos tu MVP en 4 semanas, sin necesidad de equipo técnico.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://tito.studio/",
    title: "Tito Studio — Lanzamos tu MVP en 4 semanas",
    description:
      "UX/UI, MVPs y estrategia de producto. Rápido, honesto y sin rodeos.",
    siteName: "Tito Studio",
  },
  twitter: { card: "summary_large_image", creator: "@tito_studio" },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen antialiased">
        <main className="p-0">{children}</main>
        <ProjectModal />
        <footer className="min-h-[100svh] flex flex-col items-center justify-between bg-[#000000] text-white w-full">
          <div className=" p-[24px] sm:p-[80px] grid sm:grid-cols-12 gap-[24px] w-full">
            <div className="col-span-4">Tito Studio</div>
            <div className="col-span-8 flex flex-col gap-[24px]">
              <p className="text-[24px]">
                Somos una boutique de desarrollo que tiene el objetivo de ayudar
                a emprendedores a dar ese primer paso de manera segura, honesta
                y con sentido.
              </p>
              <div className="flex gap-[16px]">
                <a
                  href=""
                  className="text-[#868686] uppercase font-bold text-[14px]"
                >
                  Linkedin
                </a>
              </div>
            </div>
          </div>

          <div className=" p-[24px] sm:p-[80px] grid sm:grid-cols-3 gap-[16px] w-full">
            <div className="flex flex-col gap-[8px]">
              <LocalTime />
              <div className="text-[#868686] font-medium">
                Valencia & Madrid
              </div>
              <div className="text-[#868686] font-medium">
                Trabajando para toda España
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="text-white font-medium">
                <a href="hola@tito.studio">hola@tito.studio</a>
              </div>
              <div className="text-[#868686] font-medium">
                <OpenProjectButton />
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="text-white font-medium">@ 2025 Tito Studio</div>
              <div className="text-[#868686] font-medium">
                <a href="">Política de privacidad</a>
              </div>
              <div className="text-[#868686] font-medium">Sopa</div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
