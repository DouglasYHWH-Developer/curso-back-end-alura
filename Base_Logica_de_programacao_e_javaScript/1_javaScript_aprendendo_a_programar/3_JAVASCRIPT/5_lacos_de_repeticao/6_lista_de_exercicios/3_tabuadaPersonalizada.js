// 3. Tabuada personalizada
// Peça um número e mostre a tabuada desse número (de 1 a 10) usando um for.

let seuNumero = 7;
let total = 0;
for(let contador = 1; contador <= 10; contador++){
    total = seuNumero * contador;
    console.log(`${seuNumero} * ${contador} = ${total}`)
}