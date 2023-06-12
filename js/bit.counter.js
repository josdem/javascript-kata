const countBits = (number) => {
  return Array.from(number.toString(2)).filter((bit) => bit === "1").length
}

exports.countBits = countBits
