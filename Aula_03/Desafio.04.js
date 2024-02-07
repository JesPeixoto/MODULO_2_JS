
// Desafio 04

const dicionarioDeSinonimos = new Map();

dicionarioDeSinonimos.set("Feliz", ["Alegre", "Contente", "Satisfeito"]);
dicionarioDeSinonimos.set("Triste", ["melancólico", "abatido", "deprimido"]);
dicionarioDeSinonimos.set("bom", ["ótimo", "excelente", "maravilhoso"]); 

//console.log(dicionarioDeSinonimos)

console.log(dicionarioDeSinonimos.get("Feliz"));
console.log(dicionarioDeSinonimos.get("Triste"));
console.log(dicionarioDeSinonimos.get("bom")); 