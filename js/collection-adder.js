/*
Given an integer collection return a sum of its elements
*/

const sum = (numbers) => {
  return numbers.reduce((a, b) => a + b)
}

module.exports.sum = sum
