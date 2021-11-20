const { assert } = require("chai")
const { countVowels } = require("../js/counting-characters")

describe("should count vowels and consonants", () => {
    
    it("counts vowels", () => {
        let nickname = "josdem"
        assert.deepEqual(2, countVowels(nickname), "should count two vowels")
    })
})