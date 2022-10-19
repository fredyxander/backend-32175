const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

// A) Los nombres de los productos en un string separados por comas.
const nombres = productos.map((elemento)=>elemento.nombre);
console.log(nombres);
const nombreString = nombres.join("-");
console.log(nombreString);

//B) El precio total
// let acc=0;
// for(let i=0;i<productos.length;i++){
//     acc = acc + productos[i].precio;
// }

const precioTotal = productos.reduce((acc,curr)=>curr.precio + acc,0);
console.log(precioTotal);

// C) El precio promedio
const promedio = precioTotal/productos.length;
console.log(promedio.toFixed(2));

// D) El producto con menor precio
// E) El producto con mayor precio
// [2,4,6,3,5]
const productosOrdenado = productos.sort((a,b)=>a.precio>b.precio ? 1 : -1);
// console.log(productosOrdenado);
const minimo = productosOrdenado[0];
const maximo = productosOrdenado[productosOrdenado.length-1];
console.log(minimo);
console.log(maximo);