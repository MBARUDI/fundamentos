const webSite = {
  name: 'Google',
since: 2024,
descricao: 'Site de dev para dev'
}

console.log(webSite); // { name: 'Google', since: 2024, descricao: 'Site de dev para dev' }
console.log(webSite.name); // Google
console.log(webSite.since); // 2024
console.log(webSite.descricao); // Site de dev para dev
console.log(webSite['name']); // Google
console.log(webSite['since']); // 2024
console.log(webSite['descricao']); // Site de dev para dev

const person = {
    name: 'John Doe',
    cpf: '123.456.789-00',
    phone: '(11) 98765-4321',
    age: 30
};

console.log(person); // { name: 'John Doe', cpf: '123.456.789-00', phone: '(11) 98765-4321', age: 30 }
console.log(person.name); // John Doe
console.log(person.cpf); // 123.456.789-00
console.log(person.phone); // (11) 98765-4321
console.log(person.age); // 30
console.log(person['name']); // John Doe
console.log(person['cpf']); // 123.456.789-00
console.log(person['phone']); // (11) 98765-4321
console.log(person['age']); // 30