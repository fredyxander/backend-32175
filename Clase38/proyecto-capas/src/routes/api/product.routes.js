import express from "express";

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("productos")
});

export {router as productRouter};