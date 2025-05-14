// app/api/send-email/route.js
import { NextResponse } from "next/server";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  const body = await req.json();
  const { email, message, firstname, lastname, service, phone } = body;
  console.log(email, message);

  if (!email || !firstname || !lastname || !phone) {
    return NextResponse.json(
      { error: "Missing email or message" },
      { status: 400 }
    );
  }

  try {
    await sendgrid.send({
      to: "quyetnxm04120@gmail.com",
      from: "quety@yopmail.com",
      subject: "Tin nhắn mới từ Portfolio",
      text: `${message}, ${firstname}, ${lastname}, ${service}, ${phone}`,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("SendGrid error:", error.response);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
