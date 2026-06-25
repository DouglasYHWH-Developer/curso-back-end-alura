/**
    Uma função tem uma entrada, um processamento e uma saída.

    Em JavaScript, você viu que uma função é um bloco de código reutilizável 
    que pode receber entradas, realizar um processamento e, opcionalmente, retornar 
    um resultado. A estrutura básica de uma função em JavaScript foi apresentada, 
    utilizando a palavra-chave function, um nome para a função, parênteses para as 
    entradas e chaves para o bloco de código. A palavra-chave return também foi 
    introduzida para indicar o valor de saída da função.

    O exemplo da função matemática f(x) = x + 2 foi implementado em JavaScript 
    para demonstrar como a entrada x é substituída pelo valor passado e como a 
    função retorna o resultado do processamento. Você também viu como testar essa 
    função usando console.log().
 */
/**
    Função de Primeiro Grau (Matemática):

    Imagine que você tem uma função que converte a temperatura de Celsius para Fahrenheit. A fórmula é ( F = C \times 1.8 + 32 ).
    Se quisermos representar isso como uma função de primeiro grau, podemos dizer: ( f(C) = C \times 1.8 + 32 )

    Aqui:

    ( f ) é o nome da nossa função.
    ( C ) é a entrada (a temperatura em Celsius).
    ( C \times 1.8 + 32 ) é o processamento que transforma a entrada na saída (temperatura em Fahrenheit).
    Por exemplo, se ( C = 20 ) (20 graus Celsius): ( f(20) = 20 * 1.8 + 32 ) ( f(20) = 36 + 32 ) ( f(20) = 68 )

    Então, 20 graus Celsius equivalem a 68 graus Fahrenheit.
 */
//  Função em JavaScript:

//  Agora, vamos pegar o mesmo exemplo de conversão de temperatura e 
//  implementá-lo em JavaScript, seguindo o que foi visto na aula:
function converterCelsiusParaFahrenheit(temperaturaCelsius) {
    let temperaturaFahrenheit = temperaturaCelsius * 1.8 + 32;
    return temperaturaFahrenheit;
}

/*
    Neste exemplo:

    function é a palavra-chave que define que estamos criando uma função.
    converterCelsiusParaFahrenheit é o nome que demos à nossa função (assim como f na matemática).
    temperaturaCelsius é a entrada da função, que será o valor que passamos quando a chamamos (como o x ou C na matemática).
    let temperaturaFahrenheit = temperaturaCelsius * 1.8 + 32; é o processamento, onde fazemos o cálculo.
    return temperaturaFahrenheit; é a saída da função, o resultado que ela nos devolve.
*/

//Para testar essa função em JavaScript, você faria:
console.log(converterCelsiusParaFahrenheit(20)); // Isso vai imprimir 68
console.log(converterCelsiusParaFahrenheit(0));  // Isso vai imprimir 32

//  Percebe como a ideia de entrada, processamento e saída se mantém tanto na matemática quanto no JavaScript?
//  A diferença está na sintaxe e nas palavras-chave que usamos para expressar essa ideia em cada contexto.
