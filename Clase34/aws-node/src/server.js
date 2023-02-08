import express from "express";
import {router as ProductRouter} from "./routes/product.route.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));


app.use("/api/productos",ProductRouter);

app.get("/",(req,res)=>{
    res.send('<h1>Aplicacion de Node en AWS</h1>')
});