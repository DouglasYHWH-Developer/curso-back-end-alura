//  6. Mensagens personalizadas com forEach
//  Crie um array com nomes de usuários. Use forEach para 
// imprimir "Olá, [nome]!" para cada um.

const nomes = ['Sanji', 'Ussop', 'Naruto', 'Luffy', 'Zoro'];

nomes.forEach((valor, i) => {
    console.log(`Olá, ${valor}!`)
})