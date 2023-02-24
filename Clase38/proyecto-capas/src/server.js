import express from "express";
import { connectMongoDB } from "./config/dbConnection.js";
import {router} from "./routes/index.js";

connectMongoDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api", router);

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));
