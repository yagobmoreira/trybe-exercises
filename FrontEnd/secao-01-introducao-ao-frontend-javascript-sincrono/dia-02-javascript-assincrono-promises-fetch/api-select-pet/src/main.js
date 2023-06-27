import './styles.css'

const API_DOG_URL = 'https://dog.ceo/api/breeds/image/random';
const API_CAT_URL = 'https://api.thecatapi.com/v1/images/search';

const btnDog = document.querySelector('#btnDog');
const btnCat = document.querySelector('#btnCat');
const btnSurprise = document.querySelector('#btnSurprise');
const imgEl = document.querySelector('#petCard');

const requestDogAPI = () => {
  return fetch(API_DOG_URL)
    .then(response => response.json())
    .then(dog => dog)
}

const requestCatAPI = () => {
  return fetch(API_CAT_URL)
    .then(response => response.json())
    .then(([ cat ]) => cat)
}

const render = (url) => imgEl.src = url;

btnDog.addEventListener('click', async () => {
  const dog = await requestDogAPI();
  const dogImg = await dog.message;
  render(dogImg);
});

btnCat.addEventListener('click', async () => {
  const cat = await requestCatAPI();
  const catImg = await cat.url;
  render(catImg);
});

btnSurprise.addEventListener("click", () => {
  Promise.any([
    fetch("https://api.thecatapi.com/v1/images/search"),
    fetch("https://dog.ceo/api/breeds/image/random"),
  ])
    .then((res) => res.json())
    .then((data) => {
      const petURL = data.message || data[0].url;

      render(petURL);
    });
});
