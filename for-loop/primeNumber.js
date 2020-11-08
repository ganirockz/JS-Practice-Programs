const prompt = require("prompt-sync")();
let number = prompt('Enter the number ');
number = Number(number);
let flag = 0;
for(let i=2;i<number;i++){
    if(number%i == 0){
        flag++;
        break;
    }
}
if(flag == 0){
    console.log(number+" is a prime Number");
}else{
    console.log(number+" is not a prime Number");
}