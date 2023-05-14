import express from "express";
import {
  login,
  logout,
  refresh,
  signup,
  userView,
} from "../controllers/userController";
import {
  detail,
  edit,
  remove,
  textRegist,
  view,
  write,
} from "../controllers/boardController";
import {
  createTodo,
  deleteTodo,
  mutateTodo,
  readTodo,
} from "../controllers/todoController";
import { jwtMiddleware, tokenCheck } from "../middlewares";

const api = express.Router();
api.route("/login").post(login);
api.route("/logout").post(logout);
api.post("/signup", signup);
api.route("/refresh").all(jwtMiddleware).post(refresh);

api.route("/write").all(tokenCheck).post(write);
api.route("/view").get(view);
api.route("/detail/:id").all(tokenCheck).get(detail);
api.route("/edit").put(edit);
api.route("/remove").all(tokenCheck).post(remove);

api.route("/user").get(userView);
api.post("/textRegist", textRegist);

api
  .route("/todo")
  .get(readTodo)
  .post(createTodo)
  .delete(deleteTodo)
  .put(mutateTodo);

export default api;
