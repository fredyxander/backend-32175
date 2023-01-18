import {exec,spawn} from "child_process";

// exec("find /",(err,stdout,stderr)=>{
//     if(err) return console.log(err);
//     if(stderr) return console.log(stderr);
//     console.log("resultado del proceso hijo", stdout)
// });

const child = spawn("find",["/"]);
child.stdout.on("data", data=>{
    console.log(data.toString())
});

console.log("instruccion del proceso principal");