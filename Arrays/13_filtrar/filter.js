//       Filtrando por nota

// Depois de calcular a média dos alunos, precisamo 
// mostrar quem está reprovado entre os seguintes nomes

const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 7.5, 8];


const alunosReprovados = alunos.filter((aluno, i) =>{ //return media[i] < 7;

    if(medias[i] < 7){
        return aluno
    }
})

console.log(alunosReprovados)