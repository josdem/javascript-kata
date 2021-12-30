const { assert } = require("chai")
const { finder } = require("../js/common-elements")

describe("should select elements in common", () => {
  it("filters items in common", () => {
    assert.deepEqual(finder([1, 2, 3, 4, 5], [1, 3, 5, 7, 9]), [1, 3, 5])
  })
})
