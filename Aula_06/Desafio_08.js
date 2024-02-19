
// Desafio 08


// Rodei aqui https://playcode.io/javascript


let palavra = prompt("Insira uma palavra: ");

// Converte a palavra para minúsculas para facilitar a comparação
palavra = palavra.toLowerCase();

// contador iniciando com 0
let contadorVogais = 0;

// Loop for para percorrer cada caractere da palavra
for (let i = 0; i < palavra.length; i++) {

    if (palavra[i] === 'a' || palavra[i] === 'e' || palavra[i] === 'i' || palavra[i] === 'o' || palavra[i] === 'u') {
        // Se for uma vogal, incrementa o contador de vogais
        contadorVogais++;
    }
}

console.log("A palavra inserida contém " + contadorVogais + " vogais.");
