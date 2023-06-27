import './styles.css'
import Swal from 'sweetalert2'

const imgEl = document.querySelector('#img-card');
const textEl = document.querySelector('h3');
const btnEl = document.querySelector('#btn');
const API_URL = 'https://akabab.github.io/superhero-api/api/id/'

const generateRandomId = () => Math.floor(Math.random() * (731 - 1 + 1) + 1);
const clearCard = () => {
  imgEl.src = '';
  textEl.innerHTML = '';
}

btnEl.addEventListener('click', async () => {
  clearCard();
  const randomId = generateRandomId();
  try {
    const response = await fetch(`${API_URL}${randomId}.json`);
    const hero = await response.json();
    imgEl.src = hero.images.sm;
    textEl.innerHTML = hero.name;
  } catch(error) {
    Swal.fire({
      title: 'Error!',
      text: 'Oops...',
      icon: 'error',
      confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Try again!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
    })
  }
})