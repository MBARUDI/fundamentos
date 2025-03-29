function converterRealParaDolar(reais, taxa) {
    return reais * taxa;
}

// Exemplo de uso:
const valorEmReais = 100; // Valor em reais
const taxaDeCambio = 0.19; // Taxa de câmbio (exemplo: 1 real = 0.19 dólares)
const valorConvertido = converterRealParaDolar(valorEmReais, taxaDeCambio);

console.log(`R$${valorEmReais} convertido para dólar é $${valorConvertido.toFixed(2)}`);