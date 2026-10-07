//      Removedo duplicadas
// Um professor acidentalmente adicionou nomes repetidos na losta de chamada;
// Ana, Clara, Maria, Maria, João, João, João;

// Remova os nomes repetidos da lista, deixando apenas um de cada.

const nomes = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João'];

const nomesAtualizados = new Set(nomes);
const listaNomesAtualizados = [...new Set(nomes)];
console.log(nomesAtualizados)


// Set siginifica conjuto

// O que ele realmente faz é criar uma estrutura de dados com uma regra 
// de ouro inquebrável: ele não aceita valores repetidos em nenhuma hipótese.
//Repare que o Set usa chaves {} e não é exatamente um Array []. Isso significa que métodos como o .push() ou o .reduce() que você acabou de aprender não funcionam direto nele.

// Para transformar esse Conjunto de volta em um Array novinho 
// (só que agora limpo e sem repetições), nós geralmente usamos 
// colchetes e três pontinhos ... (chamados de spread operator) 
// para "espalhar" os dados, desse jeito: