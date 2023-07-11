const { assert } = require("chai")
const { fetchData } = require("../js/fetch.js")

const EXPECTED_TOKEN_LENGTH = 36

describe("should fetch data", () => {
  it("should fetch data", async () => {
    let token = await fetchData()
    assert.strictEqual(token.length, EXPECTED_TOKEN_LENGTH)
  })
})
