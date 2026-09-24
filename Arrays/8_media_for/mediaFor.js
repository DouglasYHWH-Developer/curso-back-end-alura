/*
    Calculando média com for

Calcular a media entre as seguintes notas usando for:
- 10, 6.5, 8, 7.5
*/



const notas = [10, 6.5, 8, 7.5];
let soma = 0;

for(let i = 0; i < notas.length; i++){
   soma += notas[i]
}

const media = soma / notas.length
console.log(' total é:', soma)
console.log(' E a média é: ', media)