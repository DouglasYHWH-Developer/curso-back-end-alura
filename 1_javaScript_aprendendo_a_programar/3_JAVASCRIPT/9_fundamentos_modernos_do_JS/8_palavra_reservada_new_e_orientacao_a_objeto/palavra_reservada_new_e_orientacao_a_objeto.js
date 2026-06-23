/*
        Durante o curso, você usou o comando new Date() para trabalhar com datas. 
    E talvez tenha se perguntado: o que é esse new?
    Pra responder isso direitinho, a gente precisa tocar num assunto que ainda não vimos 
    em detalhes: programação orientada a objetos — ou simplesmente OO.
    Calma, vamos com muita leveza aqui. O objetivo não é aprofundar, mas dar uma ideia 
    do que é isso e por que esse tal de new aparece de vez em quando no seu código.
    O que é programação orientada a objetos?
    Orientação a objetos é um jeito de organizar o código. É como se a gente programasse 
    pensando em "coisas" do mundo real — e cada uma dessas coisas tem características (dados) e ações (funções).
    Por exemplo, pense em um carro:
    Características: cor, modelo, ano, marca
    Ações: ligar, acelerar, frear
    Na programação orientada a objetos, essas "coisas" são chamadas de objetos, e a gente 
    organiza o código ao redor delas.
    Onde isso aparece no JavaScript?
    Mesmo sem perceber, você já usou objetos no curso inteiro — lembra do console.log() ou do 
    Math.random()? Pois é, isso são objetos com ações dentro deles.
    Mas o JavaScript também tem um jeito de criar novos objetos. E é aí que entra o tal do new.
*/

// Quando você faz:


let hoje = new Date();

/*
Você está criando um novo objeto de data. Esse objeto já vem com vários métodos prontos pra você usar 
(como getFullYear(), toLocaleDateString(), etc.).
Esse tipo de estrutura vem de um modelo chamado classe, que serve como um molde para criar 
objetos com o new. Mas isso é só a pontinha do iceberg da orientação a objetos.
Conceitos básicos da OO (só pra ter uma ideia)
Objeto: Uma "coisa" com dados e comportamentos (como o Date que você usou)
Classe: Um molde para criar objetos
Herança: Um objeto pode herdar comportamentos de outro
Encapsulamento: Cada objeto cuida dos seus próprios dados
Polimorfismo: A mesma ação pode funcionar de maneiras diferentes em objetos diferentes
Esses nomes parecem complicados no começo, mas tudo isso faz parte de uma forma de pensar o código. 
E com prática, fica muito mais natural!
Quero aprender mais!
Se você ficou curioso(a) e quer se aprofundar no assunto, a Alura tem um curso perfeito pra você começar:
👉 JavaScript: programação orientada a objetos
Lá você vai aprender:
Os conceitos principais da orientação a objetos
Como o JavaScript lida com isso usando funções e protótipos
Os princípios de classe, objeto e herança
O que é encapsulamento e por que ele é importante
Como funciona o polimorfismo em JavaScript
Por enquanto, o mais importante é saber que o new é uma forma de criar objetos com base em um molde 
(classe), e que essa ideia vem da orientação a objetos — um estilo de programação muito usado em sistemas maiores.
Ficou com   vontade de saber mais? Então bora se aprofundar. Caso contrário, você já sabe o suficiente pra continuar evoluindo.
*/