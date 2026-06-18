const saudacao = (nome) => {
    console.log('Olá', nome);
}
saudacao('Douglas')
//const saudacao = nome => console.log('Olá', nome); funções arrow com um parametro pode ser simplificado dessa forma


const calcularDobro = (numero) => {
    return numero * 2
}

// const calcularDobro = numero => numero * 2; // funções arrow com um parametro pode ser simplificado dessa forma

const numeroDobrado = calcularDobro(4)
console.log('O dobro de 4 é ', numeroDobrado)