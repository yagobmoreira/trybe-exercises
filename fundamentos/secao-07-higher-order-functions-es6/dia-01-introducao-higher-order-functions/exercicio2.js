const { books } = require("./data");

//Organizando uma biblioteca

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

const birthYear1947 = books.find(
  (element) => element.author.birthYear === 1947
);
const authorName = birthYear1947.author.name;
// console.log(authorName);

// Retorne o nome do livro com menor número de caracteres (menor nome).

const smallerName = (books) => {
  let bookNameLength = books[0].name.length;
  let indiceDoMenor = 0;
  books.forEach((book, index) => {
    if (book.name.length < bookNameLength) {
      bookNameLength = book.name.length;
      indiceDoMenor = index;
    }
  });
  return `O nome do livro com menor número de caracteres é: ${books[indiceDoMenor].name}`;
};
console.log(smallerName(books));

// Encontre o primeiro livro cujo nome possua 26 caracteres.

const livro = (books) => {
  return books.find((element) => element.name.length === 26);
};

console.log(livro(books));

// Faça uma função que retorne true se todas as pessoas autoras tiverem nascido no século XX, ou false, caso contrário.

// const expectedResult = false;

function everyoneWasBornOnSecXX() {
  return books.every(
    (book) => book.author.birthYear > 1900 && book.author.birthYear < 2001
  );
}

// Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

// const expectedResult = true;

const someBookWasReleaseOnThe80s = () => {
  return books.some(
    (book) => book.releaseYear >= 1980 && book.releaseYear <= 1989
  );
};
// console.log(someBookWasReleaseOnThe80s());

// Faça uma função que retorne true, caso nenhuma pessoa autora tenha nascido no mesmo ano, e false, caso contrário.

// const expectedResult = false;

const authorUnique = () => {
  return books.every(
    (book) =>
      !books.some(
        (bookSome) =>
          bookSome.author.birthYear === book.author.birthYear &&
          bookSome.author.name !== book.author.name
      )
  );
};

console.log(authorUnique());
