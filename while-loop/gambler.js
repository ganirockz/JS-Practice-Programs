const prompt = require('prompt-sync')();
let money = 100;
let numberOfBets = 0;
while(money>0 && money<200){
    let gameStatus = Math.floor(Math.random()*10)%2;
    if(gameStatus == 0){
        money++;
    }else if(gameStatus == 1){
        money--;
    }
    numberOfBets++;
}
if(money == 200){
    console.log("gambler wins in "+numberOfBets+" bets");
}else{
    console.log("gambler lost in "+numberOfBets+" bets");
}