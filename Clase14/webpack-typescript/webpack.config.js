const path = require("path");

module.exports = {
    //definir la configuracion que necesita webpack al momento de empaquetar
    //modo
    mode:"production",

    //entrypoint: archivo principal
    entry: "./src/server.ts",

    //el entorno donde se va a ejecutar el programa.
    target: "node",

    //la carpeta de salida del empaquetamiento
    output:{
        path:path.join(__dirname, "dist"),
        filename:"main.js"
    },

    //extensiones con las que vamos a a trabajar
    resolve:{
        extensions: [".ts", ".js"]
    },

    //loaders: procesar ciertos archivos.
    module:{
        rules:[
            //diferentes reglas para cada una de las extensiones que queremos transpilar y empaqeutar.
            {
                //identifica todos los .ts en el proyecto
                test: /\.tsx?/,
                use:"ts-loader",
                //excluimos ciertas carpetas
                exclude:/node_modules/
            }
        ]
    }
}