/*
        Agora que você já viu vários tipos de laço (for, for/of, forEach), talvez esteja se perguntando: 
        "por que existem tantos tipos diferentes de for no JavaScript?" — e essa é uma ótima pergunta!

Vamos entender isso com calma, respeitando o seu ritmo e lembrando de tudo o que você já aprendeu até aqui.

Por que existem diferentes tipos de for?
A linguagem JavaScript foi evoluindo com o tempo. Conforme os projetos foram ficando maiores e mais complexos, 
os desenvolvedores sentiram a necessidade de escrever códigos mais simples, claros e fáceis de manter. 
Para isso, a linguagem foi ganhando novas formas de fazer as mesmas coisas, mas com mais elegância e praticidade.

É como cozinhar: dá pra fazer arroz de várias formas. Nenhuma está “errada”, mas algumas são mais rápidas 
ou mais fáceis de entender. Com os laços (loops) é a mesma coisa!
*/

// O mais antigo: for tradicional
// O for tradicional é o mais antigo de todos. Ele existe desde as primeiras versões do JavaScript.


for (let i = 0; i < frutas.length; i++) { 
    console.log(frutas[i]); 
}

/*
    Ele é poderoso e te dá controle total: você decide o ponto de partida, a condição de 
    parada e o que acontece a cada repetição. Mas esse controle todo pode deixar o código 
    mais difícil de ler, especialmente para quem está começando.
*/

//    Depois veio o forEach
//  O forEach surgiu como uma forma mais amigável e direta de percorrer arrays. 
// Ele é um método específico dos arrays, ou seja, só funciona se você estiver lidando com um array mesmo.


frutas.forEach(fruta => { 
    console.log(fruta); 
});

//Você não precisa se preocupar com o índice nem com o tamanho do array. É só dizer o que quer fazer com cada item.


//Mais recentemente: for/of

/*
    O for/of foi adicionado à linguagem para ser ainda mais simples e direto do que o for tradicional, 
    e mais flexível do que o forEach, pois pode funcionar com outros tipos de dados além de arrays 
    (mas a gente vai chegar lá depois).
*/


for (let fruta of frutas) { 
    console.log(fruta); 
}
// Ele é ótimo para quando você só quer acessar os valores, um por um, sem se preocupar com índices.

/*
    Por que isso importa?
    Saber que existem diferentes tipos de for te dá liberdade para escolher a melhor ferramenta 
    para cada situação. Às vezes, você precisa do controle total que o for tradicional oferece. 
    Outras vezes, quer só percorrer os itens de um array sem complicação — e aí o for/of ou o forEach são perfeitos.

    Além disso, é importante entender esses tipos porque você vai encontrá-los em muitos códigos por 
    aí — especialmente quando estiver lidando com projetos mais antigos ou estudando exemplos na internet.

    Resumo da evolução:
    for tradicional → o mais antigo e mais detalhado

    forEach → método moderno e direto para arrays

    for/of → sintaxe simples e elegante, ideal para percorrer valores

    Com o tempo, você vai perceber quando faz mais sentido usar cada um deles. Por enquanto, o importante é entender que todos são formas de fazer repetições, e que a linguagem te dá opções para escrever um código mais claro, moderno e fácil de manter.
*/