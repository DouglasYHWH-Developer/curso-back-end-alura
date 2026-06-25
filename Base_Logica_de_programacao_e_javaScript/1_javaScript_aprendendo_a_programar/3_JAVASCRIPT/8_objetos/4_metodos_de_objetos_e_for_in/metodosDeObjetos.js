const pessoa = {
    nome: 'Douglas',
    idade: 32,
    pets: ['Pretinho', 'Dom'],
    nacionalidade: 'Brasileiro'
}

// for...in é utilizado para percorrer as propriedades de um objeto.
// for...in não é adequado para arrays. Ele mencionou que, para arrays, usamos for of.
// for...in: É feito para objetos, permitindo percorrer suas propriedades (chaves e valores).
for(const chave in pessoa){
    console.log('Chave: ', chave);
    console.log('Valor: ', pessoa[chave])// tbm podemos pegar os valores do das chaves/propriedades
}

console.log('---')

// exitem métodos diferentes de pegar as propriedades de um objeto

// método 1 - usando Object.keys(objeto) para pegar as chaves/propriedades
const chaves = Object.keys(pessoa);

// método 2 Object.values(objeto) para pegar os valores
const valores = Object.values(pessoa);

// método 3 - Object.entries(objeto) para pegar chave e valor
const entradas = Object.entries(pessoa);

console.log('Chaves: ', chaves)
console.log('Valores: ', valores)
console.log('ChaveValor: ', entradas)