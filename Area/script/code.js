function area (){
    let base = document.getElementById('base').value;
    let height = document.getElementById('height').value;
    let calculate = eval( 1/2 * base * height );
    let output = document.getElementById('output');
    //console.log {converter}
    output.value= calculate + "cm²";
}