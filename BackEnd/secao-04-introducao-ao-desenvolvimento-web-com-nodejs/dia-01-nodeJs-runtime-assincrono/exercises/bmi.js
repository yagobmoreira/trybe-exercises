const readline = require('readline-sync');

const bmi = () => (weight, height) => weight / (height * height);

const weight = readline.questionFloat('What is your weight? ');
const height = readline.questionFloat('What is your height? ');

const bmiCalc = bmi();
console.log(`Your BMI is ${bmiCalc(weight, height)}`);