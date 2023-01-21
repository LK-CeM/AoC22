var fs = require('fs');
var file = fs.readFileSync('../input', 'utf-8');
var matchList = file.split(/\r?\n/)

// "The first column is what your opponent is going to play:
// A for Rock, B for Paper, and C for Scissors. 
// X for lose, Y for draw, and Z for win.

let score = 0;
for (let i in matchList){
    if (matchList[i][2] == 'X'){
        if (matchList[i][0] == 'A'){
            score += 3;
        }
        if (matchList[i][0] == 'B'){
            score += 1;
        }
        if (matchList[i][0] == 'C'){
            score += 2;
        }
    }
    else if (matchList[i][2] == 'Y'){
        if (matchList[i][0] == 'A'){
            score += 3+1;
        }
        if (matchList[i][0] == 'B'){
            score += 3+2;
        }
        if (matchList[i][0] == 'C'){
            score += 3+3;
        }
    }
    else if (matchList[i][2] == 'Z'){
        if (matchList[i][0] == 'A'){
            score += 6+2;
        }
        if (matchList[i][0] == 'B'){
            score += 6+3;
        }
        if (matchList[i][0] == 'C'){
            score += 6+1;
        }
    }
}
console.log(score)