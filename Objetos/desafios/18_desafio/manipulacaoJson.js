/*
 4 - Crie um arquivo chamado animais.json, contendo informações fictícias
  em formato JSON. O arquivo pode representar dados de animais, incluindo pelo menos três elementos no array.

Crie um arquivo chamado manipulacaoJson.js. Dentro deste arquivo, realize as seguintes operações:

a) Leia o conteúdo do arquivo animais.json.

b) Converta o conteúdo lido para um objeto JavaScript utilizando JSON.parse().

c) Adicione um novo animal ao array de animais. O novo animal deve ter um id único, nome, tipo e habitat.

d) Modifique o habitat de um animal existente no array de animais.

e) Remova um animal do array de animais.

f) Converta o objeto modificado para uma string JSON utilizando JSON.stringify().

g) Imprima no console o objeto JavaScript resultante das operações.

*/

const animais = require('./animais.json');
 
const objAnimais = JSON.parse(JSON.stringify(animais));

objAnimais.animais.push({ id: 4, nome: 'Jacaré', tipo: 'Réptil', habitat: 'Lagoa' });

objAnimais.animais[2].habitat = 'Subtropical';

objAnimais.animais.splice(1, 1);

console.log(JSON.stringify(objAnimais));


/*
  solução do professor
  // Adiciona um novo animal ao array de animais
const novoAnimal = {
    "id": 4,
    "nome": "Elefante",
    "tipo": "Mamífero",
    "habitat": "Savana"
};
objetoAnimais.animais.push(novoAnimal);

// Modifica o habitat de um animal existente no array de animais
const animalParaModificar = objetoAnimais.animais.find(animal => animal.id === 2);
if (animalParaModificar) {
    animalParaModificar.habitat = "Oceano Antártico";
}

// Remove um animal do array de animais
const indiceAnimalRemover = objetoAnimais.animais.findIndex(animal => animal.id === 1);
if (indiceAnimalRemover !== -1) {
    objetoAnimais.animais.splice(indiceAnimalRemover, 1);
}

// Converte o objeto modificado para uma string JSON
const novaStringJsonAnimais = JSON.stringify(objetoAnimais, null, 2);

// Imprime no console o objeto JavaScript resultante das operações
console.log("Objeto JavaScript Resultante das Operações:");
console.log(objetoAnimais);
*/