//5 - Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento 
// seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.

//Dicas:

//comece com um array vazio, por exemplo const matriz = [] e adicione valores nele com push;
//você pode resolver usando um for dentro de outro for.

let matriz = []
let contador = 1;

for(let x = 1; x <= 3; x++ ){
    let linha = []
    for(let y = 1; y <= 3;y++){
        linha.push(contador);
        contador++;   
    }
    matriz.push(linha)
}

console.log(matriz)

// 6 - Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional 
// matriz criada no exercício anterior.

//console.log(matriz[1][2])

//7 - Adicione um novo elemento (por exemplo,15) na terceira linha e 
// [segunda coluna da lista bidimensional matriz criada anteriormente.


matriz[2].splice(1, 0, 15);
console.log(matriz)
