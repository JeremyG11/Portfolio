import { NextResponse } from "next/server";
import { mongoConnect } from "@/lib/utils/dbConfig";
import  Review from "../../../models/review"
export async function GET() {
  try {
    await mongoConnect();
    const data = await Review.find();
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json("ERROR");
  }
}
