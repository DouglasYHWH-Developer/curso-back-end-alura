//  7. Trabalhando com datas
//  Crie uma variável com a data atual e exiba o dia, mês e ano formatados.

const dataAtual = new Date();
console.log(`Ano: ${dataAtual.getFullYear()} mês: ${dataAtual.getMonth() + 1} Dia: ${dataAtual.getDate()}`);