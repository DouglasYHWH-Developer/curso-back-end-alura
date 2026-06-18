/**
        Para saber mais: cuidados ao iterar sobre strings
    
    Em JavaScript, strings podem ser acessadas como um vetor de caracteres, utilizando índices 
    que começam do zero. Isso significa que, se uma string possui um determinado tamanho 
    (armazenado na propriedade length), os índices válidos vão de 0 até length - 1. 
    Esse comportamento é crucial para evitar a tentativa de acessar posições inexistentes, 
    o que resulta em valores undefined.

    Lidando com a fronteira do índice
    Um erro comum na iteração de strings é utilizar a condição de loop de forma equivocada, 
    como por exemplo usando <= em vez de < na comparação. Quando a condição está errada, 
    o laço tenta acessar o índice igual a length, e como não há um caractere correspondente, 
    é retornado undefined. Veja o exemplo abaixo:
 */

const palavra = "exemplo";

// Uso incorreto: pode acessar 'undefined'
for (let i = 0; i <= palavra.length; i++) {
  console.log(palavra[i]);
}

// Uso correto: acessa apenas posições válidas
for (let i = 0; i < palavra.length; i++) {
  console.log(palavra[i]);
}

/*
    No primeiro laço, quando i atingir o valor palavra.length, o acesso não encontra um caractere, causando 
    a impressão de undefined. Já no segundo laço, a condição i < palavra.length garante que somente os 
    índices válidos sejam utilizados.

    Alternativas para iterar com segurança
    Outra abordagem interessante para iterar sobre os caracteres de uma string sem se preocupar com 
    índices é utilizar o loop for...of. Esse método itera diretamente sobre os elementos da string, 
    simplificando o código e reduzindo o risco de erros relacionados à indexação:
*/

const palavra = "exemplo";

for (const caractere of palavra) {
  console.log(caractere);
}

/*
    Esse formato torna o código mais legível, removendo a necessidade de gerenciar 
    contadores e condições de parada manualmente.

    Considerações Finais
    Entender como funciona a indexação e a propriedade length é essencial para evitar 
    erros comuns ao iterar sobre strings. Adotar boas práticas, como a escolha adequada 
    da comparação em laços e o uso de estruturas alternativas como o for...of, 
    contribui para tornar o código mais robusto e legível.

    O "gap" (diferença) que você identificou
    Você está absolutamente certo:

    Índices: começam do 0 e vão até 3 (para uma string de 4 caracteres)
    Length: retorna 4 (contando a partir de 1)
    Índices:  0    1    2    3
             [g] [a] [t] [o]
    Length:   1    2    3    4
    Então sim, há um descompasso entre como contamos (1, 2, 3, 4) e como acessamos (0, 1, 2, 3).
    
    O length conta quantos caracteres existem (contagem natural: 1, 2, 3...), mas os índices 
    começam do zero (contagem de programação: 0, 1, 2...).
    */

