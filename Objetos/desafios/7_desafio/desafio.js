/*
   1 - Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um objeto chamado pessoa que 
   represente informações sobre uma pessoa. Este objeto deve ter as seguintes propriedades:

nome (string): Nome da pessoa.
idade (number): Idade da pessoa.
solteiro (boolean): Indicador de estado civil (true se solteiro, false se casado).
hobbies (array): Lista de hobbies da pessoa.
Adicione valores a cada propriedade do objeto pessoa. Use valores fictícios para simular uma pessoa específica.

Crie uma função chamada mostrarInfoPessoa que aceite o objeto pessoa como parâmetro e imprima todas as informações da pessoa no console, incluindo o tipo de dado de cada propriedade.

No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa passando o objeto pessoa como argumento.

Dica: você pode usar um método de array para retirar os elementos dos colchetes e exibi-los como texto.
*/


const estudante = {
    nome: 'Jose Silva',
    idade: 32,
    solteiro: true,
    hobbies: ['Tocar Violão', ' Comer comida japoensa']

}

/*
    2 - Adicione ao objeto pessoa uma nova propriedade chamada endereco.
    Esta propriedade deve ser um objeto representando o endereço da pessoa, com as seguintes subpropriedades:

rua (string): nome da rua.
cidade (string): nome da cidade.
estado (string): nome do estado.
Preencha as subpropriedades do objeto endereco com valores fictícios.

Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.

No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações atualizadas, incluindo o endereço, são exibidas corretamente no console.
*/

estudante.endereco = {
    rua: 'Terezina das coves',
    cidade: 'Paracatu',
    estado: 'SP'
}

function mostrarInfoPessoa(infoPessoa){
        console.log(infoPessoa.nome, '-', typeof infoPessoa.nome)
        console.log(infoPessoa.idade, '-', typeof infoPessoa.idade)
        console.log(infoPessoa.solteiro, '-', typeof infoPessoa.solteiro)
        console.log(infoPessoa.hobbies.join(','), '-', typeof infoPessoa.hobbies)
        console.log(infoPessoa.endereco.rua, '-', typeof infoPessoa.endereco.rua)
        console.log(infoPessoa.endereco.cidade, '-', typeof infoPessoa.endereco.cidade)
        console.log(infoPessoa.endereco.estado, '-', typeof infoPessoa.endereco.estado)
                  
}

mostrarInfoPessoa(estudante)



