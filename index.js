// TEMPRETURE CONVERSION PROGRAM

const textBox = document.getElementById('textBox');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');
let temp;
function convert(){

    if(toFahrenheit.checked){

    }
    else if(toCelsius.checked){

    }
    else{
        result.textContent = "Select a unit";
    }

}