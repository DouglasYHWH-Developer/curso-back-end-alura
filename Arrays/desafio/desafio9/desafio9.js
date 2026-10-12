// 4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

// const array = [5, 10, 8, 9, 15, 105, 78]
// 
// const arrayPares = array.filter((par) => {
//     return par % 2 == 0;
// })
// 
// console.log(arrayPares)


function arrayPares(...array){
    return array.filter (par => par % 2 == 0)
}


console.log(arrayPares(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))