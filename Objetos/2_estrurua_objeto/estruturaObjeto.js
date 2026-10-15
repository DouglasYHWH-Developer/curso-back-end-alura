// as propriedades do obj são o conjunto de chaves e valor
// ex:. chave : valor
//      nome :  'Jose Silva'

const estudante = {
    nome: 'Jose Silva',
    idade: 32,
    cpf: '11255589615',
    turma: 'JavaScript'
}

console.log(`O nome do estudante é: ${estudante.nome}`);
console.log(`Os três primeiros numeros do CPF são: ${estudante.cpf.substring(0, 3)}`);


