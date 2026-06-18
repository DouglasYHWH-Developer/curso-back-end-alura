//  10. Desafio do quiz
//  Crie uma função fazerPergunta(pergunta, respostaCorreta). 
//  A função deve exibir a pergunta e depois mostrar se a resposta está 
//  certa ou errada (simule a resposta com uma variável).

function fazerPergunta(pergunta, respostaCorreta){
    let resposta = respostaCorreta;
    console.log(pergunta)
    if(resposta === respostaCorreta){
        console.log('Resposta correta')
    }else{
        console.log('Resposta errada')
    }
}

fazerPergunta('Seu nome é Doulas?', 'Lucas');