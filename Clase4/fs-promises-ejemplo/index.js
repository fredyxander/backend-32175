const fs = require("fs");

const ManipulacionUsuarios = async()=>{
    const contenido = await fs.promises.readFile("./usuarios.txt","utf-8");
    // console.log(contenido)
    await fs.promises.writeFile("./usuarios.txt",JSON.stringify([{nombre:"pepe",edad:20}]));
    const contenidoNuevo = await fs.promises.readFile("./usuarios.txt","utf-8");
    console.log(contenidoNuevo)
    const usuarios = JSON.parse(contenidoNuevo);
    usuarios.push({nombre:"pedro", edad:25});
    console.log(usuarios);
    await fs.promises.writeFile("./usuarios.txt",JSON.stringify(usuarios));
}
ManipulacionUsuarios();