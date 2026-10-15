/*
    importação de módulos e require

Neste curso utilizamos uma função, chamada require(), nativa do Node.js. Esta função nos 
permitiu passar o caminho de um arquivo terminado em .json para obter o conteúdo do arquivo 
já convertido para objeto JavaScript. Em cursos posteriores, veremos que essa função também 
pode ser utilizada para importação de códigos que estão em outros arquivos, também chamados de módulos.

A conversão automática de um objeto JSON em um objeto JavaScript é uma das propriedades 
específicas da função require(), conforme estabelecido na documentação do Node.js.

A modularidade é uma característica que permite que devs dividam seus programas em partes 
mais gerenciáveis e reutilizáveis. A importação de módulos é uma prática fundamental nesse 
contexto, e a função require desempenha um papel vital nesse processo.

Utilizando o require para importar módulos
Ao utilizar require, é possível incluir funcionalidades de outros arquivos, 
promovendo a reutilização de código e a manutenção eficiente.
*/

// Exemplo de importação de um módulo em Node.js
const moduloExemplo = require('./meuModulo.js');

// Agora, podemos utilizar as funcionalidades do 'meuModulo'
moduloExemplo.minhaFuncao();

/*
    Importação de módulos JSON
Além da importação de módulos JavaScript, o require também é usado para carregar 
arquivos JSON, que são amplamente utilizados para armazenar configurações e dados estruturados. 
Ao importar um arquivo JSON, o Node.js automaticamente o converte para um objeto JavaScript.
*/

// Importando um arquivo JSON em Node.js
const configuracoes = require('./configuracoes.json');

// Agora, 'configuracoes' contém o conteúdo do arquivo JSON
console.log(configuracoes);

/*
    Caminhos relativos e módulos nativos
Ao utilizar require, é possível especificar caminhos relativos para módulos próprios ou caminhos absolutos para módulos de terceiros.
 Além disso, Node.js fornece uma variedade de módulos nativos que podem ser importados sem a necessidade de instalação adicional.
*/

// Importação de um módulo nativo em Node.js
const fs = require('fs');

// Agora, 'fs' contém as funcionalidades do módulo File System

/*
    Exportação de módulos
Para que um módulo seja importável, é necessário exportá-lo corretamente. 
A exportação pode ser feita atribuindo o que se deseja exportar à propriedade module.exports.
*/

// Exemplo de exportação de um módulo em Node.js
function minhaFuncao() {
  console.log('Executando minha função...');
}

module.exports = minhaFuncao;