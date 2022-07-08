const reverseTextInputElement = document.getElementById('reverse-text-input');
const reverseTextSpanElement = document.getElementById('reverse-text-span');





function reverseText() {

    let value = reverseTextInputElement.value;

    let inputArray = value.split('');

    console.log(inputArray);

    let reversedInput = inputArray.reverse();

    console.log(reversedInput);

    let printResult = reversedInput.join('');

    reverseTextSpanElement.textContent = printResult;

}

reverseTextInputElement.addEventListener('input', reverseText);


