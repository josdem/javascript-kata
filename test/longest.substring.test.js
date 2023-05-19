/**
 * Given A string
 * When I call reduce method
 * Then I should have the length of a new string without repeated characters
 *
 * Examples:
 * 1. abcabcbb -> abc = 3
 * 2. bbbbb -> b = 1
 * 3. ABDEFGABEF -> BDEFGA = 6
 */

const { assert } = require("chai")
const { longest } = require("../js/longest.substring")

describe("Should find longest string", () => {
  it("finds longest string", async () => {
    assert.deepEqual(3, longest("abcabcbb"))
    assert.deepEqual(1, longest("bbbbb"))
    assert.deepEqual(6, longest("ABDEFGABEF"))
  })
})
