const idade = 18;

//if(idade >= 18){ // se
//    console.log("É maior de idade");
//}else{ // se não
//    console.log("É menor de idade");
//}


idade >= 18 ? console.log("É maior de idade") : console.log("É menor de idade");


const notaDoAluno = 9;

//if(notaDoAluno >= 9){
//    console.log("Excelente")
//}else if(notaDoAluno >= 7){
//    console.log("Bom")
//}else if(notaDoAluno >= 4){
//    console.log("Médio")
//}else{
//    console.log("Nota ruim")
//}

notaDoAluno >= 9 ? console.log("Excelente") : 
    notaDoAluno >= 7 ? console.log("Bom") :
        notaDoAluno >= 4 ? console.log("Médio") : 
            console.log("Nota Ruim");