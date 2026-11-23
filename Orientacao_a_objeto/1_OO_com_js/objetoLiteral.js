const user = {
    nome: 'Juliana',
    email:'j@j.com',
    nascimento:'2024-01-01',
    role:'estudante',
    ativo: true, //por padrão
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

//user.exibirInfos()


//const exibir = user.exibirInfos;
//exibir(); // undefined undefined, pois a função exibirInfo perdeu o contexto do obketo user

// seria a mesma coisa de criar uma função assim:
 const exibir = function(){
     console.log(this.nome, this.email)
 }

//ou seja, percaba que não existe mais a conexão com o objeto user
// bind  = amarrar
// Agora vou criar um contexto pra ela;

const exibirNome = exibir.bind(user);
exibirNome()