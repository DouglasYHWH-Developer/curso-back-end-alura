/*
    Durante a aula aprendemos como funciona o operador new em conjunto com funções construtoras. 
    Embora as funções construtoras não sejam mais tão utilizadas desde a implementação da 
    sintaxe de classe, ainda é uma forma aceita de se trabalhar com orientação a objetos 
    em JavaScript e não está descontinuada.

    Existe também um outro método para a criação de objetos em JavaScript, utilizando o Object.create().

    Vamos começar com a mesma função construtora que praticamos em vídeo:
*/

function User(nome, email) {
 this.nome = nome
 this.email = email

 this.exibirInfos = function() {
   return `${this.nome}, ${this.email}`
 }
}

// Em seguida, usamos o objeto User como protótipo para criar um outro objeto 
// (Admin) através de sua própria função construtora:

function Admin(role) {
 User.call(this, 'Juliana', 'j@j.com')
 this.role = role || 'estudante'
}

/*
    Note que usamos o método call() para chamar a função User dentro de Admin. 
    O this aqui vai se referir ao contexto de User que será “aproveitado” dentro de Admin.

Nos parâmetros seguintes passamos de forma “hard coded” os parâmetros que temos que 
passar para User (nome e email), apenas como exemplo.

Agora podemos usar o Object.create() para passar a propriedade prototype de User 
como protótipo de Admin. Assim, é possível usar o método exibirInfos() que existe 
em User mas não existe em Admin:
*/

// Admin.prototype = Object.create(User.prototype)
// const juliana = new Admin('admin')
// console.log(juliana.exibirInfos())
// console.log(juliana.role);

// Vamos praticar com outro exemplo, a partir de um objeto ao invés de uma função construtora:

const user = {
 exibirInfos: function(user) {
   return `${user.nome}, ${user.email}`
 }
}

// O JavaScript sempre tem que criar o protótipo a partir de um objeto, então criamos um objeto.

//Agora repetimos o processo, porém em vez de usar .prototype para criar a nova instância, 
// podemos passar o próprio objeto user que acabamos de definir:

const juliana = Object.create(user)
console.log(juliana.exibirInfos({nome: 'Juliana', email: 'j@j.com'}))

// Inclusive podemos testar se user entrou mesmo como protótipo usando o método isPrototypeOf, que retorna true ou false:
console.log(user.isPrototypeOf(juliana)) //true

// O objeto foi criado a partir do protótipo, porém se tentarmos acessar alguma propriedade, 
// como nome, ou email, não vamos conseguir:

console.log(juliana.nome, juliana.email) //undefined

// É possível fazer desta forma:

juliana.nome = 'Juliana'
juliana.email = 'j@j.com'
console.log(juliana.nome, juliana.email)

// Mas essa forma não parece muito boa nem prática.
// É possível perceber que essa implementação do Object.create() é um pouco estranha. 
// Caso o objeto precise ser iniciado com propriedades próprias, como fizemos na função 
// construtora (e que é chamado justamente de “construtor” em orientação a objetos), como funcionaria?
// O Object.create() não tem um construtor. O padrão mais comum é uma função init ou 
// constructor que deve ser criada manualmente:

const user1 = {
 init: function(nome, email) {
   this.nome = nome
   this.email = email
 },
 exibirInfos: function() {
   return `${this.nome}, ${this.email}`
 }
}

// A partir daí é possível usar user como protótipo de um novo objeto:

const juliana = Object.create(user)
juliana.init('Juliana', 'j@j.com')
console.log(juliana.exibirInfos())