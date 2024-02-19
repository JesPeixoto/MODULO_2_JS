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