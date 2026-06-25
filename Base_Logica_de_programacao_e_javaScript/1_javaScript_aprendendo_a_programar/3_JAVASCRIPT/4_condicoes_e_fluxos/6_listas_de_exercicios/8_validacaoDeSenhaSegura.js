/*
        8. Validação de senha segura
    Crie duas variáveis:
    senha
    senhaValida (valor true ou false, definido manualmente)
    Se senhaValida for verdadeira, mostre "Senha válida".
    Caso contrário, mostre "Senha muito curta".

    📌 Observação:
    Considere que a validação do tamanho da senha já foi feita previamente e o resultado está armazenado na variável senhaValida.


*/

const senha = 123;
const senhaValida = true;

if(senhaValida === true && senha !== null){
    console.log("Senha válida");
}else{
    console.log("Senha muito curta");
}

// Solução do professor

let senha1 = "abc123";
let senhaValida = true; // valor definido previamente

if (senhaValida) {
  console.log("Senha válida");
} else {
  console.log("Senha muito curta");
}