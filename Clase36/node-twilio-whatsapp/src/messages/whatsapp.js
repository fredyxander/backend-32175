import twilio from "twilio";

//agregar las credenciales para conectarse a twilio
const accountId = "Agregar account id";
const tokenTwilio="Agregar twilio token";

//twilio phone
const twiliowhatsappPhone = "Agregar whatsapp de twilio";
const adminWhatsappPhone = "Agregar tu whatsapp";//formato whatsapp:+indicativo y numero

//cliente de node que se conecta al servicio de twilio
const twilioClient = twilio(accountId, tokenTwilio);

export {twilioClient, twiliowhatsappPhone,adminWhatsappPhone};