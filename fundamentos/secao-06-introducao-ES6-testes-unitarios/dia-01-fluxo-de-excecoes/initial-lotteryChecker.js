// Jogo do Neidson
let studentGame = [18, 26, 35, 50, 60];
let rodsGame = [10, 20, 30, 40, 50, 60];

// Jogo sorteado
let megaSenaNumbers = [];

for (let index = 0; index < 6; index += 1) {
  let randomNumber = Math.floor(Math.random() * 60) + 1;
  megaSenaNumbers.push(randomNumber);
}
const checkGame = (game) => {
  if (game.length < 6) {
    throw new Error('Erro: Você não pode jogar com menos do que 6 números');
  }
}

// Confere o jogo
function megaSenaChecker (game) {
  try {
    checkGame(game);
    
    let numberOfHits = 0;
    
    for (let index = 0; index < megaSenaNumbers.length; index += 1) {
      let drawnNumber = megaSenaNumbers[index];
      
      for (let gameIndex = 0; gameIndex < game.length; gameIndex += 1) {
        let studentNumber = game[gameIndex];
        
        if (drawnNumber === studentNumber) {
          numberOfHits += 1;
        }
      }
    }
    return numberOfHits;
  
  } catch (error) {
    return error.message;
  }
}

// console.log("jogo sorteado", megaSenaNumbers);
// console.log("Jogo do Neidson:", [1, 2, 3, 4, 5]);
// console.log("Número de acertos:", megaSenaChecker([1, 2, 3, 4, 5]));
// console.log("--------");
// console.log("jogo sorteado", megaSenaNumbers);
// console.log("Jogo do Rods:", rodsGame);
// console.log("Número de acertos:", megaSenaChecker(rodsGame));
console.log("jogo sorteado", megaSenaNumbers);
console.log(megaSenaChecker(studentGame));