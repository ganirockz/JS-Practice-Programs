const prompt = require('prompt-sync')();
let number = prompt('Enter the number ');
number = Number(number);
console.log("Prime factors of "+number+" are:");
while(number%2 == 0){
    console.log(2);
    number = number/2;
}
for(let i=3;i*i<=number;i=i+2){
    while(number%i == 0){
        console.log(i);
        number = number/i;
    }
}
if(number > 2){
    console.log(number);
}