import axios from "axios";

const URL ="https://jsonplaceholder.typicode.com";

const getUsers = async()=>{
    try {
        //hacer la solicitud utilizando el cliente de axios
        const response = await axios.get(`${URL}/users`);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

getUsers();