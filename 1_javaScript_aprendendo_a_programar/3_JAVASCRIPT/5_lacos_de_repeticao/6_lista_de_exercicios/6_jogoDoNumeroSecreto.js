// 6. Jogo do número secreto
// Crie uma variável numeroSecreto com valor fixo.
// Simule até 3 tentativas usando um for.
//
// Em cada tentativa, compare o valor tentado com o número secreto e mostre no console:
// 
// "Acertou!" se for igual
// "Tente novamente" se for diferente
// 📌 Observação:
// As tentativas devem ser simuladas por variáveis dentro do laço.
// vc precisa criar outra variável para guardar a tentativa

let numeroSecreto = 6;
let tentativas = 3;
 for(let i = 1; i <= tentativas; i++){
    let numeroTentado;

    if(i === 1){;
        numeroTentado = 5
    }else if(i === 2){
        numeroTentado = 10;
    }else if(i === 3){
        numeroTentado = 7;
    }

    if(numeroTentado === numeroSecreto){
        console.log('Acertou!!!')
    }else{
        console.log('Tente novamente')
    }
}