import twilio from "twilio";

//agregar las credenciales para conectarse a twilio
const accountId = "ACc7410ea10f97680f0eaa0a47d4fb52a5";
const tokenTwilio="40d19e9ffc098cb787f3996cb75a0dd4";

//twilio phone
const twilioPhone = "+13606462348";
const adminPhone = "+573507850462";

//cliente de node que se conecta al servicio de twilio
const twilioClient = twilio(accountId, tokenTwilio);

export {twilioClient, twilioPhone,adminPhone};