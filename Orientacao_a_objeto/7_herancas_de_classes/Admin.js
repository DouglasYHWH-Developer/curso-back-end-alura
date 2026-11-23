import User from "../6_classes_e_herancas/User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo){
         super(nome, email, nascimento, role, ativo)
    };

//    exibirInfos(){
//        const infos = super.exibirInfos()
//        return `admin - ${infos}`
//    };

    criarCurso(nomeCurso, qtdVagas){
        return `Curso ${nomeCurso}, criado com ${qtdVagas} vagas.`
    };

    

}

//const novoAdmin = new Admin("Rodrigo", "r@r.com", "2024-01-014");

//console.log(novoAdmin.exibirInfos());
//console.log(novoAdmin.exibirInfos());
//console.log(novoAdmin.criarCurso('JavaScript', 20))