const gerarEmail = (nomeCompleto) => {
  const fullName = nomeCompleto.split(' ');
  const emailName = fullName.join('_').toLowerCase();
  return {Nome: nomeCompleto, email: `${emailName}@trybe.com`}
}

const newEmployees = (gerarEmail) => {
  const employees = {
    id1: gerarEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: gerarEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: gerarEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
  
//Sorteador da loteria
const gerarNumero = () => Math.floor(Math.random() * (5 - 1 + 1)) + 1 //gera numero aleatorio entre 1 e 5
const checkNumbers = (num1, num2) => num1 === num2; //Retorna true se num1 é igual a num2 
const checkLottery = (num, callback) => {
  const sorteio = gerarNumero();
  console.log(`Número sorteado: ${sorteio}`);
  return callback(num, sorteio) ? `Parabéns você ganhou` : `Tente novamente`;
}
console.log(checkLottery(5, checkNumbers));

//Corretor automático de exame
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checker = (gabarito, respostas) => {
  return (respostas === 'N.A') ?  0 
    :(gabarito === respostas) ?  1 
    : -0.5;
}

const corretor = (gabarito, respostas, checker) => {
  let contador = 0;
  for (let index = 0; index < gabarito.length; index += 1) {
    let resultado = checker(gabarito[index], respostas[index])
    contador += resultado;
  }
  return `Resultado final: ${contador} pontos`;
}
console.log(corretor(RIGHT_ANSWERS, STUDENT_ANSWERS, checker));