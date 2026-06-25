//  10. Lista de tarefas
//  Crie dois arrays:
//  um array com nomes de tarefas
//  outro array com valores booleanos indicando se a tarefa foi concluída (true ou false)
//  Utilize o método filter para criar um novo array contendo apenas as tarefas que não foram concluídas.
//  Exiba a lista de tarefas pendentes no console.

let nomesTarefas = ["Estudar JavaScript", "Fazer compras", "Lavar a louça", "Passear com o cachorro", "Responder e-mails"];
let tarefasAFazer = [true, false, false, true, true];

const tarefasPendentes = nomesTarefas.filter((tarefas, i) => {
    return tarefasAFazer[i] === false;
})

console.log(tarefasPendentes)


