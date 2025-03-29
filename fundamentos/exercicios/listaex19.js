function calcularDescontoProgressivo(valor) {
    if (valor >= 500) {
        return valor * 0.8; // 20% de desconto
    } else if (valor >= 300 && valor < 500) {
        return valor * 0.85; // 15% de desconto
    } else {
        return valor * 0.9; // 10% de desconto
    }
}

// Exemplo de uso:
console.log(calcularDescontoProgressivo(600)); // Saída: 480
console.log(calcularDescontoProgressivo(400)); // Saída: 340
console.log(calcularDescontoProgressivo(200)); // Saída: 180