let array = ['java', 'javascript', 'python', 'html', 'css'];

let countChar = array[0].length;
let maiorPalavra = '';
let menorPalavra = array[0];
for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > countChar){
    countChar = array[index].length;
    maiorPalavra = array[index];
  } 

  if (array[index].length < countChar){
    countChar = array[index].length;
    menorPalavra = array[index];
  } 
}
console.log('A maior palavra é: ' + maiorPalavra);
console.log('A menor palavra é: ' + menorPalavra);
