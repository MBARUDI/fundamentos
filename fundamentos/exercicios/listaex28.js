function calcularPrecoPorUnidade(precoTotal, quantidade) {
    if (quantidade === 0) {
        throw new Error("A quantidade não pode ser zero.");
    }
    return precoTotal / quantidade;
}

// Exemplo de uso:
const precoTotal = 100;
const quantidade = 5;
const precoPorUnidade = calcularPrecoPorUnidade(precoTotal, quantidade);
console.log(`O preço por unidade é: R$${precoPorUnidade.toFixed(2)}`);