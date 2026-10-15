const estudante = {
    nome: 'Jose Silva',
    idade: 32,
    cpf: '11255589615',
    turma: 'JavaScript'
}

//console.log(estudante.nome); // Jose Silva
//

function exibeInfoEstudante(objEstudante, infoEstudante){
    return objEstudante[infoEstudante]
}

console.log(estudante['nome']); // Jose Silva
console.log(exibeInfoEstudante(estudante, 'nome'))
console.log(exibeInfoEstudante(estudante, 'cpf'))

console.log(estudante.pet)
console.log(estudante['pet'])