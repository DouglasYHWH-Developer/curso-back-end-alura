// 5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.

function multiplosDetres(...array){
    return array.filter (numero => numero % 3 == 0 && numero > 5)
}

console.log(multiplosDetres(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 18, 27 ))