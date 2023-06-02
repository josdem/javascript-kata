/*
Given a numbers collection find fist non-repeated number in that collection
When we have: [25, 25, 18, 18, 18, 36, 1, 2, 2, 34] first non-repeated number is 36
 */

const { assert } = require("chai")
const { find } = require("../js/first.non.repeated")

describe("Should find first non repeated number", () => {
  it("finds first non repeated number", async () => {
    assert.deepEqual(36, find([25, 25, 18, 18, 18, 36, 1, 2, 2, 34]))
  })
})
