/*
Find smaller and biggest numbers in a collection
Given: A collection like [7, 5, 2, 4, 3, 9]
When: I call find method
Then: I will get a collection with [2, 9] values
 */

const { assert } = require("chai")
const { find } = require("../js/smallest.biggest")

describe("should find smallest and biggest", () => {
  it("find smallest and biggest from collection", async () => {
    const numbers = [7, 5, 2, 4, 3, 9]
    assert.deepEqual(find(numbers), [2, 9])
  })
})
