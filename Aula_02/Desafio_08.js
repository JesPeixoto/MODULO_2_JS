
// Desafio 08


const idades1 = [15, 22, 17, 20, 30, 12]

const indice = idades1.reverse().findIndex(idade => idade >= 18)

const lastindex18orbigger = indice !== -1 ? idades1.length - 1 - indice : -1

console.log("O índice do primeiro elemento maior ou igual a 18 é:", lastindex18orbigger)
