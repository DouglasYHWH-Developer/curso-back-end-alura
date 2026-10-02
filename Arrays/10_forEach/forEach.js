const notas = [10, 6.5, 8, 7.5];

let soma = 0;

notas.forEach((nota) => {
    soma += nota;
})

const media = soma / notas.length

console.log(soma)
console.log(media)