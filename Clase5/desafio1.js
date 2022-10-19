const resultado = {};
for(let i=0;i<10000;i++){
    const numeroAleatorio = parseInt(Math.random()*20+1); //3
    //si el numeroAletorio ya fue agregado dentro del objeto.
    if(resultado[numeroAleatorio]){
        resultado[numeroAleatorio]++;
    } else{
        resultado[numeroAleatorio] = 1;
    }
}
console.log(resultado);

// prueba de escrito
// resultado ={
//     3:2,
//     10:1
// }

// objeto.propiedad
// objeto['propiedad']

// numeros = {
//     10:100,
//     15:300,
//     2:700
// }