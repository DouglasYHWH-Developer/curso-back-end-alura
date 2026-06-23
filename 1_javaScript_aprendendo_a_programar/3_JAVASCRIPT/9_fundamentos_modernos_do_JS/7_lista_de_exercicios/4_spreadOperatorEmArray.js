//  4. Spread operator com arrays
//  Crie dois arrays de frutas e combine-os usando o operador spread.

const frutasTropicais = ["manga", "abacaxi", "maracujá"];

const frutasCitricas = ["laranja", "limão", "toranja"];

const todasAsFrutas = [...frutasCitricas, ...frutasTropicais];
console.log(todasAsFrutas)