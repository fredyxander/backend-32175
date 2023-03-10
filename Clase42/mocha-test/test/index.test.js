import { TaskClass } from "../taskClass.js";
import assert from "assert";


//hacemos las pruebas con mocha
describe("pruebas de la clase TaskClass y sus metodos",()=>{
    it("cuando cree la instancia, el listado de tareas debria estar vacio",()=>{
        const tasks = new TaskClass();
        //Luego comparamos el valor obtenido del codigo y el valor esperado.
        assert.strictEqual(tasks.list().length,0);
    });

    it("luego de agregar dos tareas, el arreglo de tareas deberia tener dos elementos",()=>{
        const tasks = new TaskClass();
        tasks.add("tarea 1");
        tasks.add("tarea 2");
        //Luego comparamos el valor obtenido del codigo y el valor esperado.
        assert.strictEqual(tasks.list().length,2);
    });
});