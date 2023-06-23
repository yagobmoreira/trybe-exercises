import validator from 'validator';
import './style.css';

const inputAreaEl = document.querySelector('#input_area');
const listEl = document.querySelector('#dropdownList');
const pEl = document.querySelector('p');
const validateBtn = document.querySelector('button');

validateBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const input = inputAreaEl.value;
  const selectedOption = listEl.value;
  if (selectedOption === 'email') {
    pEl.innerHTML = `A validação retornou ${validator.isEmail(input)}`;
  }
  if (selectedOption === 'integer') {
    pEl.innerHTML = `A validação retornou ${validator.isInt(input)}`;
  }
  if (selectedOption === 'creditCard') {
    pEl.innerHTML = `A validação retornou ${validator.isCreditCard(input)}`;
  }
  if (selectedOption === 'data') {
    pEl.innerHTML = `A validação retornou ${validator.isDate(input)}`;
  }
  if (selectedOption === 'time') {
    pEl.innerHTML = `A validação retornou ${validator.isTime(input)}`;
  }
});
