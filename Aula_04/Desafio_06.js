
//Verificação de Idade que é permitido dirigir (If e Ternário)
//● Crie um programa que verifica a idade de uma pessoa e determina
//se ela pode dirigir ou não. Se a pessoa tiver 18 anos ou mais,
//ela pode dirigir; caso contrário, não pode.

let idade = 16;

const idadePermitida = idade >= 18 ? "pode dirigir" : "não pode dirigir";

console.log(`Com ${idade} anos, você ${idadePermitida} dirigir.`);