/*
    6 - Crie um objeto livro com as seguintes propriedades: 
    título, autor, ano de publicação, gênero, idade de publicação. 
    Em seguida, exclua a propriedade avaliacao do objeto livro. 
    Depois, exiba os detalhes do livro no console, verificando se as 
    informações atualizadas, sem a avaliação, são exibidas corretamente.
*/


const livro = {
    titulo: 'Titulo do livro',
    autor: 'Nome do autor',
    anoPublicacao: 2015,
    genero: 'gênero do livro',
    idadePublicacao: 11,
    avaliacao: 5
}

delete livro.avaliacao;

console.log(livro)



