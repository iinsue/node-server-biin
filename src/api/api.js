import express from "express";
import { signup, userView } from "../controllers/userController";
import { textRegist } from "../controllers/boardController";
import {
  createTodo,
  deleteTodo,
  readTodo,
} from "../controllers/todoController";

const api = express.Router();

api.post("/signup", signup);
api.post("/textRegist", textRegist);
api.route("/user").get(userView);
api.route("/todo").get(readTodo).post(createTodo).delete(deleteTodo);

export default api;
