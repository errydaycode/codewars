// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// console.log('hi')

function _betterThanAverage(classPoints, yourPoints) {

let totalClassPoints = classPoints.reduce((prev, acc)=> prev + acc)

return totalClassPoints / classPoints.length > yourPoints ? false : true

  }


  console.log(_betterThanAverage(  [1,4,56,65], 75 ))


  const betterThanAverage = (classPoints, yourPoints) => classPoints.reduce((prev, acc)=> prev + acc) / classPoints.length > yourPoints ? false : true


  console.log(betterThanAverage(  [1,4,56,65], 75 ))




