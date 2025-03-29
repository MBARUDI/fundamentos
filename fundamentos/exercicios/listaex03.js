// Função para converter Celsius para Fahrenheit
function converterCelsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Função para converter Fahrenheit para Celsius
function converterFahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Exemplos de uso
console.log(converterCelsiusParaFahrenheit(0)); // 32
console.log(converterCelsiusParaFahrenheit(100)); // 212
console.log(converterFahrenheitParaCelsius(32)); // 0
console.log(converterFahrenheitParaCelsius(212)); // 100