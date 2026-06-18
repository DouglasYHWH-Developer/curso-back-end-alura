function saudacao(nome){ // nome é um parametro(tipo uma variável) da função 'saudacao'
    console.log('Olá, ', nome)
}

//saudacao();
saudacao('Douglas');
//saudacao(nome = 'Douglas Brandão');

function calcularDobro(numero){
    return numero * 2;
}

const numeroDobrado = calcularDobro(4)
console.log('O dobro de 4 é ', numeroDobrado)