// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Laranja', 'Morango', 'Mamão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Aveia', 'Leite Condensado', 'Farinha Láctea'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional]

console.log(fruitSalad(specialFruit, additionalItens));