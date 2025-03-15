// Operador AND (&&)
const a = true;
const b = false;
console.log(a && b); // false

// Operador OR (||)
const c = true;
const d = false;
console.log(c || d); // true

// Operador NOT (!)
const e = true;
console.log(!e); // false

// Combinação de operadores lógicos
const f = true;
const g = false;
const h = true;
console.log((f && g) || h); // true

// Operador de coalescência nula (??)
const i = null;
const j = 'default';
console.log(i ?? j); // 'default'