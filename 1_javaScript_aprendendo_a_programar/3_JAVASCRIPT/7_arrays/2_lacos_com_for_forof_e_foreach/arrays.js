const frutas = ['Uva', 'Banana', 'Kiwi', 'Maça', 'Morango'];
// uva = 0;
// morango = 4;

console.log(frutas);

// splice remove um item do array e precisa de 2 parametros. posição inicial e quantos
//frutas.splice(2, 1);
// 2 significa a posição/ o índice
// 1 significa a quantidade de items que será excluido a partir da posição do índice contato contando com o prórpio índice.
// como o índice 2 da na fruta 'kiwii' e queremos apagar 1, então kiwii será excluido;
//console.log(frutas);

for(let i = 0; i < frutas.length; i++){
    console.log(`Índice: ${i}`)
    console.log(frutas[i])
}

/*
    O forEach é um método que você pode usar diretamente em um array para percorrer cada um dos seus elementos. 
    Ele funciona recebendo uma função, que chamamos de "callback". Essa função é executada uma vez para cada item do array.

    Dentro dessa função de callback, você geralmente tem acesso a dois parâmetros:

    O valor do elemento atual: É o item do array que está sendo processado naquele momento.
    O índice do elemento atual: É a posição (número) desse item dentro do array.
    Na aula, o instrutor mostrou como usar o forEach para exibir cada fruta e seu respectivo índice:
    É um método de array que executa uma função de callback para cada elemento.
*/

console.log('Usando forEach');
frutas.forEach((valor, indice)=>{
    console.log(`Índice: ${indice} ${valor}`)
});

/*
    O for...of é outra maneira de percorrer os elementos de um array, mas ele tem um 
    foco um pouco diferente do for tradicional e do forEach.

    A principal característica do for...of é que ele foi feito para você iterar diretamente 
    sobre os valores dos elementos do array, sem se preocupar com os índices. É como se você 
    dissesse: "Para cada item dentro desta lista, faça algo"
    É uma estrutura de laço que itera sobre os valores de objetos iteráveis (como arrays).
*/

console.log('Usando for of:')
for(const fruta of frutas){
    console.log(fruta)
}