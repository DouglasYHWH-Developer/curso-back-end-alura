const pessoa = {
    nome: 'Ana',
    idade: 26,
    temCNH: true
}

pessoa.sobrenome = 'Paula'; // forma de adicionar uma propriedade ao objeto

//console.log('Nome: ', pessoa.nome);
//console.log('Sobrenome: ', pessoa.sobrenome);

const livro = {
    titulo: 'O Hobbit',
    paginas: 310
}

livro.publicado = true;
livro.idiomas = [
    'Ingles', 
    'Portugues', 
    'Espeanhol'
];
// formas de acessar as propriedades com objeto.propriedade-livro.nome
livro.idiomas.push('Mandarim');
livro.idiomas.push('Francês');

console.log('Livro antes:', livro)

delete livro.paginas;

console.log('Livro depois:', livro)

// outra forma de acessar propriedades
livro['autor'];
console.log('Autor do livro ', livro['autor'])


const autor = {
    nome: 'J. R. R. Tolkien',
    nacionalidade: 'Britanico',
    idade: 98,
    livros: [livro]
}

console.log('Autor', autor);

livro.autor = autor;

console.log(livro);

// agora pra acessar as propriedades de autor dentro do objeto livro:

livro.autor.nome;
livro.autor.sobrenome;