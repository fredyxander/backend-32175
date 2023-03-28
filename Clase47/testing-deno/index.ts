import { assertEquals } from "https://deno.land/std@0.181.0/testing/asserts.ts";

const sumar = (num1:number,num2:number)=>{
    return num1+num2;
};

Deno.test("check sumar function",()=>{
    const resultadoSuma = sumar(10,20);
    assertEquals(resultadoSuma,30);
});

Deno.test("check 2 sumar function",()=>{
    const resultadoSuma = sumar(10,40);
    assertEquals(resultadoSuma,30);
});