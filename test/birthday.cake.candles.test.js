/*
It is your birthday! And you want to make it special, so you want to keep only biggest candles in the cake
Your task is to create a function that removes all small candles and just keep the biggest ones.
 */

const { assert } = require("chai")
const { counter } = require("../js/birthday.cake.candle.js")

describe("Keep biggest candles", () => {
  it("validates biggest candles", () => {
    assert.deepEqual(counter([1]), [1])
    assert.deepEqual(counter([3, 2, 1, 3]), [3, 3])
  })
})
