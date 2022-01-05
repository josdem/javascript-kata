const { assert } = require("chai")
const { find } = require("../js/smallest-biggest")

describe("should find smallest and biggest", () => {
  it("find smallest and biggest from collection", async () => {
    const numbers = [7, 5, 2, 4, 3, 9]
    assert.deepEqual(find(numbers), [2, 9])
  })
})
