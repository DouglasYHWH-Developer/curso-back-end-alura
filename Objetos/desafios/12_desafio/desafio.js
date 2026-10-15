
/*

2 - Crie um objeto chamado carro que represente as informações de um veículo. O objeto deve ter as seguintes propriedades:

marca (string): marca do carro.
modelo (string): modelo do carro.
ano (number): ano de fabricação do carro.
cor (string): cor do carro.
Utilize o loop for...in para percorrer todas as propriedades do objeto carro e 
imprima no console o nome da propriedade e o seu valor.

Adicione mais propriedades ao objeto carro para representar características adicionais do veículo.

Utilize novamente o loop for...in para percorrer todas as propriedades atualizadas 
do objeto carro e imprima no console o nome da propriedade e o seu valor.
*/

const carro = {
       marca: 'Mercedez',
       modelo: 'C300',
       ano: 2027,
       cor: 'Preto',
}

for(let chave in carro){
    console.log(`${chave}: ${carro[chave]}`)
}
console.log('- - - - - - ')
carro.automatico = true

for(let chave in carro){
    console.log(`${chave}: ${carro[chave]}`)
}

    






    




