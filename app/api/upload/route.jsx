import connectMongoDB from "@/libs/mongodb";
import Question from "@/models/question";
import { NextResponse } from "next/server";
import Cors from "cors";

const cors = Cors({
  origin: "https://quiz-app-blush-ten.vercel.app",
  methods: ["POST", "GET"],
  allowedHeaders: ["Content-Type"],
});

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    // Handle CORS preflight request
    await cors(req, res);
    res.end();
    return;
  }

  // Handle other HTTP methods
  await cors(req, res);

  if (req.method === "POST") {
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
  } else if (req.method === "GET") {
    try {
      await connectMongoDB();
      const Questions = await Question.find();
      return NextResponse.json({ Questions });
    } catch (error) {
      console.error("Error loading topics:", error);
      return NextResponse.error(new Error("Failed to load topics"));
    }
  } else {
    res.status(405).end();
  }
}
