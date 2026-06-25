/*
    O objetivo aqui é praticar a criação, modificação e leitura de variáveis. Assim, você desenvolverá o hábito de usar console.log() para imprimir mensagens e entender como o código está funcionando. Vamos lá!

Tente realizar os seguintes exercícios:

1. Boas-vindas personalizadas
Crie uma variável chamada nome e atribua seu nome completo. Depois, use console.log() para exibir a mensagem: "Olá, [nome]! Seja bem-vindo(a) ao curso de JavaScript!"

2. Cálculo de idade
Crie duas variáveis: anoAtual e anoNascimento. Calcule a idade da pessoa subtraindo os valores e exiba no console: "Você tem [idade] anos."

3. Mensagem de localização
Crie três variáveis com os dados da sua localização: cidade, estado e pais. Em seguida, mostre no console: "Você está em Cidade - Estado, País."

4. Tipo da variável:
Crie uma variável chamada temCarteira com valor true ou false. Use console.log(typeof temCarteira) para mostrar o tipo dessa variável.

5. Simulação bancária simples:
Crie uma variável saldo iniciando com 0. Depois, simule um depósito de 200 e um saque de 50. Mostre o saldo final no console com uma frase explicando.

6. Média de notas:
Crie variáveis para três disciplinas: matematica, portugues e ciencias, contendo suas respectivas notas. Calcule e mostre a média final com uma mensagem.

7. Reajuste de salário:
Crie uma variável chamada salario com valor 3000. Calcule um aumento de 10% e mostre o novo salário com uma frase explicando o motivo.

8. Contador de cliques:
Simule um contador de cliques em um botão. Crie uma variável cliques = 0 e incremente 1 a cada "simulação de clique". Mostre o total após 3 simulações.

9. Constantes não podem ser alteradas
Crie uma constante chamada PI com o valor 3.14. Tente alterar seu valor e observe o erro gerado. Depois, explique por que isso acontece.

10. Concatenando tipos diferentes
Crie uma variável mensagem contendo uma string e outra numero contendo um número. Junte as duas em uma terceira variável e exiba o resultado e o tipo final no console usando typeof.
 */

// 1. Mensagem de boas-vindas 

let nome = "João da Silva"; // substitua pelo seu nome completo 

console.log("Olá, " + nome + "! Seja bem-vindo(a) ao curso de JavaScript!"); 

 

// 2. Cálculo de idade 

let anoAtual = 2025; 

let anoNascimento = 1990; 

let idade = anoAtual - anoNascimento; 

console.log("Você tem " + idade + " anos."); 

 

// 3. Mensagem de localização 

let cidade = "São Paulo"; 

let estado = "SP"; 

let pais = "Brasil"; 

console.log("Você está em " + cidade + " - " + estado + ", " + pais + "."); 

 

// 4. Tipo da variável 

let temCarteira = true; 

console.log(typeof temCarteira); // imprime: boolean 

 

// 5. Simulação bancária simples 

let saldo = 0; // saldo inicial 

saldo += 200; // depósito 

saldo -= 50; // saque 

console.log("Saldo final: R$" + saldo); 

 

// 6. Média de notas 

let matematica = 8; 

let portugues = 7; 

let ciencias = 9; 

let media = (matematica + portugues + ciencias) / 3; 

console.log("Média final: " + media); 

 

// 7. Reajuste de salário 

let salario = 3000; 

let novoSalario = salario * 1.10; // aumento de 10% 

console.log("Após um aumento de 10%, o novo salário é R$" + novoSalario); 

 

// 8. Contador de cliques 

let cliques = 0; 

cliques++; 

cliques++; 

cliques++; 

console.log("O botão foi clicado " + cliques + " vezes."); 

 

// 9. Constantes não podem ser alteradas 

const PI = 3.14; 

// PI = 3.1415; // ❌ Isso causaria erro pois constantes não podem ser modificadas 

console.log("PI é uma constante e não pode ser alterada: " + PI); 

 

// 10. Concatenando tipos diferentes 

let mensagem = "O número é "; 

let numero = 42; 

let combinado = mensagem + numero; 

console.log(combinado); // "O número é 42" 

console.log(typeof combinado); // string