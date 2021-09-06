const { assert } = require("chai")
const { counter } = require("../js/birthday-cake-candle.js")

describe("Keep biggest candles", () => {
  it("validates biggest candles", () => {
    assert.deepEqual(counter([1]), [1])
    assert.deepEqual(counter([3, 2, 1, 3]), [3, 3])
  })
})
