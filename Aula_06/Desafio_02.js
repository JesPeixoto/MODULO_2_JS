
// Desafio 02

const pessoa = {
    nome: 'Jes',
    idade: 33,
    cidade: 'Rio de Janeiro'
}; 

for (let propriedade in pessoa) {
    console.log(propriedade + ': ' + pessoa[propriedade]);
}

