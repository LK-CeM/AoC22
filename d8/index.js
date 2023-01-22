var fs = require('fs');
var file = fs.readFileSync('./input', 'utf-8');
var trees = file.split(/\r?\n/);
let grid = new Array(Object.keys(trees).length * Object.keys(trees).length).fill(0);

function visableFromLeft(i, j){
    const z = i;
    while (i > 0){
        if (parseInt(trees[j][z]) <= parseInt(trees[j][i-1])){
            return false;
        }
        i--;
    }
    return true;
}

function visableFromTop(i, j){
    const z = j;
    while (j > 0){
        if (parseInt(trees[z][i]) <= parseInt(trees[j-1][i])){
            return false;
        }
        j--;
    }
    return true;
}

function visableFromRight(i, j){
    const z = i;
    while (i < Object.keys(trees).length -1){
        if (parseInt(trees[j][z]) <= parseInt(trees[j][i+1])){
            return false;
        }
        i++;
    }
    return true;
    
}

function visableFromDown(i, j){
    const z = j;
    while (j < Object.keys(trees).length -1){
        if (parseInt(trees[z][i]) <= parseInt(trees[j+1][i])){
            return false;
        }
        j++;
    }
    return true;
}

for (let i = 0; i < Object.keys(trees).length; i++ ){
    for (let j = 0; j < Object.keys(trees).length; j++){
        if (i == 0 || j == 0 || i == Object.keys(trees).length - 1 || j == Object.keys(trees).length - 1){
            grid[i+j*Object.keys(trees).length] = 1;
        }
        else{
            if (visableFromLeft(i, j)){ grid[i+j*Object.keys(trees).length] = 1; continue; }
            if (visableFromTop(i, j)){ grid[i+j*Object.keys(trees).length] = 1; continue; }
            if (visableFromRight(i, j)){ grid[i+j*Object.keys(trees).length] = 1; continue; }
            if (visableFromDown(i, j)){ grid[i+j*Object.keys(trees).length] = 1;}
        }
    }
}
let sum = 0;
let str = "";
for (let i = 0; i < grid.length; i++){
    if (grid[i] == 1){
        sum += 1;
    }
    str += (grid[i].toString());
}
console.log(sum)



