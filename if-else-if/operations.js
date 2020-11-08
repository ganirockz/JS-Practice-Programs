const prompt = require('prompt-sync')();
var a = prompt('Enter variable a ');
var b = prompt('Enter variable b ');
var c = prompt('Enter variable c ');
var operation1 = a+b*c;
var operation2 = c+a/b;
var operation3 = a%b+c;
var operation4 = a*b+c;
var max = Math.max(operation1,Math.max(operation2,Math.max(operation3,operation4)));
var min = Math.min(operation1,Math.min(operation2,Math.min(operation3,operation4)));
if(max == operation1){
    console.log("a+b*c is max");
}else if(max == operation2){
    console.log("c+a/b is max");
}else if(max == operation3){
    console.log("a%b+c is max");
}else if(max == operation4){
    console.log("a*b+c is max");
}
if(min == operation1){
    console.log("a+b*c is min");
}else if(min == operation2){
    console.log("c+a/b is min");
}else if(min == operation3){
    console.log("a%b+c is min");
}else if(min == operation4){
    console.log("a*b+c is min");
}