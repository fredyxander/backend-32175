const funcionReceptora = (nombre,callback)=>{
    console.log(callback)
    console.log("codigo ejecutandose");
    const nombreCompleto = nombre + "cardenas";
    callback(nombreCompleto);
}

const saludar = ()=>{
    console.log("Hola a todos!")
}

const despedirse = ()=>{
    console.log("adios!!")
}

const mostrarResultado = (valor)=>{
    console.log("resultado:", valor)
}

// funcionReceptora(saludar, despedirse);
funcionReceptora("pepe",mostrarResultado);