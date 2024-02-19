
//Jogo de Adivinhação com Limite
//● Modifique o jogo de adivinhação do Desafio 4 para limitar o
//número de tentativas. Se o usuário não adivinhar o número dentro
//de um determinado número de tentativas (por exemplo, 5 tentativas), o programa deve encerrar e informar o número correto.


const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas;
let contadorTentativas = 0;
const limiteTentativas = 5;
while (contadorTentativas < limiteTentativas) {
    tentativas = parseInt(prompt("Adivinhe o número (entre 1 e 100):"));
  contadorTentativas++;
  if (tentativas === numeroAleatorio) {
    console.log("Parabéns! Você acertou o número!");
    break; 
  } else if (tentativas < numeroAleatorio) {
    console.log("Tente um número maior.");
  } else {
    console.log("Tente um número menor.");
  }
}
if (contadorTentativas === limiteTentativas) {
  console.log(`Você atingiu o limite de ${limiteTentativas} tentativas. O número correto era ${numeroAleatorio}.`);
}