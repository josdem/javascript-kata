const find = (numbers) => {
  const uniques = []

  return numbers.reduce((accomulator, it) => {
    accomulator = numbers.filter((number) => number === it).length
    if (accomulator === 1) {
      uniques.push(it)
    }
    return uniques[0]
  })
}

module.exports.find = find
