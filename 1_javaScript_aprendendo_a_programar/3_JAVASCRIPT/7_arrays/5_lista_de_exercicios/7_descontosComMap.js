//  7. Descontos com map
//  Crie um array com preços de produtos. Use map para aplicar 
// 10% de desconto em cada um e mostre os preços com desconto.

let precosProdutos = [19.99, 45.50, 120.00, 7.85, 55.20];

const produtpsComDesconto = precosProdutos.map((valor) =>{

    let desconto = valor - (valor * 0.1);
    return desconto
    
})

// const produtpsComDesconto =  precosProdutos.map( valor => valor * 0.9);

console.log(produtpsComDesconto)