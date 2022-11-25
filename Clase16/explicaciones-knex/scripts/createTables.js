import { options } from "./options/mysqlConfig.js";

import knex from "knex";

//crear un instancia de la base de datos.
const database = knex(options);

//crear la tabla cars
//CREATE TABLE cars()
database.schema.createTable("cars",table=>{
    //definir los campos de la tabla.
    table.increments("id"); //id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
    table.string("name", 30); //VARCHAR(30)
    table.integer("price");
}).then(()=>console.log("table cars created"))
.catch((error)=>console.log(error))
.finally(()=>database.destroy());// cierra la sesion, para luego realizar otras oepraciones