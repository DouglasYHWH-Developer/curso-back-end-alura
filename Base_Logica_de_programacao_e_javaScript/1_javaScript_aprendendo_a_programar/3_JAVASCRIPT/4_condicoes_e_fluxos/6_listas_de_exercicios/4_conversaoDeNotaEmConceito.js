/*
        4. Conversão de nota em conceito
    Crie uma variável nota entre 0 e 10. Use if/else if/else para retornar: 
    "conceito" A (9-10), 
    "conceito" B (8-9), 
    "conceito" C (6-7.9), 
    "conceito" D (4-5.9), 
    "conceito" E (0-3.9).
*/

let nota = 2.5;

if(nota >= 9){
    console.log("Conceito A");
}else if(nota >= 8){
    console.log("Conceito B");
}else if(nota >= 6){
    console.log("Conceito C");
}else if(nota >= 4){
    console.log("Conceito D");
}else{
    console.log("Conceito E");
}