const adder = (numbers) => {
  const numbersAsString = numbers.map((it) => it.toString())
  return numbersAsString.map((string) =>
    Array.from(string)
      .map((it) => Number(it))
      .reduce((a, b) => a + b)
  )
}

exports.adder = adder
