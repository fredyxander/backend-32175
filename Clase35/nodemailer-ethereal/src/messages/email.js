import nodemailer from "nodemailer";

const testEmail = "ellis.feeney@ethereal.email";
const testPassword = "ge7hcDcYhUUQEXbzGF";

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: testEmail,
        pass: testPassword
    },
    //importante para la configuracion de seguridad del correo.
    secure:false,
    tls:{
        rejectUnauthorized:false
    }
});

export {transporter,testEmail}