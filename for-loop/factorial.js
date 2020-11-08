const prompt = require('prompt-sync')();
let number = prompt('Enter the number ');
let factorial = 1;
for(let i= number;i>=2;i--){
    factorial *= i;
}
console.log(number+" factorial is "+factorial);