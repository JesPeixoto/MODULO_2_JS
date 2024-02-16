
//- Números Primos
//● Crie um programa que peça ao usuário para inserir um número e
//use um loop while para verificar se o número é primo ou não. Um
//número primo é aquele que só é divisível por 1 e por ele mesmo.
//Imprima se o número é primo ou não.


// Definindo o número para verificar se é primo
let numero = 79; // Você pode alterar este número para qualquer outro que desejar

// Se o número for menor ou igual a 1, não é primo
if (numero <= 1) {
    console.log(numero +  "não é um número primo.");
} else {
    let divisor = 2;
    let primo = true;

    // Enquanto o divisor for menor que o número, verificamos se há algum divisor
    while (divisor < numero) {
        // Se o número for divisível por qualquer outro número que não seja 1 ou ele mesmo, não é primo
        if (numero % divisor === 0) {
            primo = false;
            break;
        }
        // Incrementamos o divisor para verificar os próximos números
        divisor++;
    }

    // Se primo ainda for verdadeiro, o número é primo
    if (primo) {
        console.log(numero + " é um número primo.");
    } else {
        console.log(numero + " não é um número primo.");
    }
}
