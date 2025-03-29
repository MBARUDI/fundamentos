function podeSerTriangulo(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        return "Forma um triângulo";
    } else {
        return "Não forma um triângulo";
    }
}

// Exemplos de uso:
console.log(podeSerTriangulo(3, 4, 5)); // Forma um triângulo
console.log(podeSerTriangulo(1, 2, 3)); // Não forma um triângulo