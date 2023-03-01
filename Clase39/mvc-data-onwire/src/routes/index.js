import express from "express";
import { userRouter } from "./api/user.routes.js";


const router = express.Router();

router.get("/",(req,res)=>{
    res.send("bienvenido")
});
router.use("/users", userRouter);
// router.use("/products", productRouter);

export {router as apiRouter};