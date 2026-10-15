/*

    3 - Crie uma lista de pessoas chamada pessoas que será um array 
    contendo objetos. Cada objeto deve representar uma pessoa e conter as seguintes propriedades:

nome (string): nome da pessoa.
idade (number): idade da pessoa.
cidade (string): cidade de residência da pessoa.
Adicione pelo menos três objetos à lista pessoas com informações fictícias de diferentes pessoas.

a) Crie uma função chamada mostrarListaPessoas que aceita a lista pessoas como parâmetro e imprima no console as informações de cada pessoa na lista.

b) Adicione uma nova pessoa à lista pessoas utilizando o método push. Certifique-se de que a nova pessoa tenha informações distintas das pessoas já existentes na lista.

c) Chame a função mostrarListaPessoas para verificar se as informações, incluindo a nova pessoa, são exibidas corretamente no console.

d) Crie uma função chamada filtrarPorCidade que aceita a lista pessoas e uma string cidade como parâmetros. 
A função deve retornar uma nova lista contendo apenas as pessoas que residem na cidade fornecida.

Chame a função filtrarPorCidade passando a lista pessoas e uma cidade fictícia como argumentos e imprima no console o resultado obtido.
*/

const pessoas = [
    {
        nome: 'Kakashi',
        idade: 30,
        cidade: 'Konoha',
    },
    {
        nome: 'Asuma',
        idade: 33,
        cidade: 'Aldeia da folha',
    },
    {
        nome: 'sakura',
        idade: 20,
        cidade: 'Konoha',
    },
];

pessoas.push({nome: 'Gaara', idade: 15, cidade:'Aldeia oculta da areia'})

function mostrarListaPessoas(lista){
    return lista
}


function filtrarPorCidade(lista, cidade){
    return lista.filter((pessoa) => pessoa.cidade == cidade);
}

console.log(filtrarPorCidade(pessoas, 'Konoha'))