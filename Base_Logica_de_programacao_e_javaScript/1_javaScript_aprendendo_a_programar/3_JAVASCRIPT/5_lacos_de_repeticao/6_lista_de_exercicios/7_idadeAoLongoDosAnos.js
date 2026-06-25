// 7. Idade ao longo dos anos
// Crie uma variável anoNascimento e anoAtual. Use um for para 
// listar a idade da pessoa ano a ano até o ano atual.

let anoNascimento = 2010;
let anoAtual = 2026;

for(let ano = anoNascimento; ano <= anoAtual; ano++){
    let idade = ano - anoNascimento;
    console.log(`${ano} - ${idade} anos de idade.`)
}

 