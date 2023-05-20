/*
Given an integer collection, return an array with three elements:
How many of them are positive, how many negative and how many are zeros.
Given: [-4, 3, -9, 0, 4, 1] then expected output is: [3, 2, 1]
 */

const { assert } = require("chai")
const { counter } = require("../js/counting.numbers")

describe("should count numbers", () => {
  it("count numbers", () => {
    assert.deepEqual([3, 2, 1], counter([-4, 3, -9, 0, 4, 1]))
  })
})
