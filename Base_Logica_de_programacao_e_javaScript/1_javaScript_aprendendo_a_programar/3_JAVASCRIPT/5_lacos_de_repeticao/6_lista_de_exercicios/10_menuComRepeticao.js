
// 10. Menu com repetição
// Crie uma variável opcao.
// Use um do...while para exibir repetidamente as opções:
// 
// 1 - Ver saldo
// 2 - Fazer depósito
// 3 - Sair
// O menu deve continuar sendo exibido até que a opção seja 3.
// Mostre no console a ação correspondente a cada opção.
// 
// 📌 Observação:
// A escolha da opção deve ser simulada por valores atribuídos à variável opcao.

let opcao = 2;
//let contador = 0

do{
  if(opcao === 1){
    console.log('1 - Ver saldo')
  }else if(opcao === 2){
    console.log('2 - Fazer depósito')
  }else if(opcao === 3){
    console.log('3 - Sair')
  }
//   switch(opcao){
//     case 1: 
//       console.log('1 - Ver saldo');
//       break;
//     case 2: 
//       console.log('2 - Fazer depósito');
//       break;
//     default: 
//       console.log('3 - Sair')
//       break;
//  }
//  contador++;
  opcao++
}while(opcao <= 3)

// solução do professor:

/*
// 10. Menu com repetição 

let opcao;
let passo = 0;

do {
  // simulação da escolha do usuário
  if (passo === 0) {
    opcao = 1;
  } else if (passo === 1) {
    opcao = 2;
  } else {
    opcao = 3;
  }

  if (opcao === 1) {
    console.log("Ver saldo");
  } else if (opcao === 2) {
    console.log("Fazer depósito");
  } else if (opcao === 3) {
    console.log("Sair");
  }

  passo++;
} while (opcao !== 3);


*/