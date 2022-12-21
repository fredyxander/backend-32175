import express from "express";
import { UserRouter } from "./routes/users.js";

const app = express();
app.listen(8080,()=>console.log("server listening"));

app.use("/api/usuarios", UserRouter);