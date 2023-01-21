var fs = require('fs');
var file = fs.readFileSync('./input', 'utf-8');
var matchList = file.split(/\r?\n/)

function findPriorityInRucksack(string){
    let stringMiddle = string.length / 2;

    let s1 = string.substr(0, stringMiddle);
    let s2 = string.substr(stringMiddle);

    for (let i in s1){
        for (let j in s2){
            if (s1[i] == s2[j]){
                return s1[i];
            }
        }
    }
    console.log("no match found")
    console.log(string)
    console.log(s1)
    console.log(s2)
}
let sum = 0;

for (let i in matchList){
    let p = findPriorityInRucksack(matchList[i]);
    let score = p.charCodeAt(0)-96;
    if (p == p.toUpperCase())
    {
        score+= 58;
    }
    sum += score;
}
console.log(sum)

