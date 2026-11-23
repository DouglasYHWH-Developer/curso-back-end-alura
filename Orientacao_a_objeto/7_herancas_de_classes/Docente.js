import User from "../6_classes_e_herancas/User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = "docente", ativo){
         super(nome, email, nascimento, role, ativo);
    };

//     exibirInfos(){
//        const infos = super.exibirInfos()
//        return `docente - ${infos}`
//    };


    aprovarEstudante(estudante, curso){
        return `Nome: ${estudante}, aprovado em ${curso}, responsável ${this.nome} .`
    };

    reprovarEstudante(nota){
        if (nota <= 7){
            return 'reprovado'
        }
    }
}

const novoDocente = new Docente("Ana", "a@a.com", '2024-01-01');
//console.log(novoDocente.aprovarEstudante('Juliana', 'JavaScript'));