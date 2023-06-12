const disemvowel = (keyword) => {
  const vowels = ["a", "e", "i", "o", "u"]
  return keyword
    .split("")
    .filter((letter) => !vowels.includes(letter.toLowerCase()))
    .join("")
}

exports.disemvowel = disemvowel
