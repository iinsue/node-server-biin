import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  todo: { type: String, required: true },
  todoType: { type: String, required: true, default: "TODO" },
});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
