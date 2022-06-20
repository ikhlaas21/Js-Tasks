function time (){
    let age = document.getElementById('age').value;
    let days = document.getElementById('days');
    let convert = Math.round(eval( age * 365 )*10)/10;

    //console.log {converter}
    days.value= convert + " days";
}