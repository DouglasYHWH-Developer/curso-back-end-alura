const fs = require('fs');// biblioteca file system

const caminhoArquivo = process.argv;// process.argv
// O process.argv é uma propriedade do Node.js que captura os argumentos passados na linha de comando quando você executa um script.
// Ele retorna um array de strings onde:
// [0] é o caminho do Node.js.Ex.: C:...Nivel1_Contruindo_APIS_completas\src>
// [1] é o caminho do seu script.Ex.: index.js
// [2] e seguintes são os argumentos adicionais que você digitou no terminal. Ex.: ../arquivos/texto-web.txt.
const link = caminhoArquivo[2];
fs.readFile(link, 'utf-8', (erro, texto) =>{
    console.log(texto);
});




/*
    Quando você precisa especificar o encoding (o sistema de codificação do texto, como o 'utf-8'), você o insere como um segundo 
    parâmetro, antes do callback. Assim, a ordem fica:

    Caminho do arquivo: Onde o arquivo está localizado.
    Opções (neste caso, o encoding): Como o arquivo deve ser lido (por exemplo, qual codificação de caracteres usar).
    Função de callback: O que fazer depois que o arquivo for lido, recebendo um possível erro e os dados do arquivo.
*/