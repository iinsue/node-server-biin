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
import {
  examBoardDetail,
  examBoardEdit,
  examBoardList,
  examBoardRemove,
  examBoardWrite,
} from "../controllers/examBoardController";
import { upload, uploadImg } from "../controllers/imageController";

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

api
  .route("/exam")
  .get(examBoardList)
  .post(examBoardWrite)
  .put(examBoardEdit)
  .delete(examBoardRemove);
api.route("/exam/:id").get(examBoardDetail);
api.route("/user").get(userView);
api.post("/textRegist", textRegist);

api
  .route("/todo")
  .get(readTodo)
  .post(createTodo)
  .delete(deleteTodo)
  .put(mutateTodo);

api.route("/awsimg").post(upload.array("image"), uploadImg);

export default api;
