/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. 
You can guarantee that input is non-negative.
Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

const { assert } = require("chai")
const { countBits } = require("../js/bit.counter.js")

describe("counting bits", () => {
  it("should do basic test", () => {
    assert.strictEqual(countBits(0), 0)
    assert.strictEqual(countBits(4), 1)
    assert.strictEqual(countBits(7), 3)
    assert.strictEqual(countBits(9), 2)
    assert.strictEqual(countBits(10), 2)
  })
})
