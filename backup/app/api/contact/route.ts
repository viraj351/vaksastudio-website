import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  budget?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";
  const budget = payload.budget?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and project details are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  if (message.length > 5000) {
    return NextResponse.json(
      { error: "Project details are too long." },
      { status: 400 }
    );
  }

  // Wire this up to your email provider of choice (Resend, Postmark,
  // SendGrid, etc.) or forward to a CRM. Example with Resend:
  //
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "Vaksa Studio <hello@vaksastudio.com>",
  //   to: "newbusiness@vaksastudio.com",
  //   replyTo: email,
  //   subject: `New enquiry from ${name}`,
  //   text: `${name} (${email})\nBudget: ${budget}\n\n${message}`,
  // });

  console.log("New contact enquiry:", { name, email, budget, message });

  return NextResponse.json({ ok: true }, { status: 200 });
}
