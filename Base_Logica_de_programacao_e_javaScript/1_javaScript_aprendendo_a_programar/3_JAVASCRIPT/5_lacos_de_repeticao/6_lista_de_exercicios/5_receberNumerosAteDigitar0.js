// 5. Receber números até digitar 0
// Simule a digitação de números usando uma variável numeroDigitado.
// Use um do...while para repetir a execução até que o valor seja 0.
// Conte quantos números diferentes de zero foram digitados e mostre o total no console ao final.
// 
// 📌 Observação:
// Considere que o valor de numeroDigitado é alterado manualmente a cada repetição.

let numeroDigitado = 5;
let contador = 0;
do{
    if(numeroDigitado !== 0){   
        contador++
    } 
        numeroDigitado--;
}while(numeroDigitado !== 0);

console.log(contador)
 