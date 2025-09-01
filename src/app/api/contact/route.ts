import { NextRequest } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic"; // opcional, por si acaso

// ✅ no instanciar aquí: const resend = new Resend(...)

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set");
  return new Resend(key);
}

export async function GET() {
  return Response.json({ ok: true });
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, budget, message, website, tz } =
      await req.json();
    if (website) return Response.json({ ok: true }); // honeypot

    if (!name || !email) {
      return Response.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const subject = `Nuevo lead — ${name}${company ? ` · ${company}` : ""}`;
    const text = [
      `Nombre: ${name}`,
      `Email: ${email}`,
      company ? `Compañía: ${company}` : "",
      budget ? `Presupuesto: ${budget}` : "",
      tz ? `TZ Cliente: ${tz}` : "",
      "",
      "Mensaje:",
      message || "(sin mensaje)",
    ]
      .filter(Boolean)
      .join("\n");

    // ✅ Instanciar aquí, en runtime
    const resend = getResend();
    await resend.emails.send({
      from: "Tito Studio <hello@tito.studio>", // dominio verificado en Resend
      to: "alberto@heysopa.com",
      replyTo: email, // <-- usa replyTo (no reply_to)
      subject,
      text,
    });

    return Response.json({ ok: true });
  } catch (err: unknown) {
    console.error(err);
    const msg = err instanceof Error ? err.message : "Email failed";
    return Response.json({ ok: false, error: msg }, { status: 500 });
  }
}
