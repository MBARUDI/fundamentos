function calcularDesconto(valorCompra) {
    let desconto = 0;

    if (valorCompra > 1000) {
        desconto = 0.30;
    } else if (valorCompra >= 500 && valorCompra <= 1000) {
        desconto = 0.20;
    } else if (valorCompra >= 200 && valorCompra < 500) {
        desconto = 0.10;
    } else {
        console.log("Não tem desconto");
        return valorCompra;
    }

    const valorDesconto = valorCompra * desconto;
    const valorFinal = valorCompra - valorDesconto;

    console.log(`Valor da compra: R$${valorCompra.toFixed(2)}`);
    console.log(`Desconto aplicado: ${desconto * 100}%`);
    console.log(`Valor do desconto: R$${valorDesconto.toFixed(2)}`);
    console.log(`Valor final: R$${valorFinal.toFixed(2)}`);

    return valorFinal;
}

// Exemplo de uso
const valorCompra = 100; // Insira o valor da compra aqui
calcularDesconto(valorCompra);