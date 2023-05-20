/*
 * Counting vowels and consonants. Create two functions one for counting vowels and another for counting consonants
 * Given: A string
 * When: That string is josdem
 * Then: Counting vowels should be 2 and consonants 4
 */

const { assert } = require("chai")
const { counter } = require("../js/counting.characters")

describe("should count vowels and consonants", () => {
  const nickname = "josdem"

  it("counts vowels", () => {
    assert.deepEqual(2, counter.countVowels(nickname), "should count two vowels")
  })

  it("counts consonants", () => {
    assert.deepEqual(4, counter.countConsonants(nickname), "should count four vowels")
  })
})
