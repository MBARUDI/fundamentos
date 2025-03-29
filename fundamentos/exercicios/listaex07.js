function ehMultiplo(de, numero) {
    return numero % de === 0;
}

// Exemplos de uso:
console.log(ehMultiplo(3, 9)); // true
console.log(ehMultiplo(3, 10)); // false