const prompt = require('prompt-sync')();
let weekDay = prompt('Enter the weekday (0-6) ');
if(weekDay == 0){
    console.log("Sunday");
}else if(weekDay == 1){
    console.log("Monday");
}else if(weekDay == 2){
    console.log("Tuesday");
}else if(weekDay == 3){
    console.log("Wednesday");
}else if(weekDay == 4){
    console.log("Thursday");
}else if(weekDay == 5){
    console.log("Friday");
}else if(weekDay == 6){
    console.log("Saturday");
}else{
    console.log("Invalid week day");
}