
var fs = require('fs');
var file = fs.readFileSync('./input', 'utf-8');
var instructionList = file.split(/\r?\n/)
// 'move 1 from 7 to 4'
let stack = [["B","Z","T"],
    ["V","H","T","D","N"],
    ["B","F","M","D"],
    ["T","J","G","W","V","Q","L"],
    ["W","D","G","P","V","F","Q","M"],
    ["V","Z","Q","G","H","F","S"],
    ["Z","S","N","R","L","T","C","W"],
    ["Z","H","W","D","J","N","R","M"],
    ["M","Q","L","F","D","S"]]



for (let i in instructionList){
    instruction = instructionList[i].split(" ").map(Number)
    let filterInstruction = instruction.filter(function (value) {
        return !Number.isNaN(value);
    });
    for (let j = 0; j < filterInstruction[0]; j++){
        let crate = stack[filterInstruction[1]-1].pop();
        stack[filterInstruction[2]-1].push(crate);
    }
}
let result = ""
for (let i in stack){
    result+= stack[i].pop();
}
console.log(result)


