import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: String,
    course: String,
  },
  { collection: "assignments" }
);

export default schema;