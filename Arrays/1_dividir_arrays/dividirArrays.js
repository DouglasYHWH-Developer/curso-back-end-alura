// Divida os alunos da sala abaixo em duas listas com a mesma quantidade de estudantes:

const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 
    'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

// pegar a metade de um array. Primeira metade
const sala1 = listaEstudantes.slice(0, listaEstudantes.length / 2)
console.log(sala1)

// Segunda metade
const sala2 =  listaEstudantes.slice(listaEstudantes.length / 2)
console.log(sala2)

// os slice recebe 2 parâmetros:
// o primeiro é o inicio do array onde queremos cortar
// o segundo é opcional e determina o fim do corte.