import express from "express";
import { AuthController } from "../../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", AuthController.postSignupPassport, AuthController.postSignup);
router.post("/signupError", AuthController.signupError);
router.post("/logout", AuthController.logout);

export {router as authRouter};