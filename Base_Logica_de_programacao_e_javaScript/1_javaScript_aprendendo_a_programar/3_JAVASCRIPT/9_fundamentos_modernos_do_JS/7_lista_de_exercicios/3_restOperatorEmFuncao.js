//  3. Rest operator em função
//  Crie uma função que receba vários números como parâmetros usando o operador rest (...).
//  Utilize um laço for para somar todos os valores recebidos e retorne o total.

function numeros(...nums){
    let soma = 0
    for(let numero of nums){
        soma += numero  
    }
    console.log (soma);
}

numeros(10,10,20,30)