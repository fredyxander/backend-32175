import express from "express";
import { userRouter } from "./api/user.routes.js";


const router = express.Router();

// router.get("/",(req,res)=>{
//     res.render("html-onwire")
// });
router.use("/users", userRouter);
// router.use("/products", productRouter);

export {router as apiRouter};