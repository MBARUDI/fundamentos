function verificarPlanoFitness(plano) {
    if (plano === "premium" || plano === "vip") {
        return "Acesso liberado";
    } else {
        return "Acesso restrito";
    }
}

// Exemplos de uso:
console.log(verificarPlanoFitness("premium")); // Acesso liberado
console.log(verificarPlanoFitness("vip"));     // Acesso liberado
console.log(verificarPlanoFitness("basic"));   // Acesso restrito