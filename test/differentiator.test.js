/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.
 */

const { assert } = require("chai")
const { diff } = require("../js/differentiator.js")

describe("Get difference", () => {
  it("should get differences in arrays", () => {
    assert.deepEqual(diff([], [4, 5]), [], "a was [], b was [4,5]")
    assert.deepEqual(diff([3, 4], [3]), [4], "a was [3,4], b was [3]")
    assert.deepEqual(diff([1, 8, 2], []), [1, 8, 2], "a was [1,8,2], b was []")
    assert.deepEqual(diff([1, 2, 3], [1, 2]), [3], "a was [1,2,3], b was [1,2]")
  })
})
