const btnDisplay = document.querySelector('#display')
let numbers = [1,6,3,8,9,7,3,4,13,8,11]
document.querySelector('#nums').value = numbers;

btnDisplay.addEventListener('click', ()=>{
    let sum = eval(numbers.join('+')); 
    document.querySelector('#output').innerHTML = `${sum}`;
})