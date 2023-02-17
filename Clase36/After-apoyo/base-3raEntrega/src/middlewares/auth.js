export const checkUserLoggued = (req,res,next)=>{
    //validamos si el usuario esta autenticado
    if(req.user){
        next()
    } else {
        res.status(401).json({error:"Por favor inicia sesion"})
    }
}