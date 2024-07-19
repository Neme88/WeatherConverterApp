// Function to convert temperature from Celsius to Fahrenheit and vice versa

// Initializing my variables for DOM elements
const textBox = document.getElementById('textBox');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');
let temp;

/* 
This function takes user input and convert it to number 
and apply the conversion Formular from Celsius to Fahrenheit and vice versa
*/
function convert(){

    if(toFahrenheit.checked){
        temp =  Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1)+ "°F";
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Select a unit";
    }

}