//  Juntando salas
// Haverá uma palestra sobre padrões de projetos para as salas de JS e Python.
// Juntes ambas as salas em uma única lista que exiba todos os estudantes.

const salaJS = ['Evaldo', 'Camis', 'Mari'];
const salaPy = ['Ju', 'Leo', 'Raquel'];

const salasUnificadas = salaJS.concat(salaPy);

console.log(salasUnificadas)

// o método concat não altera os arrays existente, em vezdisso retorna um novo array.