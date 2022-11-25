import { options } from "./options/mysqlConfig.js";

import knex from "knex";

//crear un instancia de la base de datos.
const database = knex(options);

database.from("cars").where("id",2).update({price:6000})
.then(()=>console.log("data updated"))
.catch(console.error())
.finally(()=>database.destroy());