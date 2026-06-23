//  10. Método no objeto
//  Adicione à função construtora Livro uma função chamada descrever, 
//  que retorna uma frase com o título e o autor do livro, usando concatenação de strings.

function Livro(titulo, autor){
    this.titulo = titulo;
    this.autor = autor    
    this.descrever = function(){
        return`titulo: ${ this.titulo} autor: ${this.autor}`
    }
}

const livro1 = new Livro('Naruto', 'Kishimoto')

console.log(livro1.descrever())