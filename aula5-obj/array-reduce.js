// Some todos os números (Reduce)
//Retorne um array com numeros pares (Filter)
//Retorne um array com o dobro dos valores (Map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const soma = numeros.reduce((acumulador, valor) => (acumulador += valor))
// console.log(soma);

const numerosPares = numeros.filter(numeros => (numeros % 2 === 0))
// console.log(numerosPares);

const dobroValor = numeros.map(numeros => numeros * 2);
// console.log(dobroValor);

// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Leticia', idade: 19},
    { nome: 'Rosana', idade: 64},
    { nome: 'Wallace', idade: 47},
];
// const maisVelha = pessoas.reduce(function(acumulador, valor) {
//     if (acumulador.idade > valor.idade) return acumulador;
//     return valor;
// });

const maisVelha = pessoas.reduce((acumulador, valor) => acumulador.idade > valor.idade ? acumulador : valor);
console.log(maisVelha);