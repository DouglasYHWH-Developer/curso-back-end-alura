let lista = [];

function adicionar(){
    let nomeAmigo = document.getElementById('nome-amigo').value;

    if(nomeAmigo == ''){
        alert('Informe o nome do amigo')
        return;
    }

    if(lista.includes(nomeAmigo)){
        alert('Nome já adicionado')
        return;
    }

    let listaAmigos = document.getElementById('lista-amigos');
    lista.push(nomeAmigo);
    
    if(listaAmigos.textContent == ''){
        listaAmigos.innerHTML += `<p>${nomeAmigo}</p>`;
    }else{
        listaAmigos.innerHTML += `<p>${nomeAmigo},</p>`;
    }

    document.getElementById('nome-amigo').value = '';
}

function sortear(){

    if(lista.length < 4){
        alert('Adicione ao menos 4 pessoas');
        return
    }

    let sorteados = lista.sort(() => Math.random() - 0.5);
    let listaSorteio = document.getElementById('lista-sorteio');
    
    listaSorteio.innerHTML = ''

    for(let i = 0; i < sorteados.length; i++){
        if(i == sorteados.length - 1){
            listaSorteio.innerHTML += `<p>${lista[i]} tirou ${lista[0]}</p>`
        }else{
            listaSorteio.innerHTML += `<p>${lista[i]} tirou ${lista[i + 1]}</p>`
        }
    }  
}

function reiniciar(){
    let listaSorteio = document.getElementById('lista-sorteio');
    listaSorteio.innerHTML = '';
    let listaAmigos = document.getElementById('lista-amigos');
    listaAmigos.innerHTML = '';

    lista = [];

}