
// You should implement your task here.

module.exports = function towelSort (matrix) {
let newArr = []
matrix.forEach((item) => {newArr.push(...item)})
newArr.sort((a,b) => a-b)
    
  return newArr;
}
