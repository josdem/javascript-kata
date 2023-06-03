const find = (numbers) => {
  let max = 0

  return numbers.reduce((accomulator, it) => {
    let counter = numbers.filter((number) => number === it).length
    if (counter > max) {
      max = counter
      accomulator = it
    }
    return accomulator
  }, 0)
}

exports.find = find
