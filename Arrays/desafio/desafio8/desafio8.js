/*
    3 - Considere duas listas de cores:

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.
*/


const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];



// transformei o programa em uma função

function cores(...cor){
  
    const listaInteira = [].concat(...cor); 
    return [...new Set(listaInteira)]   
}

console.log(cores(coresLista1, coresLista2))

// poderia ter ficado assim: return [...new Set([].concat(...cor))];