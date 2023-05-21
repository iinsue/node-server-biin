import mongoose from "mongoose";

const examBoardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  contents: { type: String },
  thumbnail: { type: String },
  createdAt: { type: Date, required: true, default: Date.now() },
});

const ExamBoard = mongoose.model("ExamBoard", examBoardSchema);

export default ExamBoard;
