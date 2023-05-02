let valorCusto = 80;
let impostoCusto = 0.2*valorCusto;
let valorCustoTotal = valorCusto + impostoCusto;
let valorVenda = 140;
let lucro = valorVenda - valorCustoTotal;
let numVendas = 1000;

if (valorCusto >= 0){
  lucroTotal = lucro*numVendas;
} else {
  console.log('Erro');
}
console.log(lucroTotal);