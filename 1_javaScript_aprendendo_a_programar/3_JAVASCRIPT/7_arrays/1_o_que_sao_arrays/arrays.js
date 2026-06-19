const frutas = ['Uva', 'Banana', 'Kiwi', 'Maça', 'Morango'];
// uva = 0;
// morango = 4;

// as posições dos arrays são classificadasd como índices, e esses índices começão na posição '0'.

console.log(frutas);
console.log('Total de frutas: ', frutas.length);// length trás o tamanho do array
console.log('Primeira fruta: ', frutas[0]);// acesso pelos índicies
console.log('Última fruta: ', frutas[4]);



frutas.push('Pêra'); // adiciona mais um índice no final do array.
console.log('Total de frutas: ', frutas.length)
console.log(frutas);

frutas.shift(); // remove o primeiro item do array.

console.log('Última fruta: ', frutas[frutas.length - 1]);// outra forma de pegar o último índice do array