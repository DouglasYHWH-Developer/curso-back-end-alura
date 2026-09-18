/*
    Procurando em uma lista
Crie uma funão que recebe como argumento o nome de um aluno
Verifique se a pessoa faz arte da lista de alunos.
*/

const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(aluno){
    
    const [alunos, medias] = lista // destructuring em arrays
    let indice =  alunos.indexOf(aluno)

    if(!alunos.includes(aluno)){
        return "aluno não encontrado"
    }else{
        return `Nome: ${alunos[indice]}, Média:${medias[indice]}`
    }
}

console.log(exibeNomeENota('Juliana'));
