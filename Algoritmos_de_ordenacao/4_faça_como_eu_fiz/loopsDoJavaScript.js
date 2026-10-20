/*
    Durante o curso vamos usar o for para escrever os laços de repetição. Esta forma de escrever 
    laços é muito comum em linguagens de programação e pode ser encontrada praticamente da 
    mesma forma tanto no JavaScript quanto em outras linguagens muito utilizadas, como o 
    Java e a família C (C, C++, C#, entre outras). Assim como o for, a maior parte dessas 
    linguagens, além de várias outras, também utiliza os laços while e do… while.

O JavaScript tem outras formas de escrever laços de repetição além desse for “clássico” e 
podemos reescrever o nosso código para testar com um método mais moderno, o forEach().

forEach() é um método de array do JavaScript que percorre o array e executa um bloco de código para cada índice.

Este método pede como parâmetro uma função que chamamos de função callback. Esta função callback 
controla o laço para que percorra cada um dos elementos do array, através do parâmetro que 
estamos chamando de livro (afinal de contas, trata-se de um array de livros):

Também vamos precisar do número do índice de cada elemento, para fazer a troca de 
lugares entre os valores. Para isso vamos precisar do segundo parâmetro da função callback, 
que é opcional, e que leva justamente o número do índice atual que está sendo percorrido. 
Ou seja, é o equivalente à nossa variável atual:
Agora podemos passar para dentro do bloco a lógica do algoritmo, substituindo atual por indice:

Se examinarmos o laço, vemos que o primeiro parâmetro da função callback, livro, 
não está sendo utilizado; nesse caso, podemos usar a notação do JavaScript para 
informar que o primeiro parâmetro não será utilizado no código, através do _:
*/

const livros = require('../2_exibindo_livros/exibindoLivros');

const menorValor =  require('../1_do_papel_para_o_codigo/menorValor');

livros.forEach((_, atual) =>{
    let menor = menorValor(livros, atual);   

    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menor];
//                  X inverte em x para fazer a troca                    
    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;


})

console.log(livros)
