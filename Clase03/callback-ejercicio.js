const sumar = (num1, num2) => num1+num2;
const restar = (num1,num2) =>num1-num2;
const multiplicar = (num1,num2)=>num1*num2;

const operaciones = (num1,num2,operacion)=>{
    return operacion(num1,num2);
}

const resultado1 = operaciones(5,6,multiplicar);
console.log(resultado1);
