//3 - Dado o array frutas contendo frutas que desejamos comprar na feira:
//Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, 
// adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];

frutas.splice(2, 1, 'Kiwi', 'Pêssego');

console.log(frutas);