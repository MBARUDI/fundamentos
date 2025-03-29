function calcularCalorias(tipoExercicio, tempo) {
    let caloriasPorMinuto;

    switch (tipoExercicio) {
        case "corrida":
            caloriasPorMinuto = 10;
            break;
        case "caminhada":
            caloriasPorMinuto = 5;
            break;
        case "ciclismo":
            caloriasPorMinuto = 8;
            break;
        default:
            return "Tipo de exercício inválido.";
    }

    return caloriasPorMinuto * tempo;
}

// Exemplo de uso:
console.log(calcularCalorias("corrida", 30)); // 300
console.log(calcularCalorias("caminhada", 20)); // 100
console.log(calcularCalorias("ciclismo", 15)); // 120
console.log(calcularCalorias("natação", 10)); // Tipo de exercício inválido.