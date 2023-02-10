import express from "express";
import { twilioClient, twilioPhone, adminPhone } from "./messages/sms.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));


app.post("/envio-sms",async(req,res)=>{
    try {
        await twilioClient.messages.create({
            from:twilioPhone,
            to: adminPhone,
            body:"Se ha registrado un nuevo usuario en la plataforma"
        })
        res.send('El mensaje sms con twilio se envio correctamente');
    } catch (error) {
        res.send(`Hubo un error ${error}`)
    }
});