//      Somando médicas das salas
//  com a média de todos os alunos de 3 salas, calcule a média geral de cada sala.

//  a função que vai dentro do reduce 
// precisa de dois parâmetros principais, 
// é o acumulador e o valor atual (o item da lista que ele está lendo naquele giro).
// reduce(função de callbacl, valor inicial);




const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]; 
const salaJava = [6, 5, 8, 9, 5, 6]; 
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(listaDeNotas){
    const somaDasNotas = listaDeNotas.reduce((acumulador, nota) =>  { // (acumulador, nota) => acumulador + nota;jj
        return acumulador + nota;
    }, 0)
    const  media = somaDasNotas / listaDeNotas.length   
    return media;
}

console.log(calculaMedia(salaJS))
console.log(calculaMedia(salaJava))
console.log(calculaMedia(salaPython))
