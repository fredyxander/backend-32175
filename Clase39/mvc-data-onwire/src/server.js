import express from "express";

import { options } from "./config/config.js";
import { connectMongoDB } from "./config/dbConnection.js";
import __dirname from "./utils.js";
import { apiRouter } from "./routes/index.js";

connectMongoDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(apiRouter);

const PORT = options.server.PORT;
app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));
