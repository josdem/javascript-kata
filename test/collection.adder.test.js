/*
Given an integer collection 
When I call sum function
Then I should get the sum of the elements
*/

const { assert } = require("chai")
const { sum } = require("../js/collection-adder.js")

describe("should sum a collection", () => {
  it("verify collection sum", () => {
    assert.deepEqual(21, sum([5, 4, 1, 2, 9]))
    assert.deepEqual(31, sum([1, 2, 3, 4, 10, 11]))
  })
})
