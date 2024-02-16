
// - Determinação de Estação do Ano
//● Escreva um programa que recebe o nome de um mês como entrada e
//utiliza um switch case para determinar a estação do ano
//correspondente. Use a seguinte correspondência de meses:
//- Dezembro, Janeiro, Fevereiro: "Inverno" Março, Abril, Maio:
//"Primavera" Junho, Julho, Agosto: "Verão" Setembro, Outubro, Novembro: "Outono"


let mes = "maio";

switch (mes.toLowerCase()) { // Convertendo o valor da variável 'mes' para minúsculas e iniciando uma estrutura switch com base nesse valor
  case "dezembro":
  case "janeiro":
  case "fevereiro":
    console.log(`O mês de ${mes} está no Inverno`);
    break;
  case "março":
  case "abril":
  case "maio":
    console.log(`O mês de ${mes} está na Primavera`);
    break;
  case "junho":
  case "julho":
  case "agosto":
    console.log(`O mês de ${mes} está no Verão`);
    break;
  case "setembro":
  case "outubro":
  case "novembro":
    console.log(`O mês de ${mes} está no Outono`);
    break;
  default: // Se o valor não corresponder a nenhum dos casos anteriores
    console.log(`O mês de ${mes} não é válido`);
    break;
}