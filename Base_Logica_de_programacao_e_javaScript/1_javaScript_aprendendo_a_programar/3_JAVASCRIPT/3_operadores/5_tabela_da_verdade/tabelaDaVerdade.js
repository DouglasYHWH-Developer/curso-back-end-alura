/*
        A tabela da Verdade   
    A tabela verdade é uma ferramenta que usamos na lógica para entender como funcionam as expressões booleanas. 
    Uma expressão booleana pode ter apenas dois resultados possíveis: verdadeiro (true) ou falso (false). 
    É importante dominar esse conceito porque ele é a base de decisões dentro dos programas que você vai escrever.

    Operadores lógicos principais
    Antes de montar uma tabela verdade, precisamos entender quais são os principais operadores lógicos que usamos no JavaScript:

    E (&&): Retorna verdadeiro apenas se todas as condições forem verdadeiras.

    OU (||): Retorna verdadeiro se pelo menos uma condição for verdadeira.

    NÃO (!): Inverte o valor lógico, transforma verdadeiro em falso e vice-versa.

    Vamos ver como cada um funciona em detalhes.

    Operador E (&&)
    Veja a tabela verdade para o operador lógico E:

| Condição A | Condição B | Resultado A && B |

| ---------- | ---------- | ---------------- |

| true | true | true ✅ |

| true | false | false ❌ |

| false | true | false ❌ |

| false | false | false ❌ |
*/

// Exemplo:


let maiorIdade = true; 

let possuiDocumento = false; 

 

if (maiorIdade && possuiDocumento) { 

console.log('Pode entrar na festa'); 

} else { 

console.log('Não pode entrar na festa'); 

} 

// Resultado: Não pode entrar na festa

/*
    Operador OU (||)
Agora veja a tabela verdade para o operador lógico OU:

| Condição A | Condição B | Resultado A || B |

| ---------- | ---------- | ------------------ |

| true | true | true ✅ |

| true | false | true ✅ |

| false | true | true ✅ |

| false | false | false ❌ |
*/

// Exemplo:


let temCartaoCredito = false; 

let temDinheiro = true; 

 

if (temCartaoCredito || temDinheiro) { 

console.log('Pode fazer a compra'); 

} else { 

console.log('Não pode fazer a compra'); 

} 

// Resultado: Pode fazer a compra

/*
    Operador NÃO (!)
    Veja como funciona o operador lógico NÃO:

| Condição | Resultado !Condição |

| -------- | ------------------- |

| true | false ❌ |

| false | true ✅ |
*/

// Exemplo:


let estaChovendo = true; 

 
if (!estaChovendo) { 

console.log('Pode sair sem guarda-chuva'); 

} else { 

console.log('Leve o guarda-chuva'); 

} 

// Resultado: Leve o guarda-chuva

// Combinando operadores
// Você pode combinar esses operadores para criar condições mais complexas. Veja este exemplo:


let idade = 20; 

let possuiIngresso = true; 

let entradaPermitida = (idade >= 18 && possuiIngresso); 

 

if (entradaPermitida) { 

console.log('Entrada permitida!'); 

} else { 

console.log('Entrada não permitida!'); 

} 

// Resultado: Entrada permitida!

/*
    Por que usar a tabela verdade?
    A tabela verdade ajuda você a visualizar claramente o resultado das suas expressões lógicas. 
    Sempre que tiver dúvida sobre como uma expressão será avaliada, monte rapidamente uma tabela 
    verdade como as que vimos.

    Com essa ferramenta, seu código ficará mais claro, você entenderá melhor as condições
     que está criando, e evitará bugs ou comportamentos inesperados.
*/