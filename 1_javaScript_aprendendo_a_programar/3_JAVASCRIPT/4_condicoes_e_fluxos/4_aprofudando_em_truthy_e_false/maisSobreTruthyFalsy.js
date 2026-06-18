/*
        Aprofundando em truthy e falsy

    No JavaScript, todas as expressões são avaliadas como true ou false em contextos condicionais 
    (como em estruturas if e loops). Porém, o JavaScript é flexível e tenta "adivinhar" o que você 
    quer dizer, convertendo automaticamente valores que não são booleanos. Aqui surgem os conceitos 
    de truthy e falsy:

    Truthy: valores que, embora não sejam exatamente true, são interpretados como verdadeiros.

    Falsy: valores que, embora não sejam exatamente false, são interpretados como falsos.

    Quais valores são falsy?
    Existem valores específicos no JavaScript que sempre são considerados falsos (falsy). Esses valores são:

    false

    0 (o número zero)

    "" (string vazia)

    null

    undefined

    NaN (Not a Number)

    Qualquer valor que não esteja nessa lista é automaticamente considerado truthy.

    Exemplos práticos
*/


//    Avaliação de valores falsy:


if (0) {
    console.log('Verdadeiro');
} else {
    console.log('Falso'); // Resultado: Falso 
}

if ("") {
    console.log('Verdadeiro');
} else {
    console.log('Falso'); // Resultado: Falso 
}

if (undefined) {
    console.log('Verdadeiro');
} else {
    console.log('Falso'); // Resultado: Falso 
}

//Avaliação de valores truthy:

if ("Olá") {
    console.log('Verdadeiro'); // Resultado: Verdadeiro 
}

if (42) {
    console.log('Verdadeiro'); // Resultado: Verdadeiro 
}

if ({}) {
    console.log('Verdadeiro'); // Resultado: Verdadeiro 
}

//Por que o JavaScript faz isso?

//A ideia por trás dessa funcionalidade é permitir que você escreva código mais simples e conciso. 
// Por exemplo, ao verificar se uma string está vazia ou não, você pode simplesmente fazer:

let nome = "";

if (nome) {
    console.log('Nome informado!');
} else {
    console.log('Nome não informado!'); // Resultado: Nome não informado! 
}

//Aqui, você não precisa escrever explicitamente if (nome !== ""). O JavaScript já entende o que você quer

//Cuidados ao usar Truthy e Falsy
//Embora o conceito seja prático, ele também pode causar confusões se você não tomar cuidado. 
//Por exemplo, se você verificar diretamente um valor numérico, lembre-se que o 0 é falsy:

let quantidade = 0; 

if (quantidade) {
    console.log('Há itens!');
} else {
    console.log('Sem itens!'); // Resultado: Sem itens! 
}

//Mas talvez você quisesse tratar o valor zero como um caso válido, representando "zero itens". 
// Nesse caso, você precisa fazer uma verificação explícita:


if (quantidade !== undefined && quantidade !== null) {
    console.log('Quantidade informada corretamente!'); // Resultado: Quantidade informada corretamente! 
} else {
    console.log('Quantidade inválida!');
}

//    Resumo rápido
//    Falsy: false, 0, "", null, undefined, NaN
//
//    Truthy: Todos os outros valores
//
//    Use com atenção para evitar bugs inesperados.
//
//    Dominar esses conceitos ajudará você a escrever código mais eficiente e a 
// entender melhor o comportamento do JavaScript em situações condicionais.



let listaDeTarefas = [];

if (listaDeTarefas) {
    console.log("A lista existe e está pronta para uso!"); // imprimi aqui
} else {
    console.log("A lista não existe!");
}

//Por que o JavaScript faz isso?
//Pense em um array (ou um objeto {}) como uma caixa. Mesmo que a caixa esteja vazia por 
//dentro (sem nenhum dado), a caixa em si existe no mundo físico (ou, no caso, na memória do computador). 
//O JavaScript olha para a variável e diz: "Opa, tem uma estrutura de array aqui, então é verdadeiro!"


//Como lidamos com isso na vida real?
//Como acabamos de ver, fazer if (listaDeTarefas) não ajuda muito se quisermos saber se há 
//itens para exibir na tela. O truque dos desenvolvedores é olhar para o tamanho do array usando o .length.

//Veja a diferença:

// Aqui o length é 0. Lembra quem é falsy? O número 0!
if (listaDeTarefas.length) {
    console.log("Temos tarefas para fazer!");
} else {
    console.log("Ufa, dia de folga! A lista está vazia."); // Isso será impresso!
}