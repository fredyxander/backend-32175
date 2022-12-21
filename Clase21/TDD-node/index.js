//1. contemplar las posibles fallas que tendria el codigo, que condiciones para que la funcionalidad funcione correctamente.
//Que la operacion suma este dentro de una clase calculadora.
//que la funcion suma se pueda ejecutar sin instanciar la clase.
//que reciba exactamente dos argumentos.
//que la funcion suma, reciba solo numeros enteros.
//que al final nos entrege el resultado de la operacion.

//2.Desarrollar el codigo
class Calculadora{
    static sumar(a,b){
        if(!a || !b) return console.log("Debes enviar dos argumentos");
        if(!Number.isInteger(a)) return console.log("El primer argumento debe ser un numero entero");
        if(!Number.isInteger(b)) return console.log("El segundo argumento debe ser un numero entero")
        console.log(a+b);
    }
};

Calculadora.sumar(5,5);