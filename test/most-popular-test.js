const { assert } = require("chai")
const { find } = require("../js/most-popular")

describe("Should find most popular", () => {
  it("finds most popular", () => {
    assert.deepEqual(0, find([]))
    assert.deepEqual(34, find([31, 34, 34, 56, 12, 35, 24, 34, 69, 18]))
  })
})
