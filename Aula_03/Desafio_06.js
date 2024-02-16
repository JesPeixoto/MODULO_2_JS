
// Desafio 06

const frutas = new Map();

frutas.set("maçã", 2.5);
frutas.set("banana", 1.8);
frutas.set("pêra", 3.0);
frutas.set("uva", 3.0);

const macaCara =
  frutas.get("maçã") > frutas.get("banana") ? "Sim" : "Não";

const peraNaoCustaIgualAUva =
  frutas.get("pêra") !== frutas.get("uva") ? "Sim" : "Não";

console.log("A maçã é mais cara que a banana ?", macaCara);
console.log("A pêra não custa o mesmo que a uva ?", peraNaoCustaIgualAUva);
