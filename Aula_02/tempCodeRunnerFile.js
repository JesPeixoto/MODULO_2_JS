const notas = [8, 9, 7, 5, 10, 6];

notas.pop();
notas.shift();

const somaNotas = notas[0] + notas[1] + notas[2] + notas[3];
const mediaAritmetica = somaNotas / notas.length;

console.log(mediaAritmetica);
