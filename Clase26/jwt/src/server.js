import express from "express";
import jwt from "jsonwebtoken";

const app = express();

const PORT = 8080;
app.listen(PORT,()=>console.log(`Server listening on port ${8080}`));


//rutas
app.get("/login",(req,res)=>{
    const userLogin = {email:"pepe@gmail.com", password:"1234"};
    //validacion de las credenciales.
    //si existe el usuario, generar el token
    const userDB = {email:"pepe@gmail.com", name:"pepe", lastname:"morales", role:"admin"};
    //generar el token
    jwt.sign(userDB,"claveSecretaToken",(err,token)=>{
        if(err) return res.json({message:"error en la autenticacion"});
        res.json({access_token:token})
    })
});

const isValidToken = (req,res,next)=>{
    //acceder al header de la peticion
    const headerToken = req.headers.authorization;
    console.log("headerToken",headerToken);
    if(headerToken){
        //Bearer token -> split(" ") -> ["Bearer", "token"];
        const userToken = headerToken.split(" ")[1];
        console.log(userToken);
        //validacion del token
        jwt.verify(userToken,"claveSecretaToken",(err,decodeToken)=>{
            //decodeToken={email:...}
            if(err) res.send("token no valido");
            req.user = decodeToken;
            next();
        })
    } else {
        res.send("Token no valido")
    }
}

//ruta privada
app.get("/perfil",isValidToken,(req,res)=>{
    res.send("pagina de perfil")
});