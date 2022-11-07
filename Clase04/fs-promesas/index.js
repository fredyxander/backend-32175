const fs = require("fs");

// fs.promises.readFile("./products.txt","utf-8").then((contenido)=>console.log(contenido))
// .catch((error)=>console.log("el archivo no existe", error));

const trabajoConArchivos = async()=>{
    try {
        await fs.promises.writeFile("./productos.txt","nuevo contenido");
        console.log("archivo escrito de manera exitosa")
        const contenido = await fs.promises.readFile("./noexiste.doc","utf-8");
        console.log(contenido)
    } catch (error) {
        console.log("No fue posible leer contenido en este archivo")
    }
}
trabajoConArchivos();