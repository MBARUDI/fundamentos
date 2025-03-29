// 5. Crie uma função que receba um nome como parâmetro e retorne uma saudação personalizada.
// Se nenhum nome for fornecido, utilize "Visitante" como padrão.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function saudacao(nome) {
    return `Olá, ${nome}! Bem-vindo(a)!`;
}

readline.question('Digite seu nome: ', nome => {
console.log(saudacao(nome));
readline.close();
});
