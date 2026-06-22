//     5. Função com objeto
//     Crie uma função que receba um objeto pessoa contendo as propriedades nome, idade e profissao.
//     A função deve retornar uma frase montada com concatenação de strings, exibindo os dados da pessoa.

const pessoa = {
    nome: 'Doouglas',
    idade: 32,
    profissao: 'desenvolvedor'
}

function novaPessoa (pessoa){
    return `
        Olá ${pessoa['nome']}, tud bem?
        sua idade é ${pessoa['idade']} anos
        e sua profissão é: ${pessoa['profissao']}
    `
}

console.log(novaPessoa(pessoa));