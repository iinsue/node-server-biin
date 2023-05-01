import express from "express";
import { signup, userView } from "../controllers/userController";
import { textRegist } from "../controllers/boardController";

const api = express.Router();

api.post("/signup", signup);
api.post("/textRegist", textRegist);
api.route("/user").get(userView);

export default api;
