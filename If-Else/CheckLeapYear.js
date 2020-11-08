const prompt = require('prompt-sync')();

var year = prompt('Enter the year ');
let digits = 0;
let temp = year;
while(temp>1){
    temp = temp/10;
    digits++;
}
console.log("Digits "+digits);
if((digits ==4) && (year%4 == 0)){
    if(year%400 == 0){
        console.log(year+ " is a leap year");
    }else{
        if(year%100 == 0){
            console.log(year+" is not a leap year");
        }else{
            console.log(year+" is a leap year");    
        }
    }
}else{
    console.log(year+" is not a leap year");    
}