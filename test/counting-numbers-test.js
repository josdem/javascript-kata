const { assert } = require("chai")
const { counter } = require("../js/counting-numbers")

describe("should count numbers", () => {
  it("count numbers", () => {
    assert.deepEqual([3, 2, 1], counter([-4, 3, -9, 0, 4, 1]))
  })
})
