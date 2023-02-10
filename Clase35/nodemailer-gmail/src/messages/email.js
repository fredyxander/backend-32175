import nodemailer from "nodemailer";

const adminEmail = "freddy5210@gmail.com";
const adminPassword = "bvjzmxkfpeuvzbuq";

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