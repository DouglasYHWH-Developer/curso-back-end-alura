const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

console.log('Bem vindo(a) ao Quiz de JavaScript!!!');
console.log('Responda com a letra certa: a, b ou c\n');

let acertos = 0;

rl.question('1) Qual palavra usamos para criar uma função?\n(a) define\n(b) function\n(c) create\n>', (resposta1) => {
    if(resposta1 == 'b'){
        console.log('Acertou!!!')
        acertos ++;
    }else{
        console.log('Errou!')
    }

    rl.question('2) Qual dessas é uma estrutura de repetição?\n(a) loopar\n(b) repeat\n(c) for\n>', (resposta2) => {
        if(resposta2 == 'c'){
            console.log('Acertou!!!')
            acertos ++;
        }else{
            console.log('Errou!')
        }

        rl.question('3) Qual Valor é considerado falsy em JavaScript?\n(a) 1\n(b) 0\n(c) "texto"\n>', (resposta3) => {
            if(resposta3 == 'b'){
                console.log('Acertou!!!')
                acertos ++;
            }else{
                console.log('Errou!')
            }

            if(acertos === 3){
                console.log('Parabéns!!!');
            }else if( acertos == 2){
                console.log('Muito bom!! Continue assim.')
            }else if(acertos === 1){
                console.log('Muito bom! Continue melhorando.')
            }else{
                console.log('Continue praticando!')
            }


             rl.close();

         });

    });
   
});

