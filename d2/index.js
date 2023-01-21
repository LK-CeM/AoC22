var fs = require('fs');
var file = fs.readFileSync('./input', 'utf-8');
var matchList = file.split(/\r?\n/)

// "The first column is what your opponent is going to play:
// A for Rock, B for Paper, and C for Scissors. 
// X for Rock, Y for Paper, and Z for Scissors.

let score = 0;
for (let i in matchList){
    if (matchList[i][2] == 'X'){
        score += 1;
        if (matchList[i][0] == 'A'){
            score += 3;
        }
        if (matchList[i][0] == 'C'){
            score += 6;
        }
    }
    else if (matchList[i][2] == 'Y'){
        score += 2;
        if (matchList[i][0] == 'B'){
            score += 3;
        }
        if (matchList[i][0] == 'A'){
            score += 6;
        }
    }
    else if (matchList[i][2] == 'Z'){
        score += 3;
        if (matchList[i][0] == 'C'){
            score += 3;
        }
        if (matchList[i][0] == 'B'){
            score += 6;
        }
    }
}
console.log(score)