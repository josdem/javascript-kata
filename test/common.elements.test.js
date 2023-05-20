/*
I have two arrays with integers. I want to return elements in common.
Given: [1,2,3,4,5] and [1,3,5,7,9] then expected output: [1,3,5]
*/

const { assert } = require("chai")
const { finder } = require("../js/common.elements")

describe("should select elements in common", () => {
  it("filters items in common", () => {
    assert.deepEqual(finder([1, 2, 3, 4, 5], [1, 3, 5, 7, 9]), [1, 3, 5])
  })
})
