const { assert } = require("chai")
const { counter } = require("../js/counting-characters")

describe("should count vowels and consonants", () => {
    
    it("counts vowels", () => {
        let nickname = "josdem"
        assert.deepEqual(2, counter.countVowels(nickname), "should count two vowels")
    })

    it("counts consonants", () => {
        let nickname = "josdem"
        assert.deepEqual(4, counter.countConsonants(nickname), "should count four vowels")
    })
})