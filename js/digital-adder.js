const adder = (numbers) => {
  const digitsAsStrings = numbers.map((number) => number.toString().split(""))
  return digitsAsStrings.map((element) => element.reduce((a, b) => a + Number(b), 0))
}

exports.adder = adder
