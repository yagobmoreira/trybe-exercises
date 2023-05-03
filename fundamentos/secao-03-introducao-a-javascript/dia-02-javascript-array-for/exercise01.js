let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumArray = 0;

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
  sumArray += numbers[index];
}

console.log("Soma:" + sumArray);

let arithAvg = sumArray / numbers.length;

console.log("Média Aritmética: " + arithAvg);

if (arithAvg > 20) {
  console.log("O valor da média aritmética é maior que 20");
} else {
  console.log("O valor da média aritmética é menor ou igual a 20");
}

let higherNumber = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}

console.log("O maior valor é: " + higherNumber);

let oddNumbers = [];
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    oddNumbers.push(numbers[index]);
  }
}

if (oddNumbers !== []) {
  console.log("Números ímpares: " + oddNumbers);
} else {
  console.log("Nenhum valor ímpar encontrado");
}

let smallerNumber = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < smallerNumber) {
    smallerNumber = numbers[index];
  }
}
console.log("O menor valor é: " + smallerNumber);

let newArray = [];
for (let index = 1; index <= 25 ; index += 1) {
  newArray.push(index);
}
console.log(newArray);

let divBy2 = [];
for (let index = 0; index < newArray.length; index += 1) {
  divBy2.push(newArray[index]/2); 
}
console.log(divBy2);