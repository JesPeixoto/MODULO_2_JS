
// Desafio 02
// Crie um vetor (array) chamado notas com as notas de um aluno em três 
//disciplinas. Em seguida, calcule a média das notas usando a fórmula matemática da média aritmética.

const notasAluno = [6, 5, 8];
let somaNotasAluno = 0;

for (let i = 0; i < notasAluno.length; i++) {
    somaNotasAluno += notasAluno[i];
}

const media = somaNotasAluno / notasAluno.length;

console.log("A média das notas é:", media)