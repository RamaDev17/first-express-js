import express from "express";
import {
  deleteUserController,
  getAllUserController,
  getDetailUserController,
  postUserController,
  updateUserController,
} from "../controller/userController.js";
import upload from "../middleware/multer.js";

const userRoutes = express.Router();

userRoutes.get("/", getAllUserController);

userRoutes.get("/:id", getDetailUserController);

userRoutes.post("/",upload.single('image'), postUserController);

userRoutes.patch("/:id", updateUserController);

userRoutes.delete("/:id", deleteUserController);

export default userRoutes;
