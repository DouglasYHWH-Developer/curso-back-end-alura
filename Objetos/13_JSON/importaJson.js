// import estudante from './estudante.json'; é mais moderna
const estudante = require('./estudante.json') // forma nativa

//console.log(estudante);
//console.log(typeof estudante);

const chaves = Object.keys(estudante)
const chavesV = Object.values(estudante)
console.log(chaves)
console.log(chavesV)