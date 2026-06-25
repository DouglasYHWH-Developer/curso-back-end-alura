/*
    Em JavaScript, os arrays são estruturas altamente flexíveis, permitindo armazenar elementos de 
    tipos distintos em uma única variável. Essa característica é resultado da natureza dinamicamente 
    tipada da linguagem, em que não há restrição sobre o tipo de dado que cada posição do array pode conter.
     Um mesmo array pode guardar números, strings, valores booleanos, funções e até objetos, 
     proporcionando grande liberdade na organização dos dados.


Funcionamento e Implicações
Quando você insere elementos de tipos variados em um array, o JavaScript não realiza conversões 
implícitas para uniformizar os dados. Cada elemento retém seu tipo original, o que pode ser vantajoso 
em cenários onde a diversidade de dados é necessária. Por outro lado, essa liberdade exige atenção ao 
manipular o array, sobretudo em operações de iteração e na aplicação de métodos que podem se 
comportar de forma diferente conforme o tipo dos elementos.

A ausência de tipagem forçada pode levar a comportamentos inesperados se não houver validação 
dos elementos durante o processamento. Por exemplo, ao aplicar uma função de transformação em 
cada item, é importante verificar se o elemento é de um tipo que suporta aquela operação.

Abordagens de Tratamento
Uma prática recomendada é utilizar técnicas de verificação de tipos dentro dos laços de iteração. 
Métodos como typeof ou funcionalidades disponíveis em bibliotecas podem ajudar a garantir que cada 
elemento seja manipulado de forma adequada, reduzindo a chance de erros em tempo de execução. 
Além disso, quando a mistura de tipos não for necessária, pode ser interessante optar por arrays 
homogêneos para manter o código mais previsível e facilitar a manutenção.
*/

// Exemplo de código:

const mistura = [42, 'texto', true, { chave: 'valor' }, () => 'função'];

mistura.forEach(item => {
  if (typeof item === 'function') {
    console.log('Executando função:', item());
  } else {
    console.log('Item:', item);
  }
});

// Nesse exemplo, o código identifica se um elemento é uma função antes de executá-la, 
// garantindo que outros tipos sejam simplesmente exibidos no console. Esse cuidado é 
// essencial quando se trabalha com arrays que contêm dados heterogêneos.