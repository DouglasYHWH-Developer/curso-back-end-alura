export default class User{
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }

    get nome(){ 
        return this.#nome
    }

    set nome(novoNome){
        if(novoNome === ""){
            throw new Error('formato do nome não é válido')
        }
        this.#nome = novoNome;
    }

    get email (){ 
        return this.#email
    }

    set email(novoEmail){
        this.#email = novoEmail
    }

    get nascimento (){ 
        return this.#nascimento
    }

     set nascimento(novoNascimento){
        this.#nascimento = novoNascimento
    }

    get role (){ 
        return this.#role
    }

     set role(novoRole){
        this.#role = novoRole
    }

    get ativo (){ 
        return this.#ativo
    }

     set ativo(novoAtivo){
        this.#ativo = novoAtivo
    }

    #montaObjUser(){
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    }

    
    // exibirInfos(){
    //     
    //     return `${this.nome}, ${this.email}`
    // };
    exibirInfos(){
        if(this.role === "estudante"){
            return `dados estudante: ${this.nome}`
        }
        if(this.role === "docente"){
            return `dados docente: ${this.nome}, ${this.role}`
        }
        if(this.role === "admin"){
            return `dados admin: ${this.nome}, ${this.email}`
        }
    }
    
    static exibirInfosGenericas(nome, email){
        return `${nome}, ${email}`
    }
};


//const novoUser = new User('Juliana', 'j@j.com', '2024-01-01');
//console.log(novoUser.exibirInfos());
//console.log(novoUser.exibirInfos());

//console.log(User.prototype.isPrototypeOf(novoUser));

