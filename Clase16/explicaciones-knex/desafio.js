import { optionsSqlite } from "./options/sqliteConfig.js";
import knex from "knex";

const database = knex(optionsSqlite);

const articulosArray = [
    {nombre:"libro", codigo:"728xd", precio:103.27,stock:3},
    {nombre:"libreta", codigo:"32000", precio:45.27,stock:12},
    {nombre:"esfero", codigo:"5485", precio:2.5,stock:15},
    {nombre:"escuadra", codigo:"88892", precio:5.17,stock:5},
    {nombre:"borrador", codigo:"8721", precio:1.27,stock:10},
];

//multiples operaciones
const operaciones = async()=>{
    try {
        //validar si la tabla ya existe en la base de datos
        let articulosExists = await database.schema.hasTable("articulos");
        if(articulosExists){
            await database.schema.dropTable("articulos");
        }
        //creamos la tabla articulos
        await database.schema.createTable("articulos",table=>{
            table.increments("id");
            table.string("nombre",15).nullable(false);
            table.string("codigo", 10).nullable(false);
            table.float("precio");
            table.integer("stock");
        });
        console.log("articulos table created");

        //insertar articulos
        await database("articulos").insert(articulosArray);
        console.log("articulos added");

        //listar articulos
        const results = await database.from("articulos").select("*");
        console.log("results", results);

        //borrar articulo con id=3
        const response = await database.from("articulos").where("id",3).del();
        console.log(response);

        //actualizar producto id=2 stock=0
        await database.from("articulos").where("id",2).update({stock:0});
        const newresults = await database.from("articulos").select("*");
        console.log("newresults", newresults);

        database.destroy()//cerramos la conexion.
    } catch (error) {
        console.log("error:", error)
    }
}
operaciones();