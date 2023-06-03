/*
Given A numeric collection
When I call add method
Then I will get a collection with every element summing its digits
 */

const { assert } = require("chai")
const { adder } = require("../js/digital.adder")

describe("should sum every element in the collection", () => {
  it("sums every element", () => {
    const numbers = [15, 20, 4, 8]
    const expectedCollection = [6, 2, 4, 8]
    assert.deepEqual(adder(numbers), expectedCollection)
  })
})
