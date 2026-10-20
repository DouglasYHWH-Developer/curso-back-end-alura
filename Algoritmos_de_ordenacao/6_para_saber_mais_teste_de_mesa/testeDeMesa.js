/*
    Para saber mais: Testes de mesa

Comentamos durante a aula sobre testes de mesa, ou desk checking, em inglês.

Um teste de mesa é justamente o processo manual de verificar todas as linhas de um código 
e executá-lo passo a passo com ajuda de, por exemplo, papel e lápis para anotar qual os 
valores das variáveis em cada passo de cada linha. É como compilar/interpretar um 
bloco de código usando o cérebro como compilador/interpretador.

Apesar de hoje as IDEs e as linguagens terem ferramentas práticas, modernas e eficientes 
para avisar, “debugar” e encontrar erros de código, o teste de mesa é uma forma muito 
boa de se estudar lógica de programação e para entender o que acontece em cada passo 
de execução do código, especialmente no caso de algoritmos que envolvem laços de repetição, 
substituição de valores e variáveis temporárias, como vimos durante a aula.

Uma forma muito comum de fazer o registro de valores de variáveis durante um teste 
de mesa é utilizando tabelas de rastreio, ou trace tables. Por exemplo, um teste 
de mesa para um for que imprime números de 0 a 5 no console poderia ser representado 
pelo seguinte teste de mesa/tabela de rastreio:
*/

let num = 0;
console.log(num);

for(let i = 1; i <= 5; i++){
    console.log(i)
}

/*
linha  num	i  saída
1	    0		
2			    0
4		    1	
5			    1
4		    2	
5			    2
4		    3	
5			    3
4		    4	
5			    4
4		    5	
5			    5
4           6

Nos seus exercícios e testes, a tabela pode tranquilamente ser feita com papel e lápis, se 
preferir.

O importante no teste de mesa (com ou sem uso da tabela) é percorrer cada linha e executar 
realmente o código, anotando as criações/reatribuições de variáveis, resultados de operações 
matemáticas (se houver), alterações em arrays e objetos, etc. Dessa forma, resultados 
não esperados na execução do código já vão aparecer na hora.
*/