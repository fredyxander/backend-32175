import * as dotenv from "dotenv";

const envFile = process.env.NODE_ENV === "development" ? ".env.development" : ".env.production";

dotenv.config(
    {
        path:envFile
    }
); //asignar las variables del archivo .env a process.env;

export const envConfig = {
    MODO: process.env.MODO || "dev",
    PORT: process.env.PORT || 8080,
    BASE_DE_DATOS: process.env.BASE_DE_DATOS || "https://pokeapi.co/api/v2/pokemon",
    IDIOMA: process.env.IDIOMA || "english"
};