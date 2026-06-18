/*
    Ótimo que você já dominou o básico dos laços de repetição! Agora vamos explorar 
    um pouco mais sobre as diferentes variantes do laço for no JavaScript. Vamos 
    deixar de lado o for...in por enquanto, já que você ainda vai aprender sobre objetos mais à frente.

    */
//  Relembrando o laço for básico

// O laço for tradicional é o mais comum, que você já conhece bem:


for (let i = 0; i < 5; i++) { 

console.log(i); 

} 

// Resultado: 0, 1, 2, 3, 4

// Ele é perfeito quando sabemos exatamente quantas vezes queremos executar um bloco de código.

// Laço for com múltiplas variáveis
// O for também permite que você controle mais de uma variável ao mesmo tempo. Veja este exemplo:


for (let i = 0, j = 10; i < j; i++, j--) { 

console.log(`i: ${i}, j: ${j}`); 

} 

// Resultado: 

// i: 0, j: 10 

// i: 1, j: 9 

// i: 2, j: 8 

// i: 3, j: 7 

// i: 4, j: 6

/*
    Aqui, temos duas variáveis sendo controladas simultaneamente. Pode ser muito útil em situações mais complexas.

    Omitindo partes do laço for
    Uma coisa interessante sobre o for é que você pode omitir qualquer uma das três partes dele 
    (inicialização, condição ou incremento), se fizer sentido para o seu código:
*/

// Omitindo a inicialização
// Se a variável já estiver definida antes do loop:


let i = 0; 

for (; i < 5; i++) { 

console.log(i); 

} 

// Resultado: 0, 1, 2, 3, 4

// Omitindo a condição
// Cuidado com essa forma, pois pode gerar loops infinitos. Você precisa garantir que terá um ponto de parada interno:


let i = 0; 

for (;; i++) { 

if (i >= 5) break; 

console.log(i); 

} 

// Resultado: 0, 1, 2, 3, 4

// Omitindo o incremento
// Você pode mover a expressão de incremento para dentro do corpo do laço:


for (let i = 0; i < 5;) { 

console.log(i); 

i++; 

} 

// Resultado: 0, 1, 2, 3, 4

//Laços infinitos (cuidado!)
//Como mencionado, se você não definir corretamente uma condição de parada, você pode acabar criando um laço infinito:


for (;;) { 

console.log('Laço infinito!'); 

}

// Esse código ficará executando para sempre, travando seu programa. 
// Para evitar isso, sempre certifique-se de definir uma condição que eventualmente 
// se torne falsa ou use break para sair do laço.

/*
    Quando usar cada variante?
    Laço tradicional: Use quando souber exatamente quantas vezes precisa executar o bloco.

    Laço com múltiplas variáveis: Utilize quando precisar controlar múltiplas condições ao mesmo tempo.

    Laço com partes omitidas: Use com cautela e somente quando fizer sentido específico para seu cenário.

    Agora você já conhece melhor as possibilidades que o laço for oferece no JavaScript! Continue explorando 
    e praticando para consolidar esses conceitos. Bora seguir em frente?
*/