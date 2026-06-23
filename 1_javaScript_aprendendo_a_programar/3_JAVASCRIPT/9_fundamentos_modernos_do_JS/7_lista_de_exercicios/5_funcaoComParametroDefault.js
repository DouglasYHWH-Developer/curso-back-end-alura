//  5. Spread operator com objetos
//  Crie dois objetos: um com nome e outro com idade. Combine-os em um terceiro objeto usando spread.

const pessoa = {
    nome: 'Douglas'
}

const provincia = {
    cidade: 'Belo Horizonte'
}

const unindoObj = {...pessoa, ...provincia}

console.log(unindoObj)