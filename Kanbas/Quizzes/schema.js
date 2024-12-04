import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: String,
    course: String,
    description: String,
    dueDate: Date,
    availableFrom: Date,
    points: Number,
    numQuestions: Number,
  },
  { collection: "quizzes" }
);

export default schema;