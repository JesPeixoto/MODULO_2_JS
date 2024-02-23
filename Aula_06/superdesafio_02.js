
// Super Desafio 02 + 

// 11 - Fazer um simulador de rolagem de dados, que receba como input N dados e N lados e mostre as rolagens individuais e a soma dos valores?
// Entradas: Quantidade de dados: 2 e Quantidade de lados: 9

function lancarDados(numeroDados, numeroLados) {
    let rolls = [];
    let sum = 0;
  
    for (let i = 0; i < numeroDados; i++) {
      let roll = Math.floor(Math.random() * numeroLados) + 1;
      rolls.push(roll);
      sum += roll;
    }
    console.log(`Rolagens: ${rolls.join(", ")}`);
    console.log(`Soma: ${sum}`);
}
lancarDados(2, 9);


