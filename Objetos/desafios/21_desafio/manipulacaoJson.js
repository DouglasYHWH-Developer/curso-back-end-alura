/*
  2 - Crie um array de objetos JavaScript representando informações de filmes. Cada objeto deve conter pelo menos as seguintes propriedades:

id (number): identificador do filme.
titulo (string): título do filme.
diretor (string): nome do diretor.
anoLancamento (number): ano de lançamento do filme.

Crie uma função chamada filtrarFilmesPorAno que receba um ano como 
parâmetro e retorne um novo array contendo apenas os filmes lançados nesse ano.

Utilize a função para filtrar os filmes lançados em um ano específico e 
imprima no console o array resultante. Em seguida, refaça a operação com outro ano.

*/

const catalogoFilmes = [
    { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
    { id: 2, titulo: "Jurassic Park", diretor: "Steven Spielberg", anoLancamento: 1993 },
    { id: 3, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 }
]

function filtraFilmesPorAno(ano){
  return catalogoFilmes.filter((filme) => filme.anoLancamento === ano)
}

const FilmeDosAnos = filtraFilmesPorAno(2010);

console.log(FilmeDosAnos)