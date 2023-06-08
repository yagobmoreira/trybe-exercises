// Fonte: <https://restcountries.com/v2/all>
const countries = [
  {
    name: "Afghanistan",
    region: "Asia",
    currencies: [{ code: "AFN", name: "Afghan afghani" }],
    capital: "Kabul",
    population: 40218234,
    area: 652230,
  },
  {
    name: "Åland Islands",
    region: "Europe",
    currencies: [{ code: "EUR", name: "Euro" }],
    capital: "Mariehamn",
    population: 28875,
    area: 1580,
  },
  {
    name: "Albania",
    region: "Europe",
    currencies: [{ code: "ALL", name: "Albanian lek" }],
    capital: "Tirana",
    population: 2837743,
    area: 28748,
  },
  {
    name: "Algeria",
    region: "Africa",
    currencies: [{ code: "DZD", name: "Algerian dinar" }],
    capital: "Algiers",
    population: 44700000,
    area: 2381741,
  },
  {
    name: "American Samoa",
    region: "Oceania",
    currencies: [{ code: "USD", name: "United States Dollar" }],
    capital: "Pago Pago",
    population: 55197,
    area: 199,
  },
  {
    name: "Andorra",
    region: "Europe",
    currencies: [{ code: "EUR", name: "Euro" }],
    capital: "Andorra la Vella",
    population: 77265,
    area: 468,
  },
  {
    name: "Angola",
    region: "Africa",
    currencies: [{ code: "AOA", name: "Angolan kwanza" }],
    capital: "Luanda",
    population: 32866268,
    area: 1246700,
  },
  {
    name: "Anguilla",
    region: "Americas",
    currencies: [{ code: "XCD", name: "East Caribbean dollar" }],
    capital: "The Valley",
    population: 13452,
    area: 91,
  },
];

// 1 - Calcule a quantidade total da população de todos os países.
const totalPopulation = countries.reduce((acc, curr) => {
  return acc + curr.population;
}, 0);
// console.log('A população total é: ',totalPopulation);

// 2 - Calcule a área total de todos os países.
const totalArea = countries.reduce((acc, curr) => {
  return acc + curr.area;
}, 0);
// console.log('A area total é: ',totalArea);

// 3 - Encontre o país com o maior nome.
const longestName = () => {
  return countries.reduce(
    (acc, curr) => {
      return acc.name.length < curr.name.length ? curr : acc;
    },
    { name: "" }
  );
};
// console.log(longestName());

// 4 - Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.
const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];
// const expectedResult = 20;
const countA = () => {
  const newArray = [];
  const string = names.join("");
  newArray.push(string);
  const result = newArray.map((element) => {
    return element.split("");
  });
  return result[0].reduce((acc, curr) => {
    if (curr === "a" || curr === "A") {
      acc += 1;
    }
    return acc;
  }, 0);
};
// console.log(countA());

// 5 - Crie um array de objetos e calcule a média de notas. Utilize as constantes students e grades para criar um array de objetos e calcule a média da nota das pessoas estudantes:

// O index 0 do array `students` equivale ao index 0 do array `grades`
const students = ["Pedro Henrique", "Miguel", "Maria Clara"];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];
const expectedResult = [
  { name: "Pedro Henrique", average: 7.8 },
  { name: "Miguel", average: 9.2 },
  { name: "Maria Clara", average: 8.8 },
];

const media = (array) => {};

const studentAverage = () => {
  const medias = [];
  grades.forEach((element) => {
    const total = element.reduce((acc, curr, array) => acc + curr, 0);
    return medias.push(total / element.length);
  });
  
  return students.map((estudante, index) => {
      let obj = {};
      obj.name = estudante;
      obj.average = medias[index];
      return obj;
    })
};

console.log(studentAverage());
