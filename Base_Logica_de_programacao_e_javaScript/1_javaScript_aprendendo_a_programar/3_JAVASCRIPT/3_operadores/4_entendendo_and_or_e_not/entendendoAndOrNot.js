const idade = 17
const maiorIdade = idade >= 18;
const possuiCnh = false;


// Operadores Lógicos
// AND - &&
// OR - ||
// NOT - !
// Eles combinam ou modificam resultados booleanos.

const podeDirigir = maiorIdade && possuiCnh; 
console.log('Pode dirigir? ', podeDirigir)

const podeViajarSozinha = maiorIdade || possuiCnh;
console.log('Pode viajar sozinha? ', podeViajarSozinha)

const precisaDeAcompanhante = !maiorIdade;
console.log('Precisa de acompanhante? ', precisaDeAcompanhante)

maiorIdade && possuiCnh || !precisaDeAcompanhante;