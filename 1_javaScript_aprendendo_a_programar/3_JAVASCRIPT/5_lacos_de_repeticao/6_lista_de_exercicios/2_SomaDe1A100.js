
// 2. Soma de 1 a 100
// Some todos os números de 1 a 100. Mostre o resultado no final com uma mensagem explicativa

let total = 0;
//let i = 1
for(let i = 1; i <= 10; i++){
    console.log(`${total} + ${i} = ${total + i}`)
    total = total + i;
}

//do{
//    console.log(`${total} + ${i} = ${total + i}`); // tentei de várias formas
//    total = total + i;
//    i++;
//}while(i <= 10)