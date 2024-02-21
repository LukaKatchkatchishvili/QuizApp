import mongoose, { Schema } from "mongoose";

const questionSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answers: {
    type: [String],
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
});

const Question =
  mongoose.models.Question || mongoose.model("Question", questionSchema);

module.exports = Question;
