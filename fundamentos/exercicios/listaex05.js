function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

// Exemplo de uso:
const media = calcularMedia(8, 7.5, 9);
console.log(`A média do aluno é: ${media.toFixed(2)}`);