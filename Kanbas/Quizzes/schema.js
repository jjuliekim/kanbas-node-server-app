import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: String,
    course: String,
    description: String,
    dueDate: Date,
    availableFrom: Date,
    availableUntil: Date,
    points: Number,
    numQuestions: Number,
    published: Boolean,
    quizType: String,
    assignmentGroup: String,
    shuffleAnswers: Boolean,
    timeLimit: Number,
    multipleAttempts: Boolean,
    attemptsAllowed: Number,
    showAnswers: String,
    accessCode: String,
    oneQuestionAtATime: Boolean,
    webcamRequired: Boolean,
    lockQuestions: Boolean,
  },
  { collection: "quizzes" }
);

export default schema;