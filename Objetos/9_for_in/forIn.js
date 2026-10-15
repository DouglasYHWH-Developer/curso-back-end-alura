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

for(let chave in estudante ){
    const tipo = typeof estudante[chave];
    if(tipo !== 'object' && tipo !== 'function'){
        const texto = `a chave ${chave} tem o valor ${estudante[chave]} ${tipo}`;
        console.log(texto);
    }
    
}