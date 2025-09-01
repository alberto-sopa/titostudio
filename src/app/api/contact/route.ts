import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Util por si alguien hace GET
export async function GET() {
  return Response.json({ ok: true });
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, budget, message, website, tz } =
      await req.json();

    // Honeypot (spam) — si viene relleno, ignoramos
    if (website) return Response.json({ ok: true });

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

    await resend.emails.send({
      from: "Tito Studio <hello@tito.studio>", // usa tu dominio verificado en Resend
      to: "alberto@heysopa.com",
      reply_to: email, // para poder responder directo
      subject,
      text,
    });

    return Response.json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return Response.json({ ok: false, error: "Email failed" }, { status: 500 });
  }
}
