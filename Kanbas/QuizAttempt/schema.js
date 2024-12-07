import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
    score: Number,
    attemptNumber: Number,
    userAnswers: [
      {
        question: { type: mongoose.Schema.Types.ObjectId, ref: "QuestionModel" },
        userAnswer: mongoose.Schema.Types.Mixed,
        correctAnswer: mongoose.Schema.Types.Mixed,
        correct: Boolean,
      },
    ],
  },
  { collection: "quizAttempts" }
);

export default schema;