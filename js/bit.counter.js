const countBits = (number) => {
  return Array.from(number.toString(2)).filter((ch) => ch === "1").length
}

exports.countBits = countBits
