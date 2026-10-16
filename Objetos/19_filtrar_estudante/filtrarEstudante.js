const estudantes = require('../13_JSON/estudantes.json');

function filtraPorPropriedade(lista, propriedade){
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade)
    })
}

const listaEnderecosIncompletos = filtraPorPropriedade(estudantes, 'cep');

console.log(listaEnderecosIncompletos)

/*
    O nome desse método é quase uma frase literal em inglês: 
    Has (tem) Own (própria) Property (propriedade).

Ele atua como um inspetor. O trabalho dele é olhar para um objeto e 
responder com true (verdadeiro) ou false (falso) para uma pergunta simples: "A chave X existe aqui dentro?"
*/