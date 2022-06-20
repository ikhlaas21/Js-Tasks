function time (){
    let minutes = document.getElementById('minutes').value;
    let seconds = document.getElementById('seconds');
    let convert = Math.round(eval( minutes * 60 )*100)/100;

    //console.log {converter}
    seconds.value= convert + "s";
}



