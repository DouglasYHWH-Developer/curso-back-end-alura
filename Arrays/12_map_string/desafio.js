//Crie um novo arquivo desafio.js e crie uma array de números:
//Utilize o map() para multiplicar cada um dos valores nesse array por 10 
// e retornar um novo array com os resultados. Para isso lembre de usar uma função callback.


const arrayNums = [1, 2, 3, 4]

const multiplicados = arrayNums.map((num) => {
   return num * 10;
})

console.log(multiplicados);