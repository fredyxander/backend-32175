import Yargs from "yargs";

const argumentos = Yargs(process.argv.slice(2));

// console.log(argumentos.argv);

const ObjArgumentos = argumentos.default(
    {
        m:"prod",
        p:8000
    }
).alias(
    {
        m:"modo",
        p:"port"
    }
).argv;

console.log(ObjArgumentos);