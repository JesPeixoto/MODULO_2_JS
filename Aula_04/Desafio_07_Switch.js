
// - Verificação de Números Pares e Ímpares
//● Escreva um programa que recebe um número como entrada e verifica
//se é par ou ímpar. Imprima "É par" se for par e "É ímpar" se for ímpar. (Usar switch Case)


let numero = 13;

switch (numero % 2) {
  case 0:
    console.log(`O número ${numero} é par`);
    break;
  case 1:
    console.log(`O número ${numero} é ímpar`);
    break;
  default:
    console.log("O número deve ser inteiro para ser considerado par ou ímpar");
    break;
}

