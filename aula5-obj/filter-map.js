// Dobre os números 
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numeroDobro = numeros.map(numeros => numeros * 2);
// console.log(numeroDobro);

// Para cada elemento
// Retorne uma string com o nome da pessoa
// Remova apenas a chave 'Nome' do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Leticia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
];
const nome = pessoas.map(pessoas => ({Nome: pessoas.nome}))
// console.log(nome);
const idade = pessoas.map(pessoas => ({idade: pessoas.idade}))
// // console.log(idade);

// const comId = pessoas.map(function(obj, indice){
//     const newObj = {...obj}
//     newObj.id = indice + 1;
//     return newObj
// });

const comId = pessoas.map((obj, indice) => ({...obj, id: indice + 1}));
console.log(comId);