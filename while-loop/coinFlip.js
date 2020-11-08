const prompt = require('prompt-sync')();
let headWins = 0,tailWins = 0;
while(headWins != 11 && tailWins != 11){
    let flip = Math.floor(Math.random()*10)%2;
    if(flip == 0){
        headWins++;
    }else{
        tailWins++;
    }
}
console.log("head wins "+ headWins+" times");
console.log("tail wins "+tailWins+" times");