/*

3 - Crie um arquivo chamado metodosObjeto.js para realizar este exercício.

Utilize o objeto carro do exercício 2 com as propriedades iniciais (marca, modelo, ano, cor) e adicione:

ligado: uma propriedade do tipo booleana que indica se o carro está ligado ou não.
ligar: um método que imprime no console uma mensagem indicando que o carro está ligado.
desligar: um método que imprime no console uma mensagem indicando que o carro está desligado. 
Observação: se o carro já está ligado (ligado = true), não pode ser ligado novamente e vice-versa.
obterDetalhes: um método que retorna uma string contendo todos os detalhes do carro 
(marca, modelo, ano, cor, estado de ligado/desligado).
Em seguida, faça o seguinte:

Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes.
Chame o método obterDetalhes e imprima no console a string retornada.
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
       
}



/*
    4 - No objeto carro, adicione uma nova propriedade chamada placa representando a placa do veículo. 
    Defina a propriedade placa como não enumerável, para que ela não seja listada ao percorrer as propriedades do objeto.

Utilize um loop for...in para percorrer as propriedades do objeto carro e imprima no console apenas as propriedades enumeráveis.

Utilize o método Object.keys() para obter um array contendo apenas as chaves enumeráveis do objeto carro e imprima no console esse array.

Tente acessar a propriedade placa diretamente usando carro.placa e imprima no console o resultado obtido.
*/



Object.defineProperty(carro, 'placa',{
    value: 'PVC1224',
    enumerable: false
})

for(let chave in carro){
    console.log(chave)
}

console.log(Object.keys(carro))

console.log(carro.placa)