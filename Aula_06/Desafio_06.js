
// Desafio 07 

/* Faça um mecanismo de busca dentro de um array.
[1,2,3,4,5,6,7,8,9,10]
Achei o número 7 */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

const busca = numeros.find((numero) => numero === 5); 

console.log(`Número ${busca} encontrado!`);
