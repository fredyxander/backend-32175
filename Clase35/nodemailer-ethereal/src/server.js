import express from "express";
import { transporter, testEmail } from "./messages/email.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));

const emailTemplate = `<div>
        <h1>Bienvenido Pepe!!</h1>
        <img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/portals_3/2x1_SuperMarioHub.jpg" style="width:250px"/>
        <p>Ya puedes empezar a usar nuestros servicios</p>
        <a href="https://www.google.com/">Explorar</a>
</div>`

const mailOptions = {
    from:"server app Node",//emisor
    to:testEmail,
    subject:"Email de prueba desde node",
    html: emailTemplate,
};

app.post("/envio-mensaje",async(req,res)=>{
    try {
        await transporter.sendMail(mailOptions);
        res.send('El mensaje se envio correctamente')
    } catch (error) {
        res.send(`Hubo un error ${error}`)
    }
});