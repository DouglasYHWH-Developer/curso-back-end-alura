const idadeDouglas = 36;
const minhaIdade = 35;


// Operador de igualdade == - compara apenas o valor: 36 == "36" true
// operador de igualdade estrita === valor e tipo 36 === "36" false
// operador ' maior que' >
// operador ' menor que' <
// operador ' diferente que' != - compara apenas se o valor é diferente: 36 != "36" false (JavaScript converte e vê que são iguais, então não são diferentes)
// operador ' estritamente diferente que' !== - compara se o valor e o tipo são estritamente diferente: 36 !== "36" true (valores diferentes)
// operador ' maior ou igual' >=
// operador ' menor ou igual' <=
const comparacao = idadeDouglas > minhaIdade;

console.log('São iguais? ', comparacao)