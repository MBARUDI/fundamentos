// 5. Crie uma função que receba um nome como parâmetro e retorne uma saudação personalizada.
// Se nenhum nome for fornecido, utilize "Visitante" como padrão.
function saudacao(nome = "Visitante") {
    return `Olá, ${nome}! Seja bem-vindo(a)!`;
}
// Função que exibe uma saudação após um atraso de 2 segundos
const saudacaoUtils = {
    get saudacaoComDelay() {
        return function (nome = "Visitante") {
            setTimeout(() => {
                console.log(saudacao(nome));
            }, 2000);
        };
    },
    get saudacaoInstantanea() {
        return function (nome = "Visitante") {
            console.log(saudacao(nome));
        };
    },
    get saudacaoComPrefixo() {
        return function (prefixo, nome = "Visitante") {
            console.log(`${prefixo} ${saudacao(nome)}`);
        };
    }
};


// Função que verifica se a idade fornecida é válida e retorna uma mensagem apropriada
function handleCorrectAge(age) {
    if (typeof age !== "number" || age < 0) {
        return "Idade inválida. Por favor, insira uma idade válida.";
    }
    return `Idade registrada: ${age} anos.`;
}
// Exemplo de uso
const nome = "João";
const idade = 30;



// Exemplo de uso das funções
const saudacaoComDelay = saudacaoUtils.saudacaoComDelay;
const saudacaoInstantanea = saudacaoUtils.saudacaoInstantanea;
const saudacaoComPrefixo = saudacaoUtils.saudacaoComPrefixo;

saudacaoComDelay(nome); // Exibe a saudação após 2 segundos
// Exibe a mensagem de idade após a saudação
setTimeout(() => {
    console.log(handleCorrectAge(idade));
}, 2000);
// Função que exibe a data de hoje no formato DD/MM/AAAA
function exibirDataDeHoje() {
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // Mês começa do zero
    const ano = hoje.getFullYear();
    console.log(`Data de hoje: ${dia}/${mes}/${ano}`);
}

// Exemplo de uso da função
exibirDataDeHoje();

