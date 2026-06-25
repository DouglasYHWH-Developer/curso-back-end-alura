/*
        9. Compra com saldo
    Crie duas variáveis: saldoDisponivel e valorCompra. Se o saldo for suficiente, 
    mostre "Compra aprovada". Caso contrário, "Saldo insuficiente".
*/

const saldoDisponivel = 55.8;
const valorCompra = 55.9;

if(saldoDisponivel >= valorCompra) {
    console.log("Compra aprovada")
}else{
    console.log("Saldo insuficiente")
}