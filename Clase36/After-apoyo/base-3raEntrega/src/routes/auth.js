import express from "express";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import {UserModel} from "../models/user.model.js";
import bcrypt from "bcrypt";

//funcion para encriptar la contrase;a
const createHash = (password)=>{
    return bcrypt.hashSync(password,bcrypt.genSaltSync());
};

const authRouter = express.Router();

//serailizar y deserailizar el usuario que se autentica
passport.serializeUser((user,done)=>{
    return done(null, user.id)
});//con esta serializacion estamos guardando el id del usuario en la session, req.session.passport.user={id}

passport.deserializeUser((id,done)=>{
    UserModel.findById(id,(error, userFound)=>{
        return done(error, userFound)
    })
});//req.user=userFound

//estrategia de registro del usuario
passport.use("signupStrategy", new LocalStrategy(
    {
        passReqToCallback:true,
        usernameField:"email"
    },
    (req,username,password, done)=>{
        //logica de registro y autenticacion
        //1.Verfiicar si el usuario existe en la base de datos
        UserModel.findOne({email:username},(error, user)=>{
            if(error) return done(null, false, {message:`Error buscando el usuario ${error}`});
            if(user) return done(null, false, {message:"El usuario ya esta registrado"});
            //2. si el usuario no existe, registramos al usuario, y guardamos al usuario en la db
            const newUser = {
                email:username,
                password:createHash(password),
                nombre:req.body.nombre,
                direccion: req.body.direccion,
                edad: req.body.edad,
                celular:req.body.celular,
                avatar:req.body.avatar
            }
            //procedemos a guardar al usuario en la base de datos
            UserModel.create(newUser,(error, userCreated)=>{
                //userCreated es el usuario con id generado en la db
                if(error) return done(null, false, {message:`Error registrando el usuario ${error}`});
                return done(null, userCreated,{message:"Usuario registrado exitosamente"})
            })
        })
    }
));

authRouter.post("/signup", passport.authenticate("signupStrategy",{
    failureRedirect:"/api/auth/signupError",
    failureMessage:true
}), (req,res)=>{
    res.send("usuario registrado y autenticado")
});

authRouter.get("/signupError",(req,res)=>{
    const erroMessage = req.session.messages[0] || '';
    req.session.messages = [];
    res.json({error:erroMessage})
});

authRouter.post("/logout",(req,res)=>{
    req.logOut(err=>{
        if(err) return res.status(400).json({error:"No se pudo cerrar la sesion"});
        req.session.destroy(err=>{
            if(err) return res.status(400).json({error:"Error al cerrar la sesion"});
            res.status(200).json({message:"sesion finalizada"})
        });
    });
});

authRouter.get("/home",(req,res)=>{
    res.send("prueba rutas autenticacion")
});

export {authRouter};