const divBoxElement = document.getElementsByClassName('div-box');

function randomColor() {
  let randomRed = Math.floor(Math.random() * 255);
  let randomGreen = Math.floor(Math.random() * 255);
  let randomBlue = Math.floor(Math.random() * 255);

  let randomColor =
    'rgb(' + randomRed + ',' + randomGreen + ',' + randomBlue + ')';

  return randomColor;
}

for (let i = 0; i < divBoxElement.length; i++) {
  divBoxElement[i].onmouseover = function (event) {
    let target = event.target;

    target.style.background = randomColor();
  };

  divBoxElement[i].onmouseout = function (event) {
    let target = event.target;

    target.style.background = 'white';
  };
}
