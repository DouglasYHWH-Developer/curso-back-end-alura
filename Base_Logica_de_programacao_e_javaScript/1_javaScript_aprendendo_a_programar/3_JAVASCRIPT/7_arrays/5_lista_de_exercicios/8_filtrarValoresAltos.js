//  8. Filtrar valores altos
//  Crie um array com idades. Use filter para retornar apenas as 
// idades maiores ou iguais a 18 e exiba o resultado.


const idades = [1, 18, 25, 10, 30, 8, 17];

const maiorIdade = idades.filter((valor) =>{
    if(valor >= 18){
        return valor;

        // return valor >= 18;
    }
})

console.log(maiorIdade);