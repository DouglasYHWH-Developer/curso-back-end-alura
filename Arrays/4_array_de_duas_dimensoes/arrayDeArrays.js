// Uma lista de listas

// Crie uma lista com nomes

// crime uma lista com médias

// Crie uma lista que contém as duas listas acima.
const alunos = ['Evaldo', 'Camis', 'Mari', 'Ana'];
const medias = [10, 8, 7.5, 9];
//                []  ,   []
const lista =  [alunos, medias];

console.log(
    `A aluna da posição 1 da lista é: ${lista[0][1]}.
    A not dessa aluna pe: ${lista[1][1]}`
);


const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];
 
const funcionarios = [nomes, idades, faculdade];

/*
O array funcionarios é um array de duas dimensões. Há 3 arrays dentro dele, e 
para acessar os valores em funcionarios precisamos de 2 colchetes “[ ] [ ]”. O primeiro 
colchete será usado para escolher qual dos 3 arrays dentro de funcionarios será acessado, podendo ser:

0 -> nomes
1 -> idades
2 -> faculdade
O segundo colchete será usado para acessar a informação dentro do array escolhido.

*/

/*

const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat("André", "Fernanda")
 
console.log(arrayConcat) // [ 'Maria', 'Carlos', 'Eduardo', 'Samanta', 'André', 'Fernanda' ]
console.log(arrayOriginal)// [ 'Maria', 'Carlos', 'Eduardo', 'Samanta' ]


const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])
 
console.log(arrayConcat) // [ 'Maria', 'Carlos', 'Eduardo', 'Samanta', 'André', 'Fernanda', 'Ricardo', 'Ana', 'Marcelo', 'Bia' ]
console.log(arrayOriginal) // [ 'Maria', 'Carlos', 'Eduardo', 'Samanta' ]

const arrayOriginal = [50, 60, 70]
const arrayConcat = arrayOriginal.concat([80, [90, 100]])
 
console.log(arrayConcat) // [ 50, 60, 70, 80, [ 90, 100 ] ]
console.log(arrayOriginal) // [ 50, 60, 70 ]

Vimos anteriormente que, quando recebe um array como parâmetro, concat() vai concatenar apenas os elementos. Porém, 
este método não extrai os elementos do array de forma recursiva; ou seja, não vai extrair os elementos de arrays 
que estejam “aninhados”. Dessa forma, 80 foi extraído do array com sucesso, porém 90 e 100 não, 
o método considerou [90, 100] como um único elemento.

concat() é um método útil quando não se deseja alterar o array original, e sim fazer uma cópia alterada. Caso isso não seja necessário, 
considere utilizar push() ou splice() para inserir novos elementos ou fazer alterações no array original.

*/