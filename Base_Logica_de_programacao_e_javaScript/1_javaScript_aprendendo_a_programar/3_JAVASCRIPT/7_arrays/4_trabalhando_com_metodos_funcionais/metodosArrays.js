const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter retorna um array novo, sem modoficar o original
const numerosPares = numeros.filter((numero)=>{
    return numero % 2 === 0;
})

console.log(`Todos os números: `, numeros);
console.log(`Todos os números pares: ${numerosPares}`);

const numerosImpares = numeros.filter((numero)=>{
    return numero % 2 !== 0;
})

console.log(`Todos os números pares: ${numerosImpares}`);


// map retorna um novo array com os elementos transformados.
// retorna um novo array.
const numerosDobrados = numeros.map((numero) => {
    return numero * 2
})
console.log('Nossa lista mapeada ',numerosDobrados)