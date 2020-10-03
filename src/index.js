module.exports = function towelSort (matrix) {
  if (matrix == undefined) {
    return []
  }
  const matrixs = matrix;
let newArr = []
matrixs.forEach((item, index) => {
  if (index %2 ==0) {
    newArr.push(...item)
  } else {
  newArr.push(...item.reverse())
  }
})   
  return newArr;
}
