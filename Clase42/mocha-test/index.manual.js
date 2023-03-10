import { TaskClass } from "./taskClass.js";

const tasks = new TaskClass();

console.log(tasks);

//verificar los metodos de la clase.
console.log(tasks.list()); // expected value []

tasks.add("titulo 1");
tasks.add("titulo 2");

console.log(tasks.list()); // expected value [{},{}]