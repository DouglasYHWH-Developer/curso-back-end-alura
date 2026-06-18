// Contar quantos números pares e ímpares nós temos entre 0 e 100;

let totalNumerosPares = 0;
let totalNumerosImpares = 0;


//laço de repetição

for(let i = 0; i <= 100; i++){
   if(i % 2 === 0){
    totalNumerosPares++;
    console.log("----")
    console.log('Número par:', i, '- Contagem:', totalNumerosPares)
   }else if(i % 2 !== 0){
    totalNumerosImpares++;
    console.log("----")
    console.log('Número ímpar:', i, '- Contagem:', totalNumerosImpares)
   }
}



//for(let i = 0; i <= 100; i++){
//    if(i % 2 !== 0){
//    totalNumerosImpares++
//    console.log(i, '-',totalNumerosImpares)
//   }
//}