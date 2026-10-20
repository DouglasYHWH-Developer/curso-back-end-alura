//Durante a aula, utilizamos duas vezes a seguinte estrutura de código:

let itemAnalise = lista[analise];
let itemAnterior = lista[analise - 1];

lista[analise] = itemAnterior
lista[analise - 1] = itemAnalise

/*
    Repetição de código quase sempre é sinal de que o trecho repetido poderia ser extraído para 
    uma função, assim pode ser reaproveitado. Vamos ver como podemos fazer isso:

    Vamos começar criando um novo arquivo, que vamos chamar de troca.js, e dentro dele a função:
*/

function troca(lista, analise) {
    let itemAnalise = lista[analise];
    let itemAnterior = lista[analise - 1];

    lista[analise] = itemAnterior
    lista[analise - 1] = itemAnalise
}

/*
    Veja que a função troca() está fazendo alterações direto na lista que está sendo passada por 
    parâmetro; assim, essa função não precisa retornar nenhum valor.

Sem esquecer de exportar a função no final do arquivo, para que possamos importá-la em 
insertionSort.js:
*/

module.exports = troca;

// Agora, no arquivo insertionSort.js, começamos importando a função troca() no topo do arquivo:
// const troca = require('./troca');

//E todo o trecho que foi passado para a função troca() pode ser substituído pela chamada da função:

function insertionSort(lista) {
 for (let atual = 0; atual < lista.length; atual++) {
   let analise = atual;
   while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
     troca(lista, analise);
     analise--
   }
 }
 console.log(lista);
}

/*
    Veja que estamos passando como parâmetro da função troca() o array que vamos trabalhar 
    (lista, o mesmo parâmetro que passamos como parâmetro da função externa, insertionSort()) 
    e a variável analise. Dessa forma, a cada laço de repetição feito com o for, de 0 ao fim 
    do array, o valor da variável analise também será atualizado, e este novo valor é passado 
    como parâmetro da função troca() também a cada laço.

    Agora você pode fazer o mesmo processo para o código do algoritmo selectionSort que criamos 
    anteriormente, e substituir o código pela chamada da função troca().
*/