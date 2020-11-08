const prompt = require('prompt-sync')();
var day = prompt('Enter the day'); 
var month = prompt('Enter the month');
if(month>=3 && month<=6){
    if(month == 3){
        if(day>=20)
        console.log(true);
        else
        console.log(false);
    }
    else if(month == 6){
        if(day<=20)
        console.log(true);
        else
        console.log(false);
    }else{
        console.log(true);
    }
}else{
    console.log(false);
}
