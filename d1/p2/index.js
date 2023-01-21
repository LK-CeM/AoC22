var fs = require('fs');
var file = fs.readFileSync('../input', 'utf-8');
var snackList = file.split(/\r?\n/).map(Number);

let elfList = [];
let calorieSum = 0;
let elfCount = 0;
for (let i in snackList){
    if (snackList[i] != 0){
        calorieSum += snackList[i];
    }
    else {
    elfList.push(calorieSum)
    calorieSum = 0;
    }
}
let top3Sum = 0;
for (let i = 0; i < 3; i++){
    top3Sum += Math.max(...elfList);
    elfList[elfList.indexOf(Math.max(...elfList))] = 0;
    }
console.log(top3Sum)