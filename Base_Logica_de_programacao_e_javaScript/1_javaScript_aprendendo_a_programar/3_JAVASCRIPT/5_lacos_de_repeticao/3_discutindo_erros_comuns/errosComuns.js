// se por acidedente eu começar com um contador que deixa a condição falsa
// o while não vai executar.
let contador = 11;
//let palavra = "Douglas";

// com do, ele vai ser executado ao menos uma vez.
// e se vc esquecer de acrescentar um contador, o while execjutará um loop infinito.

do{
    console.log(contador);
    contador++;
}while(contador <= 10)