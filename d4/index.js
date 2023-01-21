var fs = require('fs');
var file = fs.readFileSync('./input', 'utf-8');
var matchList = file.split(/(,|-|\n)/).map(Number)
let numberList = []
for (let i in matchList){
    if (matchList[i] > 0){
        numberList.push(matchList[i]);
    }
}
counter = 0;
for (let i  = 0; i < numberList.length; i+= 4){
    if (numberList[i] <= numberList[i+2] && numberList[i+1] >=numberList[i+3]){
        counter += 1;
    }
    else if (numberList[i] >= numberList[i+2] && numberList[i+1] <= numberList[i+3]){
        counter += 1;
    }
}
console.log(counter)
