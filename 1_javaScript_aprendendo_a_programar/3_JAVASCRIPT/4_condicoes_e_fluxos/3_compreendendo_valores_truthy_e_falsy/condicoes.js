// quais os valores consiguimos isar dentro de uma condição if?

const nome = ''; // O JS vai entender essa string vazia como false, se colocar um 'espaço' ele já entende como true.

if(nome){ // o JS vai verificar se a variável é true ou false.
    console.log("Olá, ", nome);
}else{
    console.log("Ainda não sei o seu nome");
}

const idade = null;

//if(idade != null && idade >= 18){
//    console.log('Maior de idade');
//}else if ( idade != null && idade >= 0 && idade < 18){
//    console.log('Menor de idade');
//}

// vamos melhorar o código!

if (idade != null) {
    if (idade >= 18) {
        console.log('Maior de idade');
    } else if (idade >= 0 && idade < 18) {
        console.log('Menor de idade');
    }

}