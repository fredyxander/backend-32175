import * as dotenv from "dotenv";
dotenv.config(); //asignar las variables del archivo .env a process.env;

export const envConfig={
    MODO: process.env.MODO || "dev",
    PORT: process.env.PORT || 8080,
    BASE_DE_DATOS: process.env.BASE_DE_DATOS || "https://pokeapi.co/api/v2/pokemon",
    IDIOMA: process.env.IDIOMA || "english"
};