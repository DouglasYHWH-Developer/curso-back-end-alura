// Adicionr ponto extra

//Um aluno recebeu um ponto extra em suas notas.
// adicione esse ponto nas nogtas da seguinte lista.

const notas = [10, 9.5, 8, 7, 6];
const notasAtualizadas = notas.map((nota) => { // notas.map((nota) => nota + 1 >= 10 ? 10 : nota + 1)
    if(nota + 1 >= 10){
        return 10;
    }else{
        return nota + 1;
    }
})

console.log(notasAtualizadas)