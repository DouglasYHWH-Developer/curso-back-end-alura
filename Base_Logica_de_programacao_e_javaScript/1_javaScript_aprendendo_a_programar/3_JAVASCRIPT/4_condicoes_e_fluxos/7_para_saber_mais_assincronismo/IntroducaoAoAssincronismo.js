/*
        Introdução ao Assincronismo
    O assincronismo é um dos pilares que permite ao JavaScript executar operações sem 
    travar a execução do código. Em uma linguagem de thread única, essa abordagem 
    possibilita que tarefas de longa duração, como requisições de rede ou operações de 
    leitura e escrita, sejam realizadas em segundo plano, garantindo que a aplicação continue responsiva.

    O  Papel do Event Loop
    No coração do mecanismo assíncrono do JavaScript está o Event Loop. Quando uma 
    operação assíncrona é iniciada (por exemplo, utilizando uma função como setTimeout), 
    ela é delegada para a API do ambiente (navegador ou Node.js) e, após ser concluída, 
    sua callback é enviada para uma fila de tarefas. O Event Loop monitora essa fila e 
    insere essas tarefas na pilha de execução quando esta estiver disponível.
*/

// Essa organização assegura que as operações não bloqueiem o fluxo principal do código. Por exemplo:

console.log('Início');

setTimeout(() => {
  console.log('Tarefa assíncrona concluída');
}, 1000);

console.log('Fim');

// No exemplo acima, mesmo que o setTimeout seja configurado para esperar 1 segundo, as mensagens 
// "Início" e "Fim" serão exibidas imediatamente, e a mensagem final será mostrada após o intervalo.

/*
        Promises, Callbacks e Async/Await
    Existem diferentes abordagens para lidar com operações assíncronas:

    Callbacks: forma tradicional de lidar com assincronismo. Em cenários com muitas operações encadeadas, 
    podem levar ao famoso "callback hell", dificultando a manutenção e leitura do código.

    Promises: introduzem uma forma mais legível de encadear operações assíncronas. Uma Promise pode estar 
    em um dos estados: pendente, resolvida ou rejeitada, permitindo lidar com múltiplos casos de forma mais escalável.

    Async/Await: considerado um "açúcar sintático" para Promises. Com async e await, é possível escrever 
    código assíncrono de forma mais parecida com código síncrono, facilitando a leitura e o tratamento de erros com blocos try/catch.
*/
// fetch - trazer, buscar, ir buscar
// then - então, depois
// try - tentar
// catch - capturar

// Exemplo com Promises e Async/Await

// Usando Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Dados obtidos');
    }, 1000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Usando Async/Await
async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData();

/*
    Considerações Finais
Cada abordagem possui suas vantagens e desvantagens. Enquanto callbacks podem ser mais 
simples para tarefas isoladas, Promises e async/await oferecem um fluxo de controle mais 
claro e manejável, especialmente em operações complexas.
Essa flexibilidade é fundamental para desenvolver aplicações robustas e escaláveis no ecossistema JavaScript.



*/