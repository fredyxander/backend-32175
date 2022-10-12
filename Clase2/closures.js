// function ahorrarEnElBanco(abono){
//     let ahorroTotal=0;
//     ahorroTotal=ahorroTotal+abono;
//     return ahorroTotal;
// }

// console.log(ahorrarEnElBanco(500));
// console.log(ahorrarEnElBanco(1000));
// console.log(ahorrarEnElBanco(2000));

function ahorrarEnElBanco(){
    let ahorroTotal=0;
    return function(abono){
        ahorroTotal=ahorroTotal+abono;
        return ahorroTotal;
    }
}

const ahorroPablo = ahorrarEnElBanco();
ahorroPablo(500);
ahorroPablo(1000);
const resultadoAhorro = ahorroPablo(2000);
console.log(resultadoAhorro);