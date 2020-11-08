const prompt = require('prompt-sync')();
let n = prompt('Enter n value ');
n = Number(n);
let harmonicNumber = 0;
for(let i=1;i<=n;i++){
    harmonicNumber += 1/i;
}
console.log(n+"th harmonic number is "+harmonicNumber);