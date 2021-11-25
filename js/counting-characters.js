/*
* Counting vowels and consonants. Create two functions one for counting vowels and another for
* Given: A string
* When: That string is josdem
* Then: Counting vowels should be 2 and consonants 4
*/

const countVowels = (string) => {
    let vowels = ["a", "e", "i", "o", "u"]
    return Array.from(string).filter(it => vowels.includes(it)).length
}

const countConsonants = (string) => {
    let consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "r", "p", "q", "s", "t", "v", "w", "x", "y", "z"]
    return Array.from(string).filter(it => consonants.includes(it)).length
}

module.exports.counter = {
    countVowels,
    countConsonants,
}