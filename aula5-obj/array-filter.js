// Filter, map, reduce
// Retorne numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(numeros => numeros >= 10); 
// console.log(numerosFiltrados);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a
const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Leticia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
];
const nome5 = pessoas.filter(pessoas => pessoas.nome.length >= 5);
// console.log(nome5); 
const maisde50 = pessoas.filter(pessoas => pessoas.idade > 50)
// console.log(maisde50);
const terminaComA = pessoas.filter(pessoas => pessoas.nome.toLowerCase().endsWith('o'));
console.log(terminaComA);