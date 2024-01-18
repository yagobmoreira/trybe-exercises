import Client from "./entities/Client";
import Order from "./entities/Order";
import OrderItem from "./entities/OrderItem";
import PessoaEstudante from "./entities/PessoaEstudante";


//Exercicio 01 e 02
const personOne = new PessoaEstudante('202001011', 'Maria da Silva');

personOne.notasProvas = [25, 20, 23, 23];
personOne.notasTrabalhos = [45, 45];

console.log(personOne);
console.log('Soma de todas as notas: ', personOne.somaNotas());
console.log('Média de todas as notas: ', personOne.mediaNotas());



//Exercicio 03 e 04
const client = new Client('João');

const sandwich = new OrderItem('Sanduíche Natural', 5.00);
const juice = new OrderItem('Suco de Abacaxi', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);

const order = new Order(client, [sandwich, juice, dessert], 'dinheiro', 0.10);

console.log(order);
