//  5. Média de notas
//  Crie um array com 4 notas. Some os valores e calcule a média, 
//  exibindo uma mensagem de "Aprovado" ou "Reprovado" com base na média >= 7.

const notas = [7, 5.5, 8, 3.9, 10];

let soma = 0;


for(let i = 0; i < notas.length; i++){
    soma += notas[i]
}

let media = soma / notas.length;

if (media >= 7) {
    console.log('Aprovado');
} else {
    console.log('Reprovado')
}