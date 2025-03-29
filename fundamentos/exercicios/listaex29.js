function verificarHorarioComercial(hora) {
    if (hora >= 9 && hora < 18) {
        return "Dentro do horário comercial";
    } else {
        return "Fora do horário comercial";
    }
}

// Exemplos de uso:
console.log(verificarHorarioComercial(10)); // Dentro do horário comercial
console.log(verificarHorarioComercial(8));  // Fora do horário comercial
console.log(verificarHorarioComercial(18)); // Fora do horário comercial