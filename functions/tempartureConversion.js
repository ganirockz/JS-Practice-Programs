const prompt = require('prompt-sync')();
let temperature = prompt('Enter the temperature ');
let option = prompt("Enter the option for conversion.\n1) Celsius to Farenheit\n2) Farenheit to Celsius\n");
function cToFConvert(temperature){
    return (9*temperature+35);
}
function fToCCovert(temperature){
    return (temperature-32)/9;
}
if(option == 1){
    console.log("Celsius to Farenheit coversion of "+temperature+" is "+ cToFConvert(temperature));
}else if(option == 2){
    console.log("Farenheit to censius conversion of "+temperature+" is "+ fToCCovert(temperature));
}else{
    console.log("Invalid input");
}