/*
Given an integer collection, return an array with three elements:
how many of them are positive, how many negative and how many are zeros.
Given: [-4, 3, -9, 0, 4, 1] then expected output is: [3, 2, 1]
 */

const counter = (numbers) => {
  return [numbers.filter((it) => it > 0).length, numbers.filter((it) => it < 0).length, numbers.filter((it) => it == 0).length]
}

exports.counter = counter
