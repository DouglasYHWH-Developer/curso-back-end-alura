/*
    2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual 
    (utilize new Date().getFullYear()). Crie um objeto chamado livro com as 
    seguintes propriedades: título, autor, ano de publicação e gênero.
    Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando 
    há quantos anos o livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.

    Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.

    Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.
*/

const livro = {
    titulo: 'Titulo do livro',
    autor: 'Nome do autor',
    anoPublicacao: 2015,
    genero: 'gênero do livro',
}

const anoAtual = new Date().getUTCFullYear();

livro.idadePublicacao = anoAtual - livro.anoPublicacao;

livro.mostrarDetalhe = `O livro ${livro.titulo}, escrito por ${livro.autor}, foi publicado há ${livro.idadePublicacao} anos.`;;

console.log(livro.mostrarDetalhe)