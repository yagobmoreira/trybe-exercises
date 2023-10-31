const readline = require('readline-sync');

const bmi = () => (weight, height) => weight / (height * height);

const weight = readline.questionFloat('What is your weight? ');
const height = readline.questionFloat('What is your height? ');

const bmiCalc = bmi();
const result = bmiCalc(weight, height);
let bmiCategory = '';
const getBmiCategory = (result) => {

  if (result < 18.5) {
    bmiCategory = 'Underweight';
  } else if (result >= 18.5 && result <= 24.9) {
    bmiCategory = 'Normal weight';
  } else if (result >= 25 && result <= 29.9) {
    bmiCategory = 'Overweight';
  } else if (result >= 30 && result <= 34.9) {
    bmiCategory = 'Obesity class I';
  } else if (result >= 35 && result <= 39.9) {
    bmiCategory = 'Obesity class II';
  } else if (result >= 40) {
    bmiCategory = 'Obesity class III';
  }
  return bmiCategory;
}
const category = getBmiCategory(result);

console.log(`Your BMI is ${bmiCalc(weight, height)}`);
console.log(`BMI Category: ${category}`);