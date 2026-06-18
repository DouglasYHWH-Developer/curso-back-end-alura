const readline = require('readline'); // carregamos uma biblioteca do node que ele não carrega por padrão. ele lê as linhas

const leitor = readline.createInterface({ // createIterface é uma função nativa do node que cria uma interface. Criamos uma interface que lê as linhas
    input: process.stdin, // entrada de dados pelo terminal
    output: process.stdout // saída de dados pelo terminal
})

leitor.question('Qual é o seu nome? ', (nome) => {
    console.log('Olá ', nome);
    console.log('Boas vindas ao nosso sistema!');

    leitor.question('Qual é a sua idade? ', (idade) =>{
        console.log(idade, 'anos de idade.');

        if(idade >= 18){
            console.log('Uau! Você já pode tirar a sua CNH!');
        }else{
            console.log('VocÊ ainda não pode tirar a sua CNH!');
        }

        leitor.close();
    })
})