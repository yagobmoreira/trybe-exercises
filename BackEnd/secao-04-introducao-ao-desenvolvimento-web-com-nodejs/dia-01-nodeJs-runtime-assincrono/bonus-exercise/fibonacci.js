const readline = require('readline-sync');

const fibonacciSequence = (n) => {
  const sequence = [0, 1];
  for (let i = 2; i <= n; i += 1) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(1);
}

const n = readline.questionInt('Enter a number: ');

if (n <= 0) {
  console.log('Enter a number greater then \'0\'!');
  return;
}

console.log(fibonacciSequence(n));
