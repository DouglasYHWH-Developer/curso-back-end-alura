function adicionar(){
    let produto = document.getElementById('produto').value;
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let {nomeProduto, precoUnitario} = formatarDadosProduto(produto);
    let subTotal = quantidade * precoUnitario;
    
//  let nomePrduto = produto.split('-')[0];
//  let precoUnitario = produto.split('R$')[1];


    adicionarProdutosNaTela(quantidade, nomeProduto, precoUnitario, subTotal);
    
}

function formatarDadosProduto(textoProduto){
    let [nomeProduto, valorProduto] = textoProduto.split('-');
    let valorProdutoFormatado = parseFloat(valorProduto.replace(' R$', ''));
    let precoUnitario = valorProdutoFormatado;

    return {nomeProduto, precoUnitario}
}

function adicionarProdutosNaTela(qtd, nomeProduto, precoUnitario, subTotal) {
    let listaDeProdutos = document.getElementById('lista-produtos');
    let campoTotal = document.getElementById('valor-total');

    listaDeProdutos.innerHTML += `
    <section class="carrinho__produtos">
        <span class="texto-azul">${qtd}x</span> ${nomeProduto}  
        <span class="texto-azul">R$${precoUnitario}</span>
    </section>`

    let totalAtual = parseFloat(campoTotal.textContent.replace('R$', '')) || 0; 
    let totalGeral = totalAtual + subTotal;
    campoTotal.textContent = `R$${totalGeral}`
}


function limpar(){
    let listaDeProdutos = document.getElementById('lista-produtos');
    let campoTotal = document.getElementById('valor-total');

    listaDeProdutos.innerHTML = '';
    campoTotal.textContent = 'R$0,00';

}
    
