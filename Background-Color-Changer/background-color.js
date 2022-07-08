let mainElement = document.querySelector('main');

const blueButtonElement = document.getElementById('background-blue');
const redButtonElement = document.getElementById('background-red');
const yellowButtonElement = document.getElementById('background-yellow');
const whiteButtonElement = document.getElementById('background-white');



function changeBackgroundBlue() {
    mainElement.style.backgroundColor = 'rgb(135,206,250)';
}


function changeBackgroundRed() {
    mainElement.style.backgroundColor = 'rgb(250,128,114)';
}

function changeBackgroundYellow() {
    mainElement.style.backgroundColor = 'rgb(240,230,140)';
}

function changeBackgroundWhite() {
    mainElement.style.backgroundColor = 'rgba(128, 128, 128, 0.176)';
}



blueButtonElement.addEventListener('click', changeBackgroundBlue);
redButtonElement.addEventListener('click', changeBackgroundRed);
yellowButtonElement.addEventListener('click', changeBackgroundYellow);
whiteButtonElement.addEventListener('click', changeBackgroundWhite);
