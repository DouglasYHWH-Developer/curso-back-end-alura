/*
        10. Validação de formulário completo

    Crie três variáveis:

    nome
    email
    idade
    Crie também uma variável booleana chamada formularioValido que indique se o formulário está válido (true ou false).

    Se formularioValido for verdadeiro, mostre "Formulário enviado com sucesso".
    Caso contrário, mostre "Por favor, preencha todos os campos corretamente".
*/

const nome = "Douglas";
const email = "dougurasu104@hotmail.com";
const idade = 32;
const formularioValido = true;

if(formularioValido === true){
    if(nome && email && idade){
        console.log("Formulário enviado com sucesso");
    }else{
        console.log("Por favor, preencha todos os campos corretamente");
    }
}

// Solução do professor
let nome1 = "Ana";
let email1 = "ana@email.com";
let idade1 = 25;

let formularioValido1 = true; // valor definido previamente

if (formularioValido1) {
  console.log("Formulário enviado com sucesso");
} else {
  console.log("Por favor, preencha todos os campos corretamente");
}