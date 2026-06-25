/*
    Agora que você já aprendeu o que são objetos, como acessar e modificar propriedades, 
    e até como usar o for...in para percorrer seus dados, chegou a hora de entender 
    um conceito muito presente no mundo real da programação: JSON.

    Vamos com calma, do começo.

    O que são objetos (revisando rapidinho)
    Em JavaScript, objetos são estruturas que guardam pares de chave e valor. 
    É como uma ficha onde cada campo tem um nome e um conteúdo.
*/


let pessoa = { 
    nome: 'João', 
    idade: 30, 
    temCarteira: true 
}; 

console.log(pessoa.nome); // Resultado: João
// Cada "chave" (como nome, idade) é associada a um valor.

/*
    O que é JSON?
    JSON significa JavaScript Object Notation, ou seja, "notação de objeto do JavaScript". Apesar do nome complicado, 
    JSON é só uma forma de escrever dados como texto — uma forma que é muito parecida com os objetos que você já está usando!
*/


/*
{ 
    "nome": "João", 
    "idade": 30, 
    "temCarteira": true 
}
*/

//  Percebeu a semelhança? A grande diferença é que: 
//  Em JSON, as chaves são sempre escritas entre aspas duplas (");
//  JSON é sempre uma string de texto, não um objeto vivo de JavaScript.
//  Quando usamos JSON?
//  O JSON é usado para trocar dados entre sistemas. Por exemplo, quando um 
// site busca informações em um servidor, os dados geralmente vêm em formato JSON.

// Exemplo:


let respostaDoServidor = '{"nome":"João", "idade":30}';

// Isso é uma string! Para transformar em objeto e poder acessar normalmente, usamos:


let objeto = JSON.parse(respostaDoServidor); 

console.log(objeto.nome); // Resultado: João

// Se quisermos fazer o contrário — transformar um objeto em texto JSON — usamos:


let pessoa = { nome: 'João', idade: 30 }; 

let json = JSON.stringify(pessoa); 

console.log(json); // Resultado: '{"nome":"João","idade":30}'

/*
        JSON é universal
    JSON é usado por praticamente todas as linguagens de programação modernas, o que torna ele 
    perfeito para integrar diferentes sistemas (um site em JavaScript conversando com 
    um backend feito em Python, por exemplo).
    
    Resumo prático
    Objeto = estrutura viva no código JavaScript.
    
    JSON = formato textual que representa dados.
    
    Para converter JSON em objeto, usamos JSON.parse().
    
    Para converter objeto em JSON, usamos JSON.stringify().
    
    Saber trabalhar com JSON é essencial no dia a dia de quem programa, principalmente para 
    quem mexe com APIs, bancos de dados ou armazenamento de dados no navegador. E o melhor: 
    você já sabe a base — objetos! Agora é só treinar essas conversões e continuar praticando.
*/