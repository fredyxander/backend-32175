import bcrypt from "bcrypt";
import {UserModel} from "../model/dbmodels/user.model.js";
import {Strategy as LocalStrategy} from "passport-local";

//función para encriptar la contraseña
const createHash = (password)=>{
    return bcrypt.hashSync(password,bcrypt.genSaltSync());
};

const authPassport = (passport)=>{

    //serializar y deserailizar el usuario que se autentica
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
                    apellido:req.body.apellido,
                    dni: req.body.dni,
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
}

export {authPassport};



// //usando version de mongoose 7.0.0
// async (req,username,password, done)=>{
//     //logica de registro y autenticacion
//     //1.Verfiicar si el usuario existe en la base de datos
//     try {
//         const user = await UserModel.findOne({email:username});
//         if(user) return done(null, false, {message:"El usuario ya esta registrado"});
//         const newUser = {
//             email:username,
//             password:createHash(password),
//             nombre:req.body.nombre,
//             apellido:req.body.apellido,
//             dni: req.body.dni,
//         };
//         const userCreated = await UserModel.create(newUser);
//         return done(null, userCreated,{message:"Usuario registrado exitosamente"});
//     } catch (error) {
//         return done(null, false, {message:`Error al autenticar al usuario ${error}`});
//     }
// }