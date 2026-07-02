//  let titulo = document.querySelector('h1');
//  titulo.innerHTML = 'Jogo do número secreto';
//  
//  let paragrafo = document.querySelector('p');
//  paragrafo.innerHTML = 'Escolha um número entrev 1 e 10';
let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial(){
    exibirTextoTela('h1', 'Jogo do número secreto');
    exibirTextoTela('p', 'Escolha um número entrev 1 e 10');
}

function gerarNumeroAleatorio(){
    let numeroAleatorio = parseInt(Math.random() * numeroLimite + 1);
    let qtdDeElementosNaLista = listaDeNumerosSorteados.length;

    if(qtdDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroAleatorio)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroAleatorio);
        console.log(listaDeNumerosSorteados)
        return numeroAleatorio
    }
    
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        let palavaraTentativas = tentativa > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativa} ${palavaraTentativas}!!`;
        exibirTextoTela('h1', 'Acertou!!!');
        exibirTextoTela('p', mensagemTentativas)
        habilitarNovoJogo();
        
    }else if(chute > numeroSecreto){
        exibirTextoTela('p', 'Número secreto é menor');  
    }else{
        exibirTextoTela('p', 'número secreto é maior');
    }
    tentativa ++;
    limparCampo();
    reiniciar()
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function habilitarNovoJogo(){
    let habilitar = document.getElementById('reiniciar');
    habilitar.removeAttribute('disabled');
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    mensagemInicial();
    tentativa = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
