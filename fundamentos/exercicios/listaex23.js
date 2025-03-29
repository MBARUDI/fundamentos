function converterPassosParaMetros(passos) {
    const metrosPorPasso = 0.8;
    return passos * metrosPorPasso;
}

// Exemplo de uso:
const passos = 1000;
console.log(`Distância percorrida: ${converterPassosParaMetros(passos)} metros`);