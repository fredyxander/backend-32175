import express from "express";
import { twilioClient, twiliowhatsappPhone,adminWhatsappPhone } from "./messages/whatsapp.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));


app.post("/envio-whatsapp",async(req,res)=>{
    try {
        await twilioClient.messages.create({
            from:twiliowhatsappPhone,
            to: adminWhatsappPhone,
            body:"Se ha registrado un nuevo usuario en la plataforma"
        })
        res.send('El mensaje whatsapp con twilio se envio correctamente');
    } catch (error) {
        res.send(`Hubo un error ${error}`)
    }
});