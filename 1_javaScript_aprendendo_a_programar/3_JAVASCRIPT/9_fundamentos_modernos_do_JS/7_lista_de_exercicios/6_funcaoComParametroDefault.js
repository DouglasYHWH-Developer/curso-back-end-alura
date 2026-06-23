//  6. Função com parâmetro default
//  Crie uma função que recebe um nome e imprime "Olá, [nome]". 
//  Se o nome não for passado, use "visitante" como valor padrão.

function pessoa (nome = 'Visitante'){
    console.log(`Olá ${nome}`)
}

pessoa('Douglas');

