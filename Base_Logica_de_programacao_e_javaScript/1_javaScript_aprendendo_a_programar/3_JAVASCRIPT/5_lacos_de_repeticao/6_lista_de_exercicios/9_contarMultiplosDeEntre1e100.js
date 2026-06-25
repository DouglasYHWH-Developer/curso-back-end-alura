
// 9. Contar múltiplos de 3 entre 1 e 100
// Mostre no console quantos números entre 1 e 100 são divisíveis por 3.
let quantidade = 0;

 for(let contador = 1; contador <= 100; contador++){
    if(contador % 3 === 0){
        quantidade++
        console.log(`contagem: ${quantidade} - ${contador} é multiplo de 3 `)// esse console serve apena spara explicar o cálculo
    }
}

console.log(`total de múltiplos de 3 = ${quantidade}`)
