const agora = new Date();

console.log(agora);
console.log('Ano: ', agora.getFullYear());
console.log('Mês: ', agora.getMonth() + 1); // de 0 a 11
console.log('Dia: ', agora.getDate()); 
console.log('Hora: ', agora.getHours()); 
console.log('Minutos: ', agora.getMinutes()); 

const  nascimento = new Date('1994-03-22:18:00.000Z');

console.log(nascimento); 

console.log('Data formatada (BR):', nascimento.toLocaleDateString('pt-BR'))
console.log('Data formatada (USA):', nascimento.toLocaleDateString('en-US'))