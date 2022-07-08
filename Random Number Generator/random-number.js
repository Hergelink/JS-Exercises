const randomNumberInputElement = document.getElementById('random-number-input');
const randomNumberButtonElement = document.getElementById('number-generate-btn-1');
const randomNumberButtonElement2 = document.getElementById('number-generate-btn-100');


function generateNumberZerotoOne() {
    randomNumberInputElement.value = Math.random();
}


function generateNumberOnetoHundred() {
    randomNumberInputElement.value = Math.floor(Math.random() * 100) + 1;
}

randomNumberButtonElement.addEventListener('click', generateNumberZerotoOne);
randomNumberButtonElement2.addEventListener('click', generateNumberOnetoHundred);