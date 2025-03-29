function verificarRecompensa(treinosSemana) {
    const anoAtual = new Date().getFullYear();
    if (treinosSemana >= 4) {
        return `Prêmio liberado no ano ${anoAtual}`;
    } else {
        return `Continue treinando! Ano atual: ${anoAtual}`;
    }
}
// Exemplos de uso:
console.log(verificarRecompensa(5)); // Prêmio liberado
console.log(verificarRecompensa(3)); // Continue treinando!