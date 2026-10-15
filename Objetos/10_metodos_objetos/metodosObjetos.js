const estudante = {
    nome: 'Jose Silva',
    idade: 32,
    cpf: '11255589615',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551133335555', '551199996666'],
  //  endereco: [
  //  //    {
  //  //        rua:'Rua Joseph Climber',
  //  //        numero: '45',
  //  //        complemento: 'apto 43',
  //  //    },
  //  //    {
  //  //        rua:'Rua Dona Clotilde',
  //  //        numero: '71',
  //  //        complemento: '',
  //  //    }
    //]   
};

const chavesObejtos = Object.keys(estudante);
//console.log(chavesObejtos);

if(!chavesObejtos.includes('enderecos')){
    console.error('é necessárioter um endereço cadastrado')
}