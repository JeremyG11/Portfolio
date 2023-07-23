import { NextResponse } from "next/server";
import { sendMail } from "@/lib/utils/mail";
export async function POST() {
  try {
    const data = await sendMail();
    return NextResponse.json({ data, "Here we go": "baby" });
  } catch (error) {
    return NextResponse.json("ERROR");
  }
}
