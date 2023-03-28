const urlApi="https://rickandmortyapi.com/api/character/2";

const response = await fetch(urlApi);
// console.log(response);
const jsonResponse = await response.json();
console.log(jsonResponse);