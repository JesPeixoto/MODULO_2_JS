
// - Adivinhe o Número
//● Crie um programa que gere um número aleatório entre 1 e 100. Em
//seguida, peça ao usuário para adivinhar o número. Use um loop
//while para continuar pedindo ao usuário que adivinhe até que ele
//acerte o número. Forneça dicas informando se o número é maior ou menor


const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
while (true) {
  tentativas++;
  const palpite = parseInt(prompt("Adivinhe o número (entre 1 e 100):"));
  if (palpite === numeroAleatorio) {
    console.log(`Parabéns! Você acertou o número em ${tentativas} tentativa(s)!`);
    break; 
  } else if (palpite < numeroAleatorio) {
    console.log("Tente um número maior.");
  } else {
    console.log("Tente um número menor.");
  }
}
