function comprar(){
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);
    let qtdPista = document.getElementById('qtd-pista');
    let qtdSuperior = document.getElementById('qtd-superior');
    let qtdInferior = document.getElementById('qtd-inferior');
    
   
    
    
    if (tipo == 'pista') {
        if (qtd > qtdPista.textContent) {
            alert('Quantidade Inválida')
        } else {
            let total = qtdPista.textContent - qtd
            qtdPista.textContent = total
            document.getElementById('qtd').value = ''
            alert("Compra realizada com sucesso")
        }
    } 
    
    if (tipo == 'superior') {
        if (qtd > qtdSuperior.textContent) {
            alert('Quantidade Inválida')
        } else {
            let total = qtdSuperior.textContent - qtd
            qtdSuperior.textContent = total
            document.getElementById('qtd').value = ''
            alert("Compra realizada com sucesso")
        }
    } 

    if (tipo == 'inferior') {
        if (qtd > qtdInferior.textContent) {
            alert('Quantidade Inválida')
        } else {
            let total = qtdInferior.textContent - qtd
            qtdInferior.textContent = total
            document.getElementById('qtd').value = ''
            alert("Compra realizada com sucesso")
        }

    }


}