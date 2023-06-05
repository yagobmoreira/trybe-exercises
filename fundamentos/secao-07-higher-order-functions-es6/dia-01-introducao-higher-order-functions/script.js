const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

emailListInData.forEach((email) => {
  console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
})

//Exemplos .find
// Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:
const numbers = [19, 21, 30, 3, 45, 22, 15];

// console.log(numbers.find((numero) => (numero % 3 === 0  && numero % 5 === 0))); 

// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const names = ['João', 'Irene', 'Fernando', 'Maria'];

// console.log(names.find((nome) => nome.length === 5));

// Utilize o find para encontrar a música com id igual a '31031685', caso ela exista:
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

// console.log(musicas.find((musica) => musica.id === '31031685').title);

//Exemplos .some e .every
const nomes = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((nome) => nome === name)

// console.log(hasName(nomes, 'Ana'));
// console.log(hasName(nomes, 'Pedro'));

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, age) => arr.every((obj) => obj.age >= age);

// console.log(verifyAges(people, 18));
// console.log(verifyAges(people, 14));

const pessoas = [
  { nome: 'Joana', idade: 37 },
  { nome: 'Ana', idade: 25 },
  { nome: 'João', idade: 32 },
  { nome: 'Aline', idade: 28 },
];
// Exemplo .forEach
pessoas.forEach((pessoa) => console.log(`Nome: ${pessoa.nome}`));

// Exemplo .find
pessoas.find((pessoa) => pessoa.nome === 'Aline');

// Exemplo .some
pessoas.some((pessoa) => pessoa.idade > 30);

// Exemplo .every
pessoas.every((pessoa) => pessoa.idade > 30);