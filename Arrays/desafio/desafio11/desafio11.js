// 6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.

function somaDeArray(...numeros){
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0)
}

console.log(somaDeArray(10, 10, 10, 10))