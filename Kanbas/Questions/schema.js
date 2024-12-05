import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    quiz: String,
    title: String,
    points: Number,
    questionText: String,
    questionType: {
      type: String,
      enum: ["multipleChoice", "trueFalse", "fillInTheBlank"], 
    },
    choices: [String], // For MCQs
    correctAnswers: [String], // For fill in the blank (multiple answers)
    correctAnswer: String, // For MCQs and True/False
  },
  { collection: "questions" }
);

export default schema;