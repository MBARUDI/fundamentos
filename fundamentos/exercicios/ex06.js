// let fullName = "Lucas Souza Santos Oliveira";
// let arrayName = fullName.split(" ");
// let lastName = arrayName[arrayName.length - 1];

// let firstName = arrayName[0];

// Mensagem de boas-vindas
// let welcomeMessage = `Olá ${firstName} ${lastName}, seja bem-vindo!`;
// console.log(welcomeMessage); // Olá Lucas, seja bem-vindo!
// // Mensagem de despedida
// let farewellMessage = `Até logo ${firstName} ${lastName}, volte sempre!`;
// console.log("\n\n" + farewellMessage); // Até logo Oliveira, volte sempre!

// function handFullName(fullName) {
//     let arrayName = fullName.split(" ");
//     let lastName = arrayName[arrayName.length - 1];
//     let firstName = arrayName[0];
//     return `Olá ${firstName} ${lastName}, seja bem-vindo!`;

// }
// console.log(handFullName(fullName)); // Olá Lucas, seja bem-vindo!
// Mensagem de despedida    
// let farewellMessage = (fullName) => {
//     let arrayName = fullName.split(" ");
//     let lastName = arrayName[arrayName.length - 1];
//     let firstName = arrayName[0];
//     return `Até logo ${firstName} ${lastName}, volte sempre!`;
// };
// console.log("\n\n" + farewellMessage(fullName)); // Até logo Lucas Oliveira, volte sempre!


// let numbers = [];
// for (let i = 1; i <= 5; i++) {
//     numbers.push(i);
//     console.log(numbers);
// }

// numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number) => {
//     console.log(number*10);
// });
// numbers.forEach((number) => {
//     console.log(number);
// });
// numbers.forEach((number) => {
//     console.log(number*10);
// });
// numbers.forEach((number) => {
//     console.log(number*number);
// });
// numbers.map((number) => {
//     console.log(number*number);
// });
// numbers.map((number) => {    
//     console.log(number*number);
// });

// const novoArray = arrayOriginal.map(function(elemento, indice, array) {
//     // Retorne o novo valor para este elemento
//     return novoValor;
//   });
  const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map(numero => numero * 2);
console.log(dobrados); // dobrados será [2, 4, 6, 8, 10]
// dobrados será [2, 4, 6, 8, 10]

const nomes = ["ana", "joão", "maria"];
const saudações = nomes.map(nome => `Olá, ${nome}!`);
console.log(saudações); // saudações será ["Olá, ana!", "Olá, joão!", "Olá, maria!"]
// saudações será ["Olá, ana!", "Olá, joão!", "Olá, maria!"]
const pessoas = [
    { nome: "Alice", idade: 30 },
    { nome: "Bob", idade: 25 },
    { nome: "Charlie", idade: 35 }
  ];
  const nomesDasPessoas = pessoas.map(pessoa => pessoa.nome);
  console.log(nomesDasPessoas); // nomesDasPessoas será ["Alice", "Bob", "Charlie"]
  // nomesDasPessoas será ["Alice", "Bob", "Charlie"]
  const produtos = [
    { nome: "Camiseta", preco: 29.90 },
    { nome: "Calça", preco: 79.50 }
  ];
  const detalhesProdutos = produtos.map(produto => `Produto ${produto.nome}: R$ ${produto.preco.toFixed(2)}`);
console.log(detalhesProdutos);


