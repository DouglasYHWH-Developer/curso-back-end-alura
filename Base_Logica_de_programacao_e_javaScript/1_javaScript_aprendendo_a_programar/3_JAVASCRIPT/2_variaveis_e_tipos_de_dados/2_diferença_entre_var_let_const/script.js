// Formas diferentes de criar variáveis:

// 1- variável global
        idade = 36;

// 2 - var
        var idade = 37;
        //var (Escopo de Função): Ele só respeita as chaves{} de uma function. 
        // Se você criar um var dentro de um if, for ou while, ele "vaza" para o resto do código.

// 3 - let 
        let dataAniversario = '22 de março';
        //(Escopo de Bloco): Ele respeita qualquer par de chaves { }. 
        // Se você criar um let dentro de um if, ele morre assim que o if acaba.

// 4 - const
        const outraIdade = 40;
        //O que o const faz é impedir a reatribuição da variável.

//  Se a variável for declarada solta no documento (no nível principal do arquivo, escopo), 
// tanto var quanto let ficam globais e são enxergadas pelo código todo.

//Se for let ou const:  Elas ficam perfeitamente escondidas e protegidas 
// dentro de qualquer bloco { } (seja um if, um for, um while).