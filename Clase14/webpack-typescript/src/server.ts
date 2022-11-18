import express from "express";
import { getTime } from './utils/utils';
import { Person } from "./Person";

const fredy = new Person("fredy", "chaparro");

const app = express();

app.listen(8080,()=>console.log("server running"));

app.get("/",(req,res)=>{
    res.send({
        time: getTime(),
        fullName: fredy.getFullName()
    })
});
