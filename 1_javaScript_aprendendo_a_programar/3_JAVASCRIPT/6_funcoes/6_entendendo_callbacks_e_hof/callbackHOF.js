// HOF -> Higher-Order Function === função q recebe outra função como parâmetro
//     -> Função de alta ordem

// HOF
function calcular(num1, num2, operacao){

    return operacao(num1, num2);
}

function soma(numero1, numero2){
    return numero1 + numero2
}

function divisao(n1, n2){
    return n1 / n2
}

const resultadoSoma = calcular(3, 8, soma);// soma seria nosso callback
console.log('Resultado da soma: ', resultadoSoma)

const resultadoDivisao = calcular(10, 2, divisao); // divisao seria nosso callback
console.log('Resultado dadivisão: ',resultadoDivisao)