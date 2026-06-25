/*
    Legal que você já começou a jornada na programação com JavaScript! 
    Agora que você já viu como criar variáveis usando var, let e const, 
além de ter conhecido um pouco sobre hoisting e tipos primitivos, 
é hora de aprofundar e entender com clareza como funcionam as variáveis 
no JavaScript, suas peculiaridades e boas práticas.

    Como era antigamente?
    No começo do JavaScript, lá atrás nos anos 90, só existia um jeito de criar 
variáveis: usando var. Essa forma de criar variáveis era bem flexível, o que, 
no começo, parecia muito legal, mas acabou criando vários problemas.

    Com o tempo, conforme os projetos foram crescendo e se tornando mais complexos, 
os desenvolvedores começaram a perceber problemas na maneira como o var funcionava. 
    Ele tem uma coisa especial chamada escopo de função, que significa que a variável 
criada com var fica acessível em toda a função onde ela foi declarada, 
independente de onde você a definiu.

Olha só esse exemplo:
*/


function mostraNome() { 

if (true) { 

var nome = 'João'; 

} 

console.log(nome); // Aqui imprime 'João' sem problemas 

} 

 

mostraNome();

/*
    Mas será que isso é bom ou ruim? À primeira vista, pode parecer legal. Porém, 
imagine que o código fique muito longo, com muitas linhas. Você começa a perder o 
controle de onde uma variável foi declarada e pode acabar usando ou sobrescrevendo 
variáveis sem perceber. Olha outro exemplo confuso que pode surgir:
*/


var numero = 10; 

 

function alteraNumero() { 

var numero = 20; // Você queria mudar o número original, mas criou outro sem querer! 

console.log(numero); // Imprime 20 

} 

 

alteraNumero(); 

console.log(numero); // Ainda imprime 10

/*
    Tá vendo como isso pode se tornar confuso?

    Variáveis Globais: cuidado com elas!
    Um dos grandes perigos de usar o var sem cuidado era acabar criando variáveis globais.
    Essas variáveis são aquelas que podem ser acessadas e alteradas de qualquer lugar do 
seu código. No começo, pode parecer ótimo, mas rapidamente pode se tornar um pesadelo em programas grandes.

Olha só o perigo disso aqui:
*/


var mensagem = 'Olá, mundo!'; 

 

function mudaMensagem() { 

mensagem = 'Tchau, mundo!'; // Alterando uma variável global sem avisar ninguém 

} 

 

mudaMensagem(); 

console.log(mensagem); // Agora imprime 'Tchau, mundo!'

/*
    Imagina um projeto grande com muitas funções alterando variáveis globais. 
Facilmente você se perderia sem saber quem alterou o quê e quando.

    Como é hoje: let e const chegaram para salvar o dia!
    Com a chegada do ES6 em 2015, a vida dos desenvolvedores JavaScript ficou 
 bem mais fácil. Surgiram duas novas maneiras de criar variáveis: let e const. 
    Elas trouxeram mais clareza e segurança ao código.

    let: a solução para escopo de bloco
    O let resolve o problema do escopo de função do var. Com ele, o escopo passa
a ser o bloco onde ele é declarado (por exemplo, um bloco if, for, ou mesmo {}).

Olha só a diferença na prática:
*/


function mostraNome() { 

if (true) { 

let nome = 'João'; 

console.log(nome); // 'João' aparece aqui sem problemas 

} 

// console.log(nome); // Isso aqui daria erro porque nome só existe dentro do bloco do if! 

} 

 

mostraNome();

/*
    Viu como isso deixa seu código mais organizado e previsível?

    const: variáveis que não mudam
    O const surgiu para criar variáveis que não podem ter seu valor alterado
depois de declaradas. Isso é muito importante quando você quer garantir que 
algum valor nunca mude sem querer.

Veja esse exemplo:
*/


const pi = 3.1415; 

// pi = 3; // Isso aqui dá erro, porque pi é constante!

/*
    Mas atenção: quando você usa const com objetos ou arrays, você ainda consegue
alterar os valores internos deles, só não consegue redefinir o objeto ou array inteiro:
*/


const pessoa = { nome: 'Maria' }; 

pessoa.nome = 'Ana'; // Isso é permitido! 

// pessoa = {}; // Isso aqui já não é permitido

/*
    E o hoisting, hein?
    Com o var, você já sabe que existe algo chamado "hoisting": as declarações são elevadas
para o topo do escopo. Com let e const, embora também exista o hoisting, você não pode 
acessar a variável antes de sua declaração efetiva. Isso gera uma coisa chamada Temporal Dead Zone (TDZ),
ou Zona Morta Temporal, que nada mais é do que o período antes da variável ser declarada, onde acessá-la gera um erro:
*/


console.log(nome); // Erro! Não pode acessar antes de declarar 

let nome = 'João';

/*
    Melhores práticas de hoje em diante
    Hoje, você deve preferir sempre usar let e const, e deixar o var apenas como conhecimento histórico.

    Use:

    const sempre que o valor não mudar.

    let quando precisar atualizar o valor.

    Evite ao máximo variáveis globais.

    Isso vai te ajudar a escrever códigos mais limpos, previsíveis e menos sujeitos a erros no futuro. 
    Agora que você sabe disso, já pode seguir firme na jornada e explorar outras funcionalidades incríveis do JavaScript!
*/