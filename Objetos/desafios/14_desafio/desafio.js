/*

5 - Crie um novo objeto chamado carroNovo para representar as informações 
de um novo carro. O objeto deve ter as seguintes propriedades:

marca (string): marca do novo carro.
modelo (string): modelo do novo carro.
ano (number): ano de fabricação do novo carro.
cor (string): cor do novo carro.
Utilize o operador de espalhamento (...) para criar um novo objeto chamado carroComNovosDetalhes 
que herde todas as propriedades do objeto carro e adicione as propriedades do objeto carroNovo.

Imprima no console o objeto carroComNovosDetalhes para verificar as informações do carro com os novos detalhes.

Modifique o valor de uma propriedade no objeto carroComNovosDetalhes e imprima novamente o objeto no console para confirmar as alterações.
*/

const carro = {
       marca: 'Mercedez',
       modelo: 'C300',
       ano: 2027,
       cor: 'Preto',
       ligado: false,
       ligar: function(){  
            if(this.ligado === true){ 
                return'Já está ligado';
            }else{
                this.ligado = true;
                return 'Ligando o carro '
            }
       },
       desligar: function(){
            if(this.ligado === false){
                return'já está desligado'
            }else{
                this.ligado = false;
                return 'Desligando carro '
            }
       },
       
};

const carroNovo = {
       marca: 'Mercedez',
       modelo: 'CLA45S',
       ano: 2026,
       cor: 'Cinza',
};

const carroNovoDetalhes = {...carro, ...carroNovo};

carroNovoDetalhes.cor = 'Branco';
console.log(carroNovoDetalhes);
