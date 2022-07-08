const popUpElement = document.getElementById('pop-up');
const moreInfoButtonElement = document.getElementById('more-info-btn');

function expandModal() {
  if (popUpElement.style.display === 'none') {
    popUpElement.style.display = 'block';
    moreInfoButtonElement.textContent = 'Close Info';
  } else {
    popUpElement.style.display = 'none';
    moreInfoButtonElement.textContent = 'More Info'
  }
}

moreInfoButtonElement.addEventListener('click', expandModal);
