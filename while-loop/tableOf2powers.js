const prompt = require('prompt-sync')();
let number = prompt('Enter the number ');
for(let i=0;(i<=number) && (Math.pow(2,i)<=256);i++){
    console.log(Math.pow(2,i));
}