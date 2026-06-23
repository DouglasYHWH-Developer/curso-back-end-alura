//const readline = require('readline'); // carregamos uma biblioteca do node que ele não carrega por padrão. ele lê as linhas
import {createInterface} from 'readline';
import {multiplicacao, soma, subtracao, divisao} from './modulos.js';

const leitor = createInterface({ // createIterface é uma função nativa do node que cria uma interface. Criamos uma interface que lê as linhas
    input: process.stdin, // entrada de dados pelo terminal
    output: process.stdout // saída de dados pelo terminal
})

leitor.question('Digite o primeiro número:\n> ', (a) => {
    
       leitor.question('Digite a operacao:\n+: soma\n-: subtração\n*: multiplicação\n/: divisão', (operacao) =>{

        leitor.question('Digite o segundo número:\n>',(b) =>{

            const num1 = Number(a);
            const num2 = Number(b);

            let resultado = null;

            if(operacao == '+'){
                resultado = soma(num1, num2)
            }else if( operacao == '-'){
                resultado = subtracao(num1, num2)
            }else if( operacao == '*'){
                resultado = multiplicacao(num1, num2)
            }else if( operacao == '/'){
                resultado = divisao(num1, num2)
            }else{
                console.log('Operação inválida')
            }


            if(resultado != null){
                console.log('O resultado da operação é: ', resultado)
            }

             leitor.close();
        })
    })
})