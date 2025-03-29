function calcularFrete(valorCompra) {
    if (valorCompra > 100) {
        return "Frete grátis";
    } else {
        return "Frete não é grátis";
    }
}

// Exemplo de uso:
console.log(calcularFrete(120)); // Frete grátis
console.log(calcularFrete(80));  // Frete não é grátis