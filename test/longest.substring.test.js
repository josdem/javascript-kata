const { assert } = require("chai")
const { longest } = require("../js/longest.substring")

describe("Should find longest string", () => {
  it("finds longest string", async () => {
    assert.deepEqual(3, longest("abcabcbb"))
    assert.deepEqual(1, longest("bbbbb"))
    assert.deepEqual(6, longest("ABDEFGABEF"))
  })
})
