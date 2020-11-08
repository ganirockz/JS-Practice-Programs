const promt = require('prompt-sync')();
let number1 = promt('Enter the first number ');
let number2 = promt('Enter the second number ');
number1 = Number(number1);
number2 = Number(number2);
function palindrome(number){
    let rev = 0;
    let temp = number;
    while(temp >= 1){
        rev = rev*10+ Math.floor(temp%10);
        temp = Math.floor(temp/10);
    }
    if(rev == number)
        return true;
    else
        return false;
}
let firstNumberCheck = palindrome(number1);
let secondNumberCheck = palindrome(number2);
if(firstNumberCheck){
    console.log(number1 + " is a palindrome");
}else{
    console.log(number1+" is not a palindrome");
}

if(secondNumberCheck){
    console.log(number2 + " is a palindrome");
}else{
    console.log(number2+" is not a palindrome");
}