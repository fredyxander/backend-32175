import * as dotenv from "dotenv";

//process.env
dotenv.config();

export const envConfig = {
    NODE_ENV: process.env.NODE_ENV || "development",
}