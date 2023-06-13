const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
  console.log(a + b);
}
const [ firstNumber, secondNumber, thirdNumber ] = primeNumbers;
sum(firstNumber, thirdNumber) // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
const values = [comida, animal, bebida];
[animal, bebida, comida] = values;

// console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

let numerosPares = [1, 3, 5, 6, 8, 10, 12];
[,,, ...numerosPares] = numerosPares;
// console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log acima

// const person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };

// const { nationality } = person;

// console.log(nationality);

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));

const greeting = (user = 'pessoa usuária') => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!


const multiply = (number, value = 1) => number*value;

console.log(multiply(8));