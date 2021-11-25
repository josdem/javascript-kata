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