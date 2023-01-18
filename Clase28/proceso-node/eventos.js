process.on("exit",()=>{
    console.log("El proceso o la aplicacion termino");
})

// process.on("uncaughtException",(error)=>{
//     console.log(`Captura del error ${error}`)
// });

for(let i=0;i<1000;i++){
    console.log(i)
    // if(i===100){
    //     process.exit();
    // }
}

funcionQueNoexiste();
