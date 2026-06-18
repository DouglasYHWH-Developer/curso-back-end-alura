//  3. Cálculo de IMC
//  Crie uma função chamada calcularIMC que receba dois parâmetros: peso e altura.
//  A função deve calcular o IMC utilizando a fórmula:
//  
//  IMC = peso / (altura * altura)
//  
//  A função deve retornar o valor do IMC.
//  Depois, utilize o retorno da função para exibir no console uma mensagem com o resultado.

// minha solução
//function calcularIMC(peso, altura){
//    let imc = peso / (altura * altura)
//    return `Seu IMC é igual a ${imc}`
//}
//
//console.log(calcularIMC(60, 1.60));

//  Solução do professor

function calcularIMC(peso, altura){
    let imc = peso / (altura *altura);
    return imc;
}

let resultadoIMC = calcularIMC(60, 1.60);
console.log(`Seu IMC é igual a ${resultadoIMC}`)