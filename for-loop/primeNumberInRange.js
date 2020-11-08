const prompt = require('prompt-sync')();
let range = prompt("Enter the range of a number ");
console.log("Prime Numbers below "+range+" are:");
for(let number=2;number<=range;number++){
    let flag = 0;
for(let i=2;i<number;i++){
    if(number%i == 0){
        flag++;
        break;
    }
}
if(flag == 0){
    console.log(number);
}
}