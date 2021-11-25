const countVowels = (string) => {
    let vowels = ["a", "e", "i", "o", "u"]
    return Array.from(string).filter(it => vowels.includes(it)).length
}

const countConsonants = (string) => {
    return string.length
}

module.exports.counter = {
    countVowels,
    countConsonants,
}