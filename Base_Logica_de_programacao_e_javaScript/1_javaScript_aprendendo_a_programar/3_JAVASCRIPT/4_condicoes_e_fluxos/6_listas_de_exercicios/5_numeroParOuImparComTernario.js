/*
        5. Número par ou ímpar com ternário
    Crie uma variável numero. Use o operador ternário para mostrar se ele é par ou ímpar.
*/

let numero = 10;

numero % 2 === 0 ? console.log(numero, "é par") : console.log(numero, "é ímpar");

// 1solução do professor

let numero2 = 7; 

let resultado = (numero2 % 2 === 0) ? "Par" : "Ímpar"; 

console.log("O número é: " + resultado); 