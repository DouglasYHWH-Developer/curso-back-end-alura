//  7. Filtrando maiores de idade
//  Percorra o array e exiba apenas os nomes das pessoas com 18 anos ou mais.


const arrayDePessoas = [
    { nome: 'Gaara', idade: 16},
    { nome: 'Gai', idade: 27},
    { nome: 'Kakashi', idade: 25},
    { nome: 'Sarutobi', idade: 60},
]

for(let pessoa of arrayDePessoas){
    if(pessoa.idade >= 18){
        console.log(pessoa)
    }   
}