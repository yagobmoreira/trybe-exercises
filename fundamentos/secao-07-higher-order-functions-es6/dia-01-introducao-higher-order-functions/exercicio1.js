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
  
console.log(newEmployees(gerarEmail));