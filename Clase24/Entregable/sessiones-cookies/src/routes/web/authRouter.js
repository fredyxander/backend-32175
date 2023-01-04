import express from "express";

const authRouter = express.Router();

authRouter.get("/login",(req,res)=>{
    res.render("login")
});

authRouter.post("/login",(req,res)=>{
    const {name} = req.body;
    req.session.username = name;
    // console.log(req.session)
    res.redirect("/home")
});

authRouter.get("/logout",(req,res)=>{
    const name = req.session.username;
    req.session.destroy(err=>{
        if(err) return res.redirect("/home");
        res.render("logout",{name:name})
    })
});

export {authRouter};