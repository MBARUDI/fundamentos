function podeVotar(idade) {
    if (idade >= 18) {
        return "Pode votar";
    } else {
        return "Não pode votar";
    }
}

// Exemplos de uso:
console.log(podeVotar(20)); // "Pode votar"
console.log(podeVotar(16)); // "Não pode votar"