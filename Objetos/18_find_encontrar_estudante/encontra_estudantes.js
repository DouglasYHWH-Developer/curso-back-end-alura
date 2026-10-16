const estudantes = require('../13_JSON/estudantes.json');

function buscaInformacao(lista, chave, valor){
    return lista.find((estudante) => estudante[chave].includes(valor));
}

const estudandeEncontrado = buscaInformacao(estudantes, 'nome', 'Juliet')
console.log(estudandeEncontrado)

const telefoneEstudante = buscaInformacao(estudantes, 'telefone', '9466883489')
console.log(telefoneEstudante)

// find retorna sempre a primeira ocorrência encontrada.