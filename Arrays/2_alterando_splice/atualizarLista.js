// Atualizando listas

//Crie uma lista de chamada com os estudantes

// Porém, Ana e Caio, mudaram de escola e o Rodrigo entrou nessa sala. Atualize a lista.

const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjore', 'Leo']


// o primeiro param. é de onde ele começa a alteração, 
// o segundo param. é quantos indicies ele vai excluir
//o terceiro param. é incluido no indice do primeiro param.
listaEstudantes.splice(1, 2, 'Rodrigo')

console.log(listaEstudantes)