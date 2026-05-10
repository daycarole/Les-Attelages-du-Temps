import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { nom, email, telephone, message } = await req.json();

    console.log("FORMULAIRE REÇU :", {
      nom,
      email,
      telephone,
      message,
    });

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "lescentauresdutemps@gmail.com",
      subject: `Nouvelle demande - ${nom}`,
      text: `
Nom: ${nom}
Email: ${email}
Téléphone: ${telephone}

Message:
${message}
      `,
    });

    console.log("RÉPONSE RESEND :", data);

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("ERREUR CONTACT :", error);

    return Response.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}