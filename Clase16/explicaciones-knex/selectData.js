import { options } from "./options/mysqlConfig.js";

import knex from "knex";

//crear un instancia de la base de datos.
const database = knex(options);

// database.from("cars").select("*")
// .then((data)=>{
//     const results = data.map(elm=>({...elm}));
//     console.log(results);
// })
// .catch(console.error())
// .finally(()=>database.destroy());

database.from("cars").select("*").where("price",">",3000)
.then((data)=>{
    const results = data.map(elm=>({...elm}));
    console.log(results);
})
.catch(console.error())
.finally(()=>database.destroy());
