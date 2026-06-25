// spread operador ' ... ' é usado para espalhar as propriedades de um objeto
// para criar uma cópia identica. Ele cria um novo objeto a partir do objeto
//  q está sendo epaalhado. ex.: ... camila1, faz uma cópia exata do camila1 que atribuímos a camila2

let camila1 = {
    nome: 'Camila',
    idade: 29,
    profissao: 'Desenvolvedora'
}

const camila2 = {...camila1}

camila2.idade = 30;

console.log(camila1);
console.log(camila2);

camila1 = {
    ...camila2,
    profissao: 'Desenvolvedora Senior',
    possuiCNH: true
}
console.log(camila1);

// REST operator

const {nome, ...restante} = camila1;
console.log(nome);
console.log(restante);