const { assert } = require("chai")
const { fetchData } = require("../js/fetch.js")

const EXPECTED_TOKEN_LENGTH = 175

describe('should fetch data', () => {
    it('should fetch data', async () => {
        let data = await fetchData()
        let token = JSON.stringify(data.token)
        assert.strictEqual(token.length, EXPECTED_TOKEN_LENGTH)
    })
})