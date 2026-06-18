//  4. Verificar aprovação
//  Crie uma função verificarAprovacao(nota) que retorna 
// "Aprovado" se nota >= 7 ou "Reprovado" caso contrário.

function verificarAprovacao(nota){
    if(nota >= 7){
        return 'Aparovado';// o prof. usou console.log()
    }else{
        return 'Reprovado'
    }
}

let resultadoNota = verificarAprovacao(4);
console.log(resultadoNota)