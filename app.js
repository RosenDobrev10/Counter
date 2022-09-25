let add = document.getElementById('increment');
let subtract = document.getElementById('decrement');

let number = document.getElementById('number');
let currentNumber = 0;

add.addEventListener('click', () => {
    currentNumber++;
    number.textContent = currentNumber;
})

subtract.addEventListener('click', () => {
    currentNumber--;
    number.textContent = currentNumber;
})