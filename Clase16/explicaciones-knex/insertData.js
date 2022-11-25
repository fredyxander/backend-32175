import { options } from "./options/mysqlConfig.js";

import knex from "knex";

//crear un instancia de la base de datos.
const database = knex(options);

const coches = [
    {name:"Volvo", price:2300},
    {name:"Audi", price:5300},
    {name:"Toyota", price:3300},
    {name:"Mercedez", price:1300},
    {name:"porshe", price:4590},
    {name:"ford", price:4520},
];

database("cars").insert(coches)
.then(()=>console.log("data added"))
.catch(console.error())
.finally(()=>database.destroy());