// Este é um comentário de linha única

/*
Este é um comentário de múltiplas linhas.
Pode ser usado para explicar partes mais complexas do código
ou para desativar blocos de código durante a depuração.
*/

// Comentário de linha única explicando a função abaixo
function exemplo() {
    console.log("Este é um exemplo de função.");
}

/*
Comentário de múltiplas linhas explicando a lógica abaixo:
A função soma dois números e retorna o resultado.
*/
function soma(a, b) {
    return a + b;
}

/*
Problema 1 - Operadores Aritméticos
Lucas quer verificar se um cliente tem direito a um desconto de 20%. O cliente tem R$ 600,00 em compras.
O desconto será dado apenas se o total de compras for maior que R$ 500,00.
*/
const totalCompras = 500.00;
const desconto = 0.20;
if (totalCompras > 500) {
    valorDesconto = totalCompras * desconto;
}
else {
    valorDesconto = 0;
}

console.log("Valor inicial: R$", totalCompras.toFixed(2));
console.log("Valor do desconto: R$", valorDesconto.toFixed(2));
console.log("Valor final: R$", (totalCompras - valorDesconto).toFixed(2));
