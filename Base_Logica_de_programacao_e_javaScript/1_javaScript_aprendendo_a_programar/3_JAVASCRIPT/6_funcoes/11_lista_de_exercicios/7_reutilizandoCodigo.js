//  7. Reutilizando código
//  Reescreva o exercício da calculadora de troco utilizando uma função chamada calcularTroco.
//  A função deve receber dois parâmetros: valorCompra e valorPago.

//  A função deve:
//  calcular o valor do troco
//  retornar o valor calculado
//  Depois, utilize o retorno da função para exibir o valor do troco no console.


function calcularTroco(valorCompra, valorPago){
    let troco = valorPago - valorCompra;
    return troco;
}

let devolver = calcularTroco(33.90, 100)
console.log(`Troco R$ ${devolver}`);