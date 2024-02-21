// pages/api/upload.js

import connectMongoDB from "@/libs/mongodb";
import Question from "@/models/question";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const requestData = await req.json();
    await connectMongoDB();
    await Question.create({ ...requestData });
    console.log("Topic Created");

    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://quiz-app-blush-ten.vercel.app"
    );
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    return NextResponse.json({ message: "Topic Created" });
  } catch (error) {
    console.error("Error creating topic:", error);
    return NextResponse.error(new Error("Failed to create topic"));
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const Questions = await Question.find();

    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://quiz-app-blush-ten.vercel.app"
    );

    return NextResponse.json({ Questions });
  } catch (error) {
    console.error("Error loading topics:", error);
    return NextResponse.error(new Error("Failed to load topics"));
  }
}
