import connectMongoDB from "@/libs/mongodb";
import Question from "@/models/question";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const requestData = await req.json();
    await connectMongoDB();
    await Question.create({ ...requestData });
    console.log("Topic Created");
    return NextResponse.json({ message: "Topic Created" });
  } catch (error) {
    console.error("Error creating topic:", error);
    return NextResponse.error(new Error("Failed to create topic"));
  }
}
export async function GET() {
  await connectMongoDB();
  const Questions = await Question.find();
  return NextResponse.json({ Questions });
}
