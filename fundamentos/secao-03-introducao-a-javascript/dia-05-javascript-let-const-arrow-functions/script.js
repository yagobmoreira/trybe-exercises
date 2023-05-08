//Exercicio01
// function imprimeIdade() {
//   for (let idade = 30; idade <= 40; idade += 1) {
//     console.log('Idade dentro do for:', idade)
//   }
// }
// imprimeIdade()

// -----------------------------------------------------------

// Exercicio 02
  // Executando esse código, recebe-se um erro `TypeError: Assignment to constant variable.`
  // const pessoa = {
  //   nome: 'Henri',
  //   idade: 20
  // }
  // pessoa.nome = 'Luna';
  // pessoa.idade = 19;
  // console.log('Nome:', pessoa.nome);
  // console.log('Idade:', pessoa.idade);

  // Exercicio 03
  // let favoriteFood = 'Lasanha';
  // favoriteFood = 'Hambúrguer';
  // console.log(favoriteFood);

  // Exercico 04
  // const nome = 'Adriana';
  // const lastName = 'Soares';
  // console.log(`Olá ${nome} ${lastName}!`);
  // // console.log('Olá' + ',' + name + ' ' + lastName + '!');
  // function soma(a,b) {
  //   let resultado = a + b;
  //   return resultado;
  // }
  // let a = 3;
  // let b = 5;
  // console.log(`O resultado da some de ${a} + ${b} é: ${soma(a,b)}`);
  // // console.log('O resultado da soma de ' + a + ' + ' + b + ' é: ' + soma(a,b));

  // Exercicio 05
  // function numeroAleatorio() {
  //   return Math.random()
  // }
  // const numeroAleatorio = () => Math.random();
  // console.log(numeroAleatorio());

  // Exercicio 06
  // function hello(nome) {
  //   return `Olá, ${nome}!`
  // }
  // let nome = 'Ivan';
  // const hello = nome => `Olá, ${nome}!`;
  // console.log(hello(nome));

  // Exercicio 07
  // function nomeCompleto(nome, sobrenome) {
  //   return `${nome} ${sobrenome}`
  // }

  // const nomeCompleto = (nome,sobrenome) => `${nome} ${sobrenome}`;
  // let nome = 'Ivan';
  // let sobrenome = 'Pires';
  // console.log(nomeCompleto(nome, sobrenome));
  
  // Exercicio 08
  let speed = 130;
  const speedCar = (speed) => (speed >= 120) ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`;
  
  console.log(speedCar(speed));