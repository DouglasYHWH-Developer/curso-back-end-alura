/*
    O hoisting é um comportamento do JavaScript onde as declarações de variáveis são movidas para o 
    topo do seu contexto de execução, antes do código ser executado de verdade.
*/

console.log("Minha idade atual é: ", idade); // retorna undefined

var idade = 32;

console.log("Minha idade atual depois de declarar: ", idade); // Minha idade atual é:  32

//console.log("Minha idade atual é: ", idade2); // retorna ReferenceError: Cannot access 'idade2' before initialization
// mesmo com const/let
// varável global não pode ser usada antes da declaração.

let idade2 = 32;

console.log("Minha idade atual depois de declarar: ", idade2); // Minha idade atual é:  32