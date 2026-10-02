//      Criando cópias
//  Considere a seguinte lista de notas
//  7, 7, 8, 9

// Crie uma nova lista adicionando a nota 10, sem alerar a lista original.

const notas = [7, 7, 8, 9];
const novaListaNotas = notas; // atribuição por referencia.

novaListaNotas.push(10); // atribuição por referencia.

console.log(notas); //[ 7, 7, 8, 9, 10 ] atribuição por valor
console.log(novaListaNotas); //[ 7, 7, 8, 9, 10 ]

//Existem atruição por valor e atribuição por referencia.

// Se eu quiser clonar o array por valor, eu pre iso usar um sread operator
// [...variável], 3 pontinhos. Ele espalha o array e cria uma cópia

const notas1 = [7, 7, 8, 9];
const novaListaNotas1 = [...notas, 10]; // por conta do spread o array original não será modificado

// novaListaNotas.push(10); não é preciso usar o ush aqui

console.log(notas1);
console.log(novaListaNotas1);