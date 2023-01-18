process.stdout.write("Por favor ingresa un arreglo de numeros");

process.stdin.on("data",(data)=>{
    if(data.toString().trim().length){
        const datoString=data.toString().trim();
        const arreglo = JSON.parse(datoString);
        const suma = arreglo.reduce((acc,i)=>acc+parseInt(i),0); //parseInt("a") =>NaN
        if(isNaN(suma)){
            console.log({
                error:"dato invalido"
            });
        } else{
            console.log({
                datos:{
                    numeros:arreglo,
                    promedio:suma/arreglo.length,
                    maximo:Math.max(...arreglo),
                    minimo:Math.min(...arreglo),
                    ejecutable: process.cwd(),
                    pid:process.pid
                }
            })
        }
    } else {
        console.log({
            error:"Dato vacio"
        })
    }
    process.exit();
});