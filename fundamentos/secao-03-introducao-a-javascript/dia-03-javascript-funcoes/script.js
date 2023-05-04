// Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string.
let clientesTrybeBank = ["Ada", "John", "Gus"];

function addCliente(nome) {
  if (typeof nome === "string") {
    clientesTrybeBank.push(nome);
    return clientesTrybeBank;
  } else {
    return "Erro: parâmetro inserido não é do tipo string.";
  }
}

console.log(addCliente("Yago"));

// Agora iremos escrever um programa que irá excluir um(a) cliente já existente do array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro, caso o parâmetro não seja do tipo string e caso o(a) cliente não exista dentro do array.

function verificaCliente(nome) {
  let clienteValido = false;
  if (typeof nome === "string" && clientesTrybeBank.indexOf(nome) >= 0) {
    clienteValido = true;
  }
  return clienteValido;
}

function removeCliente(nome) {
  let clienteExistente = verificaCliente(nome);
  if (clienteExistente) {
    clientesTrybeBank.splice(clientesTrybeBank.indexOf(nome), 1);
    return clientesTrybeBank;
  } else {
    return "Erro: parâmetro inserido não é do tipo string.";
  }
}

console.log(clientesTrybeBank);
console.log(removeCliente("Gus"));
