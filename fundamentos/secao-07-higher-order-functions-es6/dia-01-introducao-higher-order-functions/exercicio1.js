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