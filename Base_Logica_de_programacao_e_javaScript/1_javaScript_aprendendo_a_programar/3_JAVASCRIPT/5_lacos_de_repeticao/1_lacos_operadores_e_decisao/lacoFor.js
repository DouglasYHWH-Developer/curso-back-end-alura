/*
        Sobre o laço for e seus parâmetros: na aula, aprendemos a estrutura clássica 
        do for com três partes: inicialização do contador, condição e incremento.
*/


for(let contador = 1; contador <= 10; contador++){
    console.log('Número atual: ', contador)
}

for(let numero = 0; numero <= 15; numero++){
    if(numero % 2 === 0){
        console.log('Número par: ', numero)
    }
}

for(let numero = 0; numero <= 15; numero++){
    if(numero % 2 !== 0){
        console.log('Número ímpar: ', numero)
    }
}

const palavra = "Douglas"

// palavra.length - indica quantos caracteres uma string tem
// palavra[1] - pega a letra na posição indicada;

for(let i = 0; i < palavra.length; i++ ){
    console.log(i, '-', palavra[i])
}