/*
Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.
*/

const { assert } = require("chai")
const { oddFinder } = require("../js/find.the.odd.js")

describe("find the odd", () => {
  it("should find the odd test", () => {
    assert.strictEqual(oddFinder([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]), 5)
    assert.strictEqual(oddFinder([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]), -1)
    assert.strictEqual(oddFinder([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]), 5)
    assert.strictEqual(oddFinder([10]), 10)
    assert.strictEqual(oddFinder([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]), 10)
    assert.strictEqual(oddFinder([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]), 1)
  })
})
