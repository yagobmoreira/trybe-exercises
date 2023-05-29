const verifyParameters = (name, age) => {
  if (name === undefined || age === undefined){
    throw new Error('Todas as informações são necessárias');
  } else if (age < 18) {
    throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
  } else if (typeof name === 'string'){
    return `${name}, seja bem-vindo(a) à AuTrybe!`
  } else if (typeof name !== 'string'){
    throw new Error('Ops, o nome deve ser uma string');
  }
}
const studentRegister = (name, age) => {
  try {
    return verifyParameters(name,age);
  } catch (error) {
    return error.message;
  }
  
  console.log(name); // seu código aqui
  console.log(age);
}
console.log(studentRegister('yago',18)); 