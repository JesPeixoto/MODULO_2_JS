function lancarDados(numeroDados, numeroLados) {
    let rolls = [];
    let sum = 0;
  
    for (let i = 0; i < numeroDados; i++) {
      let roll = Math.floor(Math.random() * numeroLados) + 1;
      rolls.push(roll);
      sum += roll;
    }
    console.log(`Rolls: ${rolls.join(", ")}`);
    console.log(`Sum: ${sum}`);
  }
  lancarDados(2, 9);