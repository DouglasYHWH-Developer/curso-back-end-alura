function sortear() {
    
    let qtd = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let numero;
    let sorteados = [];

    if(qtd > (ate - de + 1) ){
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
    }

    for (let i = 0; i < qtd; i++) {
        numero = numAleatorio(de, ate);
        while(sorteados.includes(numero)){
            numero = numAleatorio(de, ate);
        }
        sorteados.push(numero);
    }
    

    if(de >= ate){
         alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }

    exibirSorteados(sorteados)   
    habilitarBotao()
    
}

function numAleatorio(min, max) {
    let sorteio = Math.floor(Math.random() * (max - min + 1)) + min;
    return sorteio;
}

function exibirSorteados(nums){
    let labelResultado = document.getElementById('resultado');
    labelResultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${nums}</label>`;
   
}

function reiniciar(){
    let qtd = document.getElementById('quantidade');
    let de = document.getElementById('de');
    let ate = document.getElementById('ate');
    let labelResultado = document.getElementById('resultado');

    qtd.value = '';
    de.value = '';
    ate.value = '';
    labelResultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum número sorteado</label>`;
    habilitarBotao()
}

function habilitarBotao(){
    let habilitar = document.getElementById("btn-reiniciar");
    if(habilitar.classList.contains('container__botao-desabilitado')){
        habilitar.classList.remove('container__botao-desabilitado');
        habilitar.classList.add('container__botao');
        habilitar.disabled = false; // Libera o clique!
    }else{
        habilitar.classList.remove('container__botao');
        habilitar.classList.add('container__botao-desabilitado');
        habilitar.disabled = true; // Bloqueia o clique!
    }
    
}



    