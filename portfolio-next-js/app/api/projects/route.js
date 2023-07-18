import { NextResponse } from "next/server";
import { mongoConnect } from "@/lib/utils/dbConfig";
import Project from "../../../models/project";
export async function GET() {
  try {
    await mongoConnect();
    const data = await Project.find();
    return NextResponse.json({ data, "Here we go":"baby" });
  } catch (error) {
    return NextResponse.json("ERROR");
  }
}
