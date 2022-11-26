// fetch api

const res = await fetch('https://swapi.dev/api/films/');
const resdata = await res.json();

console.log(resdata);