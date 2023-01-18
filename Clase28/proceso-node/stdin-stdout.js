// process.stdout.write("Hola");
// process.stdout.write("Hola");

process.on("exit",()=>{
    console.log("El proceso o la aplicacion termino");
});

process.stdout.write("Como te llamas?")

process.stdin.on("data",data=>{
    console.log(`Mucho gusto ${data.toString()}`);
    process.exit();
});