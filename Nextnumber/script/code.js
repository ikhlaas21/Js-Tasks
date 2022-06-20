


const array = [1,2,3];
const iterator = array.values();
document.getElementById("list").innerHTML= array;
let one = iterator.next().value;
let two = iterator.next().value;
let three = iterator.next().value;

console.log(one)

function converter(){
document.getElementById("answer1").innerHTML= one ;
document.getElementById("answer2").innerHTML= two ;
document.getElementById("answer3").innerHTML= three;   
}