function calcularTempoViagem(distancia, velocidade) {
    if (velocidade <= 0) {
        return "A velocidade deve ser maior que zero.";
    }
    const tempo = distancia / velocidade;
    return `O tempo estimado da viagem é de ${tempo.toFixed(2)} horas.`;
}

// Exemplo de uso:
console.log(calcularTempoViagem(150, 60)); // O tempo estimado da viagem é de 2.50 horas.