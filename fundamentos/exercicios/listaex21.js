function calcularIMC(peso, altura) {
    if (peso <= 0 || altura <= 0) {
        throw new Error("Peso e altura devem ser maiores que zero.");
    }
    return peso / (altura * altura);
}

// Exemplo de uso:
const peso = 80; // em kg
const altura = 1.68; // em metros
console.log(`O IMC é: ${calcularIMC(peso, altura).toFixed(2)}`);