/*
    3 - Crie um objeto livro com as seguintes propriedades: 
    título, autor, ano de publicação, gênero, idade de publicação. 
    Depois, utilize colchetes para acessar diretamente as propriedades 
    do objeto livro e imprimir no console os detalhes do livro.
*/


const livro = {
    titulo: 'Titulo do livro',
    autor: 'Nome do autor',
    anoPublicacao: 2015,
    genero: 'gênero do livro',
    idadePublicacao: 11
}

console.log(`O livro ${livro['titulo']}, escrito por ${livro['autor']}, foi publicado há ${livro['idadePublicacao']} anos.`)