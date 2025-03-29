function classificarNumero(n) {
    if (n > 0) {
        return "Positivo";
    } else if (n < 0) {
        return "Negativo";
    } else {
        return "Neutro";
    }
}

// Exemplos de uso:
console.log(classificarNumero(10)); // Positivo
console.log(classificarNumero(-5)); // Negativo
console.log(classificarNumero(0));  // Neutro