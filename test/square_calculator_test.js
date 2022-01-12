const { assert } = require("chai")
const { square } = require("../js/square-calculator") 

describe("should squared my list", () => {
    it("square my list", async () => {
        const numbers = [1, 2, 3, 7, 9, 12, 15]
        const squared = [1, 4, 9, 49, 81, 144, 225]
        assert.deepEqual(square(numbers), squared)
    })
})