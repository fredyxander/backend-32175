import got from "got";

const URL ="https://jsonplaceholder.typicode.com";

const getUsers = async()=>{
    try {
        //hacer la solicitud utilizando el cliente de got
        const response = await got.get(`${URL}/users`);
        const data = JSON.parse(response.body);//con got se debe convertir la informacion a formato json.
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getUsers();