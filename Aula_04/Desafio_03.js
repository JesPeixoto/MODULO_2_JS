

//- Determinação do Maior Número
//● Escreva um programa que receba três números como entrada e determina o maior deles. Imprima o número mais alto.

let numero1 = 9;
let numero2 = 7;
let numero3 = 13;

if (numero1 >= numero2 && numero1 >= numero3) {
  console.log(`O número mais alto é ${numero1}`);
} else if (numero2 >= numero1 && numero2 >= numero3) {
  console.log(`O mais alto é ${numero2}`);
} else {
  console.log(`O mais alto é ${numero3}`);
}
