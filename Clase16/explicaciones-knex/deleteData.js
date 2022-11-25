import { options } from "./options/mysqlConfig.js";

import knex from "knex";

//crear un instancia de la base de datos.
const database = knex(options);

database.from("cars").where("id",6).del()
.then(()=>console.log("data deleted"))
.catch(console.error())
.finally(()=>database.destroy());