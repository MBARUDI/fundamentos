// Declaração de variáveis em JavaScript

// Variável do tipo string
var nome = "João";

// Variável do tipo número
var idade = 25;

// Variável do tipo booleano
var isEstudante = true;

// Variável do tipo array
var frutas = ["maçã", "banana", "laranja"];

// Variável do tipo objeto
var pessoa = {
    nome: "Maria",
    idade: 30,
    isEstudante: false
};

// Numbers
typeof 37 === "number";
typeof 3.14 === "number";
typeof 42 === "number";
typeof Math.LN2 === "number";
typeof Infinity === "number";
typeof NaN === "number"; // Despite being "Not-A-Number"
typeof Number("1") === "number"; // Number tries to parse things into numbers
typeof Number("shoe") === "number"; // including values that cannot be type coerced to a number

typeof 42n === "bigint";

// Strings
typeof "" === "string";
typeof "bla" === "string";
typeof `template literal` === "string";
typeof "1" === "string"; // note that a number within a string is still typeof string
typeof typeof 1 === "string"; // typeof always returns a string
typeof String(1) === "string"; // String converts anything into a string, safer than toString

// Booleans
typeof true === "boolean";
typeof false === "boolean";
typeof Boolean(1) === "boolean"; // Boolean() will convert values based on if they're truthy or falsy
typeof !!1 === "boolean"; // two calls of the ! (logical NOT) operator are equivalent to Boolean()

// Symbols
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";

// Undefined
typeof undefined === "undefined";
typeof declaredButUndefinedVariable === "undefined";
typeof undeclaredVariable === "undefined";

// Objects
typeof { a: 1 } === "object";

// use Array.isArray or Object.prototype.toString.call
// to differentiate regular objects from arrays
typeof [1, 2, 4] === "object";

typeof new Date() === "object";
typeof /regex/ === "object";

// The following are confusing, dangerous, and wasteful. Avoid them.
typeof new Boolean(true) === "object";
typeof new Number(1) === "object";
typeof new String("abc") === "object";

// Functions
typeof function () {} === "function";
typeof class C {} === "function";
typeof Math.sin === "function";


//SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO E DIVISÃO
var x = 5;  
var y = 2;
var z0 = x + y; // Soma
var z1 = x - y; // Subtração
var z2 = x * y; // Multiplicação
var z3 = x / y; // Divisão

//MODULO

var z = x % y; // O resultado é 1

//SOMA SUBTRAI MULTIPLICA DIVIDE OS PROPRIOS VALORES

x += 2; // O resultado é 7
x -= 2; // O resultado é 3
x *= 2; // O resultado é 10
x /= 2; // O resultado é 5



// Exibindo os valores das variáveis no console
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("É estudante?", isEstudante);
console.log("Frutas:", frutas);
console.log("Pessoa:", pessoa);
console.log("Soma:", z0);
console.log("Subtração:", z1);
console.log("Multiplicação:", z2);
console.log("Divisão:", z3);
console.log("Módulo:", z);
console.log("Soma +=", x);
console.log("Subtração -=", x);
console.log("Multiplicação *=", x);
console.log("Divisão /=", x);





//ESTUDO A PARTE

class Professor {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }

    get teaches() {
        return this.subject;
    }

    introduceSelf() {
        console.log(`My name is Professor ${this.name} and I will be your ${this.subject} professor.`);
    }
}

let walsh = new Professor("Walsh", "Psychology");
let lillian = new Professor("Lillian", "Poetry");

walsh.teaches; // 'Psychology'
walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

lillian.teaches; // 'Poetry'
lillian.introduceSelf(); // 'My name is Professor Lillian and I will be your Poetry professor.'


walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

class BasicStudent {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    introduceSelf() {
        console.log(`My name is ${this.name} and I'm in the ${this.year} year.`);
    }
}

//ENCAPSULAMENTO
class Person {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    introduceSelf() {
        console.log(`My name is ${this.name}.`);
    }
}

summers = new BasicStudent("Summers", 1);
summers.introduceSelf(); // 'My name is Summers and I'm in the first year.'
pratt = new Person("Pratt");
pratt.introduceSelf(); // 'My name is Pratt.'
 

    introduceSelf() {
        console.log(`My name is ${this.name}.`);
    }
}

class Student extends Person {
    #year;
    constructor(name, year) {
        super(name);
        this.#year = year;
    }

    introduceSelf() {
        console.log(`My name is ${this.name} and I'm in the ${this.#year} year.`);
    }

    canStudyArchery() {
        return this.#year > 1;
    }
}

let student = new Student('Weber', 1);
console.log(student.canStudyArchery()); // false