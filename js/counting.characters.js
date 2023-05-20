const vowels = ['a', 'e', 'i', 'o', 'u']
const consonants  = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n','r', 'p', 'q', 's', 't', 'v', 'w', 'x', 'y', 'z']

const countVowels = (string) => {
  return Array.from(string).filter((letter) => vowels.includes(letter)).length
}

const countConsonants = (string) => {
  return Array.from(string).filter((letter) => consonants.includes(letter)).length
}

module.exports.counter = {
  countVowels,
  countConsonants,
}
