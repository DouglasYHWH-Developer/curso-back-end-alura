/*
        2 - Crie um array de números chamado valores. Depois,escreva um programa que 
        some todos os elementos deste array utilizando o método reduce.
*/

const valores = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]; 

const valoresSomados = valores.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
}, 0);

console.log(valoresSomados)
