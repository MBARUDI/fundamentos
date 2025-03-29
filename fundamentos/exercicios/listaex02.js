function calcularDesconto(precoOriginal, percentualDesconto) {
    const desconto = (precoOriginal * percentualDesconto) / 100;
    const precoFinal = precoOriginal - desconto;
    return precoFinal;
}

// Exemplo de uso:
const precoOriginal = 100; // Preço original do produto
const percentualDesconto = 20; // Percentual de desconto
const precoComDesconto = calcularDesconto(precoOriginal, percentualDesconto);

console.log(`O preço final com desconto é: R$ ${precoComDesconto.toFixed(2)}`);