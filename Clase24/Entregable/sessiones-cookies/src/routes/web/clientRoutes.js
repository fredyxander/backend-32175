import express from "express";
import { productosApi } from "../../services/apiServices.js";

const clientRouter = express.Router();

clientRouter.get("/home",(req,res)=>{
    console.log(req.session)
    if(req.session.username){
        res.render("home",{name:req.session.username})
    } else {
        res.redirect("/login")
    }
});

clientRouter.get('/productos',async(req,res)=>{
    res.render('products',{products: await productosApi.getAll()})
});

export {clientRouter};