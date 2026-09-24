const notas = [10 , 6.5, 8 ,7.5]

let soma = 0;

for(let nota of notas){
    soma += nota
}

const media = soma / notas.length;

console.log(`A soma é: ${soma}`)
console.log(`A media é: ${media}`)

const precos = [5.5, 6.2, 14, 19.5];

let desconto = 0.90;

for (let preco of precos) {
 preco = preco * desconto;
 
}

console.log(precos)