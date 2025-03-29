function calcularValorFinal(valor, taxa) {
    const taxaDecimal = taxa / 100;
    const valorFinal = valor + (valor * taxaDecimal);
    return valorFinal;
}

// Exemplo de uso:
const valor = 100;
const taxa = 10; // 10%
console.log(calcularValorFinal(valor, taxa)); // Saída: 110