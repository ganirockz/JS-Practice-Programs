
var arr = new Array();
for(var i=0;i<3;i++){
    arr[i] = Math.floor(Math.random()*10)%1000;
}
let max = Math.max(arr[0],Math.max(arr[1],arr[2]));
let min = Math.min(arr[0],Math.min(arr[1],arr[2]));
console.log("Max: "+max+" Min: "+min);