/*
    Para saber mais: outros métodos de objeto
Discutir no fórum
Para aprofundar seus conhecimentos, que tal conhecer o funcionamento dos objetos em JavaScript? 
Melhorar nosso entendimento a respeito da manipulação de objetos em JavaScript envolve explorar 
métodos disponibilizados tanto pelo Node.js quanto pelos navegadores.

Um método é uma função que é executada no contexto de um objeto e está associada a ele. Em um objeto 
literal, métodos são definidos da mesma forma que as funções normais são definidas, tendo parâmetros, 
retorno e um bloco definido, com exceção do caso das arrow functions e do uso do this.

Vamos revisitar e expandir nossas noções sobre alguns métodos de objeto do JavaScript, para uma compreensão mais abrangente:
*/

//Object.keys() e Object.values(): são usados para extrair 
// informações específicas de um objeto. Esses métodos fornecem, 
// respectivamente, as chaves e os valores presentes em um objeto. 
// São úteis para iterar ou fazer operações específicas em conjuntos de dados de um objeto.

const meuObjeto = { a: 1, b: 2, c: 3 };
const chaves = Object.keys(meuObjeto);
const valores = Object.values(meuObjeto);

console.log(chaves); // Saída: ['a', 'b', 'c']
console.log(valores); // Saída: [1, 2, 3]

// Object.entries(): este método retorna um array de arrays que representam 
// pares chave-valor. É útil em situações que demandam iterações 
// mais complexas ou manipulação mais minuciosa dos dados.

const meuObjeto1 = { a: 1, b: 2, c: 3 };
const entradas = Object.entries(meuObjeto1);

console.log(entradas);
// Saída: [['a', 1], ['b', 2], ['c', 3]]

// Object.assign(): usado para fusão e cópia de objetos. 
// Este método permite combinar propriedades de diferentes objetos em um único objeto.

const objetoOriginal = { a: 1, b: 2 };
const objetoParaCopiar = { b: 3, c: 4 };

const objetoFusionado = Object.assign({}, objetoOriginal, objetoParaCopiar);

console.log(objetoFusionado);
// Saída: { a: 1, b: 3, c: 4 }

/*
    Para saber mais: propriedade enumeráveis

    Em JavaScript, objetos são estruturas que armazenam dados em pares chave-valor. 
    Cada propriedade em um objeto possui atributos que determinam seu comportamento 
    e acessibilidade. Uma característica importante dessas propriedades é a enumeração, 
    que define se uma propriedade será incluída em operações como iteração.

    Propriedades enumeráveis
    Propriedades enumeráveis são aquelas que são consideradas durante operações de iteração, 
    como for … in e métodos como Object.keys(). Por padrão, todas as propriedades criadas 
    diretamente em um objeto são enumeráveis, o que significa que elas são visíveis durante a iteração.
*/

const meuObjeto2 = {
  nome: "ChatGPT",
  linguagem: "JavaScript",
  versao: "3.5"
};

for (let chave in meuObjeto2) {
  console.log(chave); // Saída: nome, linguagem, versao
}


// Propriedades não enumeráveis

//Propriedades não enumeráveis não são consideradas durante operações de iteração. 
// Essas propriedades são geralmente associadas a métodos internos de objetos ou 
// configurações específicas que não precisam ser expostas durante iterações comuns.

const meuObjeto3 = {};

Object.defineProperty(meuObjeto3, 'propriedadeNaoEnumeravel', {
  value: 42,
  enumerable: false
});

for (let chave in meuObjeto3) {
  console.log(chave); // Saída: (nenhuma, pois não há propriedades enumeráveis)
}

/*
    Manipulando enumerabilidade
Para controlar a enumerabilidade de uma propriedade, a função Object.defineProperty() 
pode ser utilizada. O segundo argumento desta função permite a configuração 
de diversas propriedades, incluindo a enumerabilidade.
*/

const meuObjeto4 = {};

Object.defineProperty(meuObjeto4, 'propriedadeNaoEnumeravel', {
  value: 42,
  enumerable: false
});

console.log(Object.keys(meuObjeto4)); // Saída: []

const meuObjeto5 = {};

// Criando uma propriedade não enumerável
Object.defineProperty(meuObjeto5, 'propriedadeNaoEnumeravel', {
  value: 42,
  enumerable: true // Definindo a enumerabilidade como true
});

// Mesmo com enumerable:true, Object.keys ainda pode ser utilizado
console.log(Object.keys(meuObjeto5)); // Saída: ['propriedadeNaoEnumeravel']

// Exibindo o valor da propriedade
console.log(meuObjeto5.propriedadeNaoEnumeravel); // Saída: 42

/*
    Neste exemplo, a propriedade propriedadeNaoEnumeravel é configurada 
    com enumerable: true, o que significa que a propriedade será listada 
    quando utilizamos Object.keys(). Mesmo sendo enumerável, o valor da 
    propriedade ainda pode ser acessado normalmente.
*/