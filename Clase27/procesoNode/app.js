// console.log(process.argv);
//[1,2,3,4] => slice(2) => [3,4]
const argumentos = process.argv.slice(2);
console.log(argumentos);

const idioma = argumentos[0];
console.log(idioma)
if(idioma === "es"){
    console.log("Aplicacion ejecutandose en espanol")
} else {
    console.log("Aplicacion ejecutandose en ingles")
}