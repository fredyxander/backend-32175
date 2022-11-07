const fs = require("fs");

// //leer un archivo
// const contenido =fs.readFileSync("./usuarios.txt","utf-8");
// console.log(contenido)

// const contenidoMascotas = fs.readFileSync("./mascotas.json","utf-8");
// console.log(JSON.parse(contenidoMascotas));

// //escribir un archivo
// fs.writeFileSync("./usuarios.txt", "este es mi primer contenido");
// const persona = {
//     nombre:"maria",
//     edad:20
// }
// fs.writeFileSync("./usuarios.txt", JSON.stringify(persona, null, 2));

// //eliminar archivo
// fs.unlinkSync("./mascotas.json");

// fs.appendFileSync("./usuarios.txt","otra linea de texto")

try {
    fs.readFileSync("./productos.json","utf-8");
} catch (error) {
    console.log("el archivo no existe")
    fs.writeFileSync("./productos.json","este es el contido que quiero guardar")
}