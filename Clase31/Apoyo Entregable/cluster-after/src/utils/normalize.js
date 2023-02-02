import { normalize, schema } from "normalizr";
import { chatApi } from "../services/apiServices.js";

// Normalizacion-Esquemas.
// Esquema del author
const authorSchema = new schema.Entity("authors",{}, {idAttribute:"email"});

// Esquema mensaje
const messageSchema = new schema.Entity("messages", {author: authorSchema});

//creamos nuevo objeto para normalizar la informacion
// {
//     id:"chatHistory",
//     messages:[
//         {},{},{}
//     ]
// }
//Esquema global para el nuevo objeto
const chatSchema = new schema.Entity("chat", {
    messages:[messageSchema]
}, {idAttribute:"id"});

//aplicar la normalizacion
//crear una funcion que la podemos llamar para normalizar la data
const normalizarData = (data)=>{
    const normalizeData = normalize({id:"chatHistory", messages:data}, chatSchema);
    return normalizeData;
};

export const normalizarMensajes = async()=>{
    const results = await chatApi.getAll();
    const messagesNormalized = normalizarData(results);
    return messagesNormalized;
}

