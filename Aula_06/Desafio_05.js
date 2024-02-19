
// Desafio 05

/* Crie um objeto com valores numéricos e utilize um loop for-in para
calcular e imprimir a soma desses valores.
{ valor1: 10, valor2: 20, valor3: 30, valor4: 40 }  */ 

const valores = {
    valor1: 10,
    valor2: 20,
    valor3: 30,
    valor4: 40
}; 

let soma = 0; // Inicializamos a variável soma com zero

// Loop for-in para iterar sobre as propriedades do objeto valores
for (const propriedade in valores) {
    // Adicionamos o valor atual à soma
    soma += valores[propriedade];
}

console.log("A soma dos valores é:", soma);