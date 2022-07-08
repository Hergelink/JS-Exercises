const inputElement = document.getElementById('counter-input');
const subtractButtonElement = document.getElementById('minus-btn');
const resetButtonElement = document.getElementById('counter-reset-btn');
const additionButtonElement = document.getElementById('plus-btn');

function subtractNumber() {
  inputElement.value--;
}

function resetCount() {
  inputElement.value = 0;
}

function addNumber() {
  inputElement.value++;
}

subtractButtonElement.addEventListener('click', subtractNumber);
resetButtonElement.addEventListener('click', resetCount);
additionButtonElement.addEventListener('click', addNumber);
