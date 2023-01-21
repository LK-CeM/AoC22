var fs = require('fs');
var file = fs.readFileSync('../input', 'utf-8');
var matchList = file.split(/\r?\n/)

function findPriorityInRucksack(s1,s2,s3){
    for (let i in s1){
        for (let j in s2){
              if (s1[i] == s2[j]){
                for (let k in s3){
                    if (s1[i] == s3[k]){
                        return s1[i];
                    }
                }
              }
            }
        }
    console.log("no match found")
    console.log(s1)
    console.log(s2)
    console.log(s3)
}
let sum = 0;

for (let i = 0; i < matchList.length; i += 3){
    let p = findPriorityInRucksack(matchList[i], matchList[i+1],matchList[i+2]);
    let score = p.charCodeAt(0)-96;
    if (p == p.toUpperCase())
    {
        score+= 58;
    }
    sum += score;
}
console.log(sum)

