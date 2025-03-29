function classificarIdade(idade) {
    if (idade <= 12) {
        return "Criança";
    } else if (idade >= 13 && idade <= 17) {
        return "Adolescente";
    } else if (idade >= 18 && idade <= 59) {
        return "Adulto";
    } else if (idade >= 60) {
        return "Idoso";
    } else {
        return "Idade inválida";
    }
}

// Exemplos de uso:
console.log(classificarIdade(10)); // Criança
console.log(classificarIdade(15)); // Adolescente
console.log(classificarIdade(30)); // Adulto
console.log(classificarIdade(65)); // Idoso