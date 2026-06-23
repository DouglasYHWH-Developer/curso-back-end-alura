/*
    Quando lemos dados vindos do terminal ou de fontes externas, como formulários e arquivos, os valores 
    são interpretados como strings. Essa abordagem é intencional, pois possibilita a manipulação textual. 
    No entanto, quando precisamos realizar operações matemáticas – como somar, subtrair ou multiplicar – 
    é fundamental que esses valores sejam convertidos para números. Caso contrário, o JavaScript pode acabar 
    realizando a concatenação de strings, transformando operações numéricas em simples junções de textos.

    Mecanismos e Alternativas
    A conversão explícita de valores pode ser feita de diferentes maneiras. Um dos métodos mais comuns 
    é usar a função Number(). Ao envolver a variável que contém uma string, essa função tenta convertê-la 
    para um número. Se a string representar um número válido, o resultado será o valor numérico correspondente; 
    caso contrário, o resultado será NaN (Not a Number).

*/

const valorTexto = "7";
const valorNumero = Number(valorTexto);
console.log(valorNumero + 7); // Exibe 14

/*
    Outra alternativa é o uso de parseInt() ou parseFloat(). O parseInt() analisa uma string até encontrar 
    um caractere que não seja um dígito, retornando um inteiro. Já o parseFloat() faz o mesmo, mas é
    adequado para números com casas decimais. Cada um desses métodos tem suas vantagens de acordo com o contexto,
    como tratar valores decimais com parseFloat().

    Questões e Recomendações
    A conversão de tipos em JavaScript é uma etapa crítica na construção de aplicações que dependem de inputs do usuário. 
    As principais recomendações incluem:
    Fazer a conversão explicitamente para evitar comportamentos inesperados, como a concatenação de strings. 
    Por exemplo, a expressão "7" + "7" retorna "77", enquanto Number("7") + Number("7") retorna 14.
    Verificar se a conversão teve sucesso, tratando casos em que o valor convertido resulte em NaN. 
    Essa validação pode evitar erros durante cálculos ou lógicas subsequentes.
    Escolher o método de conversão mais adequado de acordo com o tipo de número esperado. Se o valor pode 
    conter decimais, parseFloat() ou Number() são geralmente as opções mais seguras.
    Ao entender a fundo como e por que converter strings para números, aumentamos a robustez do nosso código e 
    garantimos que a lógica das operações matemáticas se mantenha consistente e previsível.


*/