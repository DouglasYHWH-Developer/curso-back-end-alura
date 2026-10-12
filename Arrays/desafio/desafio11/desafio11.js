// 6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.

function somaDeArray(...numeros){
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0)
}

console.log(somaDeArray(10, 10, 10, 10))


// método de encadeamento
const precos = [15, 89, 45, 120, 30, 250];

const total= precos
    .filter((preco) => preco <= 50)
    .reduce((acc, val) => acc + val,0)

console.log(total)