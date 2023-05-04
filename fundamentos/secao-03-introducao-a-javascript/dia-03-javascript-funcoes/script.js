// Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string.
let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function addCliente(nome) { 
  if (typeof(nome) === 'string'){
    clientesTrybeBank.push(nome);
    return clientesTrybeBank;
  } else {
    return 'Erro: parâmetro inserido não é do tipo string.'
  }
}

console.log(addCliente('Yago'));


