const promesa = new Promise((resolve,reject)=>{
    let condition = false;
    if(condition === true){
        resolve("la promesa fue exitosa");
    } else{
        reject("hubo un error");
    }
});

// promesa.then((resultado)=>{
//     console.log(resultado);
// }).catch((error)=>console.log(error));

const getResultado = async()=>{
    try {
        const resultado = await promesa;
        console.log(resultado)
    } catch (error) {
        console.log(error);
    }
}
getResultado();