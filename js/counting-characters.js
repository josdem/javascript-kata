const countVowels = (string) => {
    let vowels = ["a", "e", "i", "o", "u"]
    return Array.from(string).filter(it => vowels.includes(it)).length
}

module.exports.countVowels = countVowels