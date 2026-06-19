//  9. Simulando carrinho de compras
//  Crie um array com os preços de produtos em um carrinho de compras.
//  Utilize um laço for ou for...of para calcular o valor total da compra.
//  
//  Em seguida, aplique um desconto de 20% sobre o total e exiba o valor final no console.


let precosProdutos = [19.99, 45.50, 120.00, 7.85, 55.20]

let soma = 0;
for(let precoProduto of precosProdutos){
    soma += precoProduto   
}

let desconto = soma * 0.8;// ou soma - (soma * 0.2)

console.log(desconto);