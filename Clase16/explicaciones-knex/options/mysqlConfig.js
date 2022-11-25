//crear la configuracion para conectarnos a la base de datos
const options = {
    //a que gestor de base de datos me voy a conectar
    client: "mysql",
    //cual son los parametros para conectarme a una base de datos.
    connection:{
        host:"127.0.0.1", //host por defecto del servidor de base de datos
        user:"root",
        password:"",
        database:"mibaseprueba" //nombre de la base de datos.
    }
};

export {options};