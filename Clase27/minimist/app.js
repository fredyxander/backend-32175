import parseArgs from "minimist";

const options = {default:{p:4000, m:"prod"}, alias:{p:"port"}}

const argumentos = parseArgs(process.argv.slice(2), options);
console.log(argumentos)

const puerto = argumentos.port;
console.log(puerto)