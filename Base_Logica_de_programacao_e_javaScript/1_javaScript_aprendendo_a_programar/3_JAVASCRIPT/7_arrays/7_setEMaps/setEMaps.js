/*
    Agora que você já está confortável com arrays, chegou o momento de conhecer duas 
    estruturas especiais e muito úteis no JavaScript: Set e Map. Vamos com calma, do zero, 
    entendendo o que são, para que servem, e como você pode começar a usá-las.

    O que é um Set?
    Um Set é uma estrutura de dados que guarda valores únicos. Pense nele como uma 
    coleção onde nenhum valor pode se repetir, diferente dos arrays onde você pode ter elementos iguais.
*/

// Veja um exemplo prático:


let numeros = new Set(); 

numeros.add(1); 
numeros.add(2); 
numeros.add(2); // Não será adicionado novamente 

console.log(numeros); // Resultado: Set { 1, 2 }

//  Note que o número 2 não é adicionado duas vezes, pois um Set automaticamente ignora valores repetidos.

//  Quando usar um Set?
//  Para remover duplicatas de um array.
//  Para verificar rapidamente se um valor já existe no conjunto.
//  Exemplo removendo duplicatas:


let arrayComDuplicatas = [1, 2, 2, 3, 4, 4, 5]; 

let arraySemDuplicatas = [...new Set(arrayComDuplicatas)]; 

console.log(arraySemDuplicatas); // Resultado: [1, 2, 3, 4, 5]

/*
    Diferença entre Set, Map e Array
    Array: Guarda valores em ordem e permite duplicatas.
    
    Set: Guarda valores únicos, sem duplicatas.
    
    Map: Guarda pares de chave e valor com chaves únicas e ordenadas.
    
    Quando escolher cada um?
    Set: Para coleções únicas e operações de conjunto.
    
    Map: Quando você precisar associar valores específicos a chaves únicas, 
    especialmente se as chaves não forem simples strings.
    
    Experimente praticar criando pequenos exemplos para entender melhor como cada um funciona!
    
    Bora continuar explorando?
*/