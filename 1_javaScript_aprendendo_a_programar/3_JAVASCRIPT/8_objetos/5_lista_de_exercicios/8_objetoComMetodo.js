//    8. Objeto com método
//    Crie um objeto chamado usuario com as propriedades nome e saudacao.
//    A propriedade saudacao deve ser uma função que imprime no console uma mensagem fixa, 
//    utilizando o nome armazenado no objeto por acesso direto à propriedade.

const usuario = {
    nome: 'Douglas' ,
    saudacao: function (){
        return`Olá ${usuario.nome}`
    }
}

console.log(usuario.saudacao());
