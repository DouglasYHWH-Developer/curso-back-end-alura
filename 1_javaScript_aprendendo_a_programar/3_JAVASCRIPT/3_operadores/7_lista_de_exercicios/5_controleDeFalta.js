/*
        5. Controle de faltas
    Crie as variáveis totalAulas e faltas.
    Calcule o limite de faltas permitido (25% do total) e exiba no console o resultado da expressão que verifica se as faltas ultrapassam esse limite.
*/

let totalAulas = 24;
let faltas = 5;
let faltasPermifas = 0.25;

let ultrapassaLimite = (faltas / totalAulas) >= faltasPermifas;

console.log('Ultrapassou limite? ', ultrapassaLimite);