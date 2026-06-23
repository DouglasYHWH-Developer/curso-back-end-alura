const pessoa = {
    nome: 'Natalia',
    idade: 17,
    profissao: 'Estudante'
}

//  console.log(pessoa.nome);
//  console.log(pessoa.idade);


//destructuring
const {nome, idade} = pessoa;

console.log(nome);
console.log(idade);

function saudacao({nome, idade}){
    console.log('olá', nome)
    if(idade> 18){
        console.log('Maior de idade')
    }
}

saudacao(pessoa)

const frutas = ['uva', 'morango', 'kiwi'];