//  9. Objeto com função construtora
//  Crie uma função construtora chamada Livro que receba titulo e 
//  autor como parâmetros e os armazene em propriedades do objeto.
//  Em seguida, crie dois objetos Livro usando essa função.

function Livro(titulo, autor){
    this.titulo = titulo;
    this.autor = autor    
}

const livro1 = new Livro('Naruto', 'Kishimoto');
const livro2 = new Livro('Bleach', 'Tite KuboS');

console.log(livro1)
console.log(livro2)