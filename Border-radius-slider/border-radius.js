const borderDivElement = document.getElementById('border-div');
let sliderElement = document.getElementById('slider');
let rangeValueElement = document.getElementById('value-range');


rangeValueElement.innerHTML = sliderElement.value;

sliderElement.oninput = function () {
    rangeValueElement.innerHTML = this.value;
}



function changeRadius() {
 
    borderDivElement.style.borderRadius = sliderElement.value + 'px';


}


sliderElement.addEventListener('input', changeRadius);
