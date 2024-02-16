
// - Verificação de Triângulo
//● Crie um programa que recebe três comprimentos de lados de um triângulo como entrada e determina se eles formam um triângulo
//equilátero (Todos os lados são iguais), isósceles (Dois lados
//são iguais) ou escaleno (Se nada é igual). Imprima a classificação do triângulo.


let primeiroLado = 11;
let segundoLado = 11;
let terceiroLado = 7;

if (primeiroLado === segundoLado && segundoLado === terceiroLado) {
   console.log("Equilátero, 3 lados iguais");
} else if (primeiroLado === segundoLado || primeiroLado === terceiroLado || segundoLado === terceiroLado) {
    console.log("Isósceles, só 2 lados são iguais");
} else {
    console.log("Escaleno, os três lados são diferentes");
}


