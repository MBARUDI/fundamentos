// Este é um comentário de linha única

/*
Este é um comentário de múltiplas linhas.
Pode ser usado para explicar partes mais complexas do código
ou para desativar blocos de código durante a depuração.
*/

// Comentário de linha única explicando a função abaixo
function exemplo() {
    console.log("Este é um exemplo de função.");
}

/*
Comentário de múltiplas linhas explicando a lógica abaixo:
A função soma dois números e retorna o resultado.
*/
function soma(a, b) {
    return a + b;
}

/*
Problema 1 - Operadores Aritméticos
Lucas precisa calcular o preço final de um produto com base no preço original e em um desconto percentual.
O preço inicial do produto é de R$ 250,00 e o desconto é de 15%. Qual será o preço final do produto?
*/
const precoInicial = 250.00;
const desconto = 0.15;
const precoFinal = precoInicial - (precoInicial * desconto);
console.log("Preço final do produto: R$", precoFinal.toFixed(2));