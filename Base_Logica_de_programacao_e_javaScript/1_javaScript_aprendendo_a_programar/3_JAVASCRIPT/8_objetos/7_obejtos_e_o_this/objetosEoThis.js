/*
    Agora que você já conhece o que são objetos em JavaScript, está na hora de revisitar 
    um velho conhecido: o this. Mas dessa vez, vamos ver como ele se comporta dentro de objetos.

    Relembrando: o que é this?
    No JavaScript, this é uma palavra-chave especial que representa quem está chamando 
    a função. Isso pode mudar dependendo de onde e como a função foi executada.

    Usando this dentro de objetos
    Quando usamos funções dentro de objetos (chamadas de métodos), o this aponta para o 
    próprio objeto. Isso é muito útil, pois permite que a função acesse outras propriedades do mesmo objeto.
*/

// Veja um exemplo:


let pessoa = { 

    nome: 'Maria',
    idade: 28,
    apresentar: function () {
        console.log('Olá, meu nome é ' + this.nome);
    }
};

pessoa.apresentar(); // Resultado: Olá, meu nome é Maria

/*
    No exemplo acima, a função apresentar está dentro do objeto pessoa. Quando chamamos pessoa.apresentar(), 
    o this se refere ao próprio objeto pessoa, permitindo acessar this.nome e retornar "Maria".

    Por que não usamos o nome do objeto diretamente?
    Você poderia pensar: “Por que não usar pessoa.nome dentro da função?”

    Boa pergunta! Porque ao usar this.nome, o método se torna reutilizável, mesmo que o nome do objeto mude. Veja:
*/

let outraPessoa = { 

    nome: 'João',
    apresentar: pessoa.apresentar 

}; 

outraPessoa.apresentar(); // Resultado: Olá, meu nome é João

// O método foi reaproveitado, e o this continuou funcionando corretamente!

/*
    O cuidado com Arrow Functions
    Arrow Functions não têm seu próprio this. Por isso, elas não são recomendadas 
    como métodos dentro de objetos quando você precisa acessar propriedades usando this.

    Veja o que acontece se você usar uma Arrow Function:
*/


let pessoa = {

    nome: 'Ana',
    apresentar: () => {
        console.log('Olá, meu nome é ' + this.nome);
    }

};

pessoa.apresentar(); // Resultado: Olá, meu nome é undefined

/*
    Isso acontece porque o this da Arrow Function não aponta para o objeto pessoa, 
    mas sim para o escopo onde o objeto foi criado (geralmente, o escopo global).

    Resumo prático
    Dentro de métodos em objetos, use funções tradicionais para garantir que this funcione corretamente.
    
    O this aponta para o objeto que chamou o método.
    
    Evite Arrow Functions quando precisar acessar propriedades do próprio objeto via this.
    
    Compreender como o this se comporta dentro de objetos é fundamental para escrever código reutilizável 
    e confiável. Agora que você já entende esse comportamento, está um passo mais perto de dominar JavaScript!
*/