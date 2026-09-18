/*
        Procurando Em Lista
    Crie uma função que recebe como argumento, o nome de um aluno.
    Verifique se a pessoa faz parte da lista de alunos.
    Retorne a média do aluno correspondente na lista de médias.
    Caso o nome nome não esteja na lista, retorne uma mensagem que o aluno não foi encontrado.
*/


const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(aluno){
    let indice =  alunos.indexOf(aluno)
    if(!alunos.includes(aluno)){
        return"aluno não encontrado"
    }else{
        return `Nome: ${lista[0][indice]}, Média:${lista[1][indice]}`
    }
}

console.log(exibeNomeENota('Luiz'));

// solução do professor

/*
    function exibeNomeENota(aluno){
        if(lista[0].includes(aluno)){
        const indice = lista[0].indexOf(aluno);
        const mediaAluno = lista[1][indice];
        console.log(`${aluno} tem a média ${mediaAluno}`);
    }else{
        console.log('Estrutura não existe na lista');
    }


*/