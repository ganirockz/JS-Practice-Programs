const prompt = require('prompt-sync')();
var length = prompt('Enter length: ');
let option = prompt("Enter options for converstions\n 1. feet to inch\n 2.inch to feet\n 3.feet to meter\n 4.meter to feet");
option = Number(option);
switch(option){
    case 1:{
        let inch = length*12;
        console.log(length+"feet"+" = "+inch+"inch");
        break;
    }case 2:{
        let feet = length/12;
        console.log(length+"inch"+" = "+feet+"feet");
        break;
    }case 3:{
        let meter = length/3.281;
        console.log(length+"feet"+" = "+meter+"meters");
        break;
    }case 4:{
        let feet = length*3.281;
        console.log(length+"meters"+" = "+feet+"feet");
        break;
    }default:{
        console.log("Invalid input");
    }
}