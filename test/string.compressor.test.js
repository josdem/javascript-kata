/*
Given a string "aaabbbbcc"
When we call compress method
Then we have a compressed string like "a3b4c2"
 */

const { assert } = require("chai")
const { compress } = require("../js/string.compressor")

describe("should compress a string", () => {
  it("compress a string", async () => {
    const keyword = "aaabbbbcc"
    assert.deepEqual("a3b4c2", compress(keyword))
  })
})
