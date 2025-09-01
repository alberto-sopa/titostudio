"use client";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { X } from "lucide-react";

export default function ProjectModal() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState<null | "ok" | "err">(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Estado para el cursor custom
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number } | null>(
    null
  );

  useEffect(() => {
    const onOpen = () => {
      setOpen(true);
      setSent(null);
    };
    window.addEventListener("open-project-modal", onOpen);
    return () => window.removeEventListener("open-project-modal", onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setSent(null);
    try {
      const payload = {
        name: String(formData.get("name") || ""),
        email: String(formData.get("email") || ""),
        company: String(formData.get("company") || ""),
        budget: String(formData.get("budget") || ""),
        message: String(formData.get("message") || ""),
        website: String(formData.get("website") || ""), // honeypot
        tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      setSent("ok");
      setTimeout(() => setOpen(false), 2000);
    } catch (e) {
      console.error(e);
      setSent("err");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      ref={dialogRef}
      aria-hidden={!open}
      className={clsx(
        "fixed inset-0 z-[100] transition-opacity duration-200",
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      )}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#fafafa]/10 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        onMouseMove={(e) => setCursorPos({ x: e.clientX, y: e.clientY })}
        onMouseLeave={() => setCursorPos(null)}
        style={{ cursor: "none" }} // ocultamos cursor por defecto
      >
        {/* Cursor custom */}
        {cursorPos && (
          <div
            className="fixed z-[200] flex h-8 w-8 items-center justify-center rounded-full bg-black text-white pointer-events-none"
            style={{
              top: cursorPos.y,
              left: cursorPos.x,
              transform: "translate(-50%, -50%)",
            }}
          >
            <X className="h-4 w-4" />
          </div>
        )}
      </div>

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          "relative mr-[16px] ml-auto mt-[1svh] w-[min(860px,94vw)] rounded-[8px] bg-black text-white shadow-2xl max-h-[98svh] h-full overflow-y-auto cursor-default",
          "transition-transform duration-200 will-change-transform",
          open ? "translate-y-0" : "translate-y-4"
        )}
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between">
            <div>
              <h2 id="project-modal-title" className="text-[20px] sm:text-2xl ">
                Empezar un proyecto
              </h2>
              <p className="mt-1 text-sm sm:text-base text-neutral-300 max-w-prose">
                Déjanos liderar la estrategia. Cuéntanos tus ideas y te
                ayudaremos a hacerlas realidad. Juntos haremos una experiencia
                digital increíble.
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
              className="ml-4 rounded-full border border-white/20 p-2 hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Formulario */}
          <form
            className="mt-6 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(new FormData(e.currentTarget));
              e.currentTarget.reset();
            }}
          >
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                required
                name="name"
                placeholder="Tu nombre"
                className="h-12 rounded-md bg-neutral-800 px-4 placeholder:text-neutral-400 outline-none ring-1 ring-white/10 focus:ring-white/30"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                className="h-12 rounded-md bg-neutral-800 px-4 placeholder:text-neutral-400 outline-none ring-1 ring-white/10 focus:ring-white/30"
              />
            </div>

            <input
              name="company"
              placeholder="Nombre de tu compañía"
              className="h-12 w-full rounded-md bg-neutral-800 px-4 placeholder:text-neutral-400 outline-none ring-1 ring-white/10 focus:ring-white/30"
            />

            <select
              name="budget"
              defaultValue=""
              className="h-12 w-full rounded-md bg-neutral-800 px-4 text-neutral-100 outline-none ring-1 ring-white/10 focus:ring-white/30"
            >
              <option value="" disabled>
                Presupuesto aproximado
              </option>
              <option value="<2k">Menos de 2.000€</option>
              <option value="2-5k">2.000€ – 5.000€</option>
              <option value="5-10k">5.000€ – 10.000€</option>
              <option value=">10k">Más de 10.000€</option>
            </select>

            <textarea
              name="message"
              rows={5}
              placeholder="Cuéntanos sobre tu proyecto y qué necesitas"
              className="w-full rounded-md bg-neutral-800 p-4 placeholder:text-neutral-400 outline-none ring-1 ring-white/10 focus:ring-white/30"
            />

            <div className="flex items-center justify-between pt-2">
              <div className="text-sm" aria-live="polite">
                {sent === "ok" && (
                  <span className="text-emerald-400">
                    ¡Enviado! Te contactaremos pronto.
                  </span>
                )}
                {sent === "err" && (
                  <span className="text-red-400">
                    Ha fallado el envío. Inténtalo de nuevo.
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className={clsx(
                  "rounded-md border border-white/20 px-5 py-2 text-sm font-medium",
                  loading
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:bg-white/10"
                )}
              >
                {loading ? "Enviando..." : "Empecemos a trabajar juntos"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
