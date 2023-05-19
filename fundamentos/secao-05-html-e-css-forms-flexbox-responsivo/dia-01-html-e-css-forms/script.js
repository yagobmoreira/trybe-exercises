// SELETORES
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

//Exercicio 01
hrefLink.addEventListener('click', (event) => {
  event.preventDefault();
})

//Exercicio 02
inputCheckbox.addEventListener('click', (event) => {
  event.preventDefault();
})

//Exercicio 03
inputText.addEventListener('keypress', (event) => {
  let key = event.key;
  if (key !== 'a') event.preventDefault();
})