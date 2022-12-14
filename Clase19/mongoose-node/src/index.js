import mongoose from "mongoose";
import { StudentModel } from "./models/student.js";

const mongoUrl = "mongodb://127.0.0.1:27017/colegioDB";

//conetamos a la base de datos
mongoose.connect(mongoUrl);

const operacionesCRUD = async()=>{
    const newStudents = [
        { nombre: 'Pedro', apellido: 'Mei', edad: 21, dni: '31155898', curso: '1A', nota: 7 },
        { nombre: 'Ana', apellido: 'Gonzalez', edad: 32, dni: '27651878', curso: '1A', nota: 8 },
        { nombre: 'José', apellido: 'Picos', edad: 29, dni: '34554398', curso: '2A', nota: 6 },
        { nombre: 'Lucas', apellido: 'Blanco', edad: 22, dni: '30355874', curso: '3A', nota: 10 },
        { nombre: 'María', apellido: 'García', edad: 36, dni: '29575148', curso: '1A', nota: 9 },
        { nombre: 'Federico', apellido: 'Perez', edad: 41, dni: '320118321', curso: '2A', nota: 5 },
        { nombre: 'Tomas', apellido: 'Sierra', edad: 19, dni: '38654790', curso: '2B', nota: 4 },
        { nombre: 'Carlos', apellido: 'Fernández', edad: 33, dni: '26935670', curso: '3B', nota: 2 },
        { nombre: 'Fabio', apellido: 'Pieres', edad: 39, dni: '4315388', curso: '1B', nota: 9 },
        { nombre: 'Daniel', apellido: 'Gallo', edad: 25, dni: '37923460', curso: '3B', nota: 2 }
    ];

    //Agregar estudiantes en la colection estudiantes
    // let result = await StudentModel.insertMany(newStudents);
    // console.log(result);

    //read
    let results = await StudentModel.find();
    console.log(results);

    //read con proyecciones
    // const students = await StudentModel.find({},{nombre:1,edad:1,_id:0});
    // console.log(students)

    // Los estudiantes ordenados por orden alfabético según sus nombres
    // let students = await StudentModel.find({},{nombre:1,_id:0}).sort({nombre:1});
    // console.log(students);

    // El estudiante más joven.
    // const estudianteJoven = await StudentModel.find({},{nombre:1, edad:1,_id:0}).sort({edad:1}).limit(1);
    // console.log(estudianteJoven);

    //read with filters
    // Los estudiantes que pertenezcan al curso '2A'.
    // const results = await StudentModel.find({curso:"2A"});
    // console.log(results)

    // El segundo estudiante más joven.
    // const estudianteJoven = await StudentModel.find({},{nombre:1, edad:1,_id:0}).sort({edad:1}).limit(1).skip(1);
    // console.log(estudianteJoven);

    // Los estudiantes que sacaron mayo a 8.
    // const results = await StudentModel.find({nota:{$gte:8}});
    // console.log(results)

    // [
    //     {
    //         id:"curso1A",
    //         students:[{},{},{}],
    //         promedio:"23",
    //     },
    //     {id:"curso2A", [
    //         {..}
    //     ]},
    //     {id:"curso3A", [
    //         {..}
    //     ]},
    // ]

    // El promedio de notas del total de alumnos
    //Agregacion
    // const promedioEstudiantes = await StudentModel.aggregate(
    //     [
    //         //1fase. crear los grupos.
    //         {
    //             $group:{
    //                 _id:"todos",
    //                 promedio:{$avg:"$nota"}
    //             }
    //         }
    //     ]
    // );
    // console.log(promedioEstudiantes);

    //el promedio de notas del curso 1A
    // const promedioCurso1A = await StudentModel.aggregate(
    //     [
    //         //1fase. crear los grupos.
    //         {
    //             $group:{
    //                 _id:"$curso",
    //                 promedio:{$avg:"$nota"}
    //             }
    //         },
    //         //2fase. obtener el curso 1A
    //         {
    //             $match:{
    //                 "_id":"1A"
    //             }
    //         }
    //     ]
    // );
    // console.log(promedioCurso1A);

    //update
    // const result = await StudentModel.updateOne({nombre:"Lucas", apellido:"Blanco"},{$set:{dni:"20355875"}});
    // console.log(result);

    // Agregar un campo 'ingreso' a todos los documentos con el valor false
    // const result = await StudentModel.updateMany({},{$set:{ingreso:false}});
    // console.log(result);

    // const results = await StudentModel.deleteMany({curso:"2A"});
    // console.log(results)




    mongoose.connection.close();
}
operacionesCRUD();