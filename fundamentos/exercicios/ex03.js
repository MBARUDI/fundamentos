const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Insira a nota do aluno: ', (nota) => {
    nota = parseFloat(nota);

    if (nota === 10) {
        console.log('Parabéns você tirou a nota máxima 10');
    } else if (nota >= 7 && nota < 10) {
        console.log(`Parabéns você passou com a nota ${nota}`);
    } else if (nota >= 4 && nota < 7) {
        console.log(`Você está de recuperação com a nota ${nota}`);
    } else if (nota < 4) {
        console.log(`Você está reprovado com a nota ${nota}`);
    } else {
        console.log('Nota inválida');
    }

    rl.close();
});