const bmi = () => (weight, height) => weight / (height * height);

const weight = 120;
const height = 1.8;

const bmiCalc = bmi();
console.log(bmiCalc(weight, height));