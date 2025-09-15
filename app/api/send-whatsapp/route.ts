// app/api/send-whatsapp/route.ts
import { NextResponse } from "next/server";
import Twilio from "twilio";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, date, time, message } = body || {};

    if (!name || !email || !date || !time) {
      return NextResponse.json({ success: false, error: "Missing required fields." }, { status: 400 });
    }

    const accountSid = process.env.TWILIO_ACCOUNT_SID!;
    const authToken = process.env.TWILIO_AUTH_TOKEN!;
    const from = process.env.TWILIO_WHATSAPP_FROM!; // Twilio sandbox number (whatsapp:+14155238886)
    const to = "whatsapp:+923405542097"; // <-- Yahan apna WhatsApp number dalna hai

    const client = new Twilio(accountSid, authToken);

    const messageBody = `New Meeting Request:
Name: ${name}
Email: ${email}
Date: ${date}
Time: ${time}
Message: ${message || "-"}`;

    const msg = await client.messages.create({
      from,
      to,
      body: messageBody,
    });

    return NextResponse.json({ success: true, sid: msg.sid });
  } catch (err: any) {
    console.error("Twilio send error:", err);
    return NextResponse.json({ success: false, error: err.message || "Server error" }, { status: 500 });
  }
}