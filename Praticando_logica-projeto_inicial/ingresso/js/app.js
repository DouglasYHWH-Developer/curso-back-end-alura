function comprar(){
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);
    
    if (tipo == 'pista') {
        comprarPista(qtd);
    } else if (tipo == 'superior') {
        comprarSuperior(qtd);
    } else if (tipo == 'inferior') {
        comprarInferior(qtd)
    }

}

function comprarPista(qtd){
    let qtdPista = document.getElementById('qtd-pista');
    if (qtd > qtdPista.textContent) {
            alert('Quantidade Inválida')
        } else {
            let total = qtdPista.textContent - qtd
            qtdPista.textContent = total
            document.getElementById('qtd').value = ''
            alert("Compra realizada com sucesso")
        }
}

function comprarSuperior(qtd){
    let qtdSuperior = document.getElementById('qtd-superior');
    if (qtd > qtdSuperior.textContent) {
            alert('Quantidade Inválida')
        } else {
            let total = qtdSuperior.textContent - qtd
            qtdSuperior.textContent = total
            document.getElementById('qtd').value = ''
            alert("Compra realizada com sucesso")
        }
}

function comprarInferior(qtd){
    let qtdInferior = document.getElementById('qtd-inferior');
    if (qtd > qtdInferior.textContent) {
            alert('Quantidade Inválida')
        } else {
            let total = qtdInferior.textContent - qtd
            qtdInferior.textContent = total
            document.getElementById('qtd').value = ''
            alert("Compra realizada com sucesso")
        }
}

