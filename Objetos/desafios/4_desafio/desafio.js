/*
    4 - Crie um objeto livro com as seguintes propriedades: 
    título, autor, ano de publicação, gênero, idade de publicação. 
    Depois, adicione uma nova propriedade chamada avaliacao. 
    Esta propriedade deve ser inicializada como null.

    No final do arquivo livro.js, adicione uma avaliação ao objeto.
    Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.
    Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.
*/


const livro = {
    titulo: 'Titulo do livro',
    autor: 'Nome do autor',
    anoPublicacao: 2015,
    genero: 'gênero do livro',
    idadePublicacao: 11
}

livro.avaliacao = null;


if(livro.avaliacao == null){
    console.log( livro.avaliacao = 5)
    console.log(`Avaliação adicionada com sucesso: ${livro.avaliacao} estrelas.`)
}else{
    console.log( `O livro ${livro.titulo}, já possui uma avaliação de ${livro.avaliacao} estrelas.`)
}


