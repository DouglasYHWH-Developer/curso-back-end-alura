const estudantes = require('../13_JSON/estudantes.json');

function ordena(lista, propriedade){
    return lista.sort((a, b) =>{
        if(a[propriedade] < b[propriedade]){
            return -1;
        }
        if(a[propriedade] > b[propriedade]){
            return 1;
        }
        return 0
    })
}

const listaOrdenada = ordena(estudantes, 'nome')

console.log(listaOrdenada)

/*
    O sort é famoso por dar um nó na cabeça no começo! Ele funciona como um juiz de 
    campeonato que não sabe olhar a lista inteira de uma vez. O que ele faz é pegar 
    dois estudantes por vez (que ele apelida de a e b) e perguntar para a sua função: "Quem deve vir primeiro?".

Para o juiz (o sort) entender a sua decisão, você não pode responder com palavras. Você precisa usar um "código secreto" matemático.

Aqui está o manual exato desse código:

Retornar -1: Você diz ao juiz "O elemento a deve vir antes do b".

Retornar 1: Você diz ao juiz "O elemento a deve vir depois do b".

Retornar 0: Você diz ao juiz "Eles são equivalentes na ordem, deixe como está".


Quando você chama ordena(estudantes, 'nome'), o JavaScript começa a pegar duplas 
de estudantes. Digamos que o a seja a "Alice" e o b seja o "Carlos".

Ele entra no primeiro if: "Alice" < "Carlos". O JavaScript entende ordem alfabética, 
então para ele a letra A é "menor" (vem antes) que a letra C. Isso dá verdadeiro! Ele retorna -1, e a Alice fica na frente.

Agora digamos que o a seja o "Zeca" e o b seja a "Bianca". Ele cai no segundo if: "Zeca" > "Bianca".
*/