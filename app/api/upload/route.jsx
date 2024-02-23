import connectMongoDB from "@/libs/mongodb";
import Question from "@/models/question";
import { NextResponse } from "next/server";

export async function post(req, res) {
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

export async function get(req, res) {
  try {
    await connectMongoDB();
    const Questions = await Question.find();
    return NextResponse.json({ Questions });
  } catch (error) {
    console.error("Error loading topics:", error);
    return NextResponse.error(new Error("Failed to load topics"));
  }
}
