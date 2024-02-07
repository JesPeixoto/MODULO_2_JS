
// Desafio 04

// Crei um novo mapa 
const dicionarioDeSinonimos = new Map();

// O comando set adc uma chave e um valor na variável. (Objeto e valores dentro de um array)
dicionarioDeSinonimos.set("Feliz", ["Alegre", "Contente", "Satisfeito"]);
dicionarioDeSinonimos.set("Triste", ["melancólico", "abatido", "deprimido"]);
dicionarioDeSinonimos.set("bom", ["ótimo", "excelente", "maravilhoso"]); 

console.log(dicionarioDeSinonimos)

// Imprime cada sinonimo atribuido nos objetos 

console.log(dicionarioDeSinonimos.get("Feliz"));
console.log(dicionarioDeSinonimos.get("Triste"));
console.log(dicionarioDeSinonimos.get("bom")); 