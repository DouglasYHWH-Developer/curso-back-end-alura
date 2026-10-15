/*
5 - Crie um objeto chamado contaBancaria com as seguintes propriedades:

titular: uma string representando o titular da conta.
saldo: um número representando o saldo da conta.
depositar: uma função que aceita um valor como parâmetro e adiciona esse valor ao saldo da conta. 
Utilize this para acessar a propriedade saldo.
sacar: uma função que aceita um valor como parâmetro e subtrai esse valor do saldo da conta. 
Utilize this para acessar a propriedade saldo. Certifique-se de verificar se há saldo suficiente antes de efetuar o saque.


*/

const contaBancaria = {
    titular: 'Marcos',
    saldo: 5000,
    depositar: function(valor){
        if(valor <= 0 ){
            console.log( 'Deposite a partir de 1 real');
        }else{
            console.log(this.saldo += valor)
        }
        
    },
    sacar: function(valor){
        if(valor > this.saldo){
            console.log('Saldo insuficiente, faça um depósito!')
        }else{
            console.log(this.saldo -= valor)
        }
    },
} 



/*
    Crie um objeto chamado cliente que representa um cliente com uma conta bancária. 
O objeto deve ter as seguintes propriedades:

nome: uma string representando o nome do cliente.
conta: uma referência à conta bancária associada a esse cliente (objeto criado anteriormente).
Crie uma função chamada mostrarSaldo que aceita o objeto cliente como parâmetro e 
imprime no console o nome do cliente e o saldo da sua conta utilizando this para acessar as propriedades do objeto.

Realize operações de depósito e saque na conta bancária do cliente usando as funções do 
objeto contaBancaria e, em seguida, chame a função para exibir as informações atualizadas no console.
*/

const cliente = {
    nome: 'Marcos',
    conta: contaBancaria,  
}

function mostrarSaldo(cliente){
    console.log( `Nome: ${cliente.nome}, Saldo: ${cliente.conta.saldo}`)
}

contaBancaria.sacar(5001);

mostrarSaldo(cliente)
