const resultadoBusqueda = (error, resultado)=>{
    if(error) return error;
    else return resultado;
}

const buscarArchivo = (nombre,callback)=>{
    let error = null;
    let dato = null;
    if(typeof nombre === "string"){
        dato = "archivo encontrado"
    } else{
        error=new Error("Error: nombre de archivo no válido")
    }
    return callback(error, dato)
}

const copiarArchivo = (nombreArchivo)=>{
    const respuesta = buscarArchivo(nombreArchivo, resultadoBusqueda );
    console.log(respuesta)
}

copiarArchivo("texto.txt")