import twilio from "twilio";

//agregar las credenciales para conectarse a twilio
const accountId = "twilio account";
const tokenTwilio="twilio token";

//twilio phone
const twilioPhone = "twilio phone";
const adminPhone = "admin phone";

//cliente de node que se conecta al servicio de twilio
const twilioClient = twilio(accountId, tokenTwilio);

export {twilioClient, twilioPhone,adminPhone};