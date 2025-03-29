function verificarAprovacao(nota) {
    if (nota >= 7) {
        return "Aprovado";
    } else if (nota >= 5 && nota < 7) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

// Exemplos de uso:
console.log(verificarAprovacao(8)); // Aprovado
console.log(verificarAprovacao(6)); // Recuperação
console.log(verificarAprovacao(4)); // Reprovado