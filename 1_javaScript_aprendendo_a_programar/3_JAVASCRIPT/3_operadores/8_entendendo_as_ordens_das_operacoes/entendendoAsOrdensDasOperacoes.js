/*
        Entendendo a ordem das operações
   
    Assim como na matemática que você aprendeu na escola, as operações no JavaScript têm uma 
    ordem específica para serem executadas. Essa ordem determina qual parte da expressão é 
    resolvida primeiro, influenciando diretamente o resultado final.

    Vamos relembrar rapidamente a ordem das operações matemáticas, pois elas são a base para entender como isso funciona no JavaScript:

    Parênteses ( ) – Tudo que estiver entre parênteses é executado primeiro;

    Multiplicação * e Divisão /;

    Adição + e Subtração -;

    Operadores de comparação (>, <, >=, <=, ==, !=);

    Operadores lógicos:

    NÃO (!)

    E (&&)

    OU (||)
*/

// Exemplos práticos
// Veja um exemplo simples para ilustrar a importância dessa ordem:

let resultado = 2 + 3 * 4; 

console.log(resultado); // Resultado: 14

// Perceba que o JavaScript primeiro resolveu a multiplicação (3 * 4 = 12) e depois a soma (2 + 12 = 14).
// Mas se quisermos mudar essa ordem, podemos usar parênteses:

let resultadoComParenteses = (2 + 3) * 4; 

console.log(resultadoComParenteses); // Resultado: 20

// Agora, primeiro é resolvida a soma (2 + 3 = 5) e depois a multiplicação (5 * 4 = 20).


// Usando parênteses para clareza

// Além de mudar a ordem das operações, usar parênteses também ajuda na clareza e legibilidade do seu código. 
// Veja este exemplo:


let idade = 20; 

let temIngresso = true; 

let temConviteVIP = false; 

 

let podeEntrar = idade >= 18 && (temIngresso || temConviteVIP); 

console.log(podeEntrar); // Resultado: true

// Nesse caso, o uso de parênteses deixa claro que a pessoa pode entrar 
// se tiver 18 anos ou mais e se tiver um ingresso ou convite VIP.

// Se tirarmos os parênteses, a expressão pode ficar ambígua ou mais difícil de entender:

// Sem parênteses fica menos claro 

let podeEntrarSemParenteses = idade >= 18 && temIngresso || temConviteVIP; 

console.log(podeEntrarSemParenteses); // Resultado: true (ainda funciona, mas menos claro)

/*
        Ordem de prioridade no JavaScript:
    Parênteses ( )

    Multiplicação *, Divisão /

    Adição +, Subtração -

    Comparações (>, <, >=, <=, ==, !=)

    Operadores lógicos (!, &&, ||)

    Sempre que ficar na dúvida, use parênteses para deixar bem claro qual 
    é a ordem que você deseja que o JavaScript execute as operações.
*/





