const frutas = ['maça', 'banana', 'goiaba'];

const maisFrutas = ['uva', 'morango', 'kiwi'];

const clone = [...frutas];

const todasAsFrutas = [...frutas, ...maisFrutas]

frutas.push('pitanga');

console.log(frutas);
console.log(maisFrutas);
console.log(clone);
console.log(todasAsFrutas)

const [primeira, segunda, ...restante ] = todasAsFrutas;

console.log(primeira);
console.log(segunda);
console.log(restante);