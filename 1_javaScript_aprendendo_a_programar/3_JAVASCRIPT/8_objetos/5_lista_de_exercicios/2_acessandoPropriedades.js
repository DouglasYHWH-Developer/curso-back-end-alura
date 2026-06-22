//  2. Acessando propriedades
//  Acesse e exiba o valor da propriedade "nome" no console.

const pessoa = {
    nome: 'Douglas',
    idade: 32,
    profissao: 'desenvolvedor'
}

// const nome = pessoa.nome;
const nome = pessoa['nome'];
console.log(nome);
// ou direto pelo console
 console.log(pessoa.nome)