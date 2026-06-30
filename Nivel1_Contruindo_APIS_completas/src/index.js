export function contaPalavras(texto){
    const paragrafos =  extraiParagrafos(texto)
    const contagem = paragrafos.flatMap((paragrafo) =>{ // au invés de usar filter e map, use o flatMap, O método flatMap() primeiro mapeia cada elemento usando uma função de mapeamento e, em seguida, nivela o resultado em um novo array.
        if(!paragrafo) return [];
            return verificaPalavrasDuplicadas(paragrafo);
    })

    return contagem;
}


function extraiParagrafos(texto){
    return texto.toLowerCase().split('\n');
}


function limpaPalavras (palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');// regex: /[.,\/#!$%\^&\*;:{}=\-_`~()]/
}


function verificaPalavrasDuplicadas (texto){
    const listaPalavra = texto.split(' ');
    const resultado = {};
//  objeto[propriedade] = valor;    
    listaPalavra.forEach((palavra) => {
        if(palavra.length >= 3){
            const palavraLimpa = limpaPalavras(palavra);
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
        }
    });
    return resultado;
}


/*
    Quando você precisa especificar o encoding (o sistema de codificação do texto, como o 'utf-8'), você o insere como um segundo 
    parâmetro, antes do callback. Assim, a ordem fica:

    Caminho do arquivo: Onde o arquivo está localizado.
    Opções (neste caso, o encoding): Como o arquivo deve ser lido (por exemplo, qual codificação de caracteres usar).
    Função de callback: O que fazer depois que o arquivo for lido, recebendo um possível erro e os dados do arquivo.
*/

// O process.argv é uma propriedade do Node.js que captura os argumentos passados na linha de comando quando você executa um script.
// Ele retorna um array de strings onde:
// [0] é o caminho do Node.js.Ex.: C:...Nivel1_Contruindo_APIS_completas\src>
// [1] é o caminho do seu script.Ex.: index.js
// [2] e seguintes são os argumentos adicionais que você digitou no terminal. Ex.: ../arquivos/texto-web.txt.