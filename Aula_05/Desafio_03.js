
// - Soma de Números Pares
//● Desenvolva um programa que peça ao usuário para inserir números
//inteiros. Use um loop while para calcular a soma dos números
//pares inseridos pelo usuário. Pare a entrada quando o usuário
//inserir 0 e exiba a soma total.


let somaPares = 0; 
const numeros = [8, 10, 1, 0, 13]; 

// Loop para calcular a soma dos números pares inseridos
for (let i = 0; i < numeros.length; i++) {
  const numeroInseridos = numeros[i];

  // Verifica se o número inserido é 0
  if (numeroInseridos === 0) {
    break; // sendo ele finaliza
  }

  // Verifica se o número é par
  if (numeroInseridos % 2 === 0) {
    somaPares += numeroInseridos; // Se for par, adiciona o número à soma dos pares
  }
}

console.log("A soma dos números pares inseridos é:", somaPares); // Exibe a soma total dos números pares inseridos
