import {normalize, schema, denormalize} from "normalizr";

const blogpost = {
    id: "10",
    title: "My blog post",
    description: "Short blogpost description",
    content: "Hello world",
    author: {
      id: "1",
      name: "John Doe"
    },
    comments: [
        {
            id: "1",
            author: {
                id: "2",
                name: "Maria"
            },
            content: "Nice post!"
        },
        {
            id: "2",
            author: {
                id: "3",
                name: "Jose"
            },
            content: "I totally agree with you!"
        },
        {
            id: "3",
            author: {
                id: "1",
                name: "John Doe"
            },
            content: "Muchas gracias por los comentarios"
        },
    ]
};

//definir los esquemas
const authorSchema = new schema.Entity("authors");

const commentSchema = new schema.Entity("comments",
    {
        author: authorSchema
    }
);

//esquema padre o esquema global.
const postSchema = new schema.Entity("posts",
    {
        author: authorSchema,
        comments:[commentSchema]
    }
);

//NORMALIZACION
//1ro: la informacion que quiero normalizar
//2do: esquema padre o esquema global
const dataNormalizada = normalize(blogpost,postSchema);
// console.log("dataNormalizada",dataNormalizada);
// console.log("dataNormalizada", (JSON.stringify(dataNormalizada, null,"\t")).length);
// console.log("data normal", (JSON.stringify(blogpost, null,"\t")).length);

//DENORMALIZACION
const normalData = denormalize(dataNormalizada.result,postSchema,dataNormalizada.entities);
console.log("normalData",JSON.stringify(normalData, null,"\t"));