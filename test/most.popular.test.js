/*
Given a collection with numbers: [31 , 34, 34, 56, 12, 35, 24, 34, 69, 18]
Write a function that finds most popular number in the array, in this case 34 because it is the number that appears most often.
 */

const { assert } = require("chai")
const { find } = require("../js/most.popular")

describe("Should find most popular", () => {
  it("finds most popular", () => {
    assert.deepEqual(find([]), 0)
    assert.deepEqual(find([31, 34, 34, 56, 12, 35, 24, 34, 69, 18]), 34)
  })
})
