const estudante = {
    nome: 'Jose Silva',
    idade: 32,
    cpf: '11255589615',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551133335555', '551199996666'],
    media: 7.5,
    estaAprovado: function(mediaBase){
        return this.media >= mediaBase ? true : false;
    }
};


console.log(estudante.estudante(7))


