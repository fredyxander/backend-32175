import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));

const arrayUsers = [
    {nombre:"Juan", edad:20},
    {nombre:"Laura", edad:30},
    {nombre:"Ana", edad:25},
];

//routes
app.get("/users",(req,res)=>{
    res.status(200).json({data:arrayUsers});
});