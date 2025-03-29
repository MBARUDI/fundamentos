// const webSite = {
//   name: 'Google',
// since: 2024,
// descricao: 'Site de dev para dev'
// }

// console.log(webSite); // { name: 'Google', since: 2024, descricao: 'Site de dev para dev' }
// console.log(webSite.name); // Google
// console.log(webSite.since); // 2024
// console.log(webSite.descricao); // Site de dev para dev
// console.log(webSite['name']); // Google
// console.log(webSite['since']); // 2024
// console.log(webSite['descricao']); // Site de dev para dev

// const person = {
//     name: 'John Doe',
//     cpf: '123.456.789-00',
//     phone: '(11) 98765-4321',
//     age: 30
// };

// console.log(person); // { name: 'John Doe', cpf: '123.456.789-00', phone: '(11) 98765-4321', age: 30 }
// console.log(person.name); // John Doe
// console.log(person.cpf); // 123.456.789-00
// console.log(person.phone); // (11) 98765-4321
// console.log(person.age); // 30
// console.log(person['name']); // John Doe
// console.log(person['cpf']); // 123.456.789-00
// console.log(person['phone']); // (11) 98765-4321
// console.log(person['age']); // 30

// const product = {
//     name: 'Laptop',
//     price: 1500,
//     brand: 'Dell',
//     stock: 50,
//     feedback: {
//       clientName: "Marilza",
//       message: "Produto excelente!",
//       rating: 5
//     }
// };  

// console.log(product); // { name: 'Laptop', price: 1500, brand: 'Dell', stock: 50 }
// console.log(product.name); // Laptop
// console.log(product.price); // 1500
// console.log(product.brand); // Dell
// console.log(product.stock); // 50
// console.log(product.feedback); // { clientName: 'Marilza', message: 'Produto excelente!', rating: 5 }
// console.log(product.feedback.clientName); // Marilza
// console.log(product.feedback.message); // Produto excelente!
// console.log(product.feedback.rating); // 5
// console.log(product['name']); // Laptop
// console.log(product['price']); // 1500
// console.log(product['brand']); // Dell
// console.log(product['stock']); // 50
// console.log(product['feedback']); // { clientName: 'Marilza', message: 'Produto excelente!', rating: 5 }
// console.log(product['feedback']['clientName']); // Marilza

// const {price, feedback} = product; // Desestruturação do objeto product
// console.log(price,feedback); // 1500

// console.log(price,feedback.clientName); // 1500 Marilza
// console.log(price,feedback.message); // 1500 Produto excelente!


const fruit = {
    name: 'Apple',
    color: 'Red',
    weight: 0.2,
    price: 3.5
};
// console.log(fruit); // { name: 'Apple', color: 'Red', weight: 0.2, price: 3.5 }
// console.log(fruit.name); // Apple
// console.table(fruit); // Tabela com os dados do objeto fruit
// console.log(fruit.color); // Red
// console.log(fruit.weight); // 0.2
// console.log(fruit.price); // 3.5
// console.log(fruit['name']); // Apple
// console.log(fruit['color']); // Red
// console.log(fruit['weight']); // 0.2
// console.log(fruit['price']); // 3.5
// console.log(fruit.name,fruit.color); // Apple Red
// console.log(fruit.weight,fruit.price); // 0.2 3.5
// console.log(fruit['name'],fruit['color']); // Apple Red         
// console.log(fruit['weight'],fruit['price']); // 0.2 3.5
// console.log(fruit.name,fruit.color); // Apple Red

// console.log(fruit.length); // undefined
// console.log(fruit['length']); // undefined
// console.log(fruit['name'].length); // 5
// console.log(fruit.name.length); // 5
// console.log(fruit['color'].length); // 3
// console.log(fruit.color.count); // 3

// const fruits = ['Apple', 'Banana', 'Orange']; // Array de frutas
// console.log(fruits); // ['Apple', 'Banana', 'Orange']
// console.table(fruits); // Tabela com os dados do objeto fruit
// console.log(fruits[0]); // Apple
// console.log(fruits[1]); // Banana 
// console.log(fruits[2]); // Orange
// console.log(fruits.length); // 3
// console.log(fruits[3]); // undefined
// console.log(fruits.length-1); // 3
// console.log(fruits[fruits.length-1]); // Orange
// console.log(fruits[fruits.length]); // undefined
// console.log(fruits[fruits.length-2]); // Banana
// console.log(fruits[fruits.length-3]); // Apple
// console.log(fruits[fruits.length-4]); // undefined

const fullname = 'John Doe Bill David James Smith'; // Nome completo
const age = 30; // Idade
const city = 'New York'; // Cidade
const country = 'USA'; // País
const person = { // Objeto pessoa
    name: fullname,
    age: age,
    city: city,
    country: country
};
//console.log(person); // { name: 'John Doe', age: 30, city: 'New York', country: 'USA' }
// console.log(person.name); // John Doe
// console.log(person.age); // 30
// console.log(person.city); // New York
// const lastName = fullname.split(' ')[fullname.split(' ').length - 1]; // Último nome
// console.log(lastName); // Smith
// console.log(fullname.split(' ')); // ['John', 'Doe', 'Bill', 'Smith']
// console.log(fullname.split(' ')[fullname.split(' ').length - 1]); // Smith
// console.log(fullname.split(' ').length); // 4
const firstName = fullname.split(' ')[0]; // Primeiro nome
const lastName = fullname.split(' ')[fullname.split(' ').length - 1]; // Último nome
console.log(firstName, lastName); // John Smith


