const valores = {
    valor1: 10,
    valor2: 20,
    valor3: 30,
    valor4: 40
}; 

for (const propriedade in valores) {
    console.log(propriedade + ´ :´ + valores[propriedade]);
}