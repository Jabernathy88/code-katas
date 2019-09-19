// Solution to: https://leetcode.com/problems/pascals-triangle-ii/

const getItem = function(rowArray, column) {
  if (column < 0 || column >= rowArray.length) {
    return 0;
  }
  return rowArray[column]
}

const getRow = function(rowIndex) {
    let prevRow = [1]
    for (let i = 0; i < rowIndex; ++i) {
        let newRow = new Array(i+1)
        for (let j = 0;j <= i + 1; ++j) {
            let newNum = getItem(prevRow, j-1) + getItem(prevRow, j)
            newRow[j] = newNum            
        }
        prevRow = newRow
    }
    return prevRow
};

