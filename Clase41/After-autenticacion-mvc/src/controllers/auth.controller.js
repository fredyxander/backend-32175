import passport from "passport";
import { authPassport } from "../auth/passport.js";

authPassport(passport);

class AuthController{

    static postSignupPassport = passport.authenticate("signupStrategy",{
        failureRedirect:"/auth/signupError",
        failureMessage:true
    });

    static postSignup(req,res){
        res.send("usuario registrado y autenticado");
    };

    static signupError(req,res){
        try {
            const erroMessage = req.session.messages[0] || '';
            req.session.messages = [];
            res.json({error:erroMessage});
        } catch (error) {
            res.json({message:error})
        }
    };

    static logout(req,res){
        req.logOut(err=>{
            if(err) return res.status(400).json({error:"No se pudo cerrar la sesion"});
            req.session.destroy(err=>{
                if(err) return res.status(400).json({error:"Error al cerrar la sesion"});
                res.status(200).json({message:"sesion finalizada"})
            });
        });
    }
}

export {AuthController};


// authRouter.post("/signup", passport.authenticate("signupStrategy",{
//     failureRedirect:"/api/auth/signupError",
//     failureMessage:true
// }), (req,res)=>{
//     res.send("usuario registrado y autenticado")
// });

// authRouter.get("/signupError",(req,res)=>{
//     const erroMessage = req.session.messages[0] || '';
//     req.session.messages = [];
//     res.json({error:erroMessage})
// });