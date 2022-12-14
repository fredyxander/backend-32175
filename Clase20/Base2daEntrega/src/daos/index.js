import { options } from "../config/databaseConfig.js";

let ContenedorDaoProductos;
let ContenedorDaoCarts;

let databaseType = "mongo";

switch(databaseType){
    case "filesystem":
        const {ProductsDAOArchivos} = await import("./products/productsArchivo.js");
        const {CartsDAOArchivos} = await import("./carts/cartsArchivos.js");
        ContenedorDaoProductos = new ProductsDAOArchivos(options.fileSystem.pathProducts);
        ContenedorDaoCarts = new CartsDAOArchivos(options.fileSystem.pathCarts);
    break;

    case "sql":
        const {ProductsDaoSQL} = await import("./products/productsSQL.js");
        const {CartsDaoSQL} = await import("./carts/cartsSQL.js");
        ContenedorDaoProductos = new ProductsDaoSQL(options.sqliteDB,"productos");
        ContenedorDaoCarts = new CartsDaoSQL(options.sqliteDB,"carritos");
    break;
};

export {ContenedorDaoProductos,ContenedorDaoCarts};