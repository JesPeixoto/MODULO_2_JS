
// - Verificação de Ano Bissexto
// ● Desenvolva um programa que receba um ano como entrada e verifica se ele é bissexto ou não. Um ano bissexto é aquele que é
// divisível por 4, exceto por anos que são divisíveis por 100, a menos que sejam divisíveis por 400. Imprima "Ano bissexto" ou
//"Não é um ano bissexto" com base na entrada. (2000, 1996)



let ano = 2015; 

// verifica se o ano é divisível por 4 e não é divisível por 100, ou se é divisível por 400
if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
  console.log(`O ano ${ano} é um ano bissexto`); //  condição semdo verdadeira, imprime que o ano é bissexto
} else {
  console.log(`O ano ${ano} não é um ano bissexto`); // cpmdição sendo falsa, imprime que o ano não é bissexto
}

