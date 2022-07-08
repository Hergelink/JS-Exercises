const hexInputElement = document.getElementById('random-hex-input');
const hexButtonElement = document.getElementById('random-hex-btn');
const hexDivElement = document.getElementById('hex-div');
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function generateHexCode() {

  let hex = '#';

  for(let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexValues.length)
        hex += hexValues[index];
  }


  hexInputElement.value = hex;



  hexDivElement.style.backgroundColor = hex;

}



hexButtonElement.addEventListener('click', generateHexCode);






