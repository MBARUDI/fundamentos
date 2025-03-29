function diaUtil(dia) {
    // Normalizamos o dia para minúsculas para evitar problemas com maiúsculas/minúsculas
    const diaNormalizado = dia.toLowerCase();

    if (diaNormalizado === "sábado" || diaNormalizado === "domingo") {
        return "Fim de semana";
    } else {
        return "Dia útil";
    }
}

// Exemplos de uso:
console.log(diaUtil("segunda-feira")); // Dia útil
console.log(diaUtil("sábado"));       // Fim de semana
console.log(diaUtil("domingo"));      // Fim de semana
console.log(diaUtil("sexta-feira"));  // Dia útil