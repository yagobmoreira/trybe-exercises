let salarioBruto = 3000;
let aliquotaInss;
let aliquotaIr;

if (salarioBruto <= 1556.94){
  aliquotaInss = salarioBruto * 0.8;
} else if (salarioBruto <= 2594.92){
  aliquotaInss = salarioBruto * 0.9;
} else if (salarioBruto <= 5189.82){
  aliquotaInss = salarioBruto * 0.11;
} else {
  aliquotaInss = 570.88;
}

let salarioBase = salarioBruto - aliquotaInss;

if (salarioBase >= 1903.99 && salarioBase <= 2826.65){
  aliquotaIr = (salarioBase * 0.075) - 142.80;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
  aliquotaIr = (salarioBase * 0.015) - 354.80;
} else if (salarioBase >= 3751.06 && salarioBase < 4664.68){
  aliquotaIr = (salarioBase * 0.0225) - 636.13;
} else if (salarioBase >= 4664.69){
  aliquotaIr = (salarioBase * 0.0275) - 869.36;
}
console.log(aliquotaIr);
let salarioLiquido = salarioBase - aliquotaIr;
console.log(salarioLiquido);