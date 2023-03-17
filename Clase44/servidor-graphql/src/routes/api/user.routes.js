import express from "express";
import { UserController } from "../../controllers/user.controller.js";

const router = express.Router();

router.get("/dto", UserController.getUsersDto);
router.get("/", UserController.getUsers);
router.post("/", UserController.saveUser);
router.get("/:id", UserController.getUser);
router.delete("/:id", UserController.deleteUser);

export {router as userRouter};