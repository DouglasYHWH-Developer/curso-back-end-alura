const estudante = {
    nome: 'Jose Silva',
    idade: 32,
    cpf: '11255589615',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551133335555', '551199996666'],
    endereco: [{
        rua:'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43',
    }]
};


estudante.endereco.push({
    rua:'Rua Dona Clotilde',
    numero: '71',
    complemento: '',
})


const listaEnderecosComplemento = estudante.endereco.filter((endereco) => endereco.complemento);

console.log(listaEnderecosComplemento)
