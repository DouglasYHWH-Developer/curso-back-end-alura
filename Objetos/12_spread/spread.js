const estudante = {
    nome: 'Jose Silva',
    idade: 32,
    cpf: '11255589615',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551133335555', '551199996666'],
    endereco: [
        {
            rua:'Rua Joseph Climber',
            numero: '45',
            complemento: 'apto 43',
        },
        {
            rua:'Rua Dona Clotilde',
            numero: '71',
            complemento: '',
        }
    ]   
};

// não é legal espalhar dessa forma, a informação.
function exibirTelefones(tel1, tel2){
    console.log(`ligar para ${tel1}`);
    console.log(`ligar para ${tel2}`);
}

// Também não é recomendado usar índices para acessar propriedades de um objeto de array
exibirTelefones(estudante.telefones[0], estudante.telefones[1]);
exibirTelefones(...estudante.telefones);

//  const dadosEnvio = {
//      destinatário: estudante.nome,
//      rua: estudante.endereco[0].rua,
//      numero: estudante.endereco[0].numero
//  }

// use assim:
const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.endereco[0]
}


console.log(dadosEnvio)

// 

const objetoOriginal = {
  nome: "GPT",
  linguagem: "JavaScript",
  framework: "Node.js",
  versao: "14.17.3"
};

const objetoNovo = {
  ...objetoOriginal,
  atualizacao: "15.0.0"
}

console.log(objetoNovo)