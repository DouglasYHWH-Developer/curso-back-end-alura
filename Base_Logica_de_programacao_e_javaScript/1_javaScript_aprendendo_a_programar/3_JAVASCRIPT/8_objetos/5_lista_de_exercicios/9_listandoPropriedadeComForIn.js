//  9. Listando propriedades com for...in
//  Use um laço for...in para listar todas as propriedades e seus 
// valores do objeto pessoal criado no exercício.

const pessoa = {
    nome: 'Douglas',
    idade: 32,
    profissao: 'desenvolvedor'
}

for(let dados in pessoa){
    console.log(dados, '-', pessoa[dados])
}
