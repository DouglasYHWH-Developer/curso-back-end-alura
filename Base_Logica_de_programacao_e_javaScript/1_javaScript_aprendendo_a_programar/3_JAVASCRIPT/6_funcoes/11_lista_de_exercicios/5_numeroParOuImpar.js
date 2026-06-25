//  5. Número par ou ímpar
//  Crie uma função ehPar(numero) que retorna true se o número 
//  for par e false se for ímpar. Teste a função com diferentes valores.

function ehPar(num){
    if(num % 2 === 0){
        return true;
    }else{
        return false;
    }
}

let parOuImpar =  ehPar(109);
console.log(parOuImpar);