import express from "express";
import { envConfig } from "./envConfig.js";

const app = express();

const PORT = envConfig.PORT;
app.listen(PORT, ()=>console.log(`Server listening on port ${PORT}`));