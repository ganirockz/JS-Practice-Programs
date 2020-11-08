const prompt = require('prompt-sync')();
let n = prompt('Enter n value ');
n = Number(n);
for(let i=1;i<=Math.pow(2,n);i++){
    console.log("2 * "+i+" = "+2*i);
}