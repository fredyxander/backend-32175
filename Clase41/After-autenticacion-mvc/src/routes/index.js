import express from "express";
import { userRouter } from "./api/user.routes.js";
import { authRouter } from "./api/auth.routes.js";

const router = express.Router();

// router.get("/",(req,res)=>{
//     res.render("html-onwire")
// });
router.use("/users", userRouter);
router.use("/auth",authRouter);
// router.use("/products", productRouter);

export {router as apiRouter};