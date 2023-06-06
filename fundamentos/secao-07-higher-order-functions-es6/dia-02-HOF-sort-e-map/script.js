const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione seu código aqui
// people.sort((a,b) => a.age > b.age ? 1 : -1); ordem crescente
people.sort((a, b) => b.age > a.age ? 1 : -1); //ordem decrescente
// console.log(people);

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];
const productsList = [];

for (let index = 0; index < products.length; index += 1) {
  let result = {};
  result[products[index]] = prices[index];
  productsList.push(result);
}
// console.log(productsList);

const students = [
  {
    firstName: 'João',
    lastName: 'Silva',
    age: 14,
    period: 'Manhã',
    subjects: [
      { name: 'Matemática', grade: 67 },
      { name: 'Português', grade: 79 },
      { name: 'Química', grade: 70 },
      { name: 'Biologia', grade: 65 },
    ],
  },
  {
    firstName: 'Mario',
    lastName: 'Ferreira',
    age: 15,
    period: 'Tarde',
    subjects: [
      { name: 'Matemática', grade: '59' },
      { name: 'Português', grade: '80' },
      { name: 'Química', grade: '78' },
      { name: 'Biologia', grade: '92' },
    ],
  },
  {
    firstName: 'Jorge',
    lastName: 'Santos',
    age: 15,
    period: 'Manhã',
    subjects: [
      { name: 'Matemática', grade: '76' },
      { name: 'Português', grade: '90' },
      { name: 'Química', grade: '70' },
      { name: 'Biologia', grade: '80' },
    ],
  },
  {
    firstName: 'Maria',
    lastName: 'Silveira',
    age: 14,
    period: 'Manhã',
    subjects: [
      { name: 'Matemática', grade: '91' },
      { name: 'Português', grade: '85' },
      { name: 'Química', grade: '92' },
      { name: 'Biologia', grade: '90' },
    ],
  },
  {
    firstName: 'Natalia',
    lastName: 'Castro',
    age: 14,
    period: 'Manhã',
    subjects: [
      { name: 'Matemática', grade: '70' },
      { name: 'Português', grade: '70' },
      { name: 'Química', grade: '60' },
      { name: 'Biologia', grade: '50' },
    ],
  },
  {
    firstName: 'Wilson',
    lastName: 'Martins',
    age: 14,
    period: 'Manhã',
    subjects: [
      { name: 'Matemática', grade: '80' },
      { name: 'Português', grade: '82' },
      { name: 'Química', grade: '79' },
      { name: 'Biologia', grade: '75' },
    ],
  },
];

const allNameStudents = [];

for (let index = 0; index < students.length; index += 1 ) {
  if(students[index].period === 'Manhã') {
    allNameStudents.push(`${students[index].firstName} ${students[index].lastName}`)
  }
}

console.log(allNameStudents);