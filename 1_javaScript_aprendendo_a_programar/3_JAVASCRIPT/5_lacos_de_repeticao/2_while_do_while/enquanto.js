let contador = 0;

// enquanto a condição for verdadeira incremente

// while verifica e depois executa
while(contador <= 3){ 
    console.log("Número atual: ", contador);
    contador++;
}

let numero = 1;


// do while executa e depois verifica
do{
    console.log('Número atual 2: ', numero);
    numero++;
}while(numero <= 3);


// a diferença está na condição, enquanto while só executa se a condição for verdadeira.
// já do while, mesmo que a condição seja falsa, ele executará pelo menos uma vez.

let i = 0;
let palavra = "Douglas";

while(i < palavra.length){
    console.log(i,'-', palavra[i]);
    i++
}

do{
    console.log(i,'-', palavra[i]);
    i++
}while(i < palavra.length);