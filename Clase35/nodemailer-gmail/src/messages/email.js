import nodemailer from "nodemailer";

const adminEmail = "add admin email";
const adminPassword = "add app gmail password";

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: adminEmail,
        pass: adminPassword
    },
    //importante para la configuracion de seguridad del correo.
    secure:false,
    tls:{
        rejectUnauthorized:false
    }
});

export {transporter,adminEmail}