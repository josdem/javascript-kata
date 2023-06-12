const counter = (numbers) => {
  return [numbers.filter((number) => number > 0).length, numbers.filter((number) => number < 0).length, numbers.filter((number) => number === 0).length]
}

exports.counter = counter
