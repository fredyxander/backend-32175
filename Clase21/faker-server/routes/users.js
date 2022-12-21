import express from "express";
import { UserMock } from "../mocks/userMock.js";

const UserRouter = express.Router();

const usersApi = new UserMock();

//POST: /api/usuarios/popular?cant=100
UserRouter.post("/popular",(req,res)=>{
    const {cant} = req.query;
    const results = usersApi.populate(parseInt(cant));
    res.status(200).json({data: results});
});

UserRouter.get("/",(req,res)=>{
    const usuarios = usersApi.getAll();
    res.send(usuarios);
});

export {UserRouter}