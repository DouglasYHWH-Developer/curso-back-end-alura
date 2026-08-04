function comprar(){
    let tipo = document.getElementById('tipo-ingresso').value;
    let valorInput = document.getElementById('qtd').value;

    if(!Number.isInteger(Number(valorInput)) || valorInput <= 0){
        alert('Por favor, insira uma quantidade válida.')
        document.getElementById('qtd').value = ''
        return;
    }

    let qtd = parseInt(valorInput)
    
    if (tipo == 'pista') {
        compraIngresso(qtd, 'qtd-pista');
    } else if (tipo == 'superior') {
        compraIngresso(qtd, 'qtd-superior');
    } else if (tipo == 'inferior') {
        compraIngresso(qtd, 'qtd-inferior')
    }

}
// refatorando as funções

/*function comprarPista(qtd){
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
*/

function compraIngresso(qtd, idIgresso){
    let ingresso = document.getElementById(idIgresso);
    let qtdIngresso = parseInt(ingresso.textContent);

    if(qtd > qtdIngresso){
        alert('Quantidade Inválida')
        document.getElementById('qtd').value = ''
    }else{
        let total = qtdIngresso - qtd;
        ingresso.textContent =  total;
        document.getElementById('qtd').value = ''
        alert("Compra realizada com sucesso")

    }
}