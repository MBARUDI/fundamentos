function verificarRecompensa(treinosSemana) {
    if (treinosSemana >= 4) {
        return "Prêmio liberado";
    } else {
        return "Continue treinando!";
    }
}

// Exemplos de uso:
console.log(verificarRecompensa(5)); // Prêmio liberado
console.log(verificarRecompensa(3)); // Continue treinando!