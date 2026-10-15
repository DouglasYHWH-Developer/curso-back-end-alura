const estudante = {
    nome: 'Jose Silva',
    idade: 32,
    cpf: '11255589615',
    turma: 'JavaScript'
};

console.log(estudante.telefone);
//criando uma chave dentro do objto
estudante.telefone = '551155559999'
console.log(estudante.telefone);
console.log(estudante);

// alterando o valor de uma chave
estudante.nome = 'Jose Souza';
console.log(estudante);

// podemos criar um objeto vazio e ir atribuindo propriedades a ela...

const estudante2 = {};

estudante2.nome = 'Ana Maria';
console.log(estudante2)

