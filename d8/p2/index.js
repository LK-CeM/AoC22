var fs = require('fs');
var file = fs.readFileSync('../input', 'utf-8');
var treeMap = file.split(/\r?\n/);
const treeGrid = treeMap.map(row => row.split(""));
const isVisible = [];

const visibilityDistanceTowardsLeft = [];
const visibilityDistanceTowardsRight = [];
const visibilityDistanceTowardsTop = [];
const visibilityDistanceTowardsBottom = [];

const totalRows = treeGrid.length;
const totalCols = treeGrid[0].length;

function findContinuousSmallerTreesInDirection(currentRow, currentCol, direction) {
    const currentTreeSize = treeGrid[currentRow][currentCol];

    let count = 0;
    if (direction === 0) { // Towards Bottom
        if (currentRow == totalRows - 1) {
            return 0;
        }
        for (let row = currentRow + 1; row < totalRows; row++) {
            count++;
            if (currentTreeSize <= treeGrid[row][currentCol]) {
                break;
            }
        }
    } else if (direction === 1) { // Towards Top
        if (currentRow == 0) {
            return 0;
        }
        for (let row = currentRow - 1; row >= 0; row--) {
            count++;
            if (currentTreeSize <= treeGrid[row][currentCol]) {
                break;
            }
        }
    } else if (direction === 2) { // Towards Right
        if (currentCol == totalCols - 1) {
            return 0;
        }
        for (let col = currentCol + 1; col < totalCols; col++) {
            count++;
            if (currentTreeSize <= treeGrid[currentRow][col]) {
                break;
            }
        }
        
    } else { // Towards Left
        if (currentCol == 0) {
            return 0;
        }
        for (let col = currentCol - 1; col >= 0; col--) {
            count++;
            if (currentTreeSize <= treeGrid[currentRow][col]) {
                break;
            }
        }
    }
    return count;
}

for (let row = 0; row < totalRows; row++) {
    const isVisibleRowData = [];
    const visibilityDistanceTowardsLeftRowData = [];
    const visibilityDistanceTowardsRightRowData = [];
    const visibilityDistanceTowardsTopRowData = [];
    const visibilityDistanceTowardsBottomRowData = [];
    for (let col = 0; col < totalCols; col++) {
        visibilityDistanceTowardsLeftRowData.push(0);
        visibilityDistanceTowardsRightRowData.push(0);
        visibilityDistanceTowardsTopRowData.push(0);
        visibilityDistanceTowardsBottomRowData.push(0);

        if (row == 0 || row == totalRows - 1 || col == 0 || col == totalCols -1) {
            isVisibleRowData.push(1);
        } else {
            isVisibleRowData.push(0);
        }   
    }
    visibilityDistanceTowardsLeft.push(visibilityDistanceTowardsLeftRowData);
    visibilityDistanceTowardsRight.push(visibilityDistanceTowardsRightRowData);
    visibilityDistanceTowardsTop.push(visibilityDistanceTowardsTopRowData);
    visibilityDistanceTowardsBottom.push(visibilityDistanceTowardsBottomRowData);
    isVisible.push(isVisibleRowData);
}

// Row wise, left to right
for (let row = 0; row < totalRows; row++) {
    let maxSoFar = treeGrid[row][0];
    for (let col = 0; col < totalCols; col++) {
        if (maxSoFar < treeGrid[row][col]) {
            isVisible[row][col] = 1;
            maxSoFar = treeGrid[row][col];
        }
    }
}

// Row wise, right to left
for (let row = 0; row < totalRows; row++) {
    let maxSoFar = treeGrid[row][totalCols - 1];
    for (let col = totalCols - 1; col > 0; col--) {
        if (maxSoFar < treeGrid[row][col]) {
            isVisible[row][col] = 1;
            maxSoFar = treeGrid[row][col];
        }
    }
}

// Col wise, top to bottom
for (let col = 0; col < totalCols; col++) {
    let maxSoFar = treeGrid[0][col];
    for (let row = 0; row < totalRows; row++) {
        if (maxSoFar < treeGrid[row][col]) {
            isVisible[row][col] = 1;
            maxSoFar = treeGrid[row][col];
        }
    }
}

// Col wise, bottom to top
for (let col = 0; col < totalCols; col++) {
    let maxSoFar = treeGrid[totalRows - 1][col];
    for (let row = totalRows - 1; row > 0; row--) {
        if (maxSoFar < treeGrid[row][col]) {
            isVisible[row][col] = 1;
            maxSoFar = treeGrid[row][col];
        }
    }
}

let totalScenicScore = 0;
for (let row = 0; row < totalRows; row++) {
    for (let col = 0; col < totalCols; col++) {
        visibilityDistanceTowardsLeft[row][col] = findContinuousSmallerTreesInDirection(row, col, 3);
        visibilityDistanceTowardsRight[row][col] = findContinuousSmallerTreesInDirection(row, col, 2);
        visibilityDistanceTowardsTop[row][col] = findContinuousSmallerTreesInDirection(row, col, 1);
        visibilityDistanceTowardsBottom[row][col] = findContinuousSmallerTreesInDirection(row, col, 0);

        const newScenicScore = visibilityDistanceTowardsBottom[row][col] * visibilityDistanceTowardsTop[row][col] * visibilityDistanceTowardsRight[row][col] * visibilityDistanceTowardsLeft[row][col];
        if (newScenicScore > totalScenicScore ) {
            totalScenicScore = newScenicScore;
        }
    }
}



console.log(totalScenicScore);