import mongoose from "mongoose"

//clase para controlar la conexion a la base de datos
class MyMongoClient{
    constructor(){
        this.client = mongoose;
    }

    async connect(url){
        try {
            await this.client.connect(url);
            console.log("Base de datos conectada");
        } catch (error) {
            throw new Error(`Error al conectar la base de datos ${error}`);
        }
    };

    async disconnect(){
        try {
            await this.client.connection.close();
            console.log("base de datos desconectada")
        } catch (error) {
            throw new Error(`Error al desconectarse de la base de datos ${error}`);
        }
    }
}

export {MyMongoClient}