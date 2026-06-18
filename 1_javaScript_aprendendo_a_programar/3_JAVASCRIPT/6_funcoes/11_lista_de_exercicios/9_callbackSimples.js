//  9. Callback simples
//  Crie uma função executarAcao(acao) que recebe uma função como parâmetro e a executa. 
//  Teste passando uma função que imprime "Executando ação!".

function executarAcao(acao){
    return acao();
}

function executandoAcao(){
    console.log('Executando a ação');
}

executarAcao(executandoAcao);

// Solução do professsor

function executarAcao1(acao){
    acao();
}

executarAcao1( function(){
    console.log('Executando a ação1');    
})

