import luhnAlgorithm from './algorithm.js';
import paymentMethod from './payment-method.js';

const containerForm = document.querySelector('.container-form');
const containerInput = document.querySelector('.container-form-input');
const containerValidate = document.querySelector('.container-validate');

function formReload() {
  const methodChecked = document.querySelector('.checked');

  if (methodChecked) {
    methodChecked.classList.remove('checked');
  }
}

containerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  formReload();

  const insertion = containerInput.value.replace(/\s/g, '');

  if (luhnAlgorithm(insertion)) {
    containerValidate.textContent = 'This card is valid';
    containerValidate.style.color = 'green';

    const payment = document.querySelector(`.${paymentMethod(insertion)}`);
    payment.classList.add('checked');
  } else {
    containerValidate.textContent = 'This card is not valid';
    containerValidate.style.color = 'red';
  }
});